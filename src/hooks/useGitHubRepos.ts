import { useEffect, useState } from 'react';
import { FALLBACK_GITHUB_REPOS, PROFILE } from '../data/portfolio';
import type { GitHubRepo } from '../types/portfolio';

const CACHE_KEY = 'santanaisrael-gh-repos-v1';

export function useGitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_GITHUB_REPOS);
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadRepos() {
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached) as GitHubRepo[];
          if (!cancelled && Array.isArray(parsed) && parsed.length > 0) {
            setRepos(parsed);
            setIsLive(true);
            setLoading(false);
            return;
          }
        }

        const response = await fetch(
          `https://api.github.com/users/${PROFILE.githubUsername}/repos?sort=updated&per_page=30`,
          {
            headers: {
              Accept: 'application/vnd.github+json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API responded with ${response.status}`);
        }

        const data = (await response.json()) as (GitHubRepo & { fork?: boolean })[];
        const filtered = data.filter(
          (repo) =>
            repo.name.toLowerCase() !== PROFILE.githubUsername.toLowerCase() &&
            repo.name.toLowerCase() !== `${PROFILE.githubUsername.toLowerCase()}.github.io` &&
            !repo.fork
        );

        if (!cancelled && filtered.length > 0) {
          setRepos(filtered);
          setIsLive(true);
          sessionStorage.setItem(CACHE_KEY, JSON.stringify(filtered));
        }
      } catch {
        // Fallback curado permanece ativo caso offline ou rate-limited
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadRepos();
    return () => {
      cancelled = true;
    };
  }, []);

  return { repos, isLive, loading };
}

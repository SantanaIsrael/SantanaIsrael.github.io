FROM node:22-alpine

WORKDIR /app

# Garante permissões para o usuário padrão node (UID 1000 / GID 1000)
RUN chown -R node:node /app

USER node

EXPOSE 5173

CMD ["sh", "-c", "[ -d node_modules/react ] || npm install; npm run dev"]

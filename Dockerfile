# Étape build
FROM node:20-alpine AS builder
WORKDIR /app

# Installer pnpm
RUN npm install -g pnpm

# Copier fichiers de dépendances
COPY package.json pnpm-lock.yaml* ./

# Installer dépendances avec pnpm
RUN pnpm install

# Copier tout le projet
COPY . .

# Build Next.js
RUN pnpm build

# Étape run
FROM node:20-alpine
WORKDIR /app

# Installer pnpm
RUN npm install -g pnpm

# Copier seulement ce qui est nécessaire pour exécution
COPY --from=builder /app ./

EXPOSE 3000
CMD ["pnpm", "start"]

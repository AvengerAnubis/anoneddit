FROM node:20-alpine AS base

# Зависимости
FROM base AS deps

RUN apk add --no-cache libc6-compat
RUN apt-get update && apt-get upgrade -y && apt-get clean
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Сборка
FROM base AS builder
WORKDIR /app
# Берем ранее поставленные зависимости
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Запуск
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Задаем привилегии
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 80
ENV PORT=80

ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
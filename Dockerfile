# ==============================================================================
# Tolkien Olami — Ishlab Chiqarish (Production) Dockerfile
#
# Ko'p bosqichli (multi-stage) yig'ish jarayoni:
# 1. Builder: Node 22 (Debian Bookworm Slim - to'liq glibc/Pagefind/esbuild mosligi)
# 2. Production Runner: Nginx Alpine (minimal xotira va yuqori tezlik)
# ==============================================================================

# ------------------------------------------------------------------------------
# 1-BOSQICH: Statik Saytni Yig'ish (Builder)
# ------------------------------------------------------------------------------
FROM node:22-bookworm-slim AS builder

WORKDIR /app

# Muhit o'zgaruvchilari (reproduktiv npm o'rnatish)
ENV NODE_ENV=development
ENV CI=true

# Faqat dependency fayllarini nusxalash (Docker layer keshidan unumli foydalanish)
COPY package.json package-lock.json ./

# Takrorlanuvchi qat'iy o'rnatish (Clean Install)
RUN npm ci

# Butun loyiha kodini nusxalash (.dockerignore orqali node_modules va dist chetlatiladi)
COPY . .

# TypeScript tekshiruvi va Statik yig'ish (Astro + Pagefind indeksi)
RUN npm run check
RUN npm run build

# ------------------------------------------------------------------------------
# 2-BOSQICH: Tarqatish Serveri (Nginx Alpine)
# ------------------------------------------------------------------------------
FROM nginx:alpine AS runner

# Maxsus Nginx konfiguratsiyasini o'rnatish
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Yig'ilgan statik resurslarni nusxalash
COPY --from=builder /app/dist /usr/share/nginx/html

# Xavfsizlik: Statik fayllar huquqlarini cheklash
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Standart HTTP porti
EXPOSE 80

# Nginxni oldingi planda (foreground) ishga tushirish
CMD ["nginx", "-g", "daemon off;"]

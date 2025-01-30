FROM node:16-slim

# Instala dependências do sistema
RUN apt-get update && apt-get install -y \
    wget \
    gnupg \
    ca-certificates \
    fonts-liberation \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libc6 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgbm1 \
    libgcc1 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libstdc++6 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    lsb-release \
    xdg-utils \
    chromium \
    libgbm-dev \
    libxshmfence-dev \
    libnss3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libxdamage1 \
    libxcomposite1 \
    libxrandr2 \
    libgdk-pixbuf2.0-0 \
    libgtk-3-0 \
    libasound2 \
    libx11-xcb1 \
    libxcb-dri3-0 \
    libdrm2 \
    libxtst6

WORKDIR /app
COPY package*.json ./
RUN npm install whatsapp-web.js@v1.26.1-alpha.3
COPY . .
CMD ["node", "main.js"]
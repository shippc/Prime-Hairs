# Use a imagem oficial do Node.js como base
FROM node:18

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos da aplicação
COPY . .

# Gere o Prisma Client
RUN npx prisma generate

# Expõe a porta onde o servidor vai rodar (geralmente 3000)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
# Définit l'image de base
FROM node:14-alpine

# Crée un répertoire de travail dans le conteneur
WORKDIR /app

COPY DevOps-Project/ .

RUN npm install

# Installe les dépendances du back
RUN cd /app/DevOps-Project && npm install

# Expose les ports utilisés par l'application
EXPOSE 4200

# Démarre l'application
CMD ["npm", "start"]

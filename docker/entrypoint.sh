#!/bin/sh
set -e

# Charge un secret Docker Swarm (fichier *_FILE) dans une variable d'environnement
load_secret() {
  file_path="$1"
  var_name="$2"
  if [ -n "$file_path" ] && [ -f "$file_path" ]; then
    export "$var_name"="$(cat "$file_path")"
  fi
}

load_secret "$JWT_SECRET_FILE"           JWT_SECRET
load_secret "$JWT_REFRESH_SECRET_FILE"   JWT_REFRESH_SECRET
load_secret "$MAIL_PASSWORD_FILE"        MAIL_PASSWORD
load_secret "$SMS_API_KEY_FILE"          SMS_API_KEY
load_secret "$DB_PASSWORD_FILE"          DB_PASSWORD

# Construit DATABASE_URL si non définie
if [ -z "$DATABASE_URL" ] && [ -n "$DB_PASSWORD" ]; then
  DB_HOST="${DATABASE_HOST:-postgres}"
  DB_PORT="${DATABASE_PORT:-5432}"
  DB_NAME="${DATABASE_NAME:-vayrix_api}"
  DB_USER="${DATABASE_USER:-postgres}"
  export DATABASE_URL="postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=public"
fi

echo "==> VAYRIX API — migrations Prisma..."
npx prisma migrate deploy

echo "==> Lancement de l'API sur le port ${PORT:-3000}..."
exec node dist/src/main.js

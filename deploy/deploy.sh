#!/usr/bin/env bash
# Sobe o site para o servidor. Só copia arquivo — não mexe no nginx.
#
#   ./deploy/deploy.sh root@192.168.88.42
#   ./deploy/deploy.sh root@192.168.88.42 /var/www/outra-pasta
#
# Porta SSH diferente de 22? Exporte SSH_PORT:
#   SSH_PORT=2222 ./deploy/deploy.sh root@192.168.88.42
#
# O --delete apaga no servidor o que não existe aqui: o destino vira espelho
# exato desta pasta. Confira o DESTINO antes de rodar pela primeira vez.
set -euo pipefail

DESTINO_HOST="${1:?uso: ./deploy/deploy.sh usuario@servidor [/var/www/bancada-ifsc]}"
DESTINO_DIR="${2:-/var/www/bancada-ifsc}"
SSH_PORT="${SSH_PORT:-22}"

cd "$(dirname "$0")/.."

rsync -avz --delete \
  -e "ssh -p $SSH_PORT" \
  --exclude '.git' \
  --exclude 'deploy' \
  --exclude '.gitignore' \
  ./ "$DESTINO_HOST:$DESTINO_DIR/"

echo "Pronto: $DESTINO_HOST:$DESTINO_DIR (porta $SSH_PORT)"

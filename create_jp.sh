#!/usr/bin/env bash
set -euo pipefail
ROOT_DIR=$(pwd)
ZIP_NAME="AllAiDesk.zip"
EXCLUDES=("node_modules" "dist" "*.zip" "*.tar.gz" ".expo" "build" "android" "ios")
RSYNC_EXCLUDES=()
for e in "${EXCLUDES[@]}"; do
  RSYNC_EXCLUDES+=(--exclude="$e")
done
TMP_DIR="/tmp/all_aidesk_zip"
rm -rf "$TMP_DIR"
mkdir -p "$TMP_DIR"
rsync -av --progress ${RSYNC_EXCLUDES[@]} ./ "$TMP_DIR/" --exclude="$TMP_DIR"
cd "$TMP_DIR"
zip -r "$ROOT_DIR/$ZIP_NAME" .
cd "$ROOT_DIR"
rm -rf "$TMP_DIR"
echo "Created $ZIP_NAME"

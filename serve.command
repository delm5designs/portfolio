#!/bin/bash
# Double-click this file to preview the portfolio locally.
# The site CANNOT be opened by double-clicking index.html: its runtime loads
# the nav and footer with fetch(), which browsers block on file:// URLs.
# This serves the folder over http:// instead, which is how GitHub Pages serves it too.

cd "$(dirname "$0")" || exit 1

PORT=8000
while : ; do
  if command -v lsof >/dev/null 2>&1 && lsof -i ":$PORT" >/dev/null 2>&1; then
    PORT=$((PORT+1))
  else
    break
  fi
  [ "$PORT" -gt 8020 ] && break
done

URL="http://localhost:$PORT/"

if command -v python3 >/dev/null 2>&1; then
  SERVE=(python3 -m http.server "$PORT")
elif command -v python >/dev/null 2>&1; then
  SERVE=(python -m SimpleHTTPServer "$PORT")
elif command -v npx >/dev/null 2>&1; then
  SERVE=(npx --yes serve -l "$PORT" .)
else
  echo "Could not find Python or Node on this machine."
  echo "Install Python from https://www.python.org/downloads/ and run this again."
  read -r -p "Press Return to close."
  exit 1
fi

( sleep 1; (open "$URL" || xdg-open "$URL") >/dev/null 2>&1 ) &

echo
echo "  Portfolio running at $URL"
echo "  Leave this window open while you browse."
echo "  Press Ctrl+C to stop."
echo
"${SERVE[@]}"

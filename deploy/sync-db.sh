server_path=/root/html-school/server/db/db.json
local_path=./server/db/db.json

# https://askubuntu.com/a/715432
date="$(date +%Y%m%d_%H%M%S)"
backup_folder="backup/$date"
mkdir -p backup_folder
mv "$local_path" "$backup_folder"

scp root@142.93.238.74:$server_path "$local_path"

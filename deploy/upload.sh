folder="$1"
echo "Uploading folder $folder/"
rsync -a "$folder"/ root@142.93.238.74:/root/html-school/"$folder"/

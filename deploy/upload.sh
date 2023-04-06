folder="$1"
echo "Uploading folder $folder/"
rsync -a "$folder"/ root@159.223.238.99:/root/html-school/"$folder"/

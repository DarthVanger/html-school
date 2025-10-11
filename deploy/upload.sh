source deploy/ip.sh

folder="$1"
echo "Uploading folder $folder/"
rsync -a "$folder"/ root@${IP}:/root/html-school/"$folder"/

source deploy/ip.sh

rsync -a video/ root@${IP}:/root/html-school/video/
rsync -a sounds/ root@${IP}:/root/html-school/sounds/

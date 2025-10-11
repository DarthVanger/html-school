source deploy/ip.sh

scp "$1" root@${IP}:/root/html-school/"$1"

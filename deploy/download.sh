source deploy/ip.sh

scp root@${IP}:html-school/"$1" ./

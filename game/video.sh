ffmpeg -y -i trash/stars.mov -ss 70 -t 20 \
  -c:v copy -c:a copy \
  out1.mp4

ffmpeg -y -i out1.mp4  -filter_complex "[0:v]reverse,fifo[r];[0:v][0:a][r] [0:a]concat=n=2:v=1:a=1 [v] [a]" -map "[v]" -map "[a]" \
  -c:v libx264 -preset slow -crf 22 \
  out.mp4

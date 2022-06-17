ffmpeg -i space.mp4 -filter_complex "[0:v]reverse,fifo[r];[0:v][0:a][r] [0:a]concat=n=2:v=1:a=1 [v] [a]" -map "[v]" -map "[a]" space-r.mp4

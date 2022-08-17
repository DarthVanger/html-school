rm -rf out/*
ffmpeg -ss 0 -i snoop.mp4 -t 4 out/snoop-millionare-start.mp4
ffmpeg -ss 44.5 -i snoop.mp4 -t 3.01 out/snoop-millionare-hello.mp4
ffmpeg -ss 85 -i snoop.mp4 -t 0.5 out/snoop-wow.mp4
ffmpeg -ss 00:01:41.9 -i snoop.mp4 -t 1.1 out/snoop-snoopy.mp4
ffmpeg -ss 00:03:47 -i snoop.mp4 -t 5 out/snoop-man-i-seen.mp4
ffmpeg -ss 00:05:34 -i snoop.mp4 -t 5 out/snoop-wins.mp4

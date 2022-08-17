ffmpeg -y -i source-variables.mp4 -vf "subtitles=sub.srt:force_style='Fontsize=24,PrimaryColour=&HEEEEEE&BackColour=&H333333&'" -c:a copy out.mp4

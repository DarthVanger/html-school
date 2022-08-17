source ~/.bash_profile

video=source_video/expressions/expressions-lecture.mp4
subs=source_video/expressions/sub.vtt
subs_ass=out/sub.ass
subs_srt=out/sub.srt

ffmpeg -i $subs $subs_ass
ffmpeg -i $subs $subs_srt

ffmpeg -y -i "${video}" -vf "subtitles=${subs_srt}:force_style='Fontsize=24,PrimaryColour=&H333333&BackColour=&HEEEEEE&'" -c:a copy out.mp4
#ffmpeg -y -i "${video}" -vf "ass=${subs_ass}" -c:a copy out.mp4

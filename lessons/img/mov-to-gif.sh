ffmpeg -i "$1" -t 2.5 \
-vf "fps=30,scale=600:-2:flags=lanczos,split[s0][s1];\
[s0]palettegen=max_colors=256:reserve_transparent=0[p];\
[s1][p]paletteuse" \
-y "out.gif"

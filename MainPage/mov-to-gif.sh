ffmpeg -i "$1" \
-vf "fps=10,scale=300:-2:flags=lanczos,split[s0][s1];\
[s0]palettegen=max_colors=128:reserve_transparent=0[p];\
[s1][p]paletteuse" \
-y "out.gif"

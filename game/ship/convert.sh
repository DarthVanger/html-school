ffmpeg -y -i trash/ship-original.gif \
  -vf "crop=630:720:0:0, scale=315x360, smartblur=ls=-0.5"  out.gif
  #-filter_complex "[0:v] palettegen" out.gif
  #-filter_complex "scale=315:-1:flags=lanczos[x];[x]" out.gif


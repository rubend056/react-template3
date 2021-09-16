
magick favicon.png -define icon:auto-resize="256,128,64,48,32,16" favicon.ico
# To invert rgb channel, image without alpha
magick favicon.png -channel RGB -negate -define icon:auto-resize="256,128,64,48,32,16" favicon.ico
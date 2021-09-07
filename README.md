This is meant as a super simple frontend for displaying sensor readouts from Aida64 RemoteSensor over HTTP.

In my use case, I'm using a raspberry pi to run a fullscreen firefox window to display the index.html that will display the gauges and sensors. There's super simple error handling built in, as in the page will automatically refresh every couple of seconds if aida64 is not sending any data over SSE. At the moment, the tool is only meant for the screen running at 1920x480 resolution as I haven't had time to dive in and make any of the CSS perfect. This is also meant for a very specific set of hardware, as you can tell by the image. The data sources are fairly easy to adjust, but you will have to know some JS to console.log the data you may need.

Instructions - src/index.js, change the url to the IP where your aida64 is serving the remotesensor on your network.

I welcome any pull requestes if you'd like to make the tool better or compatible with more displays.

![example](https://user-images.githubusercontent.com/11450977/132271487-3f0452a8-8930-4eb4-bc29-8ca15a0741b5.jpg)

* Software used - https://www.aida64.com/
* Hardware used - https://www.raspberrypi.org/products/raspberry-pi-4-model-b/
* Gauge library used - https://github.com/Mictronics/GaugeMeter
* Screen used - http://www.barrowint.com/product/gjjfj/BARROWCH_Tools_and_Accessories/1685.html
* Fonts used - https://www.onlinewebfonts.com/package/IKEA_Sans

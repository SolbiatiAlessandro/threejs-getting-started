# Three.js getting started

My own take on the three.js getting started tutorial (https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene), both for Browser and for **VR Headsets.**

![alt text](https://raw.githubusercontent.com/SolbiatiAlessandro/threejs-getting-started/master/demo.png)

## Setup

To run the example from the browser you can run a local python3 server

```
python3 -m http.server
```

You can bind this to your local IP address so you can access it with your VR headset.

On MacOS, Find your local IP address with 
```
ipconfig getifaddr en0
# returns something like 192.168.0.11
```

And then bind the http server to that port with
```
python3 -m http.server --bind 192.168.0.11
```

Turns out that for WebXR you need https so we need to set up an https server
I followed this guide to do it https://blog.anvileight.com/posts/simple-python-http-server/

```
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365
python3 run_server.py
```


Now just visit

```
https://your-ip-address:4443
```

To see the 3d scene, you can do it from your VR headset as well.

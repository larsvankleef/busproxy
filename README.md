```
docker build --tag bus.proxy.stackkit.services:latest .
docker run --name bus.proxy.stackkit.services -p 3000:3000 bus.proxy.stackkit.services:latest
docker tag bus.proxy.stackkit.services registry.stackkit.services/bus.proxy.stackkit.services:latest
docker push registry.stackkit.services/bus.proxy.stackkit.services:latest
```

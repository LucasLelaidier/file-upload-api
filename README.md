# Ready to use api  to upload and retrieve your files

Deploy a file upload server with all api endpoints to upload and retrive files easily. Developped with node.js and express, find the docker image [here](https://hub.docker.com/repository/docker/lucaseaiie/file-upload-api).

 # How to use this image

## Standalone
`docker run -p 7958:7958 -v uploaded:/usr/src/app/uploaded -d lucaseaiie/file-upload-api:latest`

## Docker swarm

Here is an exemple of this file upload server configuration, you can add all the images you need.

```
version: '3'
services:
  fileserver:
    image: lucaseaiie/file-upload-api:v1.0.1
    ports:
      - "7958:7958"
    environment:
      ENABLE_CORS: "true"
    volumes:
      - uploaded:/usr/src/app/uploaded

volumes:
  uploaded:
```

## Environment Variables

For now the only environment variable available is `ENABLE_CORS`. Set it to `ENABLE_CORS="true"` to enable the [CORS policy on the server](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS).

# How to use the server

## Upload a file

Use `/POST /upload` route to upload a file.  
If no parameters are provided the server save the file at root of `uploaded/` directory with a random name.  

### Parameters

You can also provide a `name` parameter in the post request with the name of the file or even with a full path.  
This will save the file with the provided name in the provided path.  

### Exemple in postman

![Postman exemple](https://image.noelshack.com/fichiers/2020/13/5/1585320594-2020-03-27-15-48-25-postman.png)

## Download a file

When a file is uploaded, the server return an endpoint where the file is saved.  
Just set a `/GET` on this endpoint to get this file.

## Delete a file

Same as download but with a `/DELETE` request.

# Future features

- Authentification

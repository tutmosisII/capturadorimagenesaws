# Captura de Pantallas con Chrome en AWS

Cuando se trabaja en arquitectura serverles uno de los problemas más grandes es no tener la infraestructura para probar. Pero en este caso eso se soluciona con el uso de nodejs y los el framework de [serveless](https://www.serverless.com/examples/aws-node-puppeteer) que nos permitirá trabajar en AWS.

## 1) Instalar nodejs

sudo apt-get install -y npm

## 2) Instalar las serverless

npm install serverless -g
npm install serverless-offline --save-dev

Con serverless fuera de lina podrás probar tu función de manera local usando

sls offline

sls es la versión corta del comand serverless. :D

### Instalando librerias de npm

Liberia para trabajar con el ultimo chrome

npm install chrome-aws-lambda --save-prod

Instalacion de **puppetter**  sin navegador

npm install puppeteer-core --save-prod


## 3) Crear el proyecto de nodejs

mkdir captureimages
npm init

Iniciando **Serverless** en el proyecto

serverless
# XXXXX  Como construir tu headles docker para lambda
https://github.com/adieuadieu/serverless-chrome/blob/master/docs/chrome.md#locally

## comprendiendo un poco el framewor de puppeter.
## Intalando puppeter 
## Probando de manera local
## Deplegar finalmente en AWS
## Prueba Manual con httpie

## Referencias

Github seguido para este desarollo

https://github.com/alixaxel/chrome-aws-lambda



Este ejemplo parte de algunas referencias que pueden ser de tu interes.

[Cool haks wuth puttpeter ](https://www.youtube.com/watch?v=lhZOFUY1weo)

[gcloud functions to capture images](https://www.youtube.com/watch?v=i8THvr03FaY)

[Puppeteer Function Example](https://www.serverless.com/examples/aws-node-puppeteer)

**Very interesting Use Case**
[Test cases on Blackboard using serverless chrome](https://aws.amazon.com/es/blogs/devops/ui-testing-at-scale-with-aws-lambda/)

### Como devolver una imagen en AWS Lambda

https://medium.com/@adil/how-to-send-an-image-as-a-response-via-aws-lambda-and-api-gateway-3820f3d4b6c8

https://medium.com/made-in-madras/building-an-aws-lambda-service-to-return-binary-data-image-as-a-response-without-access-header-d991fb1d7b56

### Como correr binarios en AWS

https://aws.amazon.com/es/blogs/compute/running-executables-in-aws-lambda/


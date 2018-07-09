# Cardify 

Cardify es un plugin de jQuery que aplica un efecto de hover a tus imágenes envolviendolas en una etiqueta `<figure>`, rescatando su descripción del atributo alt e insertando el texto en una etiqueta `<figcaption>`. Es fácil de usar y rápido de configurar.

![screenshot](https://raw.githubusercontent.com/PazAutumn/cardify/cardify/Screenshot-2018-3-25%20Cardify%20Example.png)

## Proyecto desarrollado en [Laboratoria](http://laboratoria.la)


![icon]()

## En  [Chile](http://chile.com)

[![GitHub issue age](https://img.shields.io/badge/Created-January%202018-yellow.svg?style=for-the-badge)](https://github.com/PazAutumn/cardify)
[![Build Status](https://travis-ci.org/PazAutumn/cardify.svg?branch=cardify)](https://travis-ci.org/PazAutumn/cardify)
[![cardify version](https://img.shields.io/badge/Last%20version-1.5.5-yellow.svg?style=for-the-badge)](https://github.com/PazAutumn/cardify)
[![autores](https://img.shields.io/badge/author-pazautumn%2C%20gabycasti-yellow.svg?style=for-the-badge)](https://github.com/PazAutumn/cardify)

## Descripción:

### ¿Cómo funciona?

Cardify es un plugin de jQuery que aplica un efecto de hover a tus imágenes envolviendolas en una etiqueta `<figure>`, rescatando su descripción del atributo `alt` e insertando el texto en una etiqueta `<figcaption>`. Es fácil de usar y rápido de configurar.

## Instalación

### Global (navegador)

#### .html
```
<script src="dist/app.js"></script>
```
### Uso

#### .js
```
var cardify = require('cardify');
```

1. Para que el plugin funcione primero debes inicializar tu proyecto en la terminal con el comando

   `npm init`

2. Descargar cardify desde tu terminal con el comando

   `npm install cardify`

3. Para que tu proyecto se vea en el navegador debes instalar [**Browserify**](http://browserify.org/) de manera global en tu computadora con el siguiente comando en tu terminal

   `npm install -g browserify`
   
   Luego crea en la raíz de tu proyecto las carpetas `src` y `dist` con el archivo `app.js` dentro de cada una, luego ejecuta browserify de la siguiente manera para que tu js original que se encuentra en la carpeta `src` se guarde modificado en la carpeta `dist`

   `browserify src/app.js -o dist/app.js`

4. Enlaza el archivo 'Browserificado' en tu .html

   `<script src="dist/app.js"></script>`

5. En tu archivo .js principal pega el siguiente código

   `var cardify = require('cardify');`

6. Finalmente, recuerda poner tus imagenes dentro de una etiqueta contenedora con clase `cardify` y asignarle el atributo `alt` como en el siguiente ejemplo.

   ```
   <div class='cardify'>
      <img src='https://pbs.twimg.com/media/ClFixn2UoAA85OZ.jpg' alt='Osito'>
   </div>
   ```

### **Ten en cuenta que el comando `browserify src/app.js -o dist/app.js` del paso número 3 deberás repetirlo cada vez que actualices el plugin desde tu terminal**

## Y listo! ya estás preparado para usar cardify.

## Ejemplo

![Ejemplo Cardify](http://www.grupojega.cl/images/gifcardify.gif)

## Demo
![alt text](http://www.grupojega.cl/images/demo.gif)


## Herramientas

**Producción:**
* jquery: 3.3.1

**Desarrollo:**
* browserify: 15.2.0
* chai: 4.1.2
* mocha: 5.0.0
* eslint: 4.16.0
* babel-cli: 6.26.0
* babel-preset-env: 1.6.1
* jsdom: 11.6.1



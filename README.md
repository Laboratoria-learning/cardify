# Cardify

* **Track:** _Common Core_
* **Curso:** _CREA TU PROPIA LIBRERÍA USANDO JAVASCRIPT_
***

Cardify es un proyecto  que se nos pidio implementar como parte de la creacion de una librería (library), teniendo como objetivo responder a la necesidad de hacer mas legible o evitar estar repitiendo codigo para paginas web o aplicaciones moviles.
![pagina](public/assets/docs/pagina.png) 

## Equipo Conformado

> Jennifer Carmen

> Valeria Valles 

## Organizacion de equipo

Como parte de la organizacion en equipo se implemento los issues y los milestones.

![Example](public/assets/docs/milestone.PNG) 


y parte de asignacion de tareas se hiso lo siguiente.

Jennifer Carmen encargada en : 

* Investigacion de implementacion del plugin 
* Creacion de Issues 
* Funcionalidad 
* Maquetacion ejemplos de documentacion de la pagina del plugin

Valeria Valles encarga en :

* Investigacion de implementacion del plugin 
* Readme 
* Funcionalidad 
* Maquetacion del contenido de la pagina del plugin

### Herramientas utilizadas

> html  maquetado e estructura de la pagina.

> CSS estilos a la pagina del plugin.

> jquery para el plugin e funcionalidad.

> Babel transpilador.



## Requisitos del Proyecto

Implementar un plugin de jQuery que dado un _contenedor_ debe buscar todas las
imágenes que encuentre dentro del _contenedor_ y reemplazarlas por un nuevo
elemento `<figure>` que contenga la imagen (`<img>`) además de un `<figcaption>`
con el texto del atributo `alt` de la imagen.

## Como usar cardefy


Si está utilizando jQuery , debe incluir el scrip en el html de su pagina . Funciona con jQuery> = 3.2.1.

#### Entorno de desarrollo 

1.Descargar Cardify  o clonarlo desde GitHub

2.Descomprímalo (si está comprimido) y copie la carpeta Cardify en sus scripts JS.

3.Inserta el siguiente código en tu página web:

```html
<script src="src/index.js"></script>
<script src="app.js"></script>
```

Cardify necesita imágenes completamente cargadas para leer sus dimensiones correctamente. Si no está seguro de cuándo sucederá esto, puede usar este fragmento de código con cada imagen:

```
// jQuery
$('.container-cardify').pluss({ align: 'horizontal',
    direction: 'tb'
  });
```
## Documentacion

### Introduccion 

Cardify es un complemento que le proporciona una mejor manera de mantener a desarrolladores o diseñadores de implementar funcionalidades mas rapidas y accesibles.

Cardify se  ajusta a su imagen en  div, y agrega una superposición dentro de este envoltorio. Luego, cambiará al pasar el mouse el figcaption se mostrara superponiendose a la imagen.

Cardify solo funcionará en img elementos proporcionados por id.

por ejemplo :

```
 <div class="container-cardify">      
     <img  src="tiernos.jpg" alt="probandoAlt" >
    <img  src="tortuga.jpg"  alt="probando" > 
 </div>
```
Y no funcionara por ejemplo si no cuenta con un class="container-cardify" .

```
 <div>
    <img  src="tiernos.jpg" alt="probandoAlt" >
    <img  src="tortuga.jpg"  alt="probando" > 
</div>
```
### Inicialización

Cardify necesita ser inicializado en un class de contenedor antes de su uso.

```
$('.container-cardify').pluss({ align: 'horizontal',
    direction: 'tb'
  });
```

## CSS
para los posibles casos de uso en los ejemplos mostrados (vertical-horizontal) necesita importar el archivo cardify.css

![ejemplo1](public/assets/docs/ejemplo1.PNG) 
![ejemplo2](public/assets/docs/ejemplo2.PNG) 

## Testing
- Para realizar pruebas unitarias a las posibles funciones a ser usadas en nuestro proyecto se utilizo Mocha
![ejemplo1](public/assets/docs/test.PNG) 

1. Installar `mocha`
```
  <link rel="stylesheet" href="css/cardify.css">
```
2. Se creo un directorio Test y se crearón dos archivos `test\cardify-test.spec.js`,`test\cardifyimages.js` y el archivo `text.html`
en el que se hace el llamado de los archivos creados anteriormente ,se inicializa la interfaz BDD de mocha

Incluimos todos los tests que queramos correr
```
<script src="./makeVowelsUpperCase.js"></script>

```

Para visualizar los resultados de test puede ingresar aquí 
[Test](https://jennifercarmen.github.io/cardify/public/test/test.html)

# **Cardify**

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_
* **Front-ends:** _Aurora Vásquez Sanchez y Jessica Manturano_

***

Implementar un plugin de jQuery que dado un _contenedor_ debe buscar todas las
imágenes que encuentre dentro del _contenedor_ y reemplazarlas por un nuevo
elemento `<figure>` que contenga la imagen (`<img>`) además de un `<figcaption>`
con el texto del atributo `alt` de la imagen.

## Flujo de trabajo
Para el desarrollo de este trabajo estamos haciendo uso de diferentes ramas para evitar conflictos y perdida de informacion cada rama tiene informacion relevante y paso a paso de la funcionalidad de esta Librería.

***
## Progreso Propuesto
Checklists de progreso para cada semana:

#### SEMANA 1
* Formar equipo.
* Elegir reto.
* Hacer fork de reto modelo o crear nuevo repo si has propuesto un reto no propuesto por Laboratoria.
* Escribir primera versión del README.md con una descripción general de la librería así como ejemplos (snippets) de uso y configuración (si fuera necesario).
* Crear issues y milestones que sirvan como hoja de ruta (roadmap)
* Inicializar proyecto con npm init y git init.
* Crear index.html con ejemplo principal de uso.

#### SEMANA 2
* Agregar tests que describan la API de tu librería y los casos de uso esperados.
* Implementar funcionalidad esencial.
Hacer code review con tus compañeras e instructorxs.

#### SEMANA 3
* Completar implementación de librería y ejemplo principal (usando la librería).
* Hacer code review con tus compañeras e instructorxs.
* Preparar tu demo/presentación.
Publicar el ejemplo principal (index.html) en GitHub pages.

## Snippets
Para hacer uso de estos snippets debes tomar la informacion y adecuarla a los snippets del editor q uses, luego puedes llamarlos:

    containerJQ
```html
<div class="container">
  <div class="{:class}">
    <img src="{:address}" alt="{:data}">
  </div>
</div>
```

    PluginJQ
```js
$(document).ready(() => {
  let container = $(data);

  let pluginImage = (containerX) => {
    let searchImage = containerX.find(data);

    searchImage.css({'width': '335px', 'height': '200px', 'border': '4px solid white', 'border-radius': '10px'});

    for (let i = 0; i < searchImage.length; i++) {

      let figure = $('<figure style="color: transparent" class="col-lg-4">')
        figure.append(searchImage[i]);
        let altImage = $(searchImage[i]).attr('alt');
        let figcaption = $('<figcaption style="width: 346px">' + altImage + '</figcaption>');
        figure.append(figcaption);

        containerX.append(figure);

        figure.on('mouseover', () => {
          $(searchImage[i]).attr('hidden', 'hidden');
          $(figure).css({'color': 'black', 'width': 'auto', 'height': '250px', 'text-align': 'center', 'text-transform': 'capitalize', 'font-weight': 'bold'});
          figure.addClass('col-lg-4');
          figcaption.css({'margin-top': '100px', 'font-size': '30px'});

        });

        figure.on('mouseout', () => {
          $(searchImage[i]).removeAttr('hidden');
          $(figure).css({'color': 'white'});
          figcaption.css({'margin-top': '0', 'font-size': '20px'});
        });
      }
    }
    pluginImage(container);
  });
  ```

## Instalación
## Descripcion
##### Cómo agregar Cardify a tu proyecto

###### Requisitos previos
Antes de comenzar, necesitarás una app de JavaScript.

###### Agrega Cardify a tu app
Para agregar Cardify a tu app, necesitarás un proyecto de index.html, agregando jQuery en el script de preferencia la ultima version.

```js
<script type="text/javascript" src="vendors/js/jquery-3.2.1.min.js"></script>
```



### Global (navegador)

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="path-to-cardify.js"></script>
```

## Uso

```js
// `container` es el selector del contenedor donde se buscarán todas las
// imágenes a ser procesadas.
$(container).cardify({});
```

## Ejemplos

...

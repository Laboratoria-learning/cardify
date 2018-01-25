# Cardify

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

***

Implementar un plugin de jQuery que dado un _contenedor_ debe buscar todas las
imágenes que encuentre dentro del _contenedor_ y reemplazarlas por un nuevo
elemento `<figure>` que contenga la imagen (`<img>`) además de un `<figcaption>`
con el texto del atributo `alt` de la imagen.

## Flujo de trabajo

1. Se realizó un [**fork**](https://gist.github.com/ivandevp/1de47ae69a5e139a6622d78c882e1f74)
   del repositorio de Laboratoria.

2. Se **clonó** el fork en el computador.

3. Se editó readme con explicación general del proyecto.

4. Se creó primer Issue y Milestone.

5. Se creo index.html con ejemplo principal de uso.

***

## Instalación

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

## Metodología de Tabajo

*  Se utilizará Slack como medio de comunicación entre los integrantes.
*  Se utilizarán los issues para registrar tareas pendientes.

## Herramientas

**Desarrollo:**
* jQuery ~v.3.2.1.

**Producción:**
* Editor de texto: Sublime Text 3.

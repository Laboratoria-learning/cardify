# Imaginator

- - -


Plugin de Jquery que permite agregar etiquetas `<figure` y `<figcaption>` al pasar el mouse por las imagenes. La etiqueta `<figcaption>`, mostrará el texto del atributo Alt.

- - -

## Instalación
### Global (navegador)

`<script src="jquery.imaginator.js"></script>`

### Uso

`$(content).imaginator({});
`

## Funcionamiento
1. ####  Inicializar el proyecto con el comando:
                                            npm init

2. ####  Descargar Imaginator con el comando:
                                     npm install imaginator
                        
3. #### Enlazar script a Documento html.
`                       <script>jquery.imaginator.js</script>`

4. #### Pegar el siguiente código en el documento JS principal:

                              var imaginator = require('imaginator');
                   
5. #### Colocar las imagenes dentro de un contenedor con class "content", las imagenes deben incluir el atributo alt con alguna descripción de la imagen.

                             <div class="content">
                               <div class="imagenes">
                                 <img src="corgi.jpg" alt="Corgi"/>
                               </div>
                             </div.


6. #### Comienza a utilizar el Plugin.

## Ejemplo

![](https://ibb.co/dPnWUR)
    

## Herramientas de Producción
- JQuery ~v. 3.2.1

## Dependencias de Desarrollo
- Mocha ^ 5.0.0
- Chai ^ 4.1.2
- ESlint ~v 4.16.0
- Jsdom ^11.6.1


	Autor: Teresita Cañete,
           Ariella Rodríguez.
           Enero,2018.
    Licencia: ISC License.
    



    
    
     
`



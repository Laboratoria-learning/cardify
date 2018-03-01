
// loadPage = () => {
//   const containerGallery = document.getElementById("gallery");
//   const arrayOfImage = Array.from(containerGallery.getElementsByTagName("img"));
//   const data = getData(arrayOfImage);
//   removeImage(arrayOfImage, containerGallery);
//   createElements(data, containerGallery);
// }

// getData = arrayOfImage => {
//   const newData = arrayOfImage.map(item =>{
//     let altImg = item.alt;
//     // console.log(altImg);
//     let srcImag = item.src;
//     // console.log(srcImag);
//     const obj = {
//       src : srcImag,
//       alt : altImg
//     }
//     // console.log(obj);
//     return obj;
//   })
//     // console.log(newData);
//   return newData;
// }

// removeImage = (arrayOfIamge, containerGallery) => {
//   arrayOfIamge.forEach(item =>{ 
//     // console.log(item);
//     containerGallery.removeChild(item);
//   });
// // }

// // createElements = (data, containerGallery) => {
// //   data.forEach(item => {
// //     const figure = document.createElement("figure");
// //     const figcapture = document.createElement("figcaption");
// //     const img = document.createElement("img");

// //     img.src = item.src;
// //     figcapture.innerText = item.alt;

// //     figure.appendChild(img);
// //     figure.appendChild(figcapture);
// //     containerGallery.appendChild(figure);
// //     console.log(figure)
// //   });


// createElements = (data, containerGallery) => {
//   let output = '';
//     data.forEach(item =>{
//       output += `
//       <figure>
//         <img src = '${item.src}'>
//         <figcapture>${item.alt}</figcapture>
//       </figure>`
//     })
//     console.log(output);
//     containerGallery.innerHTML= output;
//   }


// }
// loadPage();



// // ---------------------------------------Es5----------------------------------------



function loadPage () {
  var containerGallery = document.getElementById("gallery");
  var arrayOfIamge = Array.from(containerGallery.getElementsByTagName("img"));
  var data = getData(arrayOfIamge);
  removeImage(arrayOfIamge, containerGallery);
  createNewImages(data, containerGallery)
  console.log(data);
}


function getData (arrayOfIamge) {
  var newData = arrayOfIamge.map(function(item){
    var altImg = item.alt;
    var srcImag = item.src;
    var obj = {
      src : srcImag,
      alt : altImg
    }   
    // console.log(obj);
    return obj; 
  })
  // console.log(newData);
  return newData;
}

function removeImage (arrayOfIamge, containerGallery) {
  arrayOfIamge.forEach(function(item){
    containerGallery.removeChild(item);
  })
}

function createNewImages (data, containerGallery) {
  data.forEach(function(item){
    var figure = document.createElement("figure");
    var img = document.createElement("img");
    var figcaption = document.createElement("figcaption");

    img.src = item.src;
    figcaption.innerText = item.alt;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    containerGallery.appendChild(figure);
    console.log(figure)
  })
}


loadPage();
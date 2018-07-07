const searchForAlt = function(img) {
  let parser = new DOMParser();
  let alt = '';
  let element = parser.parseFromString(img, 'text/xml');
  alt = element.firstChild.getAttribute('alt');
  if (alt != null) {
    return true;
  }


  return false;
};

const searchForImages = function(div) {
  let parser = new DOMParser();

  let element = parser.parseFromString(div, 'text/xml');
  console.log(element);
  elementImage = element.firstChild.getElementsByTagName('img');
  console.log(elementImage);
  if (elementImage.length >= 1) {
    return true;
  }
  return false;
};

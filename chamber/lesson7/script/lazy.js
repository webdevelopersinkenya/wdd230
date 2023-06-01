const imagesToLoad = Document.querrySelectorAll("img[data-src]");

const imgOptions= {
 threshold: 0,
 rootmargin: "0px, 0px ,50px, 0px"
}
const LoadImages= (image)=> {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {image.removeAttribute("data-src");};
}

if("IntersectionObserver" in windows){
  const imgObserver = newIntersectionObserver(items, obeserver); {
  items.forEach((item) => {
  });
}; imgOptions;
}

imagesToLoad.forEach(image); {
imgObserver.observer(img);
};

export default function returnElement(elemData) {
  const element = document.createElement(elemData.tag);
  if (elemData.classes !== undefined) {
    elemData.classes.forEach((item) => {
      element.classList.add(item);
    });
  }
  if (elemData.id !== undefined) {
    element.id = elemData.id;
  }
  if (elemData.attrib !== undefined) {
    elemData.attrib.forEach((i) => {
      element.setAttribute(i.name, i.value);
    });
  }
  if (elemData.textContent !== undefined) {
    element.textContent = elemData.textContent;
  }
  if (elemData.tag === 'img' && elemData.src !== undefined) {
    element.setAttribute('src', elemData.src);
  }
  return element;
}

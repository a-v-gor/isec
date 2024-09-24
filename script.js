import createPage from "./assets/js/createPage.js";
import state from "./assets/js/state.js";

const convertText = () => {
  navigator.clipboard
  .readText()
  .then(
    (clipText) => {
      state.textInput.innerText = clipText;
      const links = clipText.match(/\b(hx\w+\[\:\]\/\/)*(\w+\[\.\])+(\S)*\b/gim);
      state.textOutput.value = links.join('; ');
      navigator.clipboard.writeText(links.join('; '));
    }
  )
  .catch(
    console.error('Нет данных')
  );
}

document.addEventListener('DOMContentLoaded', createPage);
window.addEventListener('focus', convertText);
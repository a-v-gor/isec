import createPage from "./assets/js/createPage.js";
import state from "./assets/js/state.js";

const convertText = () => {
  navigator.clipboard
  .readText()
  .then(
    (clipText) => {
      state.textInput.innerText = clipText;
      const links = clipText.match(/\b(\S)+(\w+\[\.\])+(\S)*\b/gim);
      const reBrackets = /[(\[)*\]]/gm;
      let resultText = links.join('; ').replace(reBrackets, '');
      resultText = resultText.replaceAll('hxxp', 'http');
      state.textOutput.value = resultText;
      navigator.clipboard.writeText(resultText);
    }
  )
  .catch(
    console.error('Нет данных')
  );
}

document.addEventListener('DOMContentLoaded', createPage);
window.addEventListener('focus', convertText);
state.buttonCreate.addEventListener('click', convertText);
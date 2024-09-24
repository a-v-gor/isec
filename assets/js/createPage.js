import returnElement from './returnElement.js';
import state from './state.js';

export default function createPage() {
  const body = document.body;

  const header = returnElement({tag: 'header', classes: ['header']});
  const headerWrapper = returnElement({tag: 'div', classes: ['wrapper']});
  const title = returnElement({tag: 'h1', classes: ['header__title'], textContent: 'Автоматическое извлечение ссылок из текста'});

  const main = returnElement({tag: 'main', classes: ['main']});
  const mainWrapper = returnElement({tag: 'div', classes: ['wrapper']});
  const form = returnElement({tag: 'form', classes: ['form']});
  const labelTextInput = returnElement({tag: 'label', classes: ['label'], attrib: [{name: 'for', value: 'text-input'}], textContent: 'Оригинальный текст:'});
  const textInput = state.textInput;
  const labelTextOutput = returnElement({tag: 'label', classes: ['label'], attrib: [{name: 'for', value: 'text-output'}], textContent: 'Ссылки:'});
  const textOutput = state.textOutput;

  const footer = returnElement({tag: 'footer', classes: ['footer']});
  const footerWrapper = returnElement({tag: 'div', classes: ['wrapper']});
  const copyright = returnElement({tag: 'div', classes: ['copyright'], textContent: 'Разработка А.Горбенко'});

  footerWrapper.append(copyright);
  footer.append(footerWrapper);
  form.append(labelTextInput, textInput, labelTextOutput, textOutput);
  mainWrapper.append(form);
  main.append(mainWrapper);
  headerWrapper.append(title);
  header.append(headerWrapper);
  body.append(header, main, footer);
}
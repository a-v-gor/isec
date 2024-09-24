import returnElement from "./returnElement.js";

const state = {
  buttonCreate: returnElement({tag: 'button', classes: ['button'], id: 'btn-create', textContent: 'Выбрать ссылки'}),
  textInput: returnElement({tag: 'textarea', classes: ['textarea'], id: 'text-input', attrib: [{name: 'name', value: 'text-input'}, {name: 'rows', value: '20'}, {name: 'cols', value: '100'}, {name: 'autofocus', value: ''}]}),
  textOutput: returnElement({tag: 'textarea', classes: ['textarea'], id: 'text-output', attrib: [{name: 'name', value: 'text-output'}, {name: 'rows', value: '20'}, {name: 'cols', value: '100'}]}),
}

export default state;
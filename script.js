import { adicionarItem } from "./js/adicionarItem.js";

const botaoSalvarItem = document.querySelector('#item-botao');

botaoSalvarItem.addEventListener('click', adicionarItem);

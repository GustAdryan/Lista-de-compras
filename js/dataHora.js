export function dataHora() {
    const itemData = document.createElement('p');
    itemData.innerText = `${new Date().toLocaleDateString('pt-BR', { weekday: 'long'})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString('pt-BR', {hour: 'numeric', minute: 'numeric'})}`;
    itemData.classList.add('item-lista-texto');

    return itemData
}
const { edGalho, edFolha } = require("./arrays");

function verificarItemMenorValor(arrayListas) {
  let itemMenorValor = null;
  let indiceListaMenorValor = 0;
  let indiceItemMenorValor = 0;

  for (let iLista = 0; iLista < arrayListas.length; iLista++) {
    const lista = arrayListas[iLista];

    if (!lista.length) continue;

    itemMenorValor = itemMenorValor ?? lista[0];

    for (let iItem = 0; iItem < lista.length; iItem++) {
      const itemLista = lista[iItem];

      if (itemLista.preco < itemMenorValor.preco) {
        itemMenorValor = itemLista;
        indiceListaMenorValor = iLista;
        indiceItemMenorValor = iItem;
      }
    }
  }

  return { itemMenorValor, indiceListaMenorValor, indiceItemMenorValor };
}

function juntarListas(arrayListas) {
  const listaPesquisa = [...arrayListas];
  let listaFinal = [];
  let comprimentoLista = 0;

  for (let i = 0; i < arrayListas.length; i++) {
    comprimentoLista += arrayListas[i].length;
  }

  for (let i = 0; i < comprimentoLista; i++) {
    const menorItem = verificarItemMenorValor(listaPesquisa);

    if (listaPesquisa.length === 1) {
      listaFinal[i] = listaPesquisa[0];
      break;
    }

    listaFinal[i] = menorItem.itemMenorValor;

    // Aqui não pude evitar usar um método nativo e acabei usando o splice para remover os itens que já foram encontrados:
    listaPesquisa[menorItem.indiceListaMenorValor].splice(
      menorItem.indiceItemMenorValor,
      1
    );
  }

  return listaFinal;
}

// console.log(juntarListas([edGalho, edFolha]));
console.log(juntarListas([edGalho, edFolha]));

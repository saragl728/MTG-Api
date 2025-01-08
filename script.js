const base = "https://api.magicthegathering.io/v1/cards";

var tabula = document.getElementById("cTabla");
var busca = document.getElementById("btn");
var nPaginas = document.getElementById("pageN");
var nCartas = document.getElementById("cards");
var err = document.getElementById("menError");

busca.addEventListener("click", muestraDatos);

function getUrl(nP, tamanyo) {
  return `${base}?page=${nP}&pageSize=${tamanyo}`;
}

async function muestraDatos() {
  try {
    tabula.innerHTML = "";
    dir = getUrl(nPaginas.value, nCartas.value);
    const resp = await fetch(dir);
    const datos = await resp.json();
    let cartas = datos.cards;

    for (i = 0; i < cartas.length; i++) {
      fila = document.createElement("tr");
      t1 = document.createElement("td");
      t2 = document.createElement("td");
      t3 = document.createElement("td");
      t4 = document.createElement("td");
      t5 = document.createElement("td");
      t6 = document.createElement("td");
      t7 = document.createElement("td");
      t8 = document.createElement("td");
      t9 = document.createElement("td");
      t10 = document.createElement("td");
      t11 = document.createElement("td")

      a1 = document.createTextNode(cartas[i].id);
      t1.appendChild(a1);
      a2 = document.createTextNode(cartas[i].name);
      t2.appendChild(a2);

      a3 = document.createTextNode(cartas[i].rarity);
      t3.appendChild(a3);

      a4 = document.createTextNode(cartas[i].manaCost);
      t4.appendChild(a4);
      a5 = document.createTextNode(cartas[i].cmc);
      t5.appendChild(a5);

      //sacar los colores
      aux = "";
      for (j = 0; j < cartas[i].colors.length; j++) {
        aux += `${cartas[i].colors[j]}\n`;
      }
      a6 = document.createTextNode(aux);
      t6.appendChild(a6);

      a7 = document.createTextNode(cartas[i].text);
      t7.appendChild(a7);

      a8 = document.createTextNode(cartas[i].artist);
      t8.appendChild(a8);

      a9 = document.createTextNode(cartas[i].power);
      t9.appendChild(a9);

      a10 = document.createTextNode(cartas[i].toughness);
      t10.appendChild(a10);

      var imag = document.createElement("img");
      imag.setAttribute("src", cartas[i].imageUrl);

      t11.appendChild(imag);
      fila.appendChild(t1);
      fila.appendChild(t2);
      fila.appendChild(t3);
      fila.appendChild(t4);
      fila.appendChild(t5);
      fila.appendChild(t6);
      fila.appendChild(t7);
      fila.appendChild(t8);
      fila.appendChild(t9);
      fila.appendChild(t10);
      fila.appendChild(t11)
      tabula.appendChild(fila);
      err.textContent = `${cartas.length} cards were found`;
    }
  } catch (e) {
    err.textContent = "Couldn't find cards";
  }
}

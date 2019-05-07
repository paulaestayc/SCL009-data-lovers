  /* Manejo de DOM */
  // puedes ver como agregamos la función a nuestro objeto global window
  //DECLARAMOS NUESTROS ARRAY DEL JSON
  let dataPokemon = window.POKEMON.pokemon;
  //CONTENEDOR DONDE MOSTRAREMOS LA INFO
  const showAll = document.getElementById("root");
  const createCards = (data) => {
    let pokemonCard ='';
  //RECORREMOS EL ARRAY 
  data.forEach(pokemon => {
  //CREAMOS LA TARJETA CON LOS ELEMENTOS DEL ARRAY
  let card = `
  <div class="col">
  <div class="card" style="width: 18rem;">
  <div class="card-body">
  <img src="${ pokemon.img }" /><br>
  <b>Nº </b>${ pokemon.num }</b><br>
  <b>${ pokemon.name }</b><br>
  <b>Tipo </b><br> ${ pokemon.type }</b><br>
  <b>Debilidades </b><br> ${ pokemon.weaknesses }<br>
  <b>Huevos </b><br> ${pokemon.egg }</b><br><br>
  </div>
  </div>
  </div>
  `;
  pokemonCard += card;
  })
  showAll.innerHTML=pokemonCard;
  }
  //MOSTRAMOS LA DATA DESDE EL JSON
  createCards(dataPokemon)
  


  // OBTENIENDO VALOR DE TIPO SELECCIONADO POR USUARIO EN DROPDOWN
  const selectType = document.getElementById("filterType");
  selectType.addEventListener("change", () =>{
    let condition= selectType.options[selectType.selectedIndex].text;
    let pokemonType=window.filterPokeType(dataPokemon,condition);

    pokemonType.forEach(()=>{
      return createCards(pokemonType);
    })
  })

  const selectEgg = document.getElementById("filterEgg");
  selectEgg.addEventListener("change", () =>{
    let condition2= selectEgg.options[selectEgg.selectedIndex].text;
    let pokemonEgg=window.filterPokeEggs(dataPokemon,condition2);
    pokemonEgg.forEach(()=>{
      return createCards(pokemonEgg);
    })
  })

  const selectSort = document.getElementById("orderPokemon")
  selectSort.addEventListener("change", () =>{
    let conditionSortBy= selectSort.options[selectSort.selectedIndex].getAttribute("sortby");
    let conditionOrderBy= selectSort.options[selectSort.selectedIndex].getAttribute("orderby");
    let sortedAlph=window.sorting(dataPokemon,conditionSortBy,conditionOrderBy);
    sortedAlph.forEach(()=>{
      return createCards(sortedAlph);
    })
  })

  document.getElementById("reset").addEventListener("click", () =>{
    location.reload();
  })

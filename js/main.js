let pokemonArray = pokemons.slice(0, 151);
let moviesArray = movies.slice(0, 25);

let elList = document.querySelector(".list");
let elBtnPokemon = document.querySelector(".btn__pokemon");
let elBtnMovies = document.querySelector(".btn__movies");
let elBtnBoth = document.querySelector(".btn__both");
let elBtnClear = document.querySelector(".btn__clear");
let elPokemonLogo = document.querySelector(".pokemon__logo");
let elMoviesLogo = document.querySelector(".movies__logo");

elBtnPokemon.addEventListener("click", function(){
    renderArray(pokemonArray);
    elPokemonLogo.style = "display:block"
    elMoviesLogo.style = "display:none"
});

elBtnMovies.addEventListener("click", function(){
    renderArray(moviesArray)
    elMoviesLogo.style = "display:block"
    elPokemonLogo.style = "display:none"
});

elBtnBoth.addEventListener("click", function(){
    let newArray = movies.concat(pokemons);
    renderArray(newArray);
    elMoviesLogo.style = "display:block"
    elPokemonLogo.style = "display:block"
});

elBtnClear.addEventListener("click", function(){
    elList.innerHTML = null
    elPokemonLogo.style = "display:none"
    elMoviesLogo.style = "display:none"
});



function renderArray(array) {
    elList.innerHTML = null

    for (let item of array) {
        let newLi = document.createElement("li");
        elList.appendChild(newLi);
        newLi.classList.add("mb-2", "align-items-center" ,"d-flex" ,"flex-column","justify-content-center", "mb-3", "bg-light", "rounded-5", "shadow-lg", "p-5",);

        let newImg = document.createElement("img");
        newLi.appendChild(newImg);
        newLi.classList.add("pokemon__img");
        newImg.width = "200";

        let newH3 = document.createElement("h3");
        newLi.appendChild(newH3);
        newH3.classList.add("heading");
        
        let newP = document.createElement("p");
        newLi.appendChild(newP);
        newP.classList.add("text");
        newP.textContent = item.type;
        
        let newP2  = document.createElement("p");
        newLi.appendChild(newP2);
        newP2.classList.add("text2");
        newP2.textContent = item.height;
        
        let newP3  = document.createElement("p");
        newLi.appendChild(newP3);
        newP3.classList.add("text3");
        newP3.textContent = item.weight;
        
        if(item.name){
            newImg.src = item.img
            newH3.textContent = item.name;
        }else{
            newImg.src = item.Images;
            newImg.width = "250"
            newImg.height = "150"
            let newP5 = document.createElement("p");
            newLi.appendChild(newP5);
            newP3.textContent = item.Title;
            newP5.textContent = item.imdbRating;

            let newP7 = document.createElement("p");
            newLi.appendChild(newP7);
            newP7.textContent = item.Year


            let newA = document.createElement("a");
            newA.textContent = "Watch Trailer"
            newA.href = "https://youtube.com"
            newLi.appendChild(newA);

            let newA2 = document.createElement("a");
            newA2.textContent = "Bookmark"
            newA2.href = "https://youtube.com"
            newA2.classList.add("link")
            newLi.appendChild(newA2);

            let newA4 = document.createElement("a");
            newA4.textContent = "More info"
            newA4.href = "https://youtube.com"
            newA4.classList.add("link2")
            newLi.appendChild(newA4);
        }
    }
}



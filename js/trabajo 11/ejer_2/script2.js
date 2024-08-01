let parrafos = document.querySelectorAll("p");
console.log(parrafos.length);
for (let i = 0; i < parrafos.length; i++){
    parrafos[i].addEventListener("click", function(){
        this.classList.toggle("resaltado");
    });
};

let arbol = document.getElementById("magia");
arbol.style.display = "inline";
arbol.addEventListener("mouseover", function(){
    arbol.style.display = "none";
});


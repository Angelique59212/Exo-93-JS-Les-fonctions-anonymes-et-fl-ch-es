const alerte = document.getElementById("alert");
const somme = document.getElementById("somme");

alerte.addEventListener("click", () => {
    alert("Hello world");
})

alerte.addEventListener("mouseenter", () => {
    alerte.style.transform = "scale";
})

alerte.addEventListener("mouseleave", () => {
    alerte.style.background = "cyan";
})

alerte.addEventListener("keypress",(event)=> {
    if (event.key === "enter") {
        alert("Hello world");
    }
})

somme.addEventListener("click", () => {
    const div = document.createElement("div");
    div.innerHTML =(5 + 6).toString();
    document.body.appendChild(div);
})

somme.addEventListener("mouseenter", () => {
    somme.style.transform = "scale(1)";
})

somme.addEventListener("mouseleave", () => {
    somme.style.background = "pink";
})



// mouseenter ==>ou lon entre dans la zone dans param event
// mouseleave ==> ou lon sort
// clicket
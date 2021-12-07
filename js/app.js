const alerte = document.getElementById("alert");
const somme = document.getElementById("somme");

alerte.addEventListener("click", () => {
    alert ("Hello world");
})

somme.addEventListener("click", () => {
    const div = document.createElement("div");
    div.innerHTML =(5 + 6).toString();
    document.body.appendChild(div);
})


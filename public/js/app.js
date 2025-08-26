const ulElement = document.querySelector(".content ul.demo");
const liElementCollection = ulElement.querySelectorAll("li");

liElementCollection.forEach((liElement) => {
    liElement.addEventListener("click", (event) => {
        const liElement = event.currentTarget;

        // Remove a classe .selected de todos os itens
        liElementCollection.forEach((item) => {
            item.classList.remove("selected");
        });

        // Adiciona a classe .selected ao item clicado
        liElement.classList.add("selected");
    });
});
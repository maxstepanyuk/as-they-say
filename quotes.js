document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("quotes-container");

    quotes.forEach((quote, index) => {

        container.innerHTML += "<hr>";

        const section = document.createElement("section");

        if (quote.quote) {
            section.innerHTML += `<h3>${quote.quote}</h3>`;
        }

        if (quote.dialogue) {
            const dialogueDiv = document.createElement("div");
            quote.dialogue.forEach(line => {
                dialogueDiv.innerHTML += `<p>${line.name}: ${line.line}</p>`;
            });
            section.appendChild(dialogueDiv);
        } else {
            if (quote.name) {
                section.innerHTML += `<p>Автор: ${quote.name}</p>`;
            }
        }

        if (quote.date) {
            section.innerHTML += `<p>Дата: ${quote.date}</p>`;
        }

        container.appendChild(section);
    });

    container.innerHTML += "<hr>";
});

window.addEventListener("load", () => {

    /* Verkrijger container */
    var verkrijgerContainer = document.getElementById("verkrijgerContainer");
    var verkrijgerCount = document.querySelectorAll("fieldset[id^='verkrijger']").length;

    /* Check of een veld in de verkrijger is ingevuld */
    function isVerkrijgerIngevuld(fieldset) {
        const inputs = fieldset.querySelectorAll("input");
        return Array.from(inputs).some(input => input.value.trim() !== "");
    }

    function voegNieuweVerkrijgerToe() {
        verkrijgerCount++;
        const nieuwVerkrijger = document.createElement("fieldset");

        /* Fieldset attributes */
        nieuwVerkrijger.id = `verkrijger-${verkrijgerCount}`;
        nieuwVerkrijger.classList = `verkrijger`;
        nieuwVerkrijger.hidden = true; 
        nieuwVerkrijger.dataset.hidable = "possible"; 

        nieuwVerkrijger.innerHTML = `
            <legend>Verkrijger ${verkrijgerCount}</legend>
            <div>
                <label>
                    Voorletter(s)
                    <input type="text" placeholder="Voorletter(s)" />
                </label>
                <label>
                    tussenvoegsel(s)
                    <input type="text" placeholder="tussenvoegsel(s)" />
                </label>
                <label>
                    Achternaam
                    <input type="text" placeholder="Achternaam" />
                </label>
            </div>
        `;

        /* Voeg toe aan container */
        verkrijgerContainer.appendChild(nieuwVerkrijger);
        voegEventListenersToe(nieuwVerkrijger);
    }

    function voegEventListenersToe(fieldset) {
        fieldset.querySelectorAll("input").forEach(input => {
            input.addEventListener("input", () => {
                if (isVerkrijgerIngevuld(fieldset)) {
                    // Check of de laatst toegevoegde verkrijger is ingevuld
                    const verkrijgerFieldsets = document.querySelectorAll("fieldset[id^='verkrijger']");
                    if (fieldset === verkrijgerFieldsets[verkrijgerFieldsets.length - 1]) {
                        voegNieuweVerkrijgerToe();
                    }
                }
            });
        });
    }

    // Voeg event listeners toe aan de eerste verkrijger
    const eersteVerkrijger = document.getElementById("verkrijger");
    if (eersteVerkrijger) {
        voegEventListenersToe(eersteVerkrijger);
    }
});

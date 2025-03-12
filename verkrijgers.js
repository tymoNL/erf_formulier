window.addEventListener("load", () => {
    var verkrijgerContainer = document.getElementById("verkrijgerContainer");
    var verkrijgerCount = document.querySelectorAll("fieldset.verkrijger").length;

    function isVerkrijgerIngevuld(fieldset) {
        const inputs = fieldset.querySelectorAll("input");
        return Array.from(inputs).some(input => input.value.trim() !== "");
    }

    function voegNieuweVerkrijgerToe() {
        verkrijgerCount++;
        const nieuwVerkrijger = document.createElement("fieldset");

        /* Fieldset attributes */
        nieuwVerkrijger.id = `verkrijger-${verkrijgerCount}`;
        nieuwVerkrijger.classList.add("verkrijger");
        nieuwVerkrijger.dataset.hidable = "possible";

        nieuwVerkrijger.innerHTML = `
            <legend>Verkrijger ${verkrijgerCount}</legend>
            <div>
                <label>
                    <span>Voorletter(s)</span><br />
                    <input type="text" placeholder="Voorletter(s)" minlength="1" />
                </label>
                <label>
                    <span>tussenvoegsel(s)</span><br />
                    <input type="text" placeholder="tussenvoegsel(s)" />
                </label>
                <label>
                    <span>achternaam</span><br />
                    <input type="text" placeholder="achternaam" minlength="1" />
                </label>
            </div>
        `;

        /* Voeg toe aan container en maak zichtbaar */
        nieuwVerkrijger.hidden = false; 
        verkrijgerContainer.appendChild(nieuwVerkrijger);
        voegEventListenersToe(nieuwVerkrijger);
    }

    function voegEventListenersToe(fieldset) {
        fieldset.querySelectorAll("input").forEach(input => {
            input.addEventListener("input", () => {
                if (isVerkrijgerIngevuld(fieldset)) {
                    const verkrijgerFieldsets = document.querySelectorAll("fieldset.verkrijger");
                    if (fieldset === verkrijgerFieldsets[verkrijgerFieldsets.length - 1]) {
                        voegNieuweVerkrijgerToe();
                    }
                }
            });
        });
    }

    // Event listeners toevoegen aan bestaande verkrijgers
    document.querySelectorAll("fieldset.verkrijger").forEach(voegEventListenersToe);
});

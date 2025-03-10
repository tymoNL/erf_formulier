window.addEventListener("load", (event) => {
    var form = document.getElementById('form');

    // Check browser support
    if (typeof (Storage) !== "undefined") {

        // Data ophalen als het er is en anders data array aanmaken
        var storedData = localStorage.getItem("formData");
        var items = storedData ? JSON.parse(storedData) : [];

        // De invoervelden vullen met de waardes uit de localstorage
        if (items.length > 0) {
            items.forEach(item => {
                var inputField = form.querySelector(`[name="${item.name}"]`);
                if (inputField) {

                    // Als het checkboxen of radiobuttons zijn
                    if (inputField.type === "radio" || inputField.type === "checkbox") {
                        var matchingInput = form.querySelector(`[name="${item.name}"][value="${item.value}"]`);
                        if (matchingInput) {
                            matchingInput.checked = true;
                        }

                    // Input waardes zetten als het geen radio of checkbox is
                    } else {
                        inputField.value = item.value;
                    }
                }
            });
        }
    } 
});

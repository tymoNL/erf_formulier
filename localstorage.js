window.addEventListener("load", () => {
    var form = document.getElementById("form");

    if (typeof Storage !== "undefined") {
        // Data ophalen uit localStorage
        var storedData = localStorage.getItem("formData");

        if (storedData) {
            var formData = new FormData();
            JSON.parse(storedData).forEach(({name, value}) => formData.append(name, value));

            // Velden invullen met opgeslagen waarden
            for (var [name, value] of formData.entries()) {
                var input = form.querySelector(`[name="${name}"]`);

                if (input) {
                    if (input.type === "radio" || input.type === "checkbox") {
                        var matchingInput = form.querySelector(`[name="${name}"][value="${value}"]`);
                        if (matchingInput) matchingInput.checked = true;
                    } else {
                        input.value = value;
                    }
                }
            }
        }

        // Opslaan in localStorage bij verandering van inputvelden
        form.addEventListener("input", () => {
            var newFormData = new FormData(form);
            var formDataArray = [];
            
            for (var [name, value] of newFormData.entries()) {
                formDataArray.push({ name, value });
            }

            localStorage.setItem("formData", JSON.stringify(formDataArray));
        });
    }
});

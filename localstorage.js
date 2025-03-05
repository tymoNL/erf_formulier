window.addEventListener("load", (event) => {
    var form = document.getElementById('form');
    var allFormControls = form.elements;

    // Check browser support
    if (typeof (Storage) !== "undefined") {

        // Retrieve stored data from localStorage (if any)
        var storedData = localStorage.getItem("formData");
        var items = storedData ? JSON.parse(storedData) : [];

        // Populate the form fields with stored values
        if (items.length > 0) {
            items.forEach(item => {
                var inputField = form.querySelector(`[name="${item.name}"]`);
                if (inputField) {
                    if (inputField.type === "radio" || inputField.type === "checkbox") {
                        var matchingInput = form.querySelector(`[name="${item.name}"][value="${item.value}"]`);
                        if (matchingInput) {
                            matchingInput.checked = true;
                        }
                    } else {
                        inputField.value = item.value;
                    }
                }
            });
        }

        // Loop through all form controls and add event listeners
        for (var i = 0; i < allFormControls.length; i++) {
            allFormControls[i].addEventListener("change", function () {
                // Retrieve the latest stored data again
                var updatedItems = localStorage.getItem("formData");
                updatedItems = updatedItems ? JSON.parse(updatedItems) : [];

                // Check if the field already exists in storage
                var existingIndex = updatedItems.findIndex(item => item.name === this.name);
                if (existingIndex !== -1) {
                    updatedItems[existingIndex].value = this.value; // Update value if name exists
                } else {
                    updatedItems.push({ name: this.name, value: this.value }); // Add new entry
                }

                // Store the updated items array in localStorage
                localStorage.setItem("formData", JSON.stringify(updatedItems));
            });
        }

    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
});

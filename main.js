window.addEventListener("load", (event) => {

    var form = document.getElementById('form');
    var allFormControls = form.elements;

    // Check browser support
    if (typeof (Storage) !== "undefined") {

        // Initialize an empty array to store form data
        var items = [];

        // Loop through all form controls and add event listeners
        for (var i = 0; i < allFormControls.length; i++) {
            allFormControls[i].addEventListener("change", function (e) {
                // Store the form control name and value in the array
                items.push({ name: this.name, value: this.value });

                // Optionally, store the items array in localStorage (if needed)
                localStorage.setItem("formData", JSON.stringify(items));
            });
        }

        // Retrieve and display stored data from localStorage (if any)
        var storedData = localStorage.getItem("formData");
        if (storedData) {
            var formData = JSON.parse(storedData);
            document.getElementById("result").innerHTML = JSON.stringify(formData);
        }

    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
});



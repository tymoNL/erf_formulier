window.addEventListener("load", () => {

    /******  DIALOG ********/
    // Find all elements that trigger modals
    document.querySelectorAll("[data-dialog-target]").forEach(trigger => {
        trigger.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = trigger.getAttribute("data-dialog-target");
            const dialog = document.getElementById(targetId);
            if (dialog) {
                dialog.showModal();
            }
        });
    });

    // Find all close buttons within dialogs
    document.querySelectorAll("dialog button[data-close]").forEach(button => {
        button.addEventListener("click", () => {
            const dialog = button.closest("dialog");
            if (dialog) {
                dialog.close();
            }
        });
    });
    /*********************/


    /*************  Validation ****************/
    let i = document.querySelector('input[data-custom-bsn]')

    let validate = function () {
        if (i.value.length == 9) {
            i.setCustomValidity('');
        } else {
            i.setCustomValidity('Je moet 9 cijfers invullen');
        }
    }

    i.addEventListener('input', function () {
        validate();
    });

    validate();

    let sendForm = document.getElementById('sendForm');
    sendForm.addEventListener('click', function () {
        document.getElementById('form').classList.remove('active');
        document.getElementById('result').classList.add('active');
    });
    /*****************************/


    /************** Make inputs required or disabled ***********/
    ToggleRequiredFields();

    function ToggleRequiredFields() {
        var hiddenFieldsets = document.querySelectorAll('fieldset[data-hidable]');

        hiddenFieldsets.forEach(function (fieldset) {
            var requiredInputs = fieldset.querySelectorAll('input[data-required]'); // Only get inputs inside this fieldset

            if (window.getComputedStyle(fieldset).display === "none") {
                requiredInputs.forEach(function (input) {
                    input.removeAttribute('required'); // Correct way to remove 'required'
                    input.setAttribute('disabled', 'true');
                });
            } else {
                requiredInputs.forEach(function (input) {
                    input.setAttribute('required', 'true'); // Ensure 'required' is correctly set
                    input.removeAttribute('disabled');
                });
            }
        });
    }

    document.addEventListener('input', function () {
        ToggleRequiredFields();
    });
    /************************************************************/

});
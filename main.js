window.addEventListener("load", () => {
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

    /* Validation */
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
});
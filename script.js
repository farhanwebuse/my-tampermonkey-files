// script.js
function makeTableVisibleAndEnableButton() {
    let hiddenTable = document.querySelector("#load_forms .col-lg-9.table-responsive");
    let exportButton = document.querySelector("#export_excel_formm");

    if (hiddenTable) {
        hiddenTable.style.display = "block"; // Make table visible
        console.log("✅ Table made visible!");
    } else {
        console.log("❌ Table not found.");
    }

    if (exportButton) {
        exportButton.removeAttribute("disabled"); // Enable the button
        console.log("✅ Export button enabled!");
    } else {
        console.log("❌ Export button not found.");
    }
}

function observeAjaxChanges() {
    const targetNode = document.querySelector('#load_forms');

    if (targetNode) {
        const observer = new MutationObserver(() => {
            makeTableVisibleAndEnableButton(); // Run after AJAX changes
        });

        observer.observe(targetNode, {
            childList: true,
            subtree: true,
        });

        console.log("👁️ Observing AJAX changes...");
    } else {
        console.log("❌ Target container not found for observation.");
    }
}

// Initial trigger
setTimeout(() => {
    makeTableVisibleAndEnableButton();
    observeAjaxChanges();
}, 3000);

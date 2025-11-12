document.addEventListener('DOMContentLoaded', function () {
    const potIndicator = document.getElementById('bombo-indicador');
    const potButtons = document.querySelectorAll('.btn-bombo-selector');
    const potTables = document.querySelectorAll('.tabla-bombo');

    potButtons.forEach(button => {
        button.addEventListener('click', function () {
            const potNumber = this.getAttribute('data-bombo');

            // Update the indicator in the main table
            if (potIndicator) {
                potIndicator.textContent = `Pot ${potNumber}`;
            }

            // Hide all tables
            potTables.forEach(table => {
                table.style.display = 'none';
            });

            // Show the selected table
            const tableToShow = document.getElementById(`tabla-bombo-${potNumber}`);
            if (tableToShow) {
                tableToShow.style.display = 'table';
            }
        });
    });
});
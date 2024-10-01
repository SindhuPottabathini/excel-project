function checkEnter(event, input) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default action
        
        const row = input.closest('tr');
        const inputs = row.querySelectorAll('input[type="text"]');

        // Check if this input is the last one in the row
        if (input === inputs[inputs.length - 1]) {
            addRow(); // If it's the last input, add a new row
        } else {
            saveEdit(input); // Otherwise, save the edit
        }
    }
}

function addRow() {
    const tableBody = document.getElementById('dataTableBody');
    const newRow = tableBody.insertRow();
    const slNoCell = newRow.insertCell(0);
    slNoCell.innerText = tableBody.rows.length;

    newRow.insertCell(1).innerHTML = `<input type="text" onkeypress="checkEnter(event, this)">`;
    newRow.insertCell(2).innerHTML = `<input type="text" onkeypress="checkEnter(event, this)">`;
    newRow.insertCell(3).innerHTML = `<input type="checkbox">`;
    newRow.insertCell(4).innerHTML = `<input type="checkbox">`;
    newRow.insertCell(5).innerHTML = `<input type="checkbox">`;

    // Focus on the new row's first input
    newRow.cells[1].querySelector('input').focus();
}


function updateSlNo() {
    const rows = document.querySelectorAll('#dataTableBody tr');
    rows.forEach((row, index) => {
        row.cells[0].innerText = index + 1; // Update serial numbers
    });
}
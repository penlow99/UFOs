//import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select('tbody');

// create a table-building function
function buildTable(data) {
    // first clear out any existing data
    tbody.html('');
    // Next, loop thru each object in the data
    data.forEach((dataRow) => {
        // append a row to the table
        let trow = tbody.append('tr');
        //loop thru each field in the dataRow and add each value to a cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
        });
    });
}


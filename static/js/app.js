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

function handleClick() {
    // we're telling D3 to look for the #datetime id in the HTML tags,
    // By chaining .property("value"); to the d3.select function, we're telling D3 to look for where our 
    // date values are stored on the webpage and grab that information and hold it in the "date" variable
    let date = d3.select('#datetime').property('value');

    // default filter will actually be the original table data
    let filteredData = tableData;

    // Check to see if a date was entered, then apply 'filter' method to table data
    // only keeping the rows where the date matches the filter date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // Rebuild the table using the buildTable function, with only the filtered rows
    // !NOTE! >>> if no, date was entered, it will display all rows
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

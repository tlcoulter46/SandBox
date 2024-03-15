async function demoJSON(fileName) {
  const response = await fetch(fileName);
  const obj = await response.json();

  createTable(obj);
}

/**
 * Create a table of Customer and Product with multiple rows
 * @param {} obj 
 */
function createTable(obj) {
  let table = "<table  id='myTable'>";
  table += "<thead>";
  table += "<tr>";
  table += "<th onclick='sortTable(0)'>First Name</th>";
  table += "<th onclick='sortTable(1)'>Last Name</th>";
  table += "</tr>";
  table += "</thead>";

  table += "<tbody>";
  for (var i = 0; i < obj.row.length; i++) {
    table += "<tr>";
    table += "<td>" + obj.row[i].firstName + "</td>";
    table += "<td>" + obj.row[i].lastName + "</td>";
    table += "</tr> ";
  }
  table += "</tbody>";

  table += "</table>";

  document.getElementById("demo").innerHTML = table;
}

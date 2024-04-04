function fetchJSONData() {
  fetch("./json/Golfers.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error
          (`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) =>
      buildTable(data))
    .catch((error) =>
      console.error("Unable to fetch data:", error));
}

function buildTable(data) {
  console.log(data);
  let navTable = document.getElementById("navigableTable");
  let header = document.createElement("th");
  let body = document.createElement("tbody");
  navTable.appendChild(header);
  header.innerText = "PLAYER";
  navTable.appendChild(body);

  for (let i = 0; i < data.length; i++) {
    let fullName = data[i].firstName + ' ' + data[i].lastName;
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    cell.innerText = fullName;
    row.appendChild(cell);
    row.setAttribute("onclick", "loadForm(this)");
    row.rowIndex = i;
    body.appendChild(row);

    players.set(i, data[i]);
  }

  // todo focus on the first element of the table
};

// todo This does not do anthing, yet.
document.addEventListener("keydown", function (event) {
  event.preventDefault();
  if (event.key !== undefined) {
    // Handle the event with KeyboardEvent.key
    switch (event.key) {
      case "Enter":
        // highlight row
        highlightRow();
        break;
      case "ArrowUp":
        // move up one row
        // highlight row
        break;
      case "ArrowDown":
        // move down one row
        // highlight row
        break;
      default:
      // code block
    }
  }
});

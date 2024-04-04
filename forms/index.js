const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const spring = document.getElementById("spring");
const fall = document.getElementById("fall");

const element = document.getElementById("search");
element.addEventListener("click", loadForm());

function initForm() {
  console.log("Clearing form");
  // firstName.value = null;
  // lastName.value = null;
  // phone.value = null;
  // email.value = null;
  // spring.checked = false;
  // fall.checked = false;
}

function loadForm() {
  firstName.value = "William";
  lastName.value = "Sheppard";
  phone.value = "(303)123-4567";
  email.value = "me@dummy.com";
  spring.checked = true;
  fall.checked = false;
}

function validateForm() {

}

function saveForm() {
  console.log("Saving form");
}

$(document).on('click', 'button', function () {
  $.getJSON("Golfers.json", function (data) {
    var items = [];

    for (let index = 0; index < data.length; index++) {
      var str = data[index].firstName + ' ' + data[index].lastName;
      items.push("<li id='" + index + "'>" + str + "</li>");
    }

    $("<ul/>", {
      "class": "my-new-list",
      html: items.join("")
    }).appendTo("body");
  });
});

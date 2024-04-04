/**
 * initialize all the elements of the form
 */
function initForm() {
  console.log("Clearing form");

  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("spring").checked = false;
  document.getElementById("fall").checked = false;
}

/**
 * populate the form with all the line data from 'Golfers.json'
 */
function loadForm(target) {
  console.log("loadForm " + target.rowIndex);

  let p = players.get(target.rowIndex);

  if (target != null) {
    document.getElementById("fname").value = p.firstName;
    document.getElementById("lname").value = p.lastName;
    document.getElementById("phone").value = p.phone;
    document.getElementById("email").value = p.email;
    document.getElementById("spring").checked = p.spring;
    document.getElementById("fall").checked = p.fall;
  }
}

/**
 * done
 */
function phoneFormat(phone) {
  console.log("Formatting phone number")
  phone = phone.replace(/[^0-9]/g, '');
  phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  return phone;
}

/**
 * todo
 */
function validateForm() {
  console.log("Validating form");
  console.log(phoneFormat(golfer.phone));
}

/**
 * todo
 */
function resetForm() {
  console.log("resetting form");
  initForm();
}

/**
 * todo
 */
function submitForm() {
  validateForm();
  console.log("Submitted form");
}
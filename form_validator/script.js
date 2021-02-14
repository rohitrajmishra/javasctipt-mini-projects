const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
  // console.log(input, message);
  const formControl = input.parentElement;
  formControl.classList.add('error');
  const small = formControl.querySelector('small');
  small.visible = true;
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add('success');
}

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    // console.log(input);
    // console.log(input.value);
    if (input === null || input.value.trim() === '') {
      // console.log(input.value);
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Get capitalized field name
function getFieldName(input) {
  // console.log(input.id.charAt(0).toUpperCase() + input.id.slice(1));
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);

  // if (username.value === '') {
  //   showError(username, 'Username is required');
  // } else {
  //   showSuccess(username);
  // }
});

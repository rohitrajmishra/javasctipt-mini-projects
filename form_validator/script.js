const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
  // console.log(input, message);
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.visible = true;
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
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

function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(String(input.value.trim()).toLowerCase())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check input length
function checkLength(input, min, max) {
  const inputLen = input.value.length;
  if (inputLen < min) {
    showError(
      input,
      `${getFieldName(input)} must be atleast ${min} characters`
    );
  } else if (inputLen > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Get capitalized field name
function getFieldName(input) {
  // console.log(input.id.charAt(0).toUpperCase() + input.id.slice(1));
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);

  // checkLength(input, min, max)
  checkLength(username, 3, 15);
  checkLength(password, 6, 15);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});

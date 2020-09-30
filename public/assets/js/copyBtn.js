

function copyRandomBurger() {
  const input = document.getElementById('randomBurgerOutput');
  const alert = document.getElementsByClassName('alert');
  //check for a new password, otherwise alert an error
  if (input.value) {
  input.select();
  input.setSelectionRange(0, 99999)
  document.execCommand("copy");
  } else {
    $('.alert').removeClass('d-none').addClass('show');
  }
}
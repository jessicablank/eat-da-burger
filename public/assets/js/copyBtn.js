function copyRandomBurger() {
  let input = document.getElementById('randomBurgerOutput');
  const output = document.getElementById('br')
  //check for random burger, otherwise alert an error
  if (input.value) {
    output.value = input.value;
  } else {
    $('.alert').removeClass('d-none').addClass('show');
  }
}
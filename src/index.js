document.addEventListener("DOMContentLoaded", () => {
  const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the button from refreshing the page
  const myInput = document.getElementById('myInput');
  const inputValue = myInput.value;
  console.log(inputValue); // Output the value of the input to the console
});

});

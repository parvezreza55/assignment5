document.getElementById("color-theme").addEventListener("click", function () {
  const bgColor = randomNumber();
  document.getElementById("body-color").style.backgroundColor = bgColor;
});
function randomNumber() {
  const randomNum1 = Math.floor(Math.random() * 255);
  const randomNum2 = Math.floor(Math.random() * 255);
  const randomNum3 = Math.floor(Math.random() * 255);
  const bgColor = `rgb(${randomNum1}, ${randomNum2},${randomNum3})`;
  return bgColor;
}

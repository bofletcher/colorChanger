let btn = document.getElementById('colorChangeBtn');
btn.addEventListener("click", setRandomColor)


function setRandomColor() {
  console.log("here")
  let letters = '0123456789ABCDEF';
  let color= '#';
  for( let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)]
  }
  let background = document.getElementById('bodyDiv');
  background.style.backgroundColor = color;
  return color;
}
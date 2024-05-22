//your JS code here. If required.
const colorSelect = document.getElementById('colorSelect');
const btn = document.querySelector('input');
console.log(btn);

function removeItems() {
  let colors = colorSelect.value;
  // console.log(colors);
  const selectedOption =
    colorSelect.options[colorSelect.selectedIndex].remove();
}
btn.addEventListener('click', removeItems);
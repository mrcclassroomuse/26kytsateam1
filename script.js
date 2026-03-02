console.log('will this work now?');
console.log('dont forget to add script tags to all the html pages')
/*
From https://youtu.be/ifi6dXOl3g4?si=UUAk3P5_6_qTwbiZ
Video where the searchbar's code is from


*/
/*const searchInput = document.getElementById('search');


searchInput.addEventListener('keyup', e=> {
let currentValue = e.target.value.toLowerCase();
console.log(currentValue);
let resourceName = document.querySelectorAll('h1.entry-name');
resourceName.forEach(resource =>{
  if (resource.textContent.toLowerCase().includes(currentValue)){
   resource.parentNode.parentNode.style.display = 'block';
  } else {
    resource.parentNode.parentNode.style.display = 'none';
  }
});
});
*/
const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', e => {
let currentValue = e.target.value.toLowerCase();
  console.log(currentValue);
  let resources = document.querySelectorAll('h1.entry-name');
  resouces.forEach(resource => {
if (resource.textContent.toLowerCase().includes(currentValue)){
  resource.parentNode.style.display = 'block';
  } else {
  resource.parentNode.style.display = 'none';
  }
                   });
});


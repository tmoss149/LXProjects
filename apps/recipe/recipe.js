const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_ID = '0cb97476';
const APP_key = 'f8a93d758599087672d2727d195e976d';


searchForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  searchQuery = e.target.querySelector('input').value;
  fetchAPI();
});

async function fetchAPI (){
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&to=20`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.hits);
  console.log(data);
}
function generateHTML(results){
  container.classList.remove('initial');
  let generatedHTML = '';
  results.map(result =>{
    generatedHTML +=
    `
    <div class="item">
      <img src="${result.recipe.image}" alt="">
      <div class="flex-container">
        <h1 class="title">${result.recipe.label}</h1>
        <a class="view-button" href="${result.recipe.url}" target="_blank">View Recipe</a>
      </div>
      <p class="item-data">Clories: ${result.recipe.calories.toFixed(2)} Calories</p>
      <p class="item-data">Diet label: ${result.recipe.dietLabels}</p>
      <p class="item-data">Health label: ${result.recipe.healthLabels} Calories</p>
    </div>
    ` 
  })
  searchResultDiv.innerHTML = generatedHTML;
}
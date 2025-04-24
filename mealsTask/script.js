let select = document.querySelector("select");
let recipesContainer = document.getElementById("recipes");

// console.log(select, recipesContainer);

async function getRecipe(recipe) {
  let data = await fetch(
    `https://forkify-api.herokuapp.com/api/search?q=${recipe}`,
    {
      method: "GET",
    }
  );
  result = await data.json();
  let recipes = result.recipes;
  console.log(recipes);
  showData(recipes);
}

getRecipe("corn");

function showData(recipes) {
  let cartona = ``;
  for (let i = 0; i < recipes.length; i++) {
    cartona += `
            <div class="col-md-3">
              <div class="recipe">
                <img src="${recipes[i].image_url}" alt="" class="w-100">
                <h2 class="fs-5 my-2">${recipes[i].title}</h2>
              </div>
            </div>
    `;
  }
  recipesContainer.innerHTML = cartona;
}

select.addEventListener("change", () => {
  let choose = select.value;
  // console.log(choose);
  getRecipe(choose);
});

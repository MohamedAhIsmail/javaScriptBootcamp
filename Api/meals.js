// Meals

let req = new XMLHttpRequest();

req.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pasta");

req.send();

req.addEventListener("readystatechange", () => {
  if (req.readyState == 4) {
    // console.log(req.response);

    let data = JSON.parse(req.response);

    console.log(data.recipes);

    meals = data.recipes;
    printMeals(meals);
  }
});

let mealsContainer = document.querySelector(".meals");

// console.log(meals);

function printMeals(meals) {
  let meal = ``;

  for (let i = 0; i < meals.length; i++) {
    meal += `
          <div class="post">
            <img src="${meals[i].image_url}" alt="" /> 
            <h2 class="title">${meals[i].title}</h2>
            <p class="desc">
              ${meals[i].social_rank}
            </p>
          </div>
    `;
  }
  mealsContainer.innerHTML = meal;
}

// console.log("fetch");

// async function getPizza() {
//   let data = await fetch(
//     "https://forkify-api.herokuapp.com/api/search?q=pizza"
//   );

//   let result = await data.json();
//   console.log("Pizza", result.recipes);
// }

// async function getPasta() {
//   let data = await fetch(
//     "https://forkify-api.herokuapp.com/api/search?q=pasta"
//   );

//   let result = await data.json();
//   console.log("Pasta", result.recipes);
// }

// async function getCorn() {
//   let data = await fetch("https://forkify-api.herokuapp.com/api/search?q=corn");

//   let result = await data.json();
//   console.log("Corn", result.recipes);
// }

// async function printAll() {
//   await getPizza();
//   await getPasta();
//   await getCorn();
// }

// printAll();

async function getRecipe(meal) {
  let data = await fetch(
    `https://forkify-api.herokuapp.com/api/search?q=${meal}`,
    {
      method: "GET",
    }
  );
  let result = await data.json();
  console.log(`${meal}`, result.recipes);
}

async function printAll() {
  await getRecipe("pizza");
  await getRecipe("pasta");
  await getRecipe("corn");
}

printAll();

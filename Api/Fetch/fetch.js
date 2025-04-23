// console.log("fetch");

async function getPizza() {
  let data = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=pizza"
  );

  let result = await data.json();
  console.log("Pizza", result.recipes);
}

async function getPasta() {
  let data = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=pasta"
  );

  let result = await data.json();
  console.log("Pasta", result.recipes);
}

async function getCorn() {
  let data = await fetch("https://forkify-api.herokuapp.com/api/search?q=corn");

  let result = await data.json();
  console.log("Corn", result.recipes);
}

async function printAll() {
  await getPizza();
  await getPasta();
  await getCorn();
}

printAll();

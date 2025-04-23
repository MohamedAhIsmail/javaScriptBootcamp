// callback function

// function getPizza(callback) {
//   let request = new XMLHttpRequest();
//   request.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pizza");
//   request.send();
//   request.addEventListener("readystatechange", () => {
//     if (request.readyState == 4) {
//       console.log("Pizza", JSON.parse(request.response).recipes);
//       callback();
//     }
//   });
// }

// function getPasta(callback) {
//   let request = new XMLHttpRequest();
//   request.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pasta");
//   request.send();
//   request.addEventListener("readystatechange", () => {
//     if (request.readyState == 4) {
//       console.log("Pasta", JSON.parse(request.response).recipes);
//       callback();
//     }
//   });
// }

// function getCorn(callback) {
//   let request = new XMLHttpRequest();
//   request.open("GET", "https://forkify-api.herokuapp.com/api/search?q=corn");
//   request.send();
//   request.addEventListener("readystatechange", () => {
//     if (request.readyState == 4) {
//       console.log("Corn", JSON.parse(request.response).recipes);
//       callback();
//     }
//   });
// }

// function done() {
//   console.log("All Done");
// }

// getPizza(function () {
//   getPasta(function () {
//     getCorn(done);
//   });
// });
// getPasta();
// getCorn();
// done();

function getPizza() {
  return new Promise(function (callback) {
    let request = new XMLHttpRequest();
    request.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pizza");
    request.send();
    request.addEventListener("readystatechange", () => {
      if (request.readyState == 4) {
        console.log("Pizza", JSON.parse(request.response).recipes);
        callback();
      }
    });
  });
}

function getPasta() {
  return new Promise(function (callback) {
    let request = new XMLHttpRequest();
    request.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pasta");
    request.send();
    request.addEventListener("readystatechange", () => {
      if (request.readyState == 4) {
        console.log("Pasta", JSON.parse(request.response).recipes);
        callback();
      }
    });
  });
}

function getCorn() {
  return new Promise(function (callback) {
    let request = new XMLHttpRequest();
    request.open("GET", "https://forkify-api.herokuapp.com/api/search?q=corn");
    request.send();
    request.addEventListener("readystatechange", () => {
      if (request.readyState == 4) {
        console.log("Corn", JSON.parse(request.response).recipes);
        callback();
      }
    });
  });
}

function done() {
  console.log("All Done");
}

// getPizza().then(getPasta).then(getCorn).then(done);

async function printData() {
  await getPizza();
  await getPasta();
  await getCorn();
  done();
}

printData();

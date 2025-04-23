function getPizza(callback) {
  let request = new XMLHttpRequest();
  request.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pizza");
  request.send();
  request.addEventListener("readystatechange", () => {
    if (request.readyState == 4) {
      console.log("Pizza", JSON.parse(request.response));
      callback();
    }
  });
}

function getPasta(callback) {
  let request = new XMLHttpRequest();
  request.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pasta");
  request.send();
  request.addEventListener("readystatechange", () => {
    if (request.readyState == 4) {
      console.log("Pasta", JSON.parse(request.response));
      callback();
    }
  });
}

function getCorn(callback) {
  let request = new XMLHttpRequest();
  request.open("GET", "https://forkify-api.herokuapp.com/api/search?q=corn");
  request.send();
  request.addEventListener("readystatechange", () => {
    if (request.readyState == 4) {
      console.log("Corn", JSON.parse(request.response));
      callback();
    }
  });
}

function done() {
  console.log("All Done");
}

getPizza(function () {
  getPasta(function(){
    getCorn(done)
  });
});
// getPasta();
// getCorn();
// done();

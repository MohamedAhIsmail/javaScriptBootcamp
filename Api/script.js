// let obj = {
//   name: "mohamed",
//   age: 24,
// };

// console.log(obj);

// let jsonObj = JSON.stringify(obj);

// console.log(jsonObj);
// console.log("true");
// console.log("false");
// setTimeout(() => {
//   console.log("settime");
// }, 0);
// console.log("sadas");

//API

let posts = document.querySelector(".posts");

let request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/posts");

request.send();

request.addEventListener("readystatechange", () => {
  if (request.readyState == 4) {
    // console.log(request.response);

    let result = request.response;

    console.log((result = JSON.parse(result)));

    printData(result);
  }
});

function printData(arr) {
  let post = ``;

  for (let i = 0; i < arr.length; i++) {
    post += `
        <div class="post">
          <h2 class="title">${arr[i].title}</h2>
          <p class="desc">${arr[i].body}</p>
        </div>
    `;
  }
  posts.innerHTML = post;
}

// console.log(request.response);


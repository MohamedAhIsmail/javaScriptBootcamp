//

let myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve(console.log("Successfully"));
  } else {
    reject(console.log(Error("Faild")));
  }
});

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const waitTwoSeconds = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("انتهى الانتظار بعد ثانيتين ⏳");
//   }, 2000);
// });

// waitTwoSeconds.then((msg) => console.log(msg));

console.log("*".repeat(40));

const promise = new Promise((resolve, reject) => {
  let req = new XMLHttpRequest();
  req.open("GET", "./articles.json");
  req.send();
  req.addEventListener("readystatechange", () => {
    if (req.readyState === 4) {
      if (req.status === 200) {
        resolve(req.response);
      } else {
        reject(Error("Faild"));
      }
    }
  });
});

promise
  .then((data) => {
    // console.log("data", data);
    data = JSON.parse(data);
    data.length = 5;
    console.log(data);
    let article = ``;
    for (let i = 0; i < data.length; i++) {
      article += `
        <div style="border:1px solid #ccc; padding:10px; margin:10px;">
          <h3>${data[i].title}</h3>
          <p>${data[i].description}</p>
        </div>
      `;
    }
    document.body.innerHTML = article;
  })
  .catch((error) => {
    console.log(error);
  });

//======================================

console.log("#".repeat(40));

fetch("./articles.json")
  .then((result) => {
    // console.log(result);
    let myData = result.json();
    // console.log(myData);
    return myData;
  })
  .then((myData) => {
    myData.length = 5;
    console.log(myData);
    let article = ``;
    for (let i = 0; i < myData.length; i++) {
      article += `
        <div style="border:1px solid #ccc; padding:10px; margin:10px;">
          <h3>${myData[i].title}</h3>
          <p>${myData[i].description}</p>
        </div>
      `;
    }
    document.body.innerHTML = article;
  });

async function fetchData() {
  let result = await fetch(
    "https://api.github.com/users/MohamedAhIsmail/repos"
  );
  let data = await result.json();
  console.log(data);
}

fetchData();

//old

fetch("https://api.example.com/data")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// new

async function getData() {
  try {
    let res = await fetch("https://api.example.com/data");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getData();

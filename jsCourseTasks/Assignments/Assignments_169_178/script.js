// AJAX

// let req = new XMLHttpRequest();
// req.open("GET", "https://api.github.com/users/MohamedAhIsmail/repos");
// req.send();
// req.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     // console.log(this.responseText);
//     let jsData = JSON.parse(this.responseText)
//     console.log(jsData);

//   }
// };
// console.log(req);

// req.addEventListener("readystatechange", function () {
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(this.response);
//   }
// });

// task 2

// let req1 = new XMLHttpRequest();

// req1.open("GET", "https://api.github.com/users/MohamedAhIsmail/repos");

// req1.addEventListener("load", function () {
//   if (req1.status === 200) {
//     console.log("Data Loaded");
//     console.log(JSON.parse(req1.responseText));
//   } else {
//     console.error("Error loading data. Status:", req1.status);
//   }
// });

let req = new XMLHttpRequest();
req.open("GET", "./articles.json");
req.send();
req.addEventListener("readystatechange", () => {
  if (req.readyState === 4 && req.status === 200) {
    // console.log(req.response);
    let mainData = JSON.parse(req.response);
    console.log(mainData);

    for (let i = 0; i < mainData.length; i++) {
      let div = document.createElement("div");
      div.id = "data";
      let childDiv = document.createElement("div");
      div.appendChild(childDiv);
      let h2 = document.createElement("h2");
      let title = document.createTextNode(mainData[i].title);
      h2.appendChild(title);
      let p1 = document.createElement("p");
      let content = document.createTextNode(mainData[i].content);
      p1.appendChild(content);
      let p2 = document.createElement("p");
      let author = document.createTextNode(`Author: ${mainData[i].author}`);
      p2.appendChild(author);
      let p3 = document.createElement("p");
      let category = document.createTextNode(
        `Category: ${mainData[i].category}`
      );
      p3.appendChild(category);
      childDiv.appendChild(h2);
      childDiv.appendChild(p1);
      childDiv.appendChild(p2);
      childDiv.appendChild(p3);
      console.log(div);
      document.body.appendChild(div);
      mainData[i].category = "all";
    }

    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
  }
});

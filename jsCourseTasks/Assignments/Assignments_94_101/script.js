let myP = document.querySelector(".my");

myP.addEventListener("click", () => {
  let newP = myP.cloneNode(true);
  document.body.appendChild(newP)
});

export function sweetAlertValid(message, backGround) {
  let sweetAlert = document.querySelector(".sweetAlert");
  let titleMessage = document.querySelector(".title-message");

  sweetAlert.classList.add("active");
  sweetAlert.style.backgroundColor = backGround
  titleMessage.innerHTML = message;

  setTimeout(() => {
    sweetAlert.classList.remove("active");
  }, 3000);
}

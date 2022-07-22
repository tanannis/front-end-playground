
/* box-shadow: 5px 5px 5px lightgrey;
 */
const btn = document.querySelector(".clickMeBtn");
const modal2 = document.querySelector(".js-modalShow");
btn.addEventListener("click", () => {
  modal2.classList.toggle("js-modalShow");
  // document.body.append(modal)
});
modal2.addEventListener("click", () => {
  modal2.classList.remove("js-modalShow");
  // modal.remove();
});



// Listen to clicks on all dropdowns
const selectors = document.querySelectorAll(".dropdown")
/* CurrentTarget is a reference to the element we added the event listener to. The more common e.target is the element that was actually clicked. In this case, the user could have clicked a link or something in the drop down menu — but thats not where we want to toggle the open class.*/
const handleClick = (e) => {
  e.preventDefault();  
  const classList = e.currentTarget.classList;
  const isOpen = classList.contains("dropdown--open")

  if (isOpen) {
    classList.remove("dropdown--open");
  } else {
    classList.add("dropdown--open");
  }
}
selectors.forEach(el => el.addEventListener("click", handleClick));



// Clicking the “cancel” button or the gray overlay should close the modal. You do not need to implement any action for the “delete” button.
const [modal] = document.getElementsByClassName("modal");
const openModal = () => {
  console.log("opening modal");
  document.body.append(modal);  // or appendChild
}
const deleteReqBtn = document.getElementById("delete-req-btn");
deleteReqBtn.addEventListener("click", openModal);

const closeModal = () => {
  console.log("closing modal");
  modal.remove();
}
const cancelBtn = document.getElementById("cancel-btn");
cancelBtn.addEventListener("click", closeModal);
const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

btn.addEventListener("click", () => {
  msg.textContent = "You clicked the button!";
  msg.style.color = "green";
  msg.style.transition = "0.3s";
  msg.style.transform = "scale(1.1)";

  setTimeout(() => {
    msg.style.transform = "scale(1)";
  }, 300);
});

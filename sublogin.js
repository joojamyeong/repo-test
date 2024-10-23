let callOpen = document.querySelector(".callOpen");
let callModal = document.querySelector(".callModal");
let callBox = document.querySelector(".callBox");
let callClose = document.querySelector(".callClose");
let loginWrap = document.querySelector(".login-wrap");
let hamOpen = document.querySelector(".hamOpen");
let hamClose = document.querySelector(".hamClose");
let hamModal = document.querySelector(".hamModal");
let SubLoginWrap = document.querySelector(".SubLogin-wrap");
let subsec01 = document.querySelector(".subsec01");
let footer = document.querySelector(".footer");

callOpen.addEventListener("click", function () {
  callModal.style.display = "block";
  callBox.style.display = "block";
  loginWrap.style.opacity = "0";
  subsec01.style.display = "none";
  footer.style.display = "none";
});
callClose.addEventListener("click", function () {
  callModal.style.display = "none";
  callBox.style.display = "none";
  loginWrap.style.opacity = "1";
  subsec01.style.display = "block";
  footer.style.display = "block";
});
hamOpen.addEventListener("click", function () {
  hamModal.style.display = "block";
  SubLoginWrap.style.display = "none";
  subsec01.style.display = "none";
  footer.style.display = "none";
});
hamClose.addEventListener("click", function () {
  hamModal.style.display = "none";
  SubLoginWrap.style.display = "block";
  subsec01.style.display = "block";
  footer.style.display = "block";
});

// 반응형 햄벅
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 768) {
    const subMenusMap = {
      0: document.querySelector(".ul1"),
      1: document.querySelector(".ul2"),
      2: document.querySelector(".ul3"),
      3: document.querySelector(".ul4"),
      4: document.querySelector(".ul5"),
    };
    document.querySelectorAll(".ham-left p").forEach((menu, index) => {
      const subMenu = subMenusMap[index];
      if (subMenu) {
        menu.insertAdjacentElement("afterend", subMenu);
        subMenu.style.display = "none";
        menu.addEventListener("click", () => {
          document.querySelectorAll(".ham-left ul").forEach((sm) => {
            if (sm !== subMenu) {
              sm.style.display = "none";
            }
          });
          subMenu.style.display =
            subMenu.style.display === "none" ? "block" : "none";
        });
      }
    });
  }
});

let rowsPerPage = 10;
//변수지정
let rows = document.querySelectorAll("#my-table tbody tr");
let rowsCount = rows.length;
let pageCount = Math.ceil(rowsCount / rowsPerPage);
let numbers = document.querySelector("#numbers");

//페이지네이션 3개씩 보이게 하는 변수들 추가
let prevPageBtn = document.querySelector(".pagination .fa-arrow-left");
let nextPageBtn = document.querySelector(".pagination .fa-arrow-right");

let pageActiveIdx = 0; //현재 보고있는 페이지 그룹
let currentPageNum = 0; //현재 보고있는 페이지네이션 번호
let maxPageNum = 5; //페이지 그룹 최대 개수

//페이지 번호 생성
for (let i = 1; i <= pageCount; i++) {
  numbers.innerHTML += `<li><a href="">${i}</a></li>`;
}
let numberBtn = numbers.querySelectorAll("a");

//페이지네이션 버튼 클릭시 이벤트 추가
numberBtn.forEach((item, idx) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    displayRow(idx);
  });
});
//테이블 출력 함수
function displayRow(idx) {
  let start = idx * rowsPerPage;
  let end = start + rowsPerPage;
  /* 
  idx 0
  100개 목록
  10개씩 보여주기
  0~9
  slice(0, 10)
  splice오려내기
  nodelist, htmlcollection > array
  배열로 바꿔주는 방법
  Array.from(대상)
  [...대상]
  */
  let rowsArray = Array.from(rows);

  for (let ra of rowsArray) {
    ra.style.display = "none";
  }
  let newRows = rowsArray.slice(start, end);
  for (let nr of newRows) {
    nr.style.display = "";
  }
  for (let nb of numberBtn) {
    nb.classList.remove("active");
  }
  numberBtn[idx].classList.add("active");
}
//초기 페이지 먼저 보이게
displayRow(0);

//페이지네이션 그룹 표시함수
function displayPage(num) {
  //페이지네이션 감추기
  for (let nb of numberBtn) {
    nb.style.display = "none";
  }
  let totalPageCount = Math.ceil(pageCount / maxPageNum);
  let pageArr = Array.from(numberBtn);
  let start = num * maxPageNum;
  let end = start + maxPageNum;
  let pageListArr = pageArr.slice(start, end);

  for (let item of pageListArr) {
    item.style.display = "block";
  }
  //첫번째 페이지 일경우 화살표 안보이게
  if (pageActiveIdx === 0) {
    prevPageBtn.style.display = "none";
  } else {
    prevPageBtn.style.display = "block";
  }
  //마지막 페이지 경우 다음페이지 버튼 숨기기
  if (pageActiveIdx == totalPageCount - 1) {
    nextPageBtn.style.display = "none";
  } else {
    nextPageBtn.style.display = "block";
  }
}

displayPage(0);
//다음 페이지  버튼 클릭 이벤트
nextPageBtn.addEventListener("click", function () {
  let nextPageNum = pageActiveIdx * maxPageNum + maxPageNum;
  displayRow(nextPageNum);
  ++pageActiveIdx;
  displayPage(pageActiveIdx);
});
//이전 페이지 버튼 클릭 이벤트
prevPageBtn.addEventListener("click", function () {
  let nextPageNum = pageActiveIdx * maxPageNum - maxPageNum;
  displayRow(nextPageNum);
  --pageActiveIdx;
  displayPage(pageActiveIdx);
});

//모달
let callOpen = document.querySelector(".callOpen");
let callModal = document.querySelector(".callModal");
let callBox = document.querySelector(".callBox");
let callClose = document.querySelector(".callClose");
let loginWrap = document.querySelector(".login-wrap");
let mytable = document.getElementById("my-table");
let leftnavs = document.querySelector(".left-navs");
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
  mytable.style.opacity = "0";
});
callClose.addEventListener("click", function () {
  callModal.style.display = "none";
  callBox.style.display = "none";
  loginWrap.style.opacity = "1";
  mytable.style.opacity = "1";
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

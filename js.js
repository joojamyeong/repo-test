// 인풋
let searchInput = document.getElementById("searchInput");
let originalValue = searchInput.value;

searchInput.addEventListener("focus", () => {
  if (searchInput.value === originalValue) {
    searchInput.value = "";
  }
});

searchInput.addEventListener("blur", () => {
  if (searchInput.value === "") {
    searchInput.value = originalValue;
  }
});
// 모달
let callOpen = document.querySelector(".callOpen");
let callModal = document.querySelector(".callModal");
let callBox = document.querySelector(".callBox");
let inputWrap = document.querySelector(".input-wrap");
let callClose = document.querySelector(".callClose");
let hamOpen = document.querySelector(".hamOpen");
let hamClose = document.querySelector(".hamClose");
let hamModal = document.querySelector(".hamModal");
let mainWrap = document.querySelector(".main_wrap");
let popup = document.querySelector(".popup");
let popupClose = document.querySelector(".popupClose");
let todayClose = document.querySelector(".todayClose");
let header = document.querySelector("header");
let middle = document.querySelector(".middle");
let sideNav = document.querySelector(".side-nav");
let newSpans = document.querySelector(".new");

callOpen.addEventListener("click", function () {
  callModal.style.display = "block";
  callBox.style.display = "block";
  inputWrap.style.display = "none";
});
callClose.addEventListener("click", function () {
  callModal.style.display = "none";
  callBox.style.display = "none";
  inputWrap.style.display = "block";
});
callModal.addEventListener("click", function (e) {
  if (e.target === callModal) {
    callModal.style.display = "none";
    callBox.style.display = "none";
    inputWrap.style.display = "block";
  }
});
hamOpen.addEventListener("click", function () {
  hamModal.style.display = "block";
  mainWrap.style.display = "none";
});
hamClose.addEventListener("click", function () {
  hamModal.style.display = "none";
  mainWrap.style.display = "block";
});
popupClose.addEventListener("click", function (e) {
  popup.style.display = "none";
  header.style.opacity = "1";
  middle.style.display = "block";
  sideNav.style.opacity = "1";
  newSpans.style.opacity = "1";
});
// 사이드내비
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".side-nav a");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});

// 섹션2탭
const data = {
  공지: [
    {
      분류명: "공지",
      제목: "2024 김해시 도시재생 전문가 초청 특강 포럼 개최 안내",
      작성자: "도시재생팀",
      작성날짜: "2024-10-04",
    },
    {
      분류명: "공지",
      제목: "한림술뫼파크골프장 A,B코스 임시운영 안내",
      작성자: "조경시설관리팀",
      작성날짜: "2024-09-27",
    },
    {
      분류명: "공지",
      제목: "전국체전 및 단감축제에 따른 진영스포츠센터 10~11월 휴관 및 프로그램 조정 안내",
      작성자: "진영스포츠센터팀",
      작성날짜: "2024-09-26",
    },
    {
      분류명: "공지",
      제목: "장유스포츠센터 10월 신규회원 미달강습반 및 아쿠아로빅 모집인원 안내",
      작성자: "장유스포츠센터팀",
      작성날짜: "2024-09-26",
    },
    {
      분류명: "공지",
      제목: "해동이스포츠센터 10월 수영 / 아쿠아로빅 신규회원 미달반 모집인원 공고",
      작성자: "해동이스포츠센터팀",
      작성날짜: "2024-09-26",
    },
    {
      분류명: "공지",
      제목: "진영스포츠센터 10월 신규회원(GX프로그램) 및 이용안내",
      작성자: "진영스포츠센터팀",
      작성날짜: "2024-09-25",
    },
    {
      분류명: "공지",
      제목: "10월 해동이국민체육센터 수영 / 아쿠아로빅 신규회원 모집 안내",
      작성자: "해동이스포츠센터팀",
      작성날짜: "2024-09-25",
    },
    {
      분류명: "공지",
      제목: "장유스포츠센터 10월 수영 신규회원 모집공고",
      작성자: "장유스포츠센터팀",
      작성날짜: "2024-09-25",
    },
    {
      분류명: "공지",
      제목: "한림술뫼파크골프장 임시운영 종료 안내",
      작성자: "조경시설관리팀",
      작성날짜: "2024-09-25",
    },
    {
      분류명: "공지",
      제목: "2024년 9월 ~ 10월 김해시도시개발공사 관리 시설 대관현황 안내(스포츠센터)",
      작성자: "체육시설관리팀",
      작성날짜: "2024-09-12",
    },
  ],
  계약: [
    {
      분류명: "계약",
      제목: "2024년 8월 수의계약 내역 공개",
      작성자: "재무회계팀",
      작성날짜: "2024-09-09",
    },
    {
      분류명: "계약",
      제목: "2024년 7월 수의계약 내역 공개",
      작성자: "재무회계팀",
      작성날짜: "2024-08-12",
    },
    {
      분류명: "계약",
      제목: "2024년 6월 수의계약 내역 공개",
      작성자: "재무회계팀",
      작성날짜: "2024-07-05",
    },
    {
      분류명: "계약",
      제목: "2024년 5월 수의계약 내역 공개",
      작성자: "재무회계팀",
      작성날짜: "2024-06-05",
    },
    {
      분류명: "계약",
      제목: "2024년 4월 수의계약 내역 공개",
      작성자: "재무회계팀",
      작성날짜: "2024-05-08",
    },
    {
      분류명: "계약",
      제목: "2024년 3월 수의계약 내역 공개",
      작성자: "재무회계팀",
      작성날짜: "2024-04-09",
    },
    {
      분류명: "계약",
      제목: "2024년 2월 수의계약 내역 공개",
      작성자: "재무회계팀",
      작성날짜: "2024-03-11",
    },
    {
      분류명: "계약",
      제목: "2024년 1월 수의계약 내역 공개",
      작성자: "재무회계팀",
      작성날짜: "2024-02-13",
    },
    {
      분류명: "계약",
      제목: "2023년 12월 수의계약 내역 공개",
      작성자: "재무회계팀",
      작성날짜: "2024-01-02",
    },
    {
      분류명: "계약",
      제목: "2023년 11월 수의계약 내역 공개",
      작성자: "재무회계팀",
      작성날짜: "2023-12-12",
    },
  ],
  채용: [
    {
      분류명: "채용",
      제목: "김해시도시개발공사 율하체육관 배분제 위탁강사 공개채용 최종합격자 공고",
      작성자: "채용마감",
      작성날짜: "2024-09-26",
    },
    {
      분류명: "채용",
      제목: "김해시도시개발공사 김해종합운동장 기간제근로자 공개채용 최종합격자 및 예비합격자 공고",
      작성자: "채용중",
      작성날짜: "2024-09-25",
    },
    {
      분류명: "채용",
      제목: "김해시도시개발공사 동부스포츠센터 단시간근로자(수상안전요원) 채용공고",
      작성자: "채용중",
      작성날짜: "2024-09-25",
    },
    {
      분류명: "채용",
      제목: "김해시도시개발공사 단시간 기간제근로자(중증장애인) 채용 합격자 및 예비합격자 공고",
      작성자: "채용마감",
      작성날짜: "2024-09-25",
    },
    {
      분류명: "채용",
      제목: "김해시도시개발공사 업무적 공개채용(재공고 및 신규) 공고",
      작성자: "채용중",
      작성날짜: "2024-09-24",
    },
    {
      분류명: "채용",
      제목: "율하체육관 라인댄스 배분제 강사 계약 서류심사 합격자 발표 및 면접시험 시행 공고",
      작성자: "채용중",
      작성날짜: "2024-09-23",
    },
    {
      분류명: "채용",
      제목: "김해시도시개발공사 김해종합운동장 기간제근로자 채용 3차 재공고 서류전형 합격자 및 면접시험 시행공고",
      작성자: "채용마감",
      작성날짜: "2024-09-19",
    },
    {
      분류명: "채용",
      제목: "김해시도시개발공사 단시간 기간제근로자(중증장애인) 공개채용 면접시험 및 최종합격자 발표 세부일정 공고",
      작성자: "채용중",
      작성날짜: "2024-09-19",
    },
    {
      분류명: "채용",
      제목: "김해시도시개발공사 업무직 공개채용 합격자 및 예비합격자 공고",
      작성자: "채용마감",
      작성날짜: "2024-09-12",
    },
    {
      분류명: "채용",
      제목: "율하체육관 배분제 위탁강사 공개채용 공고",
      작성자: "채용마감",
      작성날짜: "2024-09-05",
    },
  ],
  환경: [
    {
      분류명: "환경",
      제목: "2024년 9월 진영스포츠센터 수영장 수질검사 성적 알림",
      작성자: "진영스포츠센터팀",
      작성날짜: "2024-10-02",
    },
    {
      분류명: "환경",
      제목: "2024년 8월 해동이국민체육센터 수영장 수질검사 성적 알림",
      작성자: "해동이스포츠센터팀",
      작성날짜: "2024-09-20",
    },
    {
      분류명: "환경",
      제목: "2024년 8월 화목외 27개소 맑은물순환센터 유입 방류 수질 현황",
      작성자: "김해맑은물순환센터팀",
      작성날짜: "2024-09-13",
    },
    {
      분류명: "환경",
      제목: "2024년 8월 장유스포츠센터 수영장 수질검사 결과",
      작성자: "장유스포츠센터팀",
      작성날짜: "2024-09-13",
    },
    {
      분류명: "환경",
      제목: "2024년 8월 진영스포츠센터 수영장 수질검사 성적 알림",
      작성자: "진영스포츠센터팀",
      작성날짜: "2024-08-28",
    },
    {
      분류명: "환경",
      제목: "2024년 7월 화목외 27개소 맑은물순환센터 유입 방류 수질 현황",
      작성자: "김해맑은물순환센터팀",
      작성날짜: "2024-08-21",
    },
    {
      분류명: "환경",
      제목: "2024년 6월 화목외 27개소 맑은물순환센터 유입 방류 수질 현황",
      작성자: "김해맑은물센터팀",
      작성날짜: "2024-08-21",
    },
    {
      분류명: "환경",
      제목: "2024년 7월 장유스포츠센터 수영장 수질검사 결과",
      작성자: "장유스포츠센터팀",
      작성날짜: "2024-08-14",
    },
    {
      분류명: "환경",
      제목: "2024년 7월 해동이국민체육센터 수영장 수질검사 성적 알림",
      작성자: "해동이스포츠센터팀",
      작성날짜: "2024-08-14",
    },
    {
      분류명: "환경",
      제목: "2024년 7월 동부스포츠센터 수영장 수질검사 결과",
      작성자: "동부스포츠센터팀",
      작성날짜: "2024-08-09",
    },
  ],
  분양: [
    {
      분류명: "분양",
      제목: "장유배후주거복합단지 분양 필지 동영상",
      작성자: "개발사업팀",
      작성날짜: "2024-03-21",
    },
    {
      분류명: "분양",
      제목: "장유배후주거복합단지 조성토지 수의계약 공급 공고",
      작성자: "개발사업팀",
      작성날짜: "2024-03-04",
    },
    {
      분류명: "분양",
      제목: "어방지구 잔여 조성토지 수의계약 공급 공고",
      작성자: "개발사업팀",
      작성날짜: "2023-10-23",
    },
  ],
  정보공개: [
    {
      분류명: "정보공개",
      제목: "2024년 8월 정보공개 목록",
      작성자: "안전감사팀",
      작성날짜: "2024-09-03",
    },
    {
      분류명: "정보공개",
      제목: "2024년 7월 정보공개 목록",
      작성자: "안전감사팀",
      작성날짜: "2024-08-27",
    },
    {
      분류명: "정보공개",
      제목: "2024년 6월 정보공개 목록",
      작성자: "안전감사팀",
      작성날짜: "2024-07-02",
    },
    {
      분류명: "정보공개",
      제목: "2024년 5월 정보공개 목록",
      작성자: "안전감사팀",
      작성날짜: "2024-06-03",
    },
    {
      분류명: "정보공개",
      제목: "2024년 4월 정보공개 목록",
      작성자: "안전감사팀",
      작성날짜: "2024-05-03",
    },
    {
      분류명: "정보공개",
      제목: "2024년 3월 정보공개 목록",
      작성자: "안전감사팀",
      작성날짜: "2024-04-04",
    },
    {
      분류명: "정보공개",
      제목: "2024년 2월 정보공개 목록",
      작성자: "안전감사팀",
      작성날짜: "2024-03-06",
    },
    {
      분류명: "정보공개",
      제목: "2024년 1월 정보공개 목록",
      작성자: "안전감사팀",
      작성날짜: "2024-02-05",
    },
    {
      분류명: "정보공개",
      제목: "2023년 12월 정보공개 목록",
      작성자: "안전감사팀",
      작성날짜: "2024-01-05",
    },
    {
      분류명: "정보공개",
      제목: "2023년 11월 정보공개 목록",
      작성자: "안전감사팀",
      작성날짜: "2023-12-04",
    },
  ],
  보도자료: [
    {
      분류명: "보도자료",
      제목: "김해시도시개발공사 취약계층 청소년 위해 여성물품 후원",
      작성자: "안전감사팀",
      작성날짜: "2024-09-30",
    },
    {
      분류명: "보도자료",
      제목: "도시재생안전협회, 김해시도시개발공사 저탄소 우수기관 인증서 수여",
      작성자: "안전감사팀",
      작성날짜: "2024-09-30",
    },
    {
      분류명: "보도자료",
      제목: "김해시도시개발공사 재취업지원 서비스 진로설계 교육 실시",
      작성자: "안전감사팀",
      작성날짜: "2024-09-20",
    },
    {
      분류명: "보도자료",
      제목: "김해시 공공기관 노동조합협의회 전통시장 장보기 캠페인 개최",
      작성자: "안전감사팀",
      작성날짜: "2024-09-20",
    },
    {
      분류명: "보도자료",
      제목: "김해시도시개발공사 추석맞이 전통시장 장보기 캠페인 추진",
      작성자: "안전감사팀",
      작성날짜: "2024-09-20",
    },
    {
      분류명: "보도자료",
      제목: "김해시도시개발공사 창원마산회원체력인증센터 업무협약 체결",
      작성자: "안전감사팀",
      작성날짜: "2024-08-14",
    },
    {
      분류명: "보도자료",
      제목: "김해시도시개발공사 경영평가 우수",
      작성자: "안전감사팀",
      작성날짜: "2024-08-14",
    },
    {
      분류명: "보도자료",
      제목: "김해시도시개발공사 대기용 활성탄으로 가축분뇨처리시설 악취 개선",
      작성자: "안전감사팀",
      작성날짜: "2024-07-31",
    },
    {
      분류명: "보도자료",
      제목: "부양식 잠금맨홀시범설치 운영",
      작성자: "안전감사팀",
      작성날짜: "2024-07-31",
    },
    {
      분류명: "보도자료",
      제목: "전국체전 주경기장 김해종합운동장 위,수탁 계약 체결",
      작성자: "안전감사팀",
      작성날짜: "2024-07-31",
    },
  ],
};

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const contentArea = document.getElementById("content-area");
  const loadMoreButton = document.getElementById("load-more");
  let currentCategory = "공지"; // 초기 카테고리
  let currentIndex = 0; // 현재 보여주는 데이터의 인덱스

  // 탭 클릭 시 해당 카테고리 데이터 불러오기
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.getAttribute("data-category");
      currentIndex = 0; // 데이터 초기화
      renderContent(); // 내용 표시
    });
  });

  // 더보기 버튼 클릭 시 추가 데이터 불러오기
  loadMoreButton.addEventListener("click", function () {
    renderContent();
  });

  // 초기 페이지 로드 시 전체 카테고리 데이터 표시
  renderContent();

  // 콘텐츠를 렌더링하는 함수
  function renderContent() {
    const categoryData = data[currentCategory];

    // 반응형 구간에 따라 한 번에 보여줄 콘텐츠 개수 결정
    const itemsPerLoad = window.innerWidth <= 768 ? 4 : 8;
    const contentToShow = categoryData.slice(
      currentIndex,
      currentIndex + itemsPerLoad
    );
    currentIndex += contentToShow.length;

    // 기존 콘텐츠 지우기
    if (currentIndex === contentToShow.length) {
      contentArea.innerHTML = "";
    }

    // 새로운 콘텐츠 추가
    contentToShow.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("content-item");
      div.innerHTML = `
        <h3>${item.제목}</h3>
        <p>${item.작성자}<span>${item.작성날짜}</span></p>
        <p>${item.내용 || ""}</p>
      `;
      contentArea.appendChild(div);
    });

    // 더 이상 불러올 데이터가 없으면 더보기 버튼 숨기기
    if (currentIndex >= categoryData.length) {
      loadMoreButton.style.display = "none";
    } else {
      loadMoreButton.style.display = "block";
    }
  }
});
// 섹션3
const slides = document.querySelectorAll(".mySwiper02 .swiper-slide img");

slides.forEach((slide) => {
  slide.addEventListener("mouseenter", () => {
    const originalSrc = slide.src;
    const hoverSrc = slide.getAttribute("data-hover-src");
    if (hoverSrc) {
      slide.src = hoverSrc;
      slide.setAttribute("data-original-src", originalSrc);
    }
  });
  slide.addEventListener("mouseleave", () => {
    const originalSrc = slide.getAttribute("data-original-src");
    if (originalSrc) {
      slide.src = originalSrc;
    }
  });
});

//섹션4탭
let tabs = document.querySelectorAll(".tab-link");
let centerBoxes = document.querySelectorAll(".centerBox");

tabs.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    e.preventDefault();
    tabs.forEach((t) => t.classList.remove("active"));
    this.classList.add("active");
    centerBoxes.forEach((box) => box.classList.remove("active"));
    let target = this.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});
//반응형 햄버거메뉴
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

// 오늘하루열지않기 <----나중에 질문

// 페이지 로드 시 팝업 보이기 여부 확인
const popupClosedUntil = localStorage.getItem("popupClosedUntil");
const now = new Date().getTime();

// 팝업이 닫혀 있어야 할 경우
if (popupClosedUntil && now < popupClosedUntil) {
  popup.hidden = true; // 팝업 숨김
} else {
  popup.hidden = false; // 팝업 보임
}

// 팝업 닫기 함수
function closePopup() {
  popup.hidden = true; // 팝업 숨기기
  // 추가적인 상태 변경은 하지 않음
}

// 오늘 하루 열지 않기 기능
todayClose.addEventListener("click", function (e) {
  e.preventDefault(); // 기본 링크 동작 방지
  closePopup(); // 팝업 닫기
  const tomorrow = new Date().getTime() + 24 * 60 * 60 * 1000; // 내일 날짜 계산
  localStorage.setItem("popupClosedUntil", tomorrow); // 로컬스토리지에 설정
});

// 팝업 닫기 버튼 클릭 이벤트
popupClose.addEventListener("click", function (e) {
  e.preventDefault(); // 기본 링크 동작 방지
  closePopup(); // 팝업 닫기
});

// 여기에 추가하여 팝업을 닫을 때 뒤에 있는 요소를 보이게 하는 방법
window.onload = function () {
  const header = document.querySelector("header");
  const middle = document.querySelector(".middle");
  const sideNav = document.querySelector(".sideNav");
  const newSpans = document.querySelector(".newSpans");

  // 모든 요소의 opacity를 원래대로 설정
  if (header) header.style.opacity = "1";
  if (middle) middle.style.display = "block";
  if (sideNav) sideNav.style.opacity = "1";
  if (newSpans) newSpans.style.opacity = "1";
};

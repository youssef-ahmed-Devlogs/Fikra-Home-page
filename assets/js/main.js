// =========================== Search Form Show / Hide ===========================
const searchBtn = document.querySelector(".search-btn");
const searchForm = document.querySelector(".search-form");

searchBtn.onclick = function () {
  if (searchForm.classList.contains("d-none")) {
    searchForm.classList.remove("d-none");
  } else {
    searchForm.classList.add("d-none");
  }
};

// =========================== Number Of Items Section ===========================
const section = document.querySelector(".items-number");
const itemsCount = document.querySelectorAll(".item-count");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 500) {
    if (!started) {
      itemsCount.forEach((item) => increaseCount(item));
    }
    started = true;
  }
};

function increaseCount(el) {
  const goal = el.dataset.goal;
  const counter = setInterval(() => {
    el.textContent++;

    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 10 / goal);
}

// =========================== Space for innovations and challenges ===========================

const cardsGalleryTabs = document.querySelectorAll(".cards-gallery-tabs a");
const cardsGallery = document.querySelectorAll(
  ".cards-gallery-content .card-gallery"
);

console.log(cardsGallery);

cardsGalleryTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    removeClasses(cardsGalleryTabs, "active");
    tab.classList.add("active");

    if (tab.dataset.tab == "all") {
      cardsGallery.forEach((item) => {
        item.style.display = "none";
      });

      document.querySelectorAll(`.${tab.dataset.tab}`).forEach((item) => {
        item.style.display = "block";
      });
    } else if (tab.dataset.tab == "latest-ideas") {
      cardsGallery.forEach((item) => {
        item.style.display = "none";
      });

      document.querySelectorAll(`.${tab.dataset.tab}`).forEach((item) => {
        item.style.display = "block";
      });
    } else if (tab.dataset.tab == "latest-challenges") {
      cardsGallery.forEach((item) => {
        item.style.display = "none";
      });

      document.querySelectorAll(`.${tab.dataset.tab}`).forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});

function removeClasses(items, clAss) {
  items.forEach((item) => {
    item.classList.remove(clAss);
  });
}

// Initialize Swiper

swiperConfig(
  "latest-activity-slider",
  "latest-activity-pagination",
  "latest-activity-button-next",
  "latest-activity-button-prev"
);

swiperConfig(
  "driven-innovation-slider",
  "driven-innovation-pagination",
  "driven-innovation-button-next",
  "driven-innovation-button-prev"
);

function swiperConfig(slider, pagination, nextEl, prevEl) {
  var swiper = new Swiper(`.${slider}`, {
    pagination: {
      el: `.${pagination}`,
    },
    navigation: {
      nextEl: `.${nextEl}`,
      prevEl: `.${prevEl}`,
    },
  });
}

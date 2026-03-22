console.clear();

document.addEventListener("DOMContentLoaded", () => {
  initFilter();
  initFilterToggle();
  initLoadMore();
  updateCards();
});

const CARDS_PER_STEP = 9;
let visibleCardsCount = CARDS_PER_STEP;

function initFilter() {
  const tags = document.querySelectorAll(".M_TagItem-filter");
  const allTag = document.querySelector(".M_TagItem-filter.all");

  if (!tags.length || !allTag) return;

  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      if (tag !== allTag) {
        allTag.classList.remove("active");
        tag.classList.toggle("active");
      }

      const activeTags = document.querySelectorAll(".M_TagItem-filter.active");

      if (
        (tag === allTag && !tag.classList.contains("active")) ||
        activeTags.length === 0 ||
        activeTags.length === tags.length - 1
      ) {
        tags.forEach((item) => item.classList.remove("active"));
        allTag.classList.add("active");
      }

      visibleCardsCount = CARDS_PER_STEP;
      updateCards();
    });
  });
}

function initFilterToggle() {
  const filterButton = document.querySelector(".M_Header-FilterButton");
  const filterGroup = document.querySelector(".M_Header-FilterGroup");

  if (!filterButton || !filterGroup) return;

  filterButton.addEventListener("click", () => {
    filterGroup.classList.toggle("open");
  });
}

function initLoadMore() {
  const moreButton = document.querySelector(".M_Button-more");

  if (!moreButton) return;

  moreButton.addEventListener("click", () => {
    visibleCardsCount += CARDS_PER_STEP;
    updateCards();
  });
}

function getActiveFilterClasses() {
  const activeTags = document.querySelectorAll(".M_TagItem-filter.active");
  const allTag = document.querySelector(".M_TagItem-filter.all");

  if (allTag && allTag.classList.contains("active")) {
    return [];
  }

  let filterClasses = [];

  activeTags.forEach((tag) => {
    const currentClasses = [...tag.classList].filter(
      (className) =>
        className !== "M_TagItem" &&
        className !== "M_TagItem-filter" &&
        className !== "active" &&
        className !== "all",
    );

    filterClasses.push(...currentClasses);
  });

  return filterClasses;
}

function getMatchedCards() {
  const cards = document.querySelectorAll(".O_Articles-Card");
  const filterClasses = getActiveFilterClasses();

  if (filterClasses.length === 0) {
    return [...cards];
  }

  return [...cards].filter((card) =>
    filterClasses.some((filterClass) => card.classList.contains(filterClass)),
  );
}

function updateCards() {
  const cards = document.querySelectorAll(".O_Articles-Card");
  const matchedCards = getMatchedCards();
  const moreButton = document.querySelector(".M_Button-more");

  cards.forEach((card) => {
    card.style.display = "none";
  });

  matchedCards.forEach((card, index) => {
    if (index < visibleCardsCount) {
      card.style.display = "";
    }
  });

  if (!moreButton) return;

  if (matchedCards.length > visibleCardsCount) {
    moreButton.style.display = "";
  } else {
    moreButton.style.display = "none";
  }
}

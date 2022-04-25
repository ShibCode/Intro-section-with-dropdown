function hammenuClose() {
  const menu = document.getElementById("Menu");
  const blackedOut = document.getElementById("blackedOut");
  const features = document.getElementById("featuresExpanded");
  const company = document.getElementById("companyExpanded");
  const learnMore = document.querySelector('.learn-more')
  menu.style.right = "-100%";
  learnMore.style.zIndex = '10'
  blackedOut.style.backgroundColor = "hsla(0, 0%, 0%, 0)";
  featuresArr = Array.from(features.classList);
  if (featuresArr.indexOf("show") != -1) {
    expandFeatures();
  }
  companyArr = Array.from(company.classList);
  if (companyArr.indexOf("show") != -1) {
    expandCompany();
  }
}
function hammenuOpen() {
  const menu = document.getElementById("Menu");
  const blackedOut = document.getElementById("blackedOut");
  const learnMore = document.querySelector('.learn-more')
  learnMore.style.zIndex = '0'
  blackedOut.style.backgroundColor = "hsla(0, 0%, 0%, 0.2)";
  menu.style.right = "0";
}
function expandFeatures() {
  const features = document.getElementById("featuresExpanded");
  const featuresOpen = document.getElementById("features");
  const arrowDown = document.getElementById("arrowDown1");
  const arrowUp = document.getElementById("arrowUp1");
  features.classList.toggle("show");
  featuresOpen.classList.toggle("features-expanded-padding");
  features.classList.toggle("features-expanded-height");
  arrowDown.classList.toggle("show-arrow");
  arrowUp.classList.toggle("hide-arrow");
}
function expandCompany() {
  const company = document.getElementById("companyExpanded");
  const arrowDown = document.getElementById("arrowDown2");
  const arrowUp = document.getElementById("arrowUp2");
  const companyOpen = document.getElementById("company");
  company.classList.toggle("show");
  company.classList.toggle("company-expanded-height");
  companyOpen.classList.toggle("company-expanded-padding");
  arrowDown.classList.toggle("show-arrow");
  arrowUp.classList.toggle("hide-arrow");
}

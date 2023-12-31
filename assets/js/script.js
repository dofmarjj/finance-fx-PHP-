const block = document.getElementById("menu-drop");
const blockSub = document.getElementById("menu-drop-sub");
const menu_pricing = document.getElementById("menu_pricing");
const menu_pricingSubmenu = document.getElementById("menu_pricing-submenu");
const menu_about = document.getElementById("menu_about");
const menu_aboutSubmenu = document.getElementById("menu_about-submenu");
const documentMenu = document.getElementById("document-menu");
const documentMenuSubmenu = document.getElementById("document-menu-submenu");

// Item 1

block.addEventListener("click", () => {
  if (block.classList.contains("show", "active")) {
    block.classList.remove("show", "active");
    blockSub.classList.remove("show");
  } else {
    block.classList.add("show", "active");
    blockSub.classList.add("show");
  }
});
block.addEventListener("mouseenter", () => {
  block.classList.add("show", "active");
  blockSub.classList.add("show");
});
block.addEventListener("mouseleave", () => {
  block.classList.remove("show", "active");
  blockSub.classList.remove("show");
});

// Item 2

menu_pricing.addEventListener("click", () => {
  if (menu_pricing.classList.contains("show", "active")) {
    menu_pricing.classList.remove("show", "active");
    menu_pricingSubmenu.classList.remove("show");
  } else {
    menu_pricing.classList.add("show", "active");
    menu_pricingSubmenu.classList.add("show");
  }
});
menu_pricing.addEventListener("mouseenter", () => {
  menu_pricing.classList.add("show", "active");
  menu_pricingSubmenu.classList.add("show");
});
menu_pricing.addEventListener("mouseleave", () => {
  menu_pricing.classList.remove("show", "active");
  menu_pricingSubmenu.classList.remove("show");
});

// Item 3

menu_about.addEventListener("click", () => {
  if (menu_about.classList.contains("show", "active")) {
    menu_about.classList.remove("show", "active");
    menu_aboutSubmenu.classList.remove("show");
  } else {
    menu_about.classList.add("show", "active");
    menu_aboutSubmenu.classList.add("show");
  }
});
menu_about.addEventListener("mouseenter", () => {
  menu_about.classList.add("show", "active");
  menu_aboutSubmenu.classList.add("show");
});
menu_about.addEventListener("mouseleave", () => {
  menu_about.classList.remove("show", "active");
  menu_aboutSubmenu.classList.remove("show");
});

// Item 4

documentMenu.addEventListener("click", () => {
  if (menu_about.classList.contains("show", "active")) {
    documentMenu.classList.remove("show", "active");
    menuAboutSubmenu.classList.remove("show");
  } else {
    menu_about.classList.add("show", "active");
    menuAboutSubmenu.classList.add("show");
  }
});
documentMenu.addEventListener("mouseenter", () => {
  documentMenu.classList.add("show", "active");
  documentMenuSubmenu.classList.add("show");
});
documentMenu.addEventListener("mouseleave", () => {
  documentMenu.classList.remove("show", "active");
  documentMenuSubmenu.classList.remove("show");
});

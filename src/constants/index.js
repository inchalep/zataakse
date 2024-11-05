export const menuList = [
  {
    name: "Home",
    isSubMenu: false,
    url: "/",
  },
  {
    name: "Pages",
    isSubMenu: true,
    url: "",
    children: [
      { name: "about", isSubMenu: false, url: "about" },
      { name: "contact", isSubMenu: false, url: "contact" },
      { name: "home", isSubMenu: false, url: "home" },
    ],
  },
  {
    name: "Shop",
    isSubMenu: true,
    url: "",
    children: [
      { name: "shop One", isSubMenu: false, url: "shop-1" },
      { name: "shop Two", isSubMenu: false, url: "shop-2" },
    ],
  },
  {
    name: "Blog",
    isSubMenu: true,
    url: "",
    children: [{ name: "Blog 1", isSubMenu: false, url: "blog-1" }],
  },
];

export const brandList = [
  "Essence",
  "Glamour Beauty",
  "Velvet Touch",
  "Chic Cosmetics",
  "Nail Couture",
  "Calvin Klein",
  "Chanel",
  "Dior",
  "Dolce & Gabbana",
  "Gucci",
  "Annibale Colombo",
  "Annibale Colombo",
  "Furniture Co.",
  "Knoll",
  "Bath Trends",
];

export const stockList = ["In stock"];

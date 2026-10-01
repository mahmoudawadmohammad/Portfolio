/**
 * Regenerates assets/data/portfolio-details.json from this file.
 * Run: node scripts/build-portfolio-details.cjs
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const outDir = path.join(root, "assets", "data");
const outFile = path.join(outDir, "portfolio-details.json");

const portfolioDetails = {
  lister: {
    metaTitle: "Lister Details",
    metaDescription:
      "Food Delivery app that have phone branch and web branch and back end maid from asp.net core api and my SQL database ,I personally worked with the web branch I did interfaces fully dynamic the front end UI using html ,css, js, bootstrap ,and more libraries for styling like fontawesome ,animations,and many other design libraries to achieve a dynamic fully functional wep app .",
    metaKeywords:
      "Web Application, Website for Management, DashBoard Admin & Owner Restaurant, Contol Panel Admin & Owner Restaurant, Food Delivery Application ",
    favicon: "assets/img/logo/restaurant.png",
    breadcrumbLabel: "Lister",
    pageHeading: "Lister Details",
    category: "Web Application",
    projectDate: "16 Aug, 2021 ➡️ 13 Jun, 2022",
    descriptionHtml:
      "Food Delivery app that have phone branch and web branch and back end maid from asp.net core api and my SQL database ,I personally worked with the web branch I did interfaces fully dynamic the front end UI using html ,css, js, bootstrap ,and more libraries for styling like fontawesome ,animations,and many other design libraries to achieve a dynamic fully functional wep app .",
    teamMembers: "5",
    technologies: ["HTML", "CSS", "JavaScript", "JQuery", "BootStrap"],
    technologiesTitle: "Languages ​​and Technologies used",
    gallery: [
      {
        title: "Create Account Screen",
        src: "assets/img/portfolio/lister/2_Create_Account_Screen.png",
        alt: "Create Account Screen",
      },
      {
        title: "Home Screen",
        src: "assets/img/portfolio/lister/3_Home_Screen.png",
        alt: "Home Screen",
      },
      {
        title: "Home Screen",
        src: "assets/img/portfolio/lister/4_Home_Screen.png",
        alt: "Home Screen",
      },
      {
        title: "Forget Password Verification Screen",
        src: "assets/img/portfolio/lister/5_Forget_Password_Verification_Screen.png",
        alt: "Forget Password Verification Screen",
      },
      {
        title: "Google Map Screen",
        src: "assets/img/portfolio/lister/6_Google_Map_Screen.png",
        alt: "Google Map Screen",
      },
      {
        title: "Menu Screen",
        src: "assets/img/portfolio/lister/7_Menu_Screen.png",
        alt: "Menu Screen",
      },
      {
        title: "Menu Screen",
        src: "assets/img/portfolio/lister/8_Menu_Screen.png",
        alt: "Menu Screen",
      },
      {
        title: "Menu Screen",
        src: "assets/img/portfolio/lister/9_Menu_Screen.png",
        alt: "Menu Screen",
      },
      {
        title: "Menu Screen",
        src: "assets/img/portfolio/lister/10_Menu_Screen.png",
        alt: "Menu Screen",
      },
    ],
  },

  mallToGo: {
    metaTitle: "Mall To Go Details",
    metaDescription:
      "A Desktop Application using C# and some design library for a mall cashier system complete with a database and other feature Like searching and sorting the items and real time editing of the inventory and a printable bill .",
    metaKeywords:
      "Desktop Application, C# Application, Windows Form Applicatoin, Mall Management, Mall Controlling, Store Management",
    favicon: "assets/img/logo/mallToGo.png",
    breadcrumbLabel: "Mall To Go",
    pageHeading: "Mall To Go Details",
    category: "Desktop Application",
    projectDate: "16 Apr, 2022 ➡️ 13 Jun, 2022",
    descriptionHtml:
      "A Desktop Application using C# and some design library for a mall cashier system complete with a database and other feature Like searching and sorting the items and real time editing of the inventory and a printable bill .",
    teamMembers: "6",
    technologies: [
      "C# .Net Framework",
      "Entity Framework",
      "Sql server database",
      "Bunifu Library For Design",
    ],
    technologiesTitle: "Languages ​​and Technologies used",
    gallery: [
      {
        title: "Login Screen",
        src: "assets/img/portfolio/mallToGo/2_Login_Page_Screen.png",
        alt: "Login Screen",
      },
      {
        title: "Edit Account Screen",
        src: "assets/img/portfolio/mallToGo/3_Edit_Account_Screen.png",
        alt: "Edit Account Screen",
      },
      {
        title: "Print Invoice Screen",
        src: "assets/img/portfolio/mallToGo/4_Print_Invoice_Screen.png",
        alt: "Print Invoice Screen",
      },
    ],
  },
  my_medicine: {
    "metaTitle": "My Medicine Details",
    "metaDescription": "A smart mobile application dedicated to medication management, designed to help the elderly and individuals with chronic conditions adhere to their treatment schedules. The app offers a comprehensive management system that allows users to add medications, set up to three daily doses, select specific days of the week for each medication, and track remaining pill counts while receiving low-stock alerts. The app features scheduled notifications and supports manual logging of medication intake if a dose is taken outside its designated time. Additionally, medications can be assigned to specific categories—such as painkillers or vitamins—and users can generate daily or weekly medication reports for each patient, The application features a simple, user-friendly interface and supports both Arabic and English. It also offers a (Dark Mode) option, making it a practical and effective solution for improving medication adherence and easing the burden of medication tracking for patients and their families.",
    "metaKeywords": "Mobile Application, Flutter Application, My Medicine Application, My Medicine App",
    "favicon": "assets/img/logo/mainPage.png",
    "breadcrumbLabel": "My Medicine",
    "pageHeading": "My Medicine Details",
    "category": "Mobile Application",
    "projectDate": "15 Feb, 2026 ➡️ 02 Sep, 2026",
    "descriptionHtml": "The core concept of the application is to simplify tasks for users; it allows them to add medications and offers various other features, such as deleting medications, refilling prescriptions, categorizing medications, generating medication reports, and much more.",
    "technologies": [
      "Flutter"
    ],
    "technologiesTitle": "Languages and Technologies used",
    "gallery": [
      {
        "title": "Categories & Products Pages",
        "src": "assets/img/portfolio/mymedicine/2_Categories_and_Products_Pages.png",
        "alt": "Categories & Products Pages"
      },
      {
        "title": "Cart Pages",
        "src": "assets/img/portfolio/mymedicine/3_Cart_Pages.png",
        "alt": "Cart Pages"
      },
      {
        "title": "Reports Page",
        "src": "assets/img/portfolio/mymedicine/4_Report_Page.png",
        "alt": "Reports Page"
      },
      {
        "title": "Orders Pages",
        "src": "assets/img/portfolio/mymedicine/5_Orders_Pages.png",
        "alt": "Orders Page"
      }
    ]
  }
};

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(
  outFile,
  JSON.stringify(portfolioDetails, null, 2),
  "utf8"
);
console.log("Wrote", outFile);

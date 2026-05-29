import GenerateNavBar from "./NavBar.js";
import GenerateFooter from "./Footer.js";
import selectedLink from "./SelectedLink.js";
import MainPage from "./MainPage.js";

const linksArr = ["HOMELink", "HOMELinkICON", "PRODUCTSLink", "SERVICESLink", "ABOUT_USLink", "CONTACTLink"];


const navBar = GenerateNavBar();
document.querySelector("body").appendChild(navBar);


const divRoot = document.createElement("div");
divRoot.id = "root";
document.querySelector("body").appendChild(divRoot);


const footer = GenerateFooter();
document.querySelector("body").appendChild(footer);


linksArr.forEach(link =>{
    document.getElementById(link).addEventListener("click", (e) =>{
        selectedLink(e.target.id);
    });
})

MainPage();

console.log("test");

import cleanUp from "./CleanUp.js";
import MainPage from "./MainPage.js";
import ProductsPage from "./Products.js";
import ServicesPage from "./Services.js";
import AboutUsPage from "./AboutUs.js";
import ContactPage from "./Contact.js";





const selectedLink = (elementId) =>
{
   cleanUp("root");
    switch(elementId)
    {
        case "HOMELink":
            MainPage();
            break;
        
        
        case "PRODUCTSLink":
            ProductsPage();
            break;
        case "SERVICESLink":
            ServicesPage();
            break;
        case "ABOUT_USLink":
            AboutUsPage();
            break;
        case "CONTACTLink":
            ContactPage();
            break;
        default:
            MainPage(); 
            break;
    }

}

export default selectedLink;

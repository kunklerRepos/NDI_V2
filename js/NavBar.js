const GenerateNavBar = () =>
{
    /**<nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #FFFFFF !important;">
  
</nav> */

    let nav = document.createElement("nav");
    nav.id="NavBar";
    nav.className = "navbar navbar-expand-lg navbar-light bg-light";
    nav.style = "background-color: #FFFFFF !important;";

    nav.innerHTML = `
        <div class="container-fluid">
    <a class="navbar-brand" id="HOMELink" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" id="PRODUCTS">
          <a class="nav-link active" id="PRODUCTSLink" aria-current="page" href="#">Products</a>
        </li>
        <li class="nav-item" id="SERVICES">
          <a class="nav-link" href="#" id="SERVICESLink">Services</a>
        </li>
        <li class="nav-item" id="ABOUT_US">
          <a class="nav-link"  href="#" id="ABOUT_USLink">About Us</a>
        </li>
        <li class="nav-item" id="BUTTON_Contact">
          <a class="nav-link" href="#" tabindex="-1" id="CONTACTLink" aria-disabled="true">Contacts</a>
        </li>
      </ul>
    </div>
  </div>
    `;

    return nav;
}

export default GenerateNavBar; 
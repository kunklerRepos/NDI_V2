import cleanUp from "./CleanUp.js";
import Contact from "./Contact.js";
import Products from "./Products.js";
import ServicesPage from "./Services.js";
import AboutUsSection from "./AboutUs.js";

function MainPage()
{
    const MainPageDiv = document.getElementById("root");
    MainPageDiv.innerHTML = 

    `	<div id="IMG_Hero" class="img-fluid">
		<h3 class="MainHeaderFont">Precision Aerospace Components for High-Performance Systems</h3>
		<p class="subHeadingFont">Delivering reliable, high-quality components and solutions for mission-critical applications.</p>
		
	</div>
	<div>
	<div id="BACKGROUND_BlueGradient" >
		
		
		

	</div>



	<div id="WhatWeDoMenuSection" >
		<div id="WhatWeDoSection">
			<h2 class="Header2Font">WHAT WE DO</h2>

			<p class="WhatWeDoFont">
				NDI designs, manufactures, tests, and services high-performance aerospace components
				with a focus on precision, reliability, and long-term performance.
			</p>
			
		</div>

	

		<div id="WhatWeDoCardsContainer" class="container">
			<div class="row">
				<div class="col">
					<div class="card engineeringCardSettings" > 
						<div class="card-body engineeringCardBodySettings" style="background-image: linear-gradient( rgb(29, 57, 94, .3), rgba(30, 58, 95,.59 )), url('./assets/ProductsCard.jpg');">
							<div class="WhatWeDoCardSectionBodies">
								<h5 class="card-title engineeringCardTextTitle">PRODUCTS</h5>
							</div>
							<p class="card-text" style="margin-top:15%; color: white !important; font-family: Roboto; ">Hydro-mechanical aerospace components engineered for reliability</p>
							<div style="justify-content: center; align-items: center; display: grid;">
								<a href="#" id="ViewProductsButton" class="btn btn-primary" style="border: none; background-color: white !important; color: black !important">VIEW PRODUCTS</a>
							</div>
						</div>
					</div>
				</div>

				<div class="col">

					<div class="card engineeringCardSettings"> 
						<div class="card-body engineeringCardBodySettings" style="background-image: linear-gradient( rgb(29, 57, 94, .3), rgba(30, 58, 95,.59 )), url('./assets/EngineeringCard.jpg');">
							<div class="WhatWeDoCardSectionBodies">
								<h5 class="card-title engineeringCardTextTitle">ENGINEERING</h5>
							</div>
							<p class="card-text" style="margin-top:15%; color: white !important; font-family: Roboto; ">Design and development solutions backed by decades of experience.</p>
							<div style="justify-content: center; align-items: center; display: grid;">
								<a href="#" id="ExploreServicesButton" class="btn btn-primary" style="border: none; background-color: white !important; color: black !important">EXPLORE SERVICES</a>
							</div>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card engineeringCardSettings" > 
						<div class="card-body engineeringCardBodySettings" style="background-image: linear-gradient( rgb(29, 57, 94, .3), rgba(30, 58, 95,.59 )), url('./assets/RepairCard.jpg');">
							<div class="WhatWeDoCardSectionBodies">
								<h5 class="card-title" style="color: white; font-family: Industry Inc;">REPAIR SERVICES</h5>
								
							</div>
							<p class="card-text" style="margin-top:15%; color: white !important; font-family: Roboto; ">
								FAA-certified inspection, repair, and overhaul support.	
							</p>
							<div style="justify-content: center; align-items: center; display: grid;">
								<a id="ContactUsLink" href="#" class="btn btn-primary" style="border: none; background-color: white !important; color: black !important">CONTACT US</a>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		

		<div id="certificationSection">
			<div id="CertWell1" ></div>
			<div id="CertWell2" >

				<div class="card mainCertCard" >
					<div class="card-body" >
						<div style="display: grid; justify-content: center; margin-top: 5%;">
							<h3 class="card-title" style="font-family: Industry Inc; color: white;">CERTIFICATIONS</h3>
							
						</div>
							
						<p class="card-text" style="font-family: Roboto; color: white;">
							NDI operates under rigorous industry standards to ensure the highest levels of safety, reliability, and quality. These certifications reflect a commitment to strict regulatory compliance, precision manufacturing, and continuous improvement—ensuring every component meets the demanding requirements of aerospace applications.
						</p>
						<div style="display: flex; justify-content: center; align-items: center;">
							<div style="display: flex;">
								<div style="background-color: white; height: 190px; width: 191px; align-items: center; display: grid; border-radius: 50%;">
									<div style="width: 100%; height: 50%; background-image: url('./assets/AS9100D-LOGO.png'); 
									background-size: cover; background-position: center">
									
									</div>
								</div>
								<div style="margin-left: 5%; background-color: white; height: 190px; width: 191px; align-items: center; display: flex; border-radius: 50%;">
									<div style="width: 75%; height: 33%; background-image: url('./assets/Seal_of_the_United_States_Federal_Aviation_Administration.png'); 
									background-size: contain; background-position: center; background-repeat: no-repeat;">
									
									</div>
									<p style="font-family: Roboto; font-weight: 400; color: #091F62; font-size: 14px">Federal Aviation Administration</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


		</div>

		<div id="testimonialsSection">
			<div id="TestWell1" >
				<h2 id="testimonialsHeading" >TESTIMONIALS</h2>
				<p id="testminonalSectionText2">
					NDI is committed to delivering reliable solutions, responsive support, and consistent quality. Our long-standing relationships are built on precision, performance, and customer trust. We value strong communication, dependable service, and lasting relationships with every customer we support. Our team is dedicated to delivering solutions with precision and care.

				</p>
			</div>
			<div id="TestWell2" >

				
				<div class="card" style="width: 18rem; margin-top: 5%;">
					<div class="card-body">
						
						<p class="card-text">
							“Great Upfront Support Evaluating Design Trades. Technically Sound Throughout. Excellent Execution and Support From Beginning Through Part Qualification And Beyond. A ‘true’ Partner Relationship.”
						</p>
						<div >
							<h5 class="card-title" style="display: grid; justify-content: end;">JAMES SOBEL</h5>
							<h6 class="card-subtitle mb-2 text-muted" style="display: grid; margin-left: 26%;">Associate Tech Fellow Bell Helicopter</h6>
						</div>
					</div>
				</div>

			</div>
			</div>

			<div id="WhoWeAreSection">
				<div id="WhoWeArePhoto">
					<div style="width: 100%; height: 100%; background-image: url('./assets/WhoWeAre2.jpg');
					 background-size: cover; background-position: center;">
					</div>
				</div>
				<div id="WhoWeAreText">
					<div style="margin-top: 5%;">
						<h2 style="font-family: Roboto; color: white; display: flex; justify-content: center; margin-right: 5%;">
							WHO WE ARE</h2>
						
					</div>
					<div style="padding: 5%; margin-top: 5%;">
					<p style="font-family: Roboto; color: white;">
						We are a dedicated aerospace manufacturer driven by a commitment to precision, reliability, and lasting partnerships. Our team brings together technical expertise and hands-on experience to deliver solutions that meet the highest industry standards. 
					</p>
					<p style="font-family: Roboto; color: white;">
						Quality assurance is at the core of everything we do, guiding our processes from initial design through final inspection. We follow rigorous procedures to ensure consistency, accuracy, and compliance across every project. This disciplined approach allows us to maintain confidence in our work and deliver results our partners can depend on.
					</p>
					<p style="font-family: Roboto; color: white;">
						 Beyond our technical capabilities, we value strong relationships built on trust, transparency, and performance. We understand the critical nature of aerospace applications and the importance of getting every detail right. By staying focused on reliability and continuous improvement, we remain a partner our clients can count on long-term.
					</p>
					</div>
				</div>
				
			</div>
			<div id="GetInTouchSection" >
				<div style="display: grid; justify-content: center; position: relative;">
				<h2 style="font-family: Industry Inc; color: black; display: grid; justify-content: center; margin-top: 5%;">
					GET IN TOUCH
				</h2>
				<p style="font-family: Roboto; color: black; width: 65%; justify-self: center; text-align: center; margin-top: 5%;">
					Have a project in mind or need more information? Our team is here to help. Reach out to discuss your needs, request a quote, or learn more about how we can support your next mission.
				</p>
				<button id="ContactButton" style="border-radius: 6px; background-color: #1E3A5F; color: white; width: 94px; height: 44px; justify-self: center;">
						CONTACT</button>
				</div>
			</div>`

			document.getElementById("ContactUsLink").addEventListener("click", ()=>{
				cleanUp("root");
				window.scroll(0,0);
				Contact();
			})

			document.getElementById("ExploreServicesButton").addEventListener("click", () => {
				cleanUp("root");
				window.scroll(0,0);
				ServicesPage();


			});


			document.getElementById("ViewProductsButton").addEventListener("click", () => {
				cleanUp("root");
				window.scrollTo(0, 0);
				Products();
			});

			document.getElementById("ContactButton").addEventListener("click", () => {
				cleanUp("root");
				window.scrollTo(0, 0);
				Contact();
			});
}

export default MainPage;
import cleanUp from "./CleanUp.js";
import Contact from "./Contact.js";

function ServicesPage()
{
    const servicesPage = document.getElementById("root");
    servicesPage.innerHTML = `
        		<div id="ServicesSectionHeader">
					<div style="display: flex; align-items: center; justify-content: center; margin-top: -7%;">
						<h1 style="font-family: 'Industry Inc'; color: white;">SERVICES</h1>
					</div>
					<div id="servicesHeaderText" >
						<p style="font-family: Roboto; color: white;">
							Integrated engineering, testing, manufacturing, and repair solutions for aerospace applications.
						</p>
					</div>	
				</div>

				<div id="ServicesOverviewSection">
					<div style="display: flex; align-items: center; justify-content: center; padding: 1%; margin-top: 4%;">
						<h3 style="font-family: 'Industry Inc'; color: black;">
						<h3 style="font-family: 'Industry Inc'; color: black;">
							SERVICES OVERVIEW
						</h3>
					</div>
					<div style="display: flex; align-items: center; justify-content: center;">
						<p id="servicesOverviewText" >
							NDI delivers comprehensive engineering, testing, and manufacturing solutions to support the full lifecycle of aerospace and defense components. From initial design and development through production, quality assurance, and repair services, our integrated approach ensures precision, reliability, and performance at every stage.
						</p>
					</div>
				</div>

				<div id="EngDesignSect" >
					<div id="EngDesText">
						<h2 id="EngDesHeader" >
							ENGINEERING DESIGN & DEVELOPMENT</h2>
						<p style="font-family: Roboto; color: white; display: grid; justify-content: center; width: 80%; justify-self: center; margin-top: 5%;">
							NDI combines over 40 years of design and analysis expertise with advanced CAD and CAE tools to develop innovative, high-performance aerospace and defense components. Our engineering process focuses on precision, functionality, and reliability, ensuring each solution meets the specific requirements of its application. Through a combination of technical experience and modern design capabilities, we deliver solutions that are both efficient and dependable.
						</p>
					</div>
					<div id="EngDesignPhotos"></div>
				</div>

				<div id="ProductDevTestingSec" >
					<div style="display: flex; align-items: center; justify-content: center;">
						<h2 id="ProdDevTestHeader" >
							PRODUCT DEVELOPMENT TESTING
						</h2>
					</div>
					<div style="display: flex; align-items: center; justify-content: center;">
						<p id="ProdDevTestText">
							NDI supports product development through both development and qualification testing, ensuring components perform reliably under real-world conditions. Our testing capabilities are designed to simulate operational environments and validate performance, durability, and safety.
							Capabilities include:
						</p>
					</div>
					<div style="display: grid; align-items: center; justify-content: center;">
						
					<div class="row">
						<div class="col testingCards">
							<div class="card" style="width: 241px; height: auto; margin-right: 3%; background-color:#4A6FA5;"> 
								<div class="card-body" style="display: grid;">
									
									<div style="align-items: center; ">
										<p style="font-family: Roboto; color: white; font-size: 20px; font-weight: bold;">
											HYDRAULIC TESTING</p>
									</div>
									<div>
										<p style="font-family: Roboto; color: white; font-size: 16px; font-weight: 400; margin-top: -9%;">
											Up to 3,000 psi systems for performance validation
										</p>
								</div>
							</div>
							</div>
						</div>
						
						<div class="col testingCards">
							<div class="card" style="width: 241px; height: auto; margin-right: 3%; background-color:#4A6FA5;"> 
								<div class="card-body" style="display: grid;">
									
									<div style="align-items: center; ">
										<p style="font-family: Roboto; color: white; font-size: 20px; font-weight: bold;">
											CONTROL SYSTEMS</p>
									</div>
									<div>
										<p style="font-family: Roboto; color: white; font-size: 16px; font-weight: 400; margin-top: -9%;">
											Closed-loop testing capabilities
										</p>
									</div>
								</div>
							</div>
						</div>
						
						<div class="col testingCards">
							<div class="card" style="width: 241px; height: auto; margin-right: 3%; background-color:#4A6FA5;"> 
								<div class="card-body" style="display: grid;">
									
									<div style="align-items: center; ">
										<p style="font-family: Roboto; color: white; font-size: 20px; font-weight: bold;">
											CUSTOM FIXTURES</p>
									</div>
									<div>
										<p style="font-family: Roboto; color: white; font-size: 16px; font-weight: 400; margin-top: -9%;">
											Designed to simulate real-world configurations
										</p>
								</div>
							</div>
							</div>
						</div>						
					</div>
					<div class="row" style="margin-top: 2%;">
						
						<div class="col testingCards">
							<div class="card" style="width: 241px; height: auto; margin-right: 3%; background-color:#4A6FA5;"> 
								<div class="card-body" style="display: grid;">
									
									<div style="align-items: center; ">
										<p style="font-family: Roboto; color: white; font-size: 20px; font-weight: bold;">
											DURABILITY TESTING</p>
									</div>
									<div>
										<p style="font-family: Roboto; color: white; font-size: 16px; font-weight: 400; margin-top: -9%;">
											Endurance, fatigue, vibration, impulse
										</p>
								</div>
							</div>
							</div>
						</div>
						
						<div class="col testingCards">
							<div class="card" style="width: 241px; height: auto; margin-right: 3%; background-color:#4A6FA5;"> 
								<div class="card-body" style="display: grid;">
									
									<div style="align-items: center; ">
										<p style="font-family: Roboto; color: white; font-size: 20px; font-weight: bold;">
											DYNAMOMETER</p>
									</div>
									<div>
										<p style="font-family: Roboto; color: white; font-size: 16px; font-weight: 400; margin-top: -9%;">
											Performance and load testing
										</p>
								</div>
							</div>
							</div>
						</div>
						
						<div class="col testingCards">
							<div class="card" style="width: 241px; height: auto; margin-right: 3%; background-color:#4A6FA5;"> 
								<div class="card-body" style="display: grid;">
									
									<div style="align-items: center; ">
										<p style="font-family: Roboto; color: white; font-size: 20px; font-weight: bold;">
											SIMULATION</p>
									</div>
									<div>
										<p style="font-family: Roboto; color: white; font-size: 16px; font-weight: 400; margin-top: -9%;">
											Aircraft orientation and geometry testing
										</p>
								</div>
							</div>
							</div>

						</div>
						
					</div>
					</div>
				</div>
				<div id="ProductManufacturingSection">
					<div style="display: flex; align-items: center; justify-content: center;">
						<h2 style="color: white; font-family: 'Industry Inc'; font-weight: 400; margin-top: 5%;">
						<h2 style="color: white; font-family: 'Industry Inc'; font-weight: 400; margin-top: 5%;">
							PRODUCT & MANUFACTURING
						</h2>
					</div>
					<div style="display: grid; align-items: center; justify-content: center;">
						<p id="ProductManufacturingText" >
							NDI utilizes a strategic combination of in-house machining and external manufacturing partners to provide flexibility, scalability, and efficiency in production. This approach allows us to adapt to varying project demands while maintaining strict quality control.
						</p>
						<p id="ProductManufacturingText2" >
							Our operations are supported by a state-of-the-art MRP system that manages scheduling, inventory, and production workflows. By aligning our manufacturing processes with customer needs, we ensure consistent delivery, reliable performance, and the ability to respond to changes in demand.
						</p>
					</div>
				</div>
				<div id="qualityPics">
					<div id="qualityImage" ></div>
					<div id="qualityTextSection">
						<div style="display: flex; align-items: center; justify-content: center; height: 25%;">
							<h2 style="color: white; font-family: Roboto; font-weight: 400; ">
								QUALITY
							</h2>
						</div>
						<div id="qualityTextSection1" >
							<p class="qualityTextSectionClass">
								Quality is foundational to every aspect of NDI’s operations. Our AS9100-compliant quality management system is a proactive, risk-based framework designed to ensure that all products meet rigorous safety, airworthiness, and performance standards.
							</p>
					</div>
					<div id="qualityTextSection2" >
							<p class="qualityTextSectionClass">
								We partner with certified third-party processing providers for specialized services such as heat treatment, coatings, chemical processing, and non-destructive testing. This integrated approach ensures consistency, traceability, and compliance throughout the entire product lifecycle.
							</p>
					</div>
					</div>
				</div>
				<div id="RepairServicesSect">
					<div style="display: flex; align-items: center; justify-content: center;">
						<div id="FAARepairPlaceHolder" style="margin-top: 3%; width: 150px; height: 150px;
						background-image: url('./assets/Seal_of_the_United_States_Federal_Aviation_Administration.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
					</div>
					<div style="display: flex; align-items: center; justify-content: center;">
						<h2 style="color: black; font-family: 'Industry Inc'; font-weight: 400;">
						<h2 style="color: black; font-family: 'Industry Inc'; font-weight: 400;">
							REPAIR SERVICES
						</h2>
					</div>
					<div style="display: flex; align-items: center; justify-content: center;">
						<p id="RepairServicesText">
							Northwest Dynamics, Inc. is an FAA Repair Station (FAA Certificate #4NOR587D), authorized to perform inspection, repair, and overhaul of NDI components in full compliance with current FAA-approved technical data and regulatory requirements.
						</p>
					</div>
				</div>

				<div id="GetInTouchSection2">
					<div style="display: grid; justify-content: center; position: relative;">
					<h2 style="font-family: Roboto; margin-top: 6%; color: black; display: grid; justify-content: center;">
						GET IN TOUCH
					</h2>
					<p style="font-family: Roboto; color: black; padding: 3%;">
						Have a project in mind or need more information? Our team is here to help. 
						Reach out to discuss your needs, request a quote, or learn more about how we can
						 support your next mission.
					</p>
					<button id="ContactButton" style="border-radius: 6px; background-color: #1E3A5F; color: white; width: 94px; height: 44px; justify-self: center;">
						CONTACT</button>
					</div>

				</div>

    `; 

	document.getElementById("ContactButton").addEventListener("click", () => {
		cleanUp("root");
		window.scrollTo(0, 0);
		Contact();
	});
}

export default ServicesPage;
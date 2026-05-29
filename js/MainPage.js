function MainPage()
{
    const MainPageDiv = document.getElementById("root");
    MainPageDiv.innerHTML = 

    `	<div id="IMG_Hero">
		<h3 class="MainHeaderFont">Precision Aerospace Components for High-Performance Systems</h3>
		<p class="subHeadingFont">Delivering reliable, high-quality components and solutions for mission-critical applications.</p>
	</div>
	<div>
	<div id="BACKGROUND_BlueGradient" style="display: grid; align-items: start; justify-content: center;">
		
		
		

	</div>


	<div id="WhatWeDoMenuSection" style="height: 1015px; background-image: linear-gradient(rgb(24, 35, 48), rgb(15, 23, 32, .3) ), url('../assets/BACKGROUND_WhatWeDo.png'); display: grid; position: relative; align-items: center; justify-content: center;" >
		<div id="WhatWeDoSection" style="border-bottom: 1px solid white; position: relative; top: 18%;">
			<h2 class="Header2Font">WHAT WE DO</h2>

			<p class="WhatWeDoFont">
				NDI designs, manufactures, tests, and services high-performance aerospace components
				with a focus on precision, reliability, and long-term performance.
			</p>
			
		</div>

	
		<div class="row">
			<div class="col">
			<div class="card" style="width: 384px; height: 369px; margin-right: 1%; background-color: #182330;"> 
				<div class="card-body" style="display: grid; background-image: linear-gradient( rgb(29, 57, 94, .3), rgba(30, 58, 95,.59 )), url('../assets/ProductsCard.jpg'); background-size: cover; background-position: center;">
					<div style="display: grid; justify-content: center; margin-top: 37%;">
						<h5 class="card-title" style="color: white; font-family: Industry Inc;">PRODUCTS</h5>
					</div>
					<p class="card-text" style="margin-top:15%; color: white !important; font-family: Roboto; ">Hydro-mechanical aerospace components engineered for reliability</p>
					<div style="justify-content: center; align-items: center; display: grid;">
						<a href="#" class="btn btn-primary" style="border: none; background-color: white !important; color: black !important">VIEW PRODUCTS</a>
					</div>
				</div>
			</div>
			</div>
			<div class="col">

			<div class="card" style="width: 384px; height: 369px; margin-right: 1%; background-color: #182330;"> 
				<div class="card-body" style="display: grid; background-image: linear-gradient( rgb(29, 57, 94, .3), rgba(30, 58, 95,.59 )), url('../assets/EngineeringCard.jpg'); background-size: cover; background-position: center;">
					<div style="display: grid; justify-content: center; margin-top: 37%;">
						<h5 class="card-title" style="color: white; font-family: Industry Inc;">ENGINEERING</h5>
					</div>
					<p class="card-text" style="margin-top:15%; color: white !important; font-family: Roboto; ">Design and development solutions backed by decades of experience.</p>
					<div style="justify-content: center; align-items: center; display: grid;">
						<a href="#" class="btn btn-primary" style="border: none; background-color: white !important; color: black !important">EXPLORE SERVICES</a>
					</div>
				</div>
			</div>
			</div>

			<div class="col">

			<div class="card" style="width: 384px; height: 369px; margin-right: 1%; background-color: #182330;"> 
				<div class="card-body" style="display: grid; background-image: linear-gradient( rgb(29, 57, 94, .3), rgba(30, 58, 95,.59 )), url('../assets/TestingCard.jpg'); background-size: cover; background-position: center;">
					<div style="display: grid; justify-content: center; margin-top: 37%;">
						<h5 class="card-title" style="color: white; font-family: Industry Inc;">TESTING</h5>
					</div>
					<p class="card-text" style="margin-top:15%; color: white !important; font-family: Roboto; ">Advanced testing capabilities for performance and validation</p>
					<div style="justify-content: center; align-items: center; display: grid;">
						<a href="#" class="btn btn-primary" style="border: none; background-color: white !important; color: black !important">LEARN MORE</a>
					</div>
				</div>
			</div>
			</div>
		</div>
		<div class="row" style="margin-top: 2%;">
			<div class="col">
				<div class="card" style="width: 384px; height: 369px; margin-right: 1%; background-color: #182330;"> 
					<div class="card-body" style="display: grid; background-image: linear-gradient( rgb(29, 57, 94, .3), rgba(30, 58, 95,.59 )), url('../assets/ManufacturingCard.jpg'); background-size: cover; background-position: center;">
						<div style="display: grid; justify-content: center; margin-top: 37%;">
							<h5 class="card-title" style="color: white; font-family: Industry Inc;">MANUFACTURING</h5>
						</div>
						<p class="card-text" style="margin-top:15%; color: white !important; font-family: Roboto; ">
							Flexible production processing focused on quality and efficiency.
						</p>
						<div style="justify-content: center; align-items: center; display: grid;">
							<a href="#" class="btn btn-primary" style="border: none; background-color: white !important; color: black !important">VIEW CAPABILITIES</a>
						</div>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card" style="width: 384px; height: 369px; margin-right: 1%; background-color: #182330;"> 
					<div class="card-body" style="display: grid; background-image: linear-gradient( rgb(29, 57, 94, .3), rgba(30, 58, 95,.59 )), url('../assets/RepairCard.jpg'); background-size: cover; background-position: center;">
						<div style="display: grid; justify-content: center; margin-top: 37%;">
							<h5 class="card-title" style="color: white; font-family: Industry Inc;">REPAIR SERVICES</h5>
						</div>
						<p class="card-text" style="margin-top:15%; color: white !important; font-family: Roboto; ">
							FAA-certified inspection, repair, and overhaul support.	
						</p>
						<div style="justify-content: center; align-items: center; display: grid;">
							<a href="#" class="btn btn-primary" style="border: none; background-color: white !important; color: black !important">CONTACT US</a>
						</div>
					</div>
				</div>
			</div>
		
			<div class="col"></div>	
		</div>
		</div>

		<div id="certificationSection" style="height: 468px; width: 100%; display: flex; background-image: url('../assets/CertificationsSection.jpg'); background-size: cover; background-position: center;">
			<div id="CertWell1" style="height: 100%; width: 50%;"></div>
			<div id="CertWell2" style="height: 100%; width: 50%;">

				<div class="card" style="width: 70%; height: 87%; top: 7%; background-image: linear-gradient(to right,rgba(73, 111, 192, 0.5), rgba(17, 34, 101, 0.3)), url('../assets/BACKGROUND_CertificationsMat.png'); background-size: cover; background-position: center;  margin-left: 15%; border: none;">
					<div class="card-body" >
						<div style="display: grid; justify-content: center; margin-top: 5%;">
							<h3 class="card-title" style="font-family: Industry Inc; color: white;">CERTIFICATIONS</h3>
						</div>
							
						<p class="card-text" style="font-family: Roboto; color: white;">
							NDI operates under rigorous industry standards to ensure the highest levels of safety, reliability, and quality. These certifications reflect a commitment to strict regulatory compliance, precision manufacturing, and continuous improvement—ensuring every component meets the demanding requirements of aerospace applications.
						</p>
						<div style="display: flex;">
							<div style="width: 50%; height: 50%;"></div>
							
							<div style="width: 50%; height: 50%;"></div>
						</div>
					</div>
				</div>
			</div>


		</div>

		<div id="testimonialsSection" style="height: 396px; width: 100%; display: flex; background-image: url('../assets/BACKGROUND_Testimonials.png'); background-size: cover; background-position: center;">
			<div id="TestWell1" style="height: 100%; width: 50%;">
				<h2 style="font-family: Roboto; color: #182330; margin-top: 5%; margin-left: 10%;">TESTIMONIALS</h2>
				<p style="font-family: Roboto; color: #182330; margin-top: 5%; margin-left: 10%;">
					NDI is committed to delivering reliable solutions, responsive support, and consistent quality. Our long-standing relationships are built on precision, performance, and customer trust. We value strong communication, dependable service, and lasting relationships with every customer we support. Our team is dedicated to delivering solutions with precision and care.

				</p>
			</div>
			<div id="TestWell2" style="height: 100%; width: 50%;">

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
			<div id="WhoWeAreSection" style="height: 499px; width: 100%; display: flex;">
				<div id="WhoWeArePhoto" style="width: 50%; height: 100%;"></div>
				<div id="WhoWeAreText" style="width: 50%; height: 100%; background-color: #0F1720;">
					<div style="margin-top: 5%;">
						<h2 style="font-family: Roboto; color: white; float: right; margin-right: 5%;">
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
			<div id="GetInTouchSection" style="width: 100%; height: 257px; background-image: url('../assets/BACKGROUND_GetInTouch.png'); background-size: cover; background-position: center;">
				<div style="display: grid; justify-content: center; position: relative;">
				<h2 style="font-family: Industry Inc; color: black; display: grid; justify-content: center; margin-top: 5%;">
					GET IN TOUCH
				</h2>
				<p style="font-family: Roboto; color: black; width: 65%; justify-self: center;">
					Have a project in mind or need more information? Our team is here to help. Reach out to discuss your needs, request a quote, or learn more about how we can support your next mission.
				</p>
				<button style="border-radius: 6px; background-color: #1E3A5F; color: white; width: 94px; height: 44px; justify-self: center;">
						CONTACT</button>
				</div>
			</div>`

            return MainPageDiv;
}

export default MainPage;
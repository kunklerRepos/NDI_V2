function AboutUsSection()
{
    const aboutUsSection = document.getElementById("root");
    aboutUsSection.innerHTML = `
    <div id="AboutUsHeaderSec">
				<div id="AboutUsTextSection" class="a">
					<div id="AboutUs2Header">
						<h2 style="color: white; font-family: 'Industry Inc'; font-weight: 400;">
							ABOUT US
						</h2>

					</div>
					<div id="AboutUs2Text" >
						<p style="color: white; font-family: Roboto; width: 80%; justify-self: center;">
							NDI is a precision aerospace manufacturer specializing in the design, development, and production of hydro-mechanical components and control systems. Our work supports critical aircraft functions, including actuation, fluid regulation, and braking systems, where performance and reliability are essential.
						</p>
						
					</div>

					<div id="AboutUs2Text2" style="display: flex; align-items: center; justify-content: center;">
						<p style="color: white; font-family: Roboto; width: 80%; justify-self: center;">
							With a balanced approach that combines in-house machining and trusted external partnerships, NDI maintains both quality control and production flexibility. This model allows us to efficiently scale operations while meeting the evolving demands of the aerospace industry.
						</p>
					</div>

					<div id="AboutUs2Text3" style="display: flex; align-items: center; justify-content: center;">
						<p style="color: white; font-family: Roboto; width: 80%; justify-self: center;">
							Every component we produce is built with a focus on durability, accuracy, and consistency. From initial concept through final manufacturing, our team is committed to delivering solutions that perform reliably in demanding environments.
						</p>
					</div>
				</div>
				<div id="AboutUsPhoto2" class="b" ></div>
			</div>
			<div id="MissionValuesSection" >
				<div style="display: flex; align-items: center; justify-content: center;">
					<h2 style="color: black; font-family: Roboto; font-weight: 400;">
						MISSION AND VALUES
					</h2>
				</div>
				<div id="MissionValuesBlueBox" style="">
					<p id="MissionValuesBlueBoxText" style="">
						Our mission is to deliver high-quality aerospace components that meet or exceed customer expectations through precision manufacturing, reliable performance, and consistent on-time delivery.				
					</p>
				</div>

				<div style="display: flex; align-items: center; width: 80%; justify-self: center; justify-content: center; border-radius: 5px; 
			 	margin-top: 1%;">
				<div class="row">
					<div class="col MissionCardCols">
						<div class="card" style="width: 226px; height: 337px;">
							<div class="card-body">
								<div style="display: flex; justify-content: center; align-items: center; ">
									<div style="border-radius: 10%; height: 89.51px; width: 89.5px; 
									background-image: url('./assets/ICON_Improvement.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
								</div>
								<h5 class="card-title" style="display: grid; font-weight: 400; font-size: 22px; color: #3B82F6; justify-content: center; align-content: center;">IMPROVEMENT</h5>
								<p class="card-text" style="font-family: Roboto; color: black; font-size: 16px; font-weight: 400; display: grid; justify-content: center; align-content: center;">
									We maintain a company-wide commitment to refining our processes, improving efficiency, and upholding the highest standards of quality.
								</p>
								
							</div>
						</div>
					</div>
					<div class="col MissionCardCols">
						<div class="card" style="width: 226px; height: 337px;">
							<div class="card-body">
								<div style="display: flex; justify-content: center; align-items: center; ">
									<div style="border-radius: 10%; height: 89.51px; width: 89.5px; 
									background-image: url('./assets/ICON_Reliability.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
								</div>
								<h5 class="card-title" style="display: grid; font-weight: 400; font-size: 22px; color: #3B82F6; justify-content: center; align-content: center;">RELIABILITY</h5>
								<p class="card-text" style="font-family: Roboto; color: black; font-size: 16px; font-weight: 400; display: grid; justify-content: center; align-content: center;">
									Our components are built to perform in demanding environments, with a focus on durability, accuracy, and long-term functionality.
								</p>
								
							</div>
						</div>
					</div>
					<div class="col MissionCardCols">
						<div class="card" style="width: 226px; height: 337px;">
							<div class="card-body">
								<div style="display: flex; justify-content: center; align-items: center; ">
									<div style="border-radius: 10%; height: 89.51px; width: 89.5px; 
									background-image: url('./assets/ICON_Quality.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
								</div>
								<h5 class="card-title" style="display: grid; font-weight: 400; font-size: 22px; color: #3B82F6; justify-content: center; align-content: center;">QUALITY FIRST</h5>
								<p class="card-text" style="font-family: Roboto; color: black; font-size: 16px; font-weight: 400; display: grid; justify-content: center; align-content: center;">
									We prioritize precision and consistency at every stage of design and manufacturing to ensure dependable performance in critical aerospace applications.
								</p>
								
							</div>
						</div>
					</div>
					<div class="col MissionCardCols">
						<div class="card" style="width: 226px; height: 337px;">
							<div class="card-body">
								<div style="display: flex; justify-content: center; align-items: center; ">
									<div style="border-radius: 10%; height: 89.51px; width: 89.5px; 
									background-image: url('./assets/ICON_Accountability.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
								</div>
								<h5 class="card-title" style="display: grid; font-weight: 400; font-size: 22px; color: #3B82F6; justify-content: center; align-content: center;">ACCOUNTABILITY</h5>
								<p class="card-text" style="font-family: Roboto; color: black; font-size: 16px; font-weight: 400; display: grid; justify-content: center; align-content: center;">
									Every step of our process is guided by responsibility and attention to detail, ensuring that our work meets strict industry and customer requirements.
								</p>
								
							</div>
						</div>
					</div>
					<div class="col MissionCardCols">
						<div class="card" style="width: 226px; height: 337px;">
							<div class="card-body">
								<div style="display: flex; justify-content: center; align-items: center; ">
									<div style="border-radius: 10%; height: 89.51px; width: 89.5px; 
									background-image: url('./assets/ICON_Adaptability.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
								</div>
								<h5 class="card-title" style="display: grid; font-weight: 400; font-size: 22px; color: #3B82F6; justify-content: center; align-content: center;">ADAPTABILITY</h5>
								<p class="card-text" style="font-family: Roboto; color: black; font-size: 16px; font-weight: 400; display: grid; justify-content: center; align-content: center;">
									By combining in-house capabilities with trusted partners, we remain flexible and responsive to changing project needs and industry demands.
								</p>
								
							</div>
						</div>
					</div>
					
				</div>
				</div>
			</div>

			<div id="TIMELINESection" style="width: 100%; height: auto">
				<div style="display: flex; align-items: center; justify-content: center;">
					<h2 style="color: black; font-family: Roboto; font-weight: 400; margin-top: 1%;">
						TIMELINE
					</h2>
				</div>
				<div id="TimelineImage" ></div>
				
			</div>

			<div id="CERTIFICATIONSSection2">
				<div style="display: flex; align-items: center; justify-content: center;">
					<h2 style="color: white; font-family: 'Industry Inc'; font-weight: 400; margin-top: 2%;">
						CERTIFICATIONS
					</h2>
				</div>
				
				<div id="AS9100DCertSec">
					<div id="AS9100DCertSec2">
						<div id="AS9100DLogo"></div>
					</div>
					<div id="AS9100DTextSection">
						<p id="AS9100DText">
							NDI is certified to AS9100D Certification, a globally recognized standard for quality management systems in the aerospace industry. This certification reflects our commitment to strict process control, risk management, and continuous improvement across all operations. By adhering to AS9100D requirements, we ensure that every product is manufactured with precision, consistency, and full traceability, meeting the high expectations of aerospace applications.
						</p>
					</div>
				</div>

				<div id="FAACertSec">
					<div id="FAALogoSection">
						<div id="FAALogo"></div>
						<p id="FAACertTextAboutUs">
							Federal Aviation Administration
						</p>
					</div>
					<div id="FAATextSection">
						<p id="FAAText" >
							As an FAA Certified Repair Station, NDI is authorized to perform specialized repair and maintenance services in compliance with federal aviation regulations. This designation demonstrates our ability to meet rigorous safety, documentation, and operational standards required by the industry. Through this certification, we provide reliable service and support that ensures the continued performance and airworthiness of critical aerospace components.
						</p>
					</div>
				</div>

			</div>
			<div id="MeetTheTeamSection" style="height: auto; width: 100%;">
				<div style="display: flex; align-items: center; justify-content: center;">
					<h2 style="color: black; font-family: 'Industry Inc'; font-weight: 400; margin-top: 1%;">
					<h2 style="color: #4A6FA5; font-family: 'Industry Inc'; font-weight: bold; margin-top: 1%;">
						MEET THE TEAM
					</h2>
				</div>
				<div style="display: flex; justify-content: center;">
					<div class="row MeetTheTeamRow" style="width: 80%;">
						<div class="col MeetTheTeamCard">
							<div class="card" style="width: 253px; height: 312px; border: none;">
							<div class="card-body">
								<div style="display: flex; justify-content: center; align-items: center; ">
									<div src="./assets/Scott.jpg" alt="scottKunklerPic" style="border-radius: 50%;
									background-image: url('./assets/Scott.jpg'); background-size: cover; background-repeat: no-repeat; background-position: center; width: 253px; height: 254px;"></div>
								</div>
								<h5 class="card-title" style="display: grid; font-weight: 700; font-size: 24px; color: black; justify-content: center; align-content: center;">Scott Kunkler</h5>
								<p class="card-text" style="font-family: Roboto; color: black; font-size: 16px; font-weight: 300; display: grid; justify-content: center; align-content: center;">
									President
								</p>
								
							</div>
						</div>

						</div>
						<div class="col MeetTheTeamCard">
							<div class="card" style="width: 253px; height: 312px; border: none;">
								<div class="card-body">
									<div style="display: flex; justify-content: center; align-items: center; ">
										<div src="./assets/Scott.jpg" alt="scottKunklerPic" style="border-radius: 50%;
									background-image: url('./assets/Dale.jpg'); background-size: cover; background-repeat: no-repeat; background-position: center; width: 253px; height: 254px;"></div>
									</div>
									<h5 class="card-title" style="display: grid; font-weight: 700; font-size: 24px; color: black; justify-content: center; align-content: center;">Dale Witt</h5>
									<p class="card-text" style="font-family: Roboto; color: black; font-size: 16px; font-weight: 300; display: grid; justify-content: center; align-content: center;">
										Engineering
									</p>
									
								</div>
							</div>

						</div>
						<div class="col MeetTheTeamCard">
							<div class="card" style="width: 253px; height: 312px; border: none;">
								<div class="card-body">
									<div style="display: flex; justify-content: center; align-items: center; ">
										<div src="./assets/Scott.jpg" alt="scottKunklerPic" style="border-radius: 50%;
									background-image: url('./assets/Soria.jpg'); background-size: cover; background-repeat: no-repeat; background-position: center; width: 253px; height: 254px;"></div>
									</div>
									<h5 class="card-title" style="display: grid; font-weight: 700; font-size: 24px; color: black; justify-content: center; align-content: center;">Soria Schwartz</h5>
									<p class="card-text" style="font-family: Roboto; color: black; font-size: 16px; font-weight: 300; display: grid; justify-content: center; align-content: center;">
										Production
									</p>
									
								</div>
							</div>
						</div>
						<div class="col MeetTheTeamCard">
							<div class="card" style="width: 253px; height: 312px; border: none;">
								<div class="card-body">
									<div style="display: flex; justify-content: center; align-items: center; ">
										<div src="./assets/Scott.jpg" alt="scottKunklerPic" style="border-radius: 50%;
									background-image: url('./assets/Mike.jpg'); background-size: cover; background-repeat: no-repeat; background-position: center; width: 253px; height: 254px;"></div>
									</div>
									<h5 class="card-title" style="display: grid; font-weight: 700; font-size: 24px; color: black; justify-content: center; align-content: center;">Mike McHan</h5>
									<p class="card-text" style="font-family: Roboto; color: black; font-size: 16px; font-weight: 300; display: grid; justify-content: center; align-content: center;">
										Quality
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    `;
    return AboutUsSection;
}

export default AboutUsSection;
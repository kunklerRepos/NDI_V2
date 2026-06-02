function ContactPage()
{
    const contactSection = document.getElementById("root");

    contactSection.innerHTML = `<div id="GetInTouchSection3">
					<div style="display: flex; justify-content: center; align-items:center;">
						<h2 style="font-family: Roboto; color: white; display: grid; justify-content: center; margin-top: 3%;">
							GET IN TOUCH
						</h2>	
					</div>
					<div style="display: flex; justify-content: center; align-items:center;">
						<p id="HaveAQuestionText">
							Have a question or need more information about our capabilities? Our team is here to help. Whether you’re requesting a quote, technical details, or documentation, reach out and we’ll get back to you promptly.
						</p>

					</div>
					<div id="contactSection">
						<div id="contactSection2" >
							<div id="contactSection2Flex1">
								<div class="card OtherCardDetails">
									<div class="card-body">
										<div style="display: flex; justify-content: center; align-items: center; ">
											<div style="border-radius: 5%; width: 64px; height: 64px;
												background-image: url('./assets/ICON_Email.png'); background-size: cover; background-position: center; background-repeat: no-repeat;
											"></div>
										</div>
										<h5 class="card-title" style="display: grid; font-weight: 700; font-size: 20px; color: black; justify-content: center; align-content: center;">Send Us An Email</h5>
										<p class="card-text" style="font-family: Roboto; color: black; font-size: 16px; font-weight: 500; display: grid; justify-content: center; align-content: center;">
											<a href="mailto:inquiries@northwestdynamicsinc.com">inquiries@northwestdynamicsinc.com</a>
										</p>
									</div>
								</div>
								<div class="card smallCardDetails">
									<div class="card-body">
										<div style="display: flex; justify-content: center; align-items: center; ">
											<div  style="border-radius: 5%; width: 64px; height: 64px;
												background-image: url('./assets/ICON_Phone.png'); background-size: cover; background-position: center; background-repeat: no-repeat;
											"></div>
										</div>
										<h5 class="card-title" style="display: grid; font-weight: 700; font-size: 20px; color: black; justify-content: center; align-content: center;">Call us directly</h5>
										<p class="card-text" style="font-family: Roboto; color: black; font-size: 16px; font-weight: 500; display: grid; justify-content: center; align-content: center;">
											<a href="tel:+13602533656">(360) 253-3656</a>
										</p>
									</div>
								</div>
							</div>
							<div id="contactsection2flex2">
								<div class="card OtherCardDetails">
									<div class="card-body">
										<div style="display: flex; justify-content: center; align-items: center; ">
											<div style="border-radius: 5%; width: 64px; height: 64px;
												background-image: url('./assets/ICON_Location.png'); background-size: cover; background-position: center; background-repeat: no-repeat;
											"></div>
										</div>
										<h5 class="card-title" style="display: grid; font-weight: 700; font-size: 20px; color: black; justify-content: center; align-content: center;">Visit our location</h5>
										<p class="card-text" style="font-family: Roboto; color: black; font-size: 16px; font-weight: 500; display: grid; justify-content: center; align-content: center;">
											<a href="https://maps.google.com/?q=6709+NE+131st+Ave,+Vancouver,+WA+98682" target="_blank">6709 NE 131st Ave, Vancouver, WA 98682</a>
										</p>
									</div>
								</div>
								<div class="card smallCardDetails" >
									<div class="card-body">
										<div style="display: flex; justify-content: center; align-items: center; ">
											<div style="border-radius: 5%; width: 64px; height: 64px;
												background-image: url('./assets/ICON_Clock.png'); background-size: cover; background-position: center; background-repeat: no-repeat;
											"></div>
										</div>
										<h5 class="card-title" style="display: grid; font-weight: 700; font-size: 20px; color: black; justify-content: center; align-content: center;">Working Hours</h5>
										<p class="card-text" style="font-family: Roboto; color: black; font-size: 16px; font-weight: 500; display: grid; justify-content: center; align-content: center;">
											7:30 AM - 4:00 PM
										</p>
									</div>
								</div>
								
							</div>
						</div>
						<div id="contactFormSection" >
						<section class="formcarry-container">
						 <form id="contactForm" action="https://formcarry.com/s/CVOTjwYv8iC" method="POST" enctype="multipart/form-data">
						
									
									<div class="mb-3 formcarry-block">
									 
										<input name="name" type="text" class="form-control" id="fc-generated-1-name" placeholder="Full Name">
									</div>
									
									<div class="mb-3 formcarry-block">
									
										<input type="email" name="email" class="form-control" id="fc-generated-1-email" placeholder="Email">
									</div>
									<div class="mb-3 formcarry-block">
										 
										<textarea name="message" class="form-control" placeholder="Message" id="fc-generated-1-message" rows="5"></textarea>
									</div>
									<div  class="formcarry-block" style="display: flex; justify-content: center; align-items: center;">
									<button id="submitFormBtn" type="submit" style="border-radius: 6px; background-color: #1E3A5F; color: white; width: 94px; height: 44px;">
										SEND</button>
										</div>

							</form>
							</section>

						</div>

					</div>
					<div id="MaintenanceAndOverhaulSection" style="display: grid; justify-content: center; align-items: center; width: 100%; height: 370px;">
						<div style="display: flex; justify-content: center; align-items: center; margin-top: -5%;">
							<h2 style="color: white; font-family: Roboto; font-weight: 400;">
								MAINTENANCE AND OVERHAUL
							</h2>
						</div>
							<div style="display: flex; justify-content: center; align-items: center;">
								<p id="manualTextDescription">
									NDI provides maintenance and overhaul manuals to support the proper servicing for continued airworthiness of our components. These documents include detailed procedures, specifications, and guidelines required for inspection, repair, and maintenance. To request access to these manuals, please fill out the requested information and select which maintenance and overhaul manuals you would like.
								</p>
							</div>
							
					</div>
					<div id="contactManualsSection" >
								<div id="manualsContacts1">
									<input type="text" class="form-control formManualInput" id="MaintName" style="margin-right: 5%;" placeholder="Full Name">
									
									<input type="text" class="form-control" id="MaintJobTitle" placeholder="Job Title">
								</div>
								<div id="manualsContacts2">
									<input type="text" class="form-control formManualInput" id="MaintCompany" style="margin-right: 5%;" placeholder="Company Name">
									
									<input type="email" class="form-control" id="MaintEmail" placeholder="Email">
								</div>

								<table class="table" style="margin-top: 2%;">
  									<thead>
										<tr>
										<th scope="col" style="text-align: left; border-bottom: 1px solid white;" ></th>
										<th scope="col" style="text-align: center; font-family: Roboto; font-size: 20px; color: white;">Bell Aircraft</th>
										<th scope="col" style="width: 50%; text-align: center; font-family: Roboto; font-size: 20px; color: white;">NDI Rotor Brake Maintenance and Overhaul Manual</th>
										<th scope="col" style="text-align: center; font-family: Roboto; font-size: 20px; color: white;">Revision</th>
										</tr>
									</thead>
									<tbody id="tableBody">
										<tr>
											<td></td>
											<td style="font-family: Roboto; font-size: 20px; color: white; text-align: center;">
												<input type="checkbox" id="manual1" name="manual1">
												<label for="manual1">206-L4</label>
											</td>
											<td style="font-family: Roboto; font-size: 20px; color: white; text-align: center;">
												<label>B0223-OM</label>

											</td>
											<td style="font-family: Roboto; font-size: 20px; color: white; text-align: center;">
												<label>J</label>
											</td>
									</tr>
									<tr>
											<td></td>
											<td style="font-family: Roboto; font-size: 20px; color: white; text-align: center;">
												<input type="checkbox" id="manual2" name="manual2">
												<label for="manual2">407_2</label>
											</td>
											<td style="font-family: Roboto; font-size: 20px; color: white; text-align: center;">
												<label>B0223-OM4</label>

											</td>
											<td style="font-family: Roboto; font-size: 20px; color: white; text-align: center;">
												<label>F</label>
											</td>
									</tr>

									<tr>
											<td></td>
											<td style="font-family: Roboto; font-size: 20px; color: white; text-align: center;">
												<input type="checkbox" id="manual3" name="manual3">
												<label for="manual3">429</label>
											</td>
											<td style="font-family: Roboto; font-size: 20px; color: white; text-align: center;">
												<label>B0238-OM</label>

											</td>
											<td style="font-family: Roboto; font-size: 20px; color: white; text-align: center;">
												<label>E</label>
											</td>
									</tr>

									<tr>
											<td></td>
											<td style="font-family: Roboto; font-size: 20px; color: white; text-align: center;">
												<input type="checkbox" id="manual4" name="manual4">
												<label for="manual4">407</label>
											</td>
											<td style="font-family: Roboto; font-size: 20px; color: white; text-align: center;">
												<label>B0244-OM</label>

											</td>
											<td style="font-family: Roboto; font-size: 20px; color: white; text-align: center;">
												<label>C</label>
											</td>
									</tr>
										<tr>
											<td></td>
											<td style="font-family: Roboto; font-size: 20px; color: white; text-align: center;">
												<input type="checkbox" id="manual5" name="manual5">
												<label for="manual5">525</label>
											</td>
											<td style="font-family: Roboto; font-size: 20px; color: white; text-align: center;">
												<label>B0247-OM</label>

											</td>
											<td style="font-family: Roboto; font-size: 20px; color: white; text-align: center;">
												<label>A</label>
											</td>
									</tr>
									<tr>
											<td></td>
											<td style="font-family: Roboto; font-size: 20px; color: white; text-align: center;">
												<input type="checkbox" id="manual6" name="manual5">
												<label for="manual5">505</label>
											</td>
											<td style="font-family: Roboto; font-size: 20px; color: white; text-align: center;">
												<label>B0249-OM</label>

											</td>
											<td style="font-family: Roboto; font-size: 20px; color: white; text-align: center;">
												<label>E</label>
											</td>
									</tr>
									</tbody>
  								</table>
								<div style="display: flex; justify-content: center; align-items: center;">
									<button id="MainManualSubmission" style="border-radius: 6px; background-color: #1E3A5F; color: white; width: 94px; height: 44px;">
										SEND</button>
										</div>
							</div>
				</div>`;

			const MaintManualSubmissionBtn = document.getElementById("MainManualSubmission");

			const manualObj = {
				"manual1": "206-L4 B0223-OM J",
				"manual2": "407_2 B0223-OM4 F",
				"manual3": "429 B0238-OM E",
				"manual4": "407 B0244-OM C",
				"manual5": "525 B0247-OM A",
				"manual6": "505 B0249-OM E"

			}


			MaintManualSubmissionBtn.onclick = () => {
				let maintName = document.getElementById("MaintName");
				let maintEmail = document.getElementById("MaintEmail");
				let maintJobTitle = document.getElementById("MaintJobTitle");
				let maintCompany = document.getElementById("MaintCompany");
				
				let formEmailName = document.getElementById("fc-generated-1-email");
				let formNameInput = document.getElementById("fc-generated-1-name");
				let formMessageInput = document.getElementById("fc-generated-1-message");


				let manualsStringArr = [];

				Object.keys(manualObj).forEach(key => {
					let checkBox = document.getElementById(key);
					if(checkBox.checked)
					{	
						manualsStringArr.push(manualObj[key]);
					}
				})



				console.log(maintName.value, maintEmail.value, maintJobTitle.value,  maintCompany.value, manualsStringArr);

				formEmailName.value = maintEmail.value;
				formNameInput.value = maintName.value;
				formMessageInput.value = `Hello,
				My name is ${maintName.value} and I work as a ${maintJobTitle.value} for ${maintCompany.value}.
				I am requesting access to the following manuals: ${manualsStringArr.join(" ")}.
					
				Thanks,
				${maintName.value}`;

				let submitBtn = document.getElementById("submitFormBtn");
				submitBtn.click();
			}



				
}

export default ContactPage;
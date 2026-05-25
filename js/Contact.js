function ContactPage()
{
    const contactSection = document.getElementById("root");

    contactSection.innerHTML = `<div id="GetInTouchSection" style="width: 100%; height: 1402px; background-image: linear-gradient(#26374A, #17222F)">
					<div style="display: flex; justify-content: center; align-items:center;">
						<h2 style="font-family: Roboto; color: white; display: grid; justify-content: center; margin-top: 3%;">
							GET IN TOUCH
						</h2>	
					</div>
					<div style="display: flex; justify-content: center; align-items:center;">
						<p style="font-family: Roboto; color: white; display: grid; justify-content: center; width: 50%; justify-self: center;">
							Have a question or need more information about our capabilities? Our team is here to help. Whether you’re requesting a quote, technical details, or documentation, reach out and we’ll get back to you promptly.
						</p>

					</div>
					<div id="contactSection" style="display: flex; justify-self: center; width: 80%; height: 406px; border-bottom: 1px dashed white">
						<div style="width: 50%; height: 100%;">
							<div style="display: flex; width: 100%;">
								<div class="card" style="width: 323px; height: 173px;">
									<div class="card-body">
										<div style="display: flex; justify-content: center; align-items: center; ">
											<img alt="SendEmailIcon" style="border-radius: 5%; width: 64px; height: 64px;"/>
										</div>
										<h5 class="card-title" style="display: grid; font-weight: 700; font-size: 20px; color: black; justify-content: center; align-content: center;">Send Us An Email</h5>
										<p class="card-text" style="font-family: Roboto; color: black; font-size: 16px; font-weight: 500; display: grid; justify-content: center; align-content: center;">
											<a href="mailto:inquiries@northwestdynamicsinc.com">inquiries@northwestdynamicsinc.com</a>
										</p>
									</div>
								</div>
								<div class="card" style="width: 216px; height: 173px; margin-left: 3%;">
									<div class="card-body">
										<div style="display: flex; justify-content: center; align-items: center; ">
											<img alt="CallPhoneIcon" style="border-radius: 5%; width: 64px; height: 64px;"/>
										</div>
										<h5 class="card-title" style="display: grid; font-weight: 700; font-size: 20px; color: black; justify-content: center; align-content: center;">Call us directly</h5>
										<p class="card-text" style="font-family: Roboto; color: black; font-size: 16px; font-weight: 500; display: grid; justify-content: center; align-content: center;">
											<a href="tel:+13602533656">(360) 253-3656</a>
										</p>
									</div>
								</div>
							</div>
							<div style="display: flex; width: 100%; margin-top: 3%;">
								<div class="card" style="width: 323px; height: 173px;">
									<div class="card-body">
										<div style="display: flex; justify-content: center; align-items: center; ">
											<img alt="MapPinDropLocation" style="border-radius: 5%; width: 64px; height: 64px;"/>
										</div>
										<h5 class="card-title" style="display: grid; font-weight: 700; font-size: 20px; color: black; justify-content: center; align-content: center;">Visit our location</h5>
										<p class="card-text" style="font-family: Roboto; color: black; font-size: 16px; font-weight: 500; display: grid; justify-content: center; align-content: center;">
											<a href="https://maps.google.com/?q=6709+NE+131st+Ave,+Vancouver,+WA+98682" target="_blank">6709 NE 131st Ave, Vancouver, WA 98682</a>
										</p>
									</div>
								</div>
								<div class="card" style="width: 216px; height: 173px; margin-left: 3%;">
									<div class="card-body">
										<div style="display: flex; justify-content: center; align-items: center; ">
											<img alt="ClockIcon" style="border-radius: 5%; width: 64px; height: 64px;"/>
										</div>
										<h5 class="card-title" style="display: grid; font-weight: 700; font-size: 20px; color: black; justify-content: center; align-content: center;">Working Hours</h5>
										<p class="card-text" style="font-family: Roboto; color: black; font-size: 16px; font-weight: 500; display: grid; justify-content: center; align-content: center;">
											7:30 AM - 4:00 PM
										</p>
									</div>
								</div>
								
							</div>
						</div>
						<div style="width: 50%; height: 100%;">
							<div style="height: 370px; width: 568px; border: 1px solid white; border-radius: 5px; padding: 5%;">
									
									<div class="mb-3">
										<input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name">
									</div>
									
									<div class="mb-3">
										<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email">
									</div>
									<div class="mb-3">
									
										<textarea class="form-control" placeholder="Message" id="exampleFormControlTextarea1" rows="5"></textarea>
									</div>
									<div style="display: flex; justify-content: center; align-items: center;">
									<button style="border-radius: 6px; background-color: #1E3A5F; color: white; width: 94px; height: 44px;">
										SEND</button>
										</div>

							</div>

						</div>

					</div>
					<div id="MaintenanceAndOverhaulSection" style="display: grid; justify-content: center; align-items: center; width: 100%; height: 370px;">
						<div style="display: flex; justify-content: center; align-items: center; margin-top: -5%;">
							<h2 style="color: white; font-family: Roboto; font-weight: 400;">
								MAINTENANCE AND OVERHAUL
							</h2>
						</div>
							<div style="display: flex; justify-content: center; align-items: center;">
								<p style="color: white; font-family: Roboto; width: 80%; justify-self: center; margin-top: -15%; padding: 2%;">
									NDI provides maintenance and overhaul manuals to support the proper servicing for continued airworthiness of our components. These documents include detailed procedures, specifications, and guidelines required for inspection, repair, and maintenance. To request access to these manuals, please fill out the requested information and select which maintenance and overhaul manuals you would like.
								</p>
							</div>
							
					</div>
					<div id="contactSection" style="width: 80%; display: grid; justify-self: center; margin-top: -12%;">
								<div style="display: flex; justify-content: center; align-items: center; margin-top: 3%;">
									<input type="text" class="form-control" id="exampleFormControlInput1" style="margin-right: 5%;" placeholder="Full Name">
									
									<input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Job Title">
								</div>
								<div style="display: flex; justify-content: center; align-items: center; margin-top: 3%;">
									<input type="text" class="form-control" id="exampleFormControlInput1" style="margin-right: 5%;" placeholder="Company Name">
									
									<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email">
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
												<input type="checkbox" id="manual5" name="manual5">
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
									<button style="border-radius: 6px; background-color: #1E3A5F; color: white; width: 94px; height: 44px;">
										SEND</button>
										</div>
							</div>
				</div>`;
    return contactSection;
}

export default ContactPage;
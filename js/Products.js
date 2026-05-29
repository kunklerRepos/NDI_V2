function Products() {
    let ProductsLink = document.getElementById("root");
    ProductsLink.innerHTML = `
        <div id="ProductsHeader" style="height: 396px; width: 100%; background-color: #0F1720; 
				display: grid; justify-content: center; background-image: linear-gradient(rgba(15, 23, 32, .8), rgba(40, 58, 77, .5)), url('../assets/PRODUCTS_HERO.jpg'); background-size: cover; background-repeat: no-repeat; background-position: center;">
					<h1 style="margin-top: 20%; font-family: 'Industry Inc'; color: white; display: grid; justify-content: center;">PRODUCTS</h1>
					<div style="width: 65%; justify-content: center; justify-self: center; position: relative; top: -36%;">
						<p style="font-family: Roboto; color: white;">
							Precision hydro-mechanical components designed for reliability, performance, and compliance in aerospace applications.
						</p>
					</div>
				</div>
				<div id="ProductsOverviewSect" style="width: 100%; height: 213px; background-image: url('../assets/BACKGROUND_ProductsSummary.png'); background-size: cover; background-repeat: no-repeat; background-position: center;">
					<div style=" display: flex; justify-content: center; align-items: center; padding: 1%;">
						<h3 style="font-family: 'Industry Inc'; color: black; margin-top: 1%;">PRODUCTS OVERVIEW</h3></div>
					<div style="display: flex; justify-content: center; align-items: center; width: 50%; justify-self: center;">
						<p style="font-family: Roboto; color: black;">
						NDI designs and manufactures precision hydro-mechanical components that support critical aerospace systems. From actuation and fluid control to braking components, our products are built for reliability, performance, and compliance with industry standards. This page provides an overview of our core product categories and capabilities.
					</p></div>
				</div>

				<div id="OurProductsSection" style="width: 100%; height: 1357px; padding: 1%; background-image: linear-gradient(rgba(42, 61, 82, .5), rgba(16, 24, 33, .5)), url('../assets/BACKGROUND_OurProducts.png'); background-size: cover; background-repeat: no-repeat; background-position: center;
				display: grid; position: relative; align-items: center; justify-content: center;">
					<div class="row" >
						<div class="col">
							<div class="card" style="width: 385px; height: 394px; margin-right: 1%; background-color:white;"> 
								<div class="card-body" style="display: grid;">
									<div style="width: 352.08px; height: 327px; background-image: url('../assets/Actuators.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
									<div style="justify-content: center; align-items: center; display: grid;">
										<p style="font-family: Roboto; color: black; font-size: 24px; font-weight: 400;">ACTUATORS</p>
									</div>
								</div>
							</div>

						</div>
						
						<div class="col">
							<div class="card" style="width: 385px; height: 394px; margin-right: 1%; background-color:white;"> 
								<div class="card-body" style="display: grid;">
									<div style="width: 352.08px; height: 327px; background-image: url('../assets/BrakeCaliperAssemblies.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
									<div style="justify-content: center; align-items: center; display: grid;">
										<p style="font-family: Roboto; color: black; font-size: 24px; font-weight: 400;">
											BRAKE CALIPER ASSEMBLIES</p>
									</div>
								</div>
							</div>
						</div>
						
						<div class="col">
							<div class="card" style="width: 385px; height: 394px; margin-right: 1%; background-color:white;"> 
								<div class="card-body" style="display: grid;"> 
									<div style="width: 352.08px; height: 327px; background-image: url('../assets/Accesories.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
									<div style="justify-content: center; align-items: center; display: grid;">
										<p style="font-family: Roboto; color: black; font-size: 24px; font-weight: 400;">
											ACCESSORIES</p>
									</div>
								</div>
							</div>

						</div>
					</div>
					<div class="row" style="margin-top: 1%;">
						
						<div class="col">
							<div class="card" style="width: 385px; height: 394px; margin-right: 1%; background-color:white;"> 
								<div class="card-body" style="display: grid;">
									<div style="width: 352.08px; height: 327px; background-image: url('../assets/RotorBrakeDisks.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
									<div style="justify-content: center; align-items: center; display: grid;">
										<p style="font-family: Roboto; color: black; font-size: 24px; font-weight: 400;">
											ROTOR BRAKE DISKS</p>
									</div>
								</div>
							</div>
						</div>
						
						<div class="col">
							<div class="card" style="width: 385px; height: 394px; margin-right: 1%; background-color:white;"> 
								<div class="card-body" style="display: grid;">
									<div style="width: 352.08px; height: 327px; background-image: url('../assets/DampingDevices.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
									<div style="justify-content: center; align-items: center; display: grid;">
										<p style="font-family: Roboto; color: black; font-size: 24px; font-weight: 400;">
											DAMPING DEVICES</p>
									</div>
								</div>
							</div>
						</div>
						
						<div class="col">
							<div class="card" style="width: 385px; height: 394px; margin-right: 1%; background-color:white;"> 
								<div class="card-body" style="display: grid;">
									<div style="width: 352.08px; height: 327px; background-image: url('../assets/FLowRateControl.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
									<div style="justify-content: center; align-items: center; display: grid;">
										<p style="font-family: Roboto; color: black; font-size: 24px; font-weight: 400;">
											FLOW RATE CONTROL</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row" style="margin-top: 1%;">
						
						<div class="col">
							<div class="card" style="width: 385px; height: 394px; margin-right: 1%; background-color:white;"> 
								<div class="card-body" style="display: grid;">
									<div style="width: 352.08px; height: 327px; background-image: url('../assets/FluidicCartridgeValves.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
									<div style="justify-content: center; align-items: center; display: grid;">
										<p style="font-family: Roboto; color: black; font-size: 24px; font-weight: 400;">
											FLUIDIC CARTRIDGE VALVES</p>
									</div>
								</div>
							</div>
						</div>
						
						<div class="col">
							<div class="card" style="width: 385px; height: 394px; margin-right: 1%; background-color:white;"> 
								<div class="card-body" style="display: grid;">
									<div style="width: 352.08px; height: 327px; background-image: url('../assets/MasterCylinder.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
									<div style="justify-content: center; align-items: center; display: grid;">
										<p style="font-family: Roboto; color: black; font-size: 24px; font-weight: 400;">
											MASTER CYLINDER</p>
									</div>
								</div>
							</div>
						</div>
						
						<div class="col">
							<div class="card" style="width: 385px; height: 394px; margin-right: 1%; background-color:white;"> 
								<div class="card-body" style="display: grid;">
									<div style="width: 352.08px; height: 327px; background-image: url('../assets/ReliefValves.png'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>
									<div style="justify-content: center; align-items: center; display: grid;">
										<p style="font-family: Roboto; color: black; font-size: 24px; font-weight: 400;">
											RELIEF VALVES</p>
									</div>
								</div>
							</div>
						</div>
					</div>



				</div>
				<div id="MaintenanceOverhaulManualSection" style="width: 100%; height: 274px; background-image:  linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('../assets/BACKGROUND_blueprints.jpg'); background-size: cover; background-repeat: no-repeat; background-position: center;">	
					<div style="display: flex; align-items: center; justify-content: center;">
						<h3 style="font-family: Roboto; font-weight:400; color: #4A6FA5; margin-top: 4%;">MAINTENANCE & OVERHAUL MANUALS</h3>
					</div>
					<div>
						<p style="font-family: Roboto; color: black; display: grid; justify-content: center; width: 50%; justify-self: center;">
							NDI provides maintenance and overhaul manuals to support the proper servicing and continued performance of our components. These documents include detailed procedures, specifications, and guidelines required for inspection, repair, and maintenance. To request access to these manuals, please contact our team directly.
						</p>
					</div>
					<div style="display: flex; justify-content: center; align-items: center;">
						<button style="border-radius: 6px; background-color: #1E3A5F; color: white; width: 94px; height: 44px;">
							CONTACT</button>
					</div>
				</div>
    `;


    return ProductsLink;

}

export default Products;
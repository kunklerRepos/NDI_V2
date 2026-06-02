import cleanUp from "./CleanUp.js";
import Products from "./Products.js";

const IndexDict = {1: "ACTUATOR", 5: "DAMPING DEVICES", 
    2: "CALIPER ASSEMBLIES", 4: "ROTOR BRAKE DISKS", 
    8: "MASTER CYLINDERS", 3: "ACCESSORIES", 
    9: "RELIEF VALVES", 7: "FLUIDIC CARTRIDGE VALVES", 
    6: "FLOW RATE CONTROL"};

const DataObj = {"ACTUATOR": {
    BoldText: "ACTUATOR INCLUDES:",
    headerText: "utility actuators, landing actuators, and landing gear door actuators.",
    subText: "Hydraulic actuators for utility applications such as landing gear & doors retract, uplock/downlock and speed brakes.",
    features: ["Bore diameter up to Ø3.50 inches","Stroke up to 18.00 inches", "Double Acting or Single-Acting", "Building block options:"],
    buildingBlockOptions: [ "Rate controls", "Emergency extend shuttle valve", "End-of stroke snubbing / high-energy damping", "Electrical & visual indication"],
    actuatorPhoto: "./assets/Actuators.png"
    },

    "DAMPING DEVICES": { BoldText: "DAMPING DEVICES INCLUDE:",
        headerText: "Hydraulic damping devices for cabin & cargo doors",
        subText: "",
        features: ["Bore diameter up to Ø2.50 inches","Stroke up to 10.00 inches", "Building block options:"],
        buildingBlockOptions: ["Variable damping as function of stroke", "Bi-directional damping",
            "Temperature compensation"
        ],
        actuatorPhoto: "./assets/DampingDevices.png"
    },
    
    "CALIPER ASSEMBLIES": {BoldText: "CALIPER ASSEMBLIES INCLUDE:",
        headerText: "Hydraulic calipers for helicopter rotor braking",
        subText: "",
        features: ["Options"],
        buildingBlockOptions: ["High or low mu friction pad materials.",  "Electrical Safe (brakes off) Indication"],
        actuatorPhoto: "./assets/BrakeCaliperAssemblies.png"
    },
    "ROTOR BRAKE DISKS": {BoldText: "ROTOR BRAKE DISKS INCLUDE:",
        headerText: "Brake disks for helicopter rotor brakes.",
        subText: "",
        features: ["Balanced for high-speed operation", "Manufactured from radial forging material for superior structural integrity"],
        buildingBlockOptions: [],
        actuatorPhoto: "./assets/RotorBrakeDisks.png"
    },
    "MASTER CYLINDERS": {BoldText: "MASTER CYLINDERS INCLUDE:",
        headerText: "Hydraulic master cylinder for helicopter rotor braking",
        subText: "",
        features: [],
        buildingBlockOptions: [],
        actuatorPhoto: "./assets/MasterCylinder.png"
    },
    "ACCESSORIES": {
        BoldText: "ACCESSORIES INCLUDE:",
        headerText: "Mechanical master cylinder control accessories for helicopter rotor braking",
        subText: "",
        features: [],
        buildingBlockOptions: [],
        actuatorPhoto: "./assets/Accesories.png"
    },

    "RELIEF VALVES": {
        BoldText: "",
        headerText: "",
        subText: "Hydraulic relief valves",
        features: ["Inline, cartridge or integrated into other products", "Options"],
        buildingBlockOptions: ["Very low pressure drop", "Very low leakage"],
        actuatorPhoto: "./assets/ReliefValves.png"
    },

    "FLUIDIC CARTRIDGE VALVES": {
        BoldText: "FLUIDIC CARTRIDGE VALVES INCLUDE:",
        headerText: "Hydraulic shuttle valves for alternate sourcing landing gear emergency extend, brakes",
        subText: "",
        features: ["Flow rates to 10 gpm", "Shuttle pressure per application requirements", "Options"],
        buildingBlockOptions: ["Very low pressure drop", "Very low leakage"],
        actuatorPhoto: "./assets/FluidicCartridgeValves.png"
    },
    "FLOW RATE CONTROL": {
        BoldText: "FLOW RATE CONTROL DEVICES INCLUDE:",
        headerText: "Hydraulic flow controls for flow rate control",
        subText: "",
        features: ["Control in one direction or bi-directional", "Options"],
        buildingBlockOptions: ["Pressure compensated flow control", 
            "Filtration for orifices < Ø.070 inches.",
            "Self-cleaning configuration"],
        actuatorPhoto: "./assets/FLowRateControl.png"
    } 

};

function ReturnProductsItemPage(key, index) {
    const productsItemPage = document.getElementById("root");
    
    let innerIndex = index;


    productsItemPage.innerHTML = `<div id="ProductsItemPage" style="width: 100%; height: 100%; background-image: linear-gradient(#2A3D52, #101821);">
        <div id="ProductsDetailsHeaderSection" >
            <h1 id="ProductDetailHeaderStuff" style="">${key}</h1>
            </div>
            <div id="ProductsDetailsHeaderSectionText">
                <p style="color: white; font-family: 'Roboto'; font-size: 20px;" >
                <b >${DataObj[key].BoldText} </b> ${DataObj[key].headerText} </p>
            </div>


            <div id="ProductsDetailsMain" >
                <div id="ProductImageMain" style="
                    background-image: url('${DataObj[key].actuatorPhoto}'); 
                    ">
                    
                </div>
                    
                
                <div id="ProductDetailsOverviewSection">
                    <h1 id="ProductDetailsOverviewSectionHeader" >OVERVIEW</h1>
                    <p id="subtextProductDetails">${DataObj[key].subText}</p>
                    <ul style="color: white; font-family: 'Roboto'; font-size: 16px; font-weight: 500; list-style-type: disc; margin-left: 20px;">
                    ${DataObj[key].features.map(feature => `<li>${feature}</li>`).join("")}
                    </ul>
                    <ul style="color: white; font-family: 'Roboto'; font-size: 16px; font-weight: 500; list-style-type: disc; margin-left: 40px;">
                    ${DataObj[key].buildingBlockOptions.map(option => `<li>${option}</li>`).join("")}
                    </ul>    
                    <h1 id="ProductDetailsMaintText" >Maintenance & Overhaul Manuals</h1>
                    <p id="ProductDetailsMaintDesc">
                    Technical manuals and supporting documentation are available upon request. Please contact the NDI team for access to product-specific maintenance and overhaul information, or additional product information.</p>
                    <div style="display: flex; align-items: center; justify-content: center; margin-top: 2%;">
                        <button style="background-color: white; color: black; font-family: 'Roboto'; font-size: 16px; font-weight: 500; border: 2px solid white; padding: 10px 20px; cursor: pointer;">
                        CONTACT</button>
                    </div>
                </div>
            </div>
            <div style="width: 100%; height: 60px; display: flex; align-items: center; justify-content: center;">
                <a id="BackToProductsAnchor" style="color: white; font-family: 'Roboto'; font-size: 16px; font-weight: bold; margin-right: 3%; text-decoration: none;" href="#"><   BACK TO PRODUCTS</a>
                <a id="NextProductAnchor" style="color: white; font-family: 'Roboto'; font-size: 16px; font-weight: bold; text-decoration: none;" href="#">NEXT PRODUCT   ></a>
            </div>
            
            </div>
    </div>`;

    document.getElementById("BackToProductsAnchor").addEventListener("click", () => {
        cleanUp("root");
        Products();
    });

    document.getElementById("NextProductAnchor").addEventListener("click", () => {
        cleanUp("root");
        innerIndex += 1;
        if(innerIndex > 9)
        {
            innerIndex = 1;
        }
        ReturnProductsItemPage(IndexDict[innerIndex], innerIndex);

    });
    

}

export default ReturnProductsItemPage;
const unitWeight = [ "LB", "KG", "GR", "Hundredths Pounds", "MG", "Tons", "OZ" ];
const unitWattage = [
    "Watt",
    "Hours",
    "Picowatts",
    "Milliamp Hours",
    "Milliwatts",
    "Microwatts",
    "Kilowatt Hours",
    "Kilowatts",
    "Nanowatts",
    "Watts",
];
const unitMemory = [ "MB", "GB", "TB" ];
const unitLength = [
    "FT",
    "CM",
    "MM",
    "DM",
    "Picometre",
    "µM",
    true,
    "Miles",
    "Yards",
    "Mils",
    "IN",
    "Nanometre",
    "Hundredths-Inches",
    "Kilometres",
    "Angstrom",
];
const unitCapacity = [
    "liters",
    "Quarts",
    "Fluid Ounces",
    "ounces",
    "milliliters",
    "Cubic Feet",
    "Microliters",
    "Cubic Centimeters",
    "Pints",
    "Gallons",
    "pounds",
    "Tons",
    "Cubic Inches",
    "kilograms",
];
const unitOptical = [ "diopters" ];
const unitLensPower = [
    "milliwatts",
    "microwatts",
    "horsepower",
    "nanowatts",
    "picowatts",
    "watts",
];
const unitGraduation = [
    "Feet",
    "centimeters",
    "millimeters",
    "Decimeters",
    "Pints",
    "Inches",
    "gallons",
    "Cubic Meters",
    "nanometer",
    "Hundredths-Inches",
    "Ten Thousandths Inches",
    "Cubic Centimeters",
    "Quarts",
    "picometer",
    "milliliters",
    "Kilometers",
    "Fluid Ounces",
    "Cubic Yards",
    "Meters",
    "micrometer",
    "Cubic Inches",
    "Imperial Gallons",
    "Yards",
    "Cubic Feet",
    "Miles",
    "Thousandths Inches",
    "liters",
    "Angstrom",
];

const fashionColors = [
    "active black",
    "beige",
    "black",
    "blue",
    "brown",
    "coral",
    "fixed/alpha",
    "gold",
    "green",
    "grey",
    "multicoloured",
    "off-white",
    "orange",
    "pink",
    "purple",
    "red",
    "silver",
    "transparent",
    "turquoise",
    "white",
    "yellow",
];

const generateKeyValue = ( list ) => {
    return list.map( ( val ) => {
        return { key: val, value: val };
    } );
};

const propertyEnums = {};

export const allProperties = {
    Fashion: {
        "Shirts": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Reversible",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "T Shirts": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Sweatshirts": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Reversible",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Sweatshirt Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sweatshirt_type
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Waist Rise",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.waist_rise
            }
        ],
        "Kurtas & Kurta Sets": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.ornamentation
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Jackets & Coats": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Reversible",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Front Styling",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.front_styling
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Sweaters": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Reversible",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Suits": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Front Styling",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.front_styling
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.ornamentation
            }
        ],
        "Sherwanis": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Track Shirts": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Track Suits": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Unstitched Fabrics": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Dresses": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Tops": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Reversible",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Top Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.top_type
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Trousers": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Bottom Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.bottom_type
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Waist Rise",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.waist_rise
            }
        ],
        "Capris": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Bottom Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.bottom_type
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Waist Rise",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.waist_rise
            }
        ],
        "Coordinates": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Playsuits": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Jumpsuits": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Shrugs & Blouses": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Blazers & Waistcoats": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Reversible",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Tights, Leggings & Jeggings": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Track Pants": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Jeans": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Waist Rise",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.waist_rise
            }
        ],
        "Shorts": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Joggers": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Dhotis & Dhoti Pants": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Churidars": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Salwars": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hemline",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.hemline
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Dungarees & Jumpsuits": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Skirts": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hemline",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.hemline
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Waist Rise",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.waist_rise
            }
        ],
        "Clothing Sets": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Belts": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Reversible",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Buckle Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.buckle_material
            },
            {
                "name": "Buckle Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.buckle_type
            }
        ],
        "Caps & Hats": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Kurtis, Tunics": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hemline",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.hemline
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.ornamentation
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Sarees": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.ornamentation
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Ethnic Wear": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.ornamentation
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Palazzos": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hemline",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.hemline
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.ornamentation
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Dress Materials": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.ornamentation
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Lehenga Cholis": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hemline",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.hemline
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.ornamentation
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Dupattas & Shawls": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.ornamentation
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Burqas & Hijabs": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.ornamentation
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Blouses": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.ornamentation
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Blouse Pieces": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.ornamentation
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Briefs": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Boxers": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Vests": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Robes": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Night Suits": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Thermal Wear": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Swim Bottoms": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Swimwear": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Bra": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Coverage",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.coverage
            },
            {
                "name": "Padding",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.padding
            }
        ],
        "Shapewear": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Coverage",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.coverage
            },
            {
                "name": "Padding",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.padding
            }
        ],
        "Sleepwear & Loungewear": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Camisoles": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Lingerie Sets & Accessories": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Coverage",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.coverage
            },
            {
                "name": "Padding",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.padding
            }
        ],
        "Bath Robes": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Towels": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Pyjamas": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Party Wear": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Ornamentation",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.ornamentation
            }
        ],
        "Innerwear & Sleepwear": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.closure_type
            },
            {
                "name": "Strap Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.strap_type
            },
            {
                "name": "Coverage",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.coverage
            },
            {
                "name": "Padding",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.padding
            },
            {
                "name": "Seam",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.seam
            },
            {
                "name": "Waist Band",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.waist_band
            }
        ],
        "Nightwear & Loungewear": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Wash Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.wash_type
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Fit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fit
            },
            {
                "name": "Collar",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.collar
            },
            {
                "name": "Neck",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.neck
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleeve Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sleeve_length
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Watches": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Strap Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.strap_material
            },
            {
                "name": "Water Resistant",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Display",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.display
            },
            {
                "name": "Glass Material",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.glass_material
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Power Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.power_type
            },
            {
                "name": "Battery Life",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Bluetooth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Call Function",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Heart Rate Monitor",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Pedometer",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sleep Monitor",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "SPO2 Monitor",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Warranty",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Buckle Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.buckle_material
            },
            {
                "name": "Buckle Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.buckle_type
            },
            {
                "name": "Dial Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.dial_shape
            }
        ],
        "Gloves": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Socks": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Socks Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.socks_length
            }
        ],
        "Stockings": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Laces": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Soles & Charms": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Shoe Racks & Organisers": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Shoe Care - Accessories": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Flip-Flops & Flats": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.footwear_type
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.insole
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sole_material
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.toe_shape
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.outsole
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fasten_type
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.midsole
            }
        ],
        "Sandals & Floaters": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.footwear_type
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.insole
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sole_material
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.toe_shape
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.outsole
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fasten_type
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.midsole
            }
        ],
        "Backpacks": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Water Resistant",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Backpack Style",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.backpack_style
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.closure_type
            },
            {
                "name": "Laptop Compartment",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Strap Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.strap_type
            },
            {
                "name": "Volume",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lock Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.lock_type
            }
        ],
        "Handbags": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Water Resistant",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.closure_type
            },
            {
                "name": "Laptop Compartment",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Strap Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.strap_type
            },
            {
                "name": "Volume",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lock Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.lock_type
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Trolley, Luggage & Suitcases": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Water Resistant",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lining",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Num Pockets",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.closure_type
            },
            {
                "name": "Laptop Compartment",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Strap Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.strap_type
            },
            {
                "name": "Volume",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lock Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.lock_type
            }
        ],
        "Formal Shoes": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.footwear_type
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.insole
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sole_material
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.toe_shape
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.outsole
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fasten_type
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.midsole
            }
        ],
        "Casual Shoes": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.footwear_type
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.insole
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sole_material
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.toe_shape
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.outsole
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fasten_type
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.midsole
            }
        ],
        "Sports Shoes": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Sport Type",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sport_type
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.footwear_type
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.insole
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sole_material
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.toe_shape
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.outsole
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fasten_type
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.midsole
            }
        ],
        "Outdoor Shoes": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.footwear_type
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.insole
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sole_material
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.toe_shape
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.outsole
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fasten_type
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.midsole
            }
        ],
        "Work & Safety Shoes": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.footwear_type
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.insole
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sole_material
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.toe_shape
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.outsole
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fasten_type
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.midsole
            }
        ],
        "Ethnic Shoes": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.footwear_type
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.insole
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sole_material
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.toe_shape
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.outsole
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fasten_type
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.midsole
            }
        ],
        "Boots": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.footwear_type
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.insole
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sole_material
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.toe_shape
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.outsole
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fasten_type
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.midsole
            }
        ],
        "Heels": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Size Chart",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fabric",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Fabric Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fabric_finish
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Footwear Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.footwear_type
            },
            {
                "name": "Insole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.insole
            },
            {
                "name": "Sole Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.sole_material
            },
            {
                "name": "Toe Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.toe_shape
            },
            {
                "name": "Outsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.outsole
            },
            {
                "name": "Fasten Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.fasten_type
            },
            {
                "name": "Midsole",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.midsole
            }
        ],
        "Contact Lenses": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Lens Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.lens_material
            },
            {
                "name": "Lens Colour",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.lens_colour
            }
        ],
        "Eye Glasses": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Frame Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.frame_type
            },
            {
                "name": "Frame Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.frame_shape
            },
            {
                "name": "Frame Colour",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.frame_colour
            },
            {
                "name": "Frame Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.frame_size
            },
            {
                "name": "Frame Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.frame_material
            },
            {
                "name": "Frame Style",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.frame_style
            },
            {
                "name": "Face Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.face_shape
            },
            {
                "name": "Lens Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.lens_material
            },
            {
                "name": "Lens Colour",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.lens_colour
            }
        ],
        "Eye Glass Frames": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Frame Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.frame_type
            },
            {
                "name": "Frame Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.frame_shape
            },
            {
                "name": "Frame Colour",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.frame_colour
            },
            {
                "name": "Frame Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.frame_size
            },
            {
                "name": "Frame Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.frame_material
            },
            {
                "name": "Frame Style",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.frame_style
            },
            {
                "name": "Face Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.face_shape
            },
            {
                "name": "Lens Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.lens_material
            },
            {
                "name": "Lens Colour",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.lens_colour
            }
        ],
        "Sunglasses": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Frame Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.frame_type
            },
            {
                "name": "Frame Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.frame_shape
            },
            {
                "name": "Frame Colour",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.frame_colour
            },
            {
                "name": "Frame Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.frame_size
            },
            {
                "name": "Frame Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.frame_material
            },
            {
                "name": "Frame Style",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.frame_style
            },
            {
                "name": "Face Shape",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.face_shape
            },
            {
                "name": "Lens Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.lens_material
            },
            {
                "name": "Lens Colour",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.lens_colour
            }
        ],
        "Contact Lens Cases": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Contact Lens Solutions": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Contact Lens Tweezers": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Eyeglasses Pouches & Cases": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Microfiber Wipes": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Eyewear Slings": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Bracelets": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.base_metal
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.plating
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.closure_type
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.stone_type
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gem_type
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Chains": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.base_metal
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.plating
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.closure_type
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.stone_type
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gem_type
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Mangalsutra": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.base_metal
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.plating
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.closure_type
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.stone_type
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gem_type
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Anklets": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.base_metal
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.plating
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.closure_type
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.stone_type
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gem_type
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Bangles & Bracelets": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.base_metal
            },
            {
                "name": "Plating",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.plating
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.closure_type
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.stone_type
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gem_type
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Necklaces": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.base_metal
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.plating
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.closure_type
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.stone_type
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gem_type
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Earrings": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.base_metal
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.plating
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.closure_type
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.stone_type
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gem_type
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Jewellery Sets": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.base_metal
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.plating
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.closure_type
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.stone_type
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gem_type
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Nosepins & Noserings": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.base_metal
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.plating
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.closure_type
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.stone_type
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gem_type
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Pendants": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.base_metal
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.plating
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.closure_type
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.stone_type
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gem_type
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Rings": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.base_metal
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.plating
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.closure_type
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.stone_type
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gem_type
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Toe Rings": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.base_metal
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.plating
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.closure_type
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.stone_type
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gem_type
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Gold Coins": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.base_metal
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.plating
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.closure_type
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.stone_type
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gem_type
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Brooch": [
            {
                "name": "Gender",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gender
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.size
            },
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Base Metal",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.base_metal
            },
            {
                "name": "Plating",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.plating
            },
            {
                "name": "Care Instructions",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Features",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.features
            },
            {
                "name": "Material",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material
            },
            {
                "name": "Material Finish",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.material_finish
            },
            {
                "name": "Pattern",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.pattern
            },
            {
                "name": "Occasion",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.occasion
            },
            {
                "name": "Season",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.season
            },
            {
                "name": "Trend",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.trend
            },
            {
                "name": "Bundles",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Max Sale Quantity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Fragile",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Liquid",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Hazardous",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Closure Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.closure_type
            },
            {
                "name": "Stone Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.stone_type
            },
            {
                "name": "Gem Type",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.gem_type
            },
            {
                "name": "Sustainability",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Handcrafted",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Craftmark",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    Electronics: {
        "Mobile Phone": [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model Year",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "RAM",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "RAM unit",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.ram_unit
            },
            {
                "name": "ROM",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "ROM unit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.rom_unit
            },
            {
                "name": "Storage",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Storage unit",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.storage_unit
            },
            {
                "name": "Screen Size",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Primary Camera",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Secondary Camera",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "CPU",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "GPU",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Battery Capacity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "OS Type",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "OS Version",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Connectivity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.connectivity
            },
            {
                "name": "Form factor",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Smart Watch": [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model Year",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Screen Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Headset": [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model Year",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Connectivity",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.connectivity
            },
            {
                "name": "Form factor",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Laptop": [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model Year",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "RAM",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "RAM unit",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.ram_unit
            },
            {
                "name": "ROM",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "ROM unit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.rom_unit
            },
            {
                "name": "Storage",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Storage unit",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.storage_unit
            },
            {
                "name": "Storage Type",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.storage_type
            },
            {
                "name": "Screen Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "CPU",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "GPU",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Battery Capacity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "OS Type",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "OS Version",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Includes",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Desktop": [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model Year",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "RAM",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "RAM unit",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.ram_unit
            },
            {
                "name": "ROM",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "ROM unit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.rom_unit
            },
            {
                "name": "Storage",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Storage unit",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.storage_unit
            },
            {
                "name": "Storage Type",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.storage_type
            },
            {
                "name": "Screen Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "CPU",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "GPU",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Battery Capacity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "OS Type",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "OS Version",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Form factor",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Includes",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Tablet": [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model Year",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "RAM",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "RAM unit",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.ram_unit
            },
            {
                "name": "ROM",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "ROM unit",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.rom_unit
            },
            {
                "name": "Storage",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Storage unit",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.storage_unit
            },
            {
                "name": "Storage Type",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.storage_type
            },
            {
                "name": "Screen Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "CPU",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "GPU",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Battery Capacity",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "OS Type",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "OS Version",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Includes",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Keyboard": [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Connectivity",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.connectivity
            },
            {
                "name": "Compatible Devices",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.compatible_devices
            },
            {
                "name": "Includes",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Monitor": [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Screen Size",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Special Feature",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.special_feature
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Mouse": [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Colour",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.colour
            },
            {
                "name": "Colour Name",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Connectivity",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.connectivity
            },
            {
                "name": "Special Feature",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "select",
                "options": propertyEnums.special_feature
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ],
        "Power Bank": [
            {
                "name": "Brand",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Model Year",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Weight",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Length",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Breadth",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Height",
                "required": true,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            },
            {
                "name": "Refurbished",
                "required": false,
                "example": "",
                "variationAllowed": false,
                "type": "input"
            }
        ]
    },
    Grocery: {
        "Fruits and Vegetables": [],
        "Masala & Seasoning": [],
        "Oil & Ghee": [],
        "Gourmet & World Foods": [],
        Foodgrains: [],
        "Eggs, Meat & Fish": [],
        "Cleaning & Household": [
            { name: "Size", type: "input", example: "", variationAllowed: true },
            { name: "Color", type: "input", example: "", variationAllowed: true },
            { name: "Style", type: "input", example: "", variationAllowed: true },
            {
                name: "Number of Items",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            {
                name: "Material Type",
                type: "input",
                example: "plastic",
                variationAllowed: true,
            },
            { name: "Width Range", type: "input", example: "", unit: unitLength },
            { name: "Length Range", type: "input", example: "", unit: unitLength },
        ],
        Beverages: [
            { name: "Size", type: "input", example: "", variationAllowed: true },
            { name: "Color", type: "input", example: "", variationAllowed: true },
            { name: "stylename", type: "input", example: "", variationAllowed: true },
        ],
        "Beauty & Hygiene": [
            { name: "Size", type: "input", example: "", variationAllowed: true },
            { name: "Color", type: "input", example: "", variationAllowed: true },
            { name: "Scent", type: "input", example: "rose", variationAllowed: true },
            {
                name: "Number of Items",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            {
                name: "PPU Count",
                type: "input",
                example: "1",
                variationAllowed: true,
            },
            {
                name: "Item Form",
                type: "input",
                example: "Cream",
                variationAllowed: true,
            },
            { name: "Model", type: "input", example: "AB12", variationAllowed: true },
            { name: "Item Weight", type: "input", example: "5", unit: unitWeight },
        ],
        "Bakery, Cakes & Dairy": [
            { name: "Size", type: "input", example: "small", variationAllowed: true },
            {
                name: "Number of Items",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            { name: "Color", type: "input", example: "", variationAllowed: true },
            {
                name: "Material Type",
                type: "input",
                example: "floor",
                variationAllowed: true,
            },
            { name: "Item Weight", type: "input", example: "5", unit: unitWeight },
            {
                name: "Unit Count",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            {
                name: "Model",
                type: "input",
                example: "AB-12",
                variationAllowed: true,
            },
            {
                name: "Shape",
                type: "input",
                example: "Round",
                variationAllowed: true,
            },
            { name: "Capacity", type: "float", example: "4", unit: unitCapacity },
            {
                name: "Manufacturer Part Number",
                type: "float",
                example: "A-112",
                variationAllowed: true,
            },
        ],
        "Kitchen Accessories": [
            { name: "Size", type: "input", example: "small", variationAllowed: true },
            {
                name: "Number of Items",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            { name: "Color", type: "input", example: "", variationAllowed: true },
            {
                name: "Material Type",
                type: "input",
                example: "Steel",
                variationAllowed: true,
            },
            { name: "Item Weight", type: "input", example: "5", unit: unitWeight },
            {
                name: "Unit Count",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            {
                name: "Model",
                type: "input",
                example: "AB-12",
                variationAllowed: true,
            },
            { name: "Pattern", type: "input", example: "", variationAllowed: true },
        ],
        "Baby Care": [
            { name: "Scent", type: "input", example: "rose", variationAllowed: true },
            { name: "Scent", type: "input", example: "rose", variationAllowed: true },
            {
                name: "Style",
                type: "input",
                example: "modern",
                variationAllowed: true,
            },
            {
                name: "Number of Items",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            {
                name: "Material Type",
                type: "input",
                example: "rose",
                variationAllowed: true,
            },
            { name: "Color", type: "input", example: "", variationAllowed: true },
            {
                name: "PPU Count",
                type: "input",
                example: "1",
                variationAllowed: true,
            },
            {
                name: "Item Form",
                type: "input",
                example: "Cream",
                variationAllowed: true,
            },
            { name: "Pattern", type: "input", example: "", variationAllowed: true },
            { name: "Item Weight", type: "input", example: "5", unit: unitWeight },
            {
                name: "Model",
                type: "input",
                example: "AB-12",
                variationAllowed: true,
            },
        ],
        "Snacks & Branded Foods": [],
        "Pet Care": [
            {
                name: "Scent Name",
                type: "input",
                example: "mild",
                variationAllowed: true,
            },
            { name: "Flavor", type: "input", example: "", variationAllowed: true },
            {
                name: "Color",
                type: "input",
                example: "brown",
                variationAllowed: true,
            },
            {
                name: "Number of Items",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
        ],
        Stationery: [
            {
                name: "Size",
                type: "input",
                example: "A4,6x4",
                variationAllowed: true,
            },
            {
                name: "Paper Size",
                type: "input",
                example: "",
                variationAllowed: true,
            },
            {
                name: "Number of Items",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            { name: "Color", type: "input", example: "", variationAllowed: true },
            { name: "Line Size", type: "input", example: "", variationAllowed: true },
            {
                name: "Maximum Size",
                type: "input",
                example: "",
                variationAllowed: true,
            },
        ],
    },
    "Home & Decor": {
        "Home Decor": [
            { name: "Size", type: "input", example: "small", variationAllowed: true },
            {
                name: "Style",
                type: "input",
                example: "modern",
                variationAllowed: true,
            },
            {
                name: "Number of Items",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            {
                name: "Material Type",
                type: "input",
                example: "wood",
                variationAllowed: false,
            },
            {
                name: "Pattern",
                type: "input",
                example: "Sripped",
                variationAllowed: true,
            },
            { name: "Item Weight", type: "input", example: "5", unit: unitWeight },
            {
                name: "Model",
                type: "input",
                example: "AB-12",
                variationAllowed: true,
            },
            {
                name: "Manufacturer Part Number",
                type: "float",
                example: "A-112",
                variationAllowed: false,
            },
            { name: "Color", type: "input", example: "", variationAllowed: true },
            { name: "Wattage", type: "input", example: "", unit: unitWattage },
            {
                name: "Unit Count",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            {
                name: "Shape",
                type: "input",
                example: "Round",
                variationAllowed: true,
            },
        ],
        "Home Furnishings": [
            { name: "Size", type: "input", example: "small", variationAllowed: true },
            {
                name: "Style",
                type: "input",
                example: "modern",
                variationAllowed: true,
            },
            {
                name: "Number of Items",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            { name: "Color", type: "input", example: "", variationAllowed: true },
            {
                name: "Material Type",
                type: "input",
                example: "wood",
                variationAllowed: true,
            },
            {
                name: "Pattern",
                type: "input",
                example: "Sripped",
                variationAllowed: true,
            },
            { name: "Display Weight", type: "input", example: "5", unit: unitWeight },
        ],
        Furniture: [
            { name: "Size", type: "input", example: "small", variationAllowed: true },
            {
                name: "Style",
                type: "input",
                example: "modern",
                variationAllowed: true,
            },
            {
                name: "Number of Items",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            {
                name: "Material Type",
                type: "input",
                example: "wood",
                variationAllowed: true,
            },
            {
                name: "Pattern",
                type: "input",
                example: "Sripped",
                variationAllowed: true,
            },
            { name: "Item Weight", type: "input", example: "5", unit: unitWeight },
            {
                name: "Unit Count",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            {
                name: "Model",
                type: "input",
                example: "AB-12",
                variationAllowed: true,
            },
            { name: "Color", type: "input", example: "", variationAllowed: true },
            {
                name: "Team Name",
                type: "input",
                example: "chennai super kings",
                variationAllowed: true,
            },
            {
                name: "Shape",
                type: "input",
                example: "Round",
                variationAllowed: true,
            },
        ],
        "Garden and Outdoor Products": [
            {
                name: "Material Type",
                type: "input",
                example: "wood",
                variationAllowed: true,
            },
            { name: "Color", type: "input", example: "", variationAllowed: true },
        ],
        "Home Improvement": [
            { name: "Size", type: "input", example: "small", variationAllowed: true },
            {
                name: "Style",
                type: "input",
                example: "modern",
                variationAllowed: true,
            },
            {
                name: "Number of Items",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            { name: "Color", type: "input", example: "", variationAllowed: true },
        ],
        "Cookware and Dining": [
            { name: "Size", type: "input", example: "small", variationAllowed: true },
            {
                name: "Number of Items",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            {
                name: "Material Type",
                type: "input",
                example: "wood",
                variationAllowed: true,
            },
            {
                name: "Pattern",
                type: "input",
                example: "Sripped",
                variationAllowed: true,
            },
            { name: "Item Weight", type: "input", example: "5", unit: unitWeight },
            {
                name: "Unit Count",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            {
                name: "Model",
                type: "input",
                example: "AB-12",
                variationAllowed: true,
            },
            {
                name: "Shape",
                type: "input",
                example: "Round",
                variationAllowed: true,
            },
            { name: "Capacity", type: "input", example: "", unit: unitCapacity },
            {
                name: "Manufacturer Part Number",
                type: "float",
                example: "A-112",
                variationAllowed: true,
            },
            { name: "Color", type: "input", example: "", variationAllowed: true },
        ],
        "Storage and Organisation": [
            { name: "Size", type: "input", example: "small", variationAllowed: true },
            {
                name: "Style",
                type: "input",
                example: "modern",
                variationAllowed: true,
            },
            {
                name: "Number of Items",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            {
                name: "Material Type",
                type: "input",
                example: "wood",
                variationAllowed: true,
            },
            { name: "Item Weight", type: "input", example: "5", unit: unitWeight },
            {
                name: "Unit Count",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            {
                name: "Team Name",
                type: "input",
                example: "Lions",
                variationAllowed: true,
            },
            {
                name: "Model",
                type: "input",
                example: "AB-12",
                variationAllowed: true,
            },
            { name: "Color", type: "input", example: "", variationAllowed: true },
            {
                name: "Shape",
                type: "input",
                example: "Round",
                variationAllowed: true,
            },
        ],
    },
    "Health & Wellness": {
        default: [
            { name: "Size", type: "input", example: "Large", variationAllowed: true },
            { name: "Item Weight", type: "input", example: "5", unit: unitWeight },
        ],
        "Pain Relieving Ointments": [
            {
                name: "Style",
                type: "input",
                example: "Art Deco",
                variationAllowed: true,
            },
            { name: "Size", type: "input", example: "Large", variationAllowed: true },
            { name: "Item Weight", type: "input", example: "5", unit: unitWeight },
        ],
        "Nutrition and Supplements": [
            {
                name: "Flavour",
                type: "input",
                example: "Strawberry",
                variationAllowed: true,
            },
            { name: "Size", type: "input", example: "small", variationAllowed: true },
            { name: "Scent", type: "input", example: "musk", variationAllowed: true },
            {
                name: "Number of Items",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            { name: "Item Weight", type: "input", example: "5", unit: unitWeight },
            { name: "Color", type: "input", example: "", variationAllowed: true },
            {
                name: "PPU Count",
                type: "input",
                example: "6",
                variationAllowed: false,
            },
            {
                name: "Model",
                type: "input",
                example: "EEPL 456",
                variationAllowed: false,
            },
        ],
        "Personal and Baby Care": [
            { name: "Scent", type: "input", example: "musk", variationAllowed: true },
            { name: "Size", type: "input", example: "small", variationAllowed: true },
            {
                name: "Number of Items",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            {
                name: "Itrm Form",
                type: "input",
                example: "Cream",
                variationAllowed: true,
            },
            { name: "Item Weight", type: "input", example: "5", unit: unitWeight },
            {
                name: "PPU Count",
                type: "input",
                example: "6",
                variationAllowed: true,
            },
            {
                name: "Model",
                type: "input",
                example: "EEPL 456",
                variationAllowed: false,
            },
        ],
        "Sexual Wellness": [
            { name: "Scent", type: "input", example: "musk", variationAllowed: true },
            { name: "Size", type: "input", example: "small", variationAllowed: true },
            {
                name: "Number of Items",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            {
                name: "Item Form",
                type: "input",
                example: "Cream",
                variationAllowed: true,
            },
            { name: "Item Weight", type: "input", example: "5", unit: unitWeight },
            {
                name: "PPU Count",
                type: "input",
                example: "6",
                variationAllowed: true,
            },
            {
                name: "Model",
                type: "input",
                example: "EEPL 456",
                variationAllowed: false,
            },
        ],
        "Gastric and Other Concerns": [
            {
                name: "Flavour",
                type: "input",
                example: "Strawberry",
                variationAllowed: true,
            },
            { name: "Size", type: "input", example: "small", variationAllowed: true },
            { name: "Scent", type: "input", example: "musk", variationAllowed: true },
            {
                name: "Number of Items",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            { name: "Item Weight", type: "input", example: "5", unit: unitWeight },
            { name: "Color", type: "input", example: "", variationAllowed: true },
            {
                name: "PPU Count",
                type: "input",
                example: "6",
                variationAllowed: true,
            },
            {
                name: "Model",
                type: "input",
                example: "EEPL 456",
                variationAllowed: false,
            },
        ],
        "Covid Essentials": [
            { name: "Size", type: "input", example: "small", variationAllowed: true },
            {
                name: "Style",
                type: "input",
                example: "Cape Cod",
                variationAllowed: true,
            },
            {
                name: "Material Type",
                type: "number",
                example: "Cotton",
                variationAllowed: true,
            },
            { name: "Item Weight", type: "input", example: "5", unit: unitWeight },
            {
                name: "Model",
                type: "input",
                example: "EEPL 456",
                variationAllowed: true,
            },
            {
                name: "Manufacturer Part Number",
                type: "input",
                example: "RTC 54",
                variationAllowed: true,
            },
            {
                name: "Unit Count",
                type: "number",
                example: "4",
                variationAllowed: true,
            },
            { name: "Color", type: "input", example: "", variationAllowed: true },
            {
                name: "Team Name",
                type: "input",
                example: "Royal",
                variationAllowed: true,
            },
            {
                name: "Item Shape",
                type: "input",
                example: "Molded cup",
                variationAllowed: false,
            },
        ],
        "Diabetes Control": [
            {
                name: "Flavour",
                type: "input",
                example: "Strawberry",
                variationAllowed: true,
            },
            { name: "Size", type: "input", example: "small", variationAllowed: true },
            { name: "Scent", type: "input", example: "musk", variationAllowed: true },
            {
                name: "Item Package Quantity",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
        ],
        "Health Devices": [
            {
                name: "Thickness",
                type: "input",
                example: "11",
                variationAllowed: true,
            },
            {
                name: "Material Type",
                type: "input",
                example: "Steel",
                variationAllowed: true,
            },
            {
                name: "Model",
                type: "input",
                example: "EEPL 456",
                variationAllowed: true,
            },
            {
                name: "Shape",
                type: "input",
                example: "Round",
                variationAllowed: true,
            },
            { name: "Capacity", type: "input", example: "5", unit: unitCapacity },
            {
                name: "Number of Items",
                type: "number",
                example: "6",
                variationAllowed: true,
            },
            {
                name: "Manufacturer Part Number",
                type: "input",
                example: "RTC 54",
                variationAllowed: true,
            },
            { name: "Color", type: "input", example: "", variationAllowed: true },
        ],
    },
    "Beauty & Personal Care": {
        Fragrance: [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Bath Soaps and Gels": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Hair Oils, Care, and Styling": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Shampoos and Conditioners": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Shaving and Grooming": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Beard Care and Tools": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Grooming Tools and Accessories": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Makeup - Nail Care": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Makeup - Eyes": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Makeup - Face": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Makeup - Lips": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Makeup - Body": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Makeup - Remover": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Makeup - Sets and Kits": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Makeup - Tools and Brushes": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Makeup - Kits and Combos": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Skin Care - Face Cleansers": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Skin Care - Hand and Feet": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Body Care - Cleansers": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Body Care - Moisturizers": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Body Care - Loofah and Other Tools": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Body Care - Bath Salt and Additives": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Hair Care - Shampoo, Oils, Conditioners": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Skin Care - Lotions, Moisturisers, and Creams": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Skin Care - Oils and Serums": [
            {
                name: "Brand",
                required: true,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Colour",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.colour,
            },
            {
                name: "Colour Name",
                required: false,
                example: "",
                variationAllowed: false,
                type: "input",
            },
            {
                name: "Gender",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.gender,
            },
            {
                name: "Concern",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.concern,
            },
            {
                name: "Ingredient",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.ingredient,
            },
            {
                name: "Conscious",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.conscious,
            },
            {
                name: "Preference",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.preference,
            },
            {
                name: "Formulation",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.formulation,
            },
            {
                name: "Skin Type",
                required: false,
                example: "",
                variationAllowed: false,
                type: "select",
                options: propertyEnums.skin_type,
            },
        ],
        "Gift Voucher": [],
    },
    "F&B": {
        default: [],
    },
};

const unitWeight = ['LB','KG','GR','Hundredths Pounds','MG','Tons','OZ'];
const unitWattage = ['Watt','Hours','Picowatts','Milliamp Hours', 'Milliwatts', 'Microwatts','Kilowatt Hours','Kilowatts','Nanowatts','Watts'];
const unitMemory = ['MB','GB','TB'];
const unitLength = ['FT','CM','MM','DM','Picometre','µM','M','Miles','Yards','Mils','IN','Nanometre','Hundredths-Inches','Kilometres','Angstrom'];
const unitCapacity = ['liters', 'Quarts' ,'Fluid Ounces', 'ounces', 'milliliters', 'Cubic Feet', 'Microliters', 'Cubic Centimeters' ,'Pints' ,'Gallons', 'pounds' ,'Tons','Cubic Inches', 'kilograms'];
const unitOptical = ['diopters'];
const unitLensPower = ['milliwatts','microwatts','horsepower','nanowatts','picowatts','watts'];
const unitGraduation = ['Feet' ,'centimeters', 'millimeters', 'Decimeters', 'Pints', 'Inches', 'gallons', 'Cubic Meters', 'nanometer' ,'Hundredths-Inches' ,'Ten Thousandths Inches', 'Cubic Centimeters', 'Quarts', 'picometer', 'milliliters', 'Kilometers', 'Fluid Ounces', 'Cubic Yards', 'Meters', 'micrometer', 'Cubic Inches', 'Imperial Gallons', 'Yards', 'Cubic Feet', 'Miles', 'Thousandths Inches', 'liters', 'Angstrom'];

const fashionColors = ["active black","beige","black","blue","brown","coral","fixed/alpha","gold","green","grey","multicoloured","off-white","orange","pink","purple","red","silver","transparent","turquoise","white","yellow"]

const generateKeyValue = (list) => {
    return list.map(val => {return {key: val, value: val}})
}

export const allProperties = {
    'Fashion': {
        'default': [
            {'name':'brand','type':'input','example':'Allen Solly', 'variationAllowed':false},
            {'name':'color','type':'select','example':'Black', options: generateKeyValue(fashionColors), 'variationAllowed':true},
            {'name':'size','type':'input','example':'Small', 'variationAllowed':true},
            {'name':'gender','type':'input','example':'Male', 'variationAllowed':true},
            {'name':'pattern','type':'input','example':'striped', 'variationAllowed':true},
            {'name':'material','type':'input','example':'Cotton', 'variationAllowed':false},
            {'name':'occasion','type':'input','example':'casual', 'variationAllowed':false},
            {'name':'season','type':'input','example':'summer', 'variationAllowed':false},
            {'name':'trend','type':'input','example':'tribal', 'variationAllowed':false},
            {'name':'features','type':'input','example':'alpha', 'variationAllowed':false},
            {'name':'material_finish','type':'input','example':'embossed', 'variationAllowed':false},
            //fix size chart to use image type
            {'name':'size_chart','type':'upload', 'multiple': true, 'variationAllowed':false},
        ]
    },
    'Electronics':{
        'default': [
            {'name':'brand','type':'input','example':'Apple iPhone', 'variationAllowed':false},
            {'name':'color','type':'select','example':'Black', options: generateKeyValue(fashionColors), 'variationAllowed':true},
            {'name':'size','type':'input','example':'512GB', 'variationAllowed':true},
        ],
        'Mobile Phone' : [
            {'name':'brand','type':'input','example':'Apple iPhone', 'variationAllowed':false},
            {'name':'color','type':'select','example':'Black', options: generateKeyValue(fashionColors), 'variationAllowed':true},
            {'name':'size','type':'input','example':'512GB', 'variationAllowed':true},
        ],
        'Earphone' : [
            {'name':'brand','type':'input','example':'Samsung', 'variationAllowed':false},
            {'name':'color','type':'select','example':'Black', options: generateKeyValue(fashionColors), 'variationAllowed':true},
            {'name':'model','type':'input','example':'Galaxy Bean Buds Live', 'variationAllowed':false},
            {'name':'connectivity','type':'input','example':'wireless', 'variationAllowed':true},
            {'name':'form_factor','type':'input','example':'In Ear', 'variationAllowed':false},
        ],
        'Headphone' : [
            {'name':'brand','type':'input','example':'Samsung', 'variationAllowed':false},
            {'name':'color','type':'select','example':'Black', options: generateKeyValue(fashionColors), 'variationAllowed':true},
            {'name':'model','type':'input','example':'Galaxy Bean Buds Live', 'variationAllowed':false},
            {'name':'connectivity','type':'input','example':'wireless', 'variationAllowed':true},
            {'name':'form_factor','type':'input','example':'In Ear', 'variationAllowed':false},
        ],
        'Smart Watches' : [
            {'name':'brand','type':'input','example':'Boat', 'variationAllowed':false},
            {'name':'color','type':'select','example':'Black', options: generateKeyValue(fashionColors), 'variationAllowed':true},
            {'name':'model','type':'input','example':'Ultima Call Max', 'variationAllowed':false},
            {'name':'style','type':'input','example':'Modern', 'variationAllowed':true},
            {'name':'screen_size','type':'input','example':'1.99"', 'variationAllowed':true},
        ],
        'Desktop and Laptop' : [
            {'name':'brand','type':'input','example':'Apple', 'variationAllowed':false},
            {'name':'color','type':'select','example':'Black', options: generateKeyValue(fashionColors), 'variationAllowed':true},
            {'name':'model','type':'input','example':'MacBook Air', 'variationAllowed':false},
            {'name':'screen_size','type':'input','example':'13"', 'variationAllowed':true},
            {'name':'memory','type':'input','example':'8GB', 'variationAllowed':true},
            {'name':'cpu','type':'input','example':'Core M family', 'variationAllowed':false},
            {'name':'cpu_mfr','type':'input','example':'Intel', 'variationAllowed':false},
            {'name':'storage','type':'input','example':'256GB"', 'variationAllowed':true},
        ],
    },
    'Grocery':{
        'Fruits and Vegetables':[
        ],
        'Masala & Seasoning':[
        ],
        'Oil & Ghee':[
        ],
        'Gourmet & World Foods':[
        ],
        'Foodgrains':[
        ],
        'Eggs, Meat & Fish':[
        ],
        'Cleaning & Household':[
            {'name':'Size','type':'input','example':'', 'variationAllowed':true},
            {'name':'Color','type':'input','example':'', 'variationAllowed':true},
            {'name':'Style','type':'input','example':'', 'variationAllowed':true},
            {'name':'Number of Items','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Material Type','type':'input','example':'plastic', 'variationAllowed':true},
            {'name':'Width Range','type':'input','example':'','unit':unitLength},
            {'name':'Length Range','type':'input','example':'','unit':unitLength},
        ],
        'Beverages':[
            {'name':'Size','type':'input','example':'', 'variationAllowed':true},
            {'name':'Color','type':'input','example':'', 'variationAllowed':true},
            {'name':'stylename','type':'input','example':'', 'variationAllowed':true}
        ],
        'Beauty & Hygiene':[
            {'name':'Size','type':'input','example':'', 'variationAllowed':true},
            {'name':'Color','type':'input','example':'', 'variationAllowed':true},
            {'name':'Scent','type':'input','example':'rose', 'variationAllowed':true},
            {'name':'Number of Items','type':'number','example':'6', 'variationAllowed':true},
            {'name':'PPU Count','type':'input','example':'1', 'variationAllowed':true},
            {'name':'Item Form','type':'input','example':'Cream', 'variationAllowed':true},
            {'name':'Model','type':'input','example':'AB12', 'variationAllowed':true},
            {'name':'Item Weight','type':'input','example':'5','unit':unitWeight},
        ],
        'Bakery, Cakes & Dairy':[
            {'name':'Size','type':'input','example':'small', 'variationAllowed':true},
            {'name':'Number of Items','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Color','type':'input','example':'', 'variationAllowed':true},
            {'name':'Material Type','type':'input','example':'floor', 'variationAllowed':true},
            {'name':'Item Weight','type':'input','example':'5','unit':unitWeight},
            {'name':'Unit Count','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Model','type':'input','example':'AB-12', 'variationAllowed':true},
            {'name':'Shape','type':'input','example':'Round', 'variationAllowed':true},
            {'name':'Capacity','type':'float','example':'4','unit':unitCapacity},
            {'name':'Manufacturer Part Number','type':'float','example':'A-112', 'variationAllowed':true},
        ],
        'Kitchen Accessories':[
            {'name':'Size','type':'input','example':'small', 'variationAllowed':true},
            {'name':'Number of Items','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Color','type':'input','example':'', 'variationAllowed':true},
            {'name':'Material Type','type':'input','example':'Steel', 'variationAllowed':true},
            {'name':'Item Weight','type':'input','example':'5','unit':unitWeight},
            {'name':'Unit Count','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Model','type':'input','example':'AB-12', 'variationAllowed':true},
            {'name':'Pattern','type':'input','example':'', 'variationAllowed':true},
        ],
        'Baby Care':[
            {'name':'Scent','type':'input','example':'rose', 'variationAllowed':true},
            {'name':'Scent','type':'input','example':'rose', 'variationAllowed':true},
            {'name':'Style','type':'input','example':'modern', 'variationAllowed':true},
            {'name':'Number of Items','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Material Type','type':'input','example':'rose', 'variationAllowed':true},
            {'name':'Color','type':'input','example':'', 'variationAllowed':true},
            {'name':'PPU Count','type':'input','example':'1', 'variationAllowed':true},
            {'name':'Item Form','type':'input','example':'Cream', 'variationAllowed':true},
            {'name':'Pattern','type':'input','example':'', 'variationAllowed':true},
            {'name':'Item Weight','type':'input','example':'5','unit':unitWeight},
            {'name':'Model','type':'input','example':'AB-12', 'variationAllowed':true},
        ],
        'Snacks & Branded Foods':[
        ],
        'Pet Care':[
            {'name':'Scent Name','type':'input','example':'mild', 'variationAllowed':true},
            {'name':'Flavor','type':'input','example':'', 'variationAllowed':true},
            {'name':'Color','type':'input','example':'brown', 'variationAllowed':true},
            {'name':'Number of Items','type':'number','example':'6', 'variationAllowed':true},
        ],
        'Stationery':[
            {'name':'Size','type':'input','example':'A4,6x4', 'variationAllowed':true},
            {'name':'Paper Size','type':'input','example':'', 'variationAllowed':true},
            {'name':'Number of Items','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Color','type':'input','example':'', 'variationAllowed':true},
            {'name':'Line Size','type':'input','example':'', 'variationAllowed':true} ,
            {'name':'Maximum Size','type':'input','example':'', 'variationAllowed':true} ,
        ],
    },
    'Home & Decor':{
        'Home Decor':[
            {'name':'Size','type':'input','example':'small', 'variationAllowed':true},
            {'name':'Style','type':'input','example':'modern', 'variationAllowed':true},
            {'name':'Number of Items','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Material Type','type':'input','example':'wood', 'variationAllowed':false},
            {'name':'Pattern','type':'input','example':'Sripped', 'variationAllowed':true},
            {'name':'Item Weight','type':'input','example':'5','unit':unitWeight},
            {'name':'Model','type':'input','example':'AB-12', 'variationAllowed':true},
            {'name':'Manufacturer Part Number','type':'float','example':'A-112', 'variationAllowed':false},
            {'name':'Color','type':'input','example':'', 'variationAllowed':true},
            {'name':'Wattage','type':'input','example':'', 'unit':unitWattage},
            {'name':'Unit Count','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Shape','type':'input','example':'Round', 'variationAllowed':true},
        ],
        'Home Furnishings':[
            {'name':'Size','type':'input','example':'small', 'variationAllowed':true},
            {'name':'Style','type':'input','example':'modern', 'variationAllowed':true},
            {'name':'Number of Items','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Color','type':'input','example':'', 'variationAllowed':true},
            {'name':'Material Type','type':'input','example':'wood', 'variationAllowed':true},
            {'name':'Pattern','type':'input','example':'Sripped', 'variationAllowed':true},
            {'name':'Display Weight','type':'input','example':'5','unit':unitWeight},
        ],
        'Furniture':[
            {'name':'Size','type':'input','example':'small', 'variationAllowed':true},
            {'name':'Style','type':'input','example':'modern', 'variationAllowed':true},
            {'name':'Number of Items','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Material Type','type':'input','example':'wood', 'variationAllowed':true},
            {'name':'Pattern','type':'input','example':'Sripped', 'variationAllowed':true},
            {'name':'Item Weight','type':'input','example':'5','unit':unitWeight},
            {'name':'Unit Count','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Model','type':'input','example':'AB-12', 'variationAllowed':true},
            {'name':'Color','type':'input','example':'', 'variationAllowed':true},
            {'name':'Team Name','type':'input','example':'chennai super kings', 'variationAllowed':true},
            {'name':'Shape','type':'input','example':'Round', 'variationAllowed':true},
        ],
        'Garden and Outdoor Products':[
            {'name':'Material Type','type':'input','example':'wood', 'variationAllowed':true},
            {'name':'Color','type':'input','example':'', 'variationAllowed':true},
        ],
        'Home Improvement':[
            {'name':'Size','type':'input','example':'small', 'variationAllowed':true},
            {'name':'Style','type':'input','example':'modern', 'variationAllowed':true},
            {'name':'Number of Items','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Color','type':'input','example':'', 'variationAllowed':true},
        ],
        'Cookware and Dining':[
            {'name':'Size','type':'input','example':'small', 'variationAllowed':true},
            {'name':'Number of Items','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Material Type','type':'input','example':'wood', 'variationAllowed':true},
            {'name':'Pattern','type':'input','example':'Sripped', 'variationAllowed':true},
            {'name':'Item Weight','type':'input','example':'5','unit':unitWeight},
            {'name':'Unit Count','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Model','type':'input','example':'AB-12', 'variationAllowed':true},
            {'name':'Shape','type':'input','example':'Round', 'variationAllowed':true},
            {'name':'Capacity','type':'input','example':'', 'unit':unitCapacity},
            {'name':'Manufacturer Part Number','type':'float','example':'A-112', 'variationAllowed':true},
            {'name':'Color','type':'input','example':'', 'variationAllowed':true},
        ],
        'Storage and Organisation':[
            {'name':'Size','type':'input','example':'small', 'variationAllowed':true},
            {'name':'Style','type':'input','example':'modern', 'variationAllowed':true},
            {'name':'Number of Items','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Material Type','type':'input','example':'wood', 'variationAllowed':true},
            {'name':'Item Weight','type':'input','example':'5','unit':unitWeight},
            {'name':'Unit Count','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Team Name','type':'input','example':'Lions', 'variationAllowed':true},
            {'name':'Model','type':'input','example':'AB-12', 'variationAllowed':true},
            {'name':'Color','type':'input','example':'', 'variationAllowed':true},
            {'name':'Shape','type':'input','example':'Round', 'variationAllowed':true},
        ],
    },
    'Health & Wellness':{
        'default': [
            {'name':'Size','type':'input','example':'Large', 'variationAllowed':true},
            {'name':'Item Weight','type':'input','example':'5','unit':unitWeight},
        ],
        'Pain Relieving Ointments':[
            {'name':'Style','type':'input','example':'Art Deco', 'variationAllowed':true},
            {'name':'Size','type':'input','example':'Large', 'variationAllowed':true},
            {'name':'Item Weight','type':'input','example':'5','unit':unitWeight},
        ],
        'Nutrition and Supplements':[
            {'name':'Flavour','type':'input','example':'Strawberry', 'variationAllowed':true},
            {'name':'Size','type':'input','example':'small', 'variationAllowed':true},
            {'name':'Scent','type':'input','example':'musk', 'variationAllowed':true},
            {'name':'Number of Items','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Item Weight','type':'input','example':'5','unit':unitWeight},
            {'name':'Color','type':'input','example':'', 'variationAllowed':true},
            {'name':'PPU Count','type':'input','example':'6', 'variationAllowed':false},
            {'name':'Model','type':'input','example':'EEPL 456', 'variationAllowed':false},
        ],
        'Personal and Baby Care':[
            {'name':'Scent','type':'input','example':'musk', 'variationAllowed':true},
            {'name':'Size','type':'input','example':'small', 'variationAllowed':true},
            {'name':'Number of Items','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Itrm Form','type':'input','example':'Cream', 'variationAllowed':true},
            {'name':'Item Weight','type':'input','example':'5','unit':unitWeight},
            {'name':'PPU Count','type':'input','example':'6', 'variationAllowed':true},
            {'name':'Model','type':'input','example':'EEPL 456', 'variationAllowed':false},
        ],
        'Sexual Wellness':[
            {'name':'Scent','type':'input','example':'musk', 'variationAllowed':true},
            {'name':'Size','type':'input','example':'small', 'variationAllowed':true},
            {'name':'Number of Items','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Item Form','type':'input','example':'Cream', 'variationAllowed':true},
            {'name':'Item Weight','type':'input','example':'5','unit':unitWeight},
            {'name':'PPU Count','type':'input','example':'6', 'variationAllowed':true},
            {'name':'Model','type':'input','example':'EEPL 456', 'variationAllowed':false},
        ],
        'Gastric and Other Concerns':[
            {'name':'Flavour','type':'input','example':'Strawberry', 'variationAllowed':true},
            {'name':'Size','type':'input','example':'small', 'variationAllowed':true},
            {'name':'Scent','type':'input','example':'musk', 'variationAllowed':true},
            {'name':'Number of Items','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Item Weight','type':'input','example':'5','unit':unitWeight},
            {'name':'Color','type':'input','example':'', 'variationAllowed':true},
            {'name':'PPU Count','type':'input','example':'6', 'variationAllowed':true},
            {'name':'Model','type':'input','example':'EEPL 456', 'variationAllowed':false},
        ],
        'Covid Essentials':[
            {'name':'Size','type':'input','example':'small', 'variationAllowed':true},
            {'name':'Style','type':'input','example':'Cape Cod', 'variationAllowed':true},
            {'name':'Material Type','type':'number','example':'Cotton', 'variationAllowed':true},
            {'name':'Item Weight','type':'input','example':'5','unit':unitWeight},
            {'name':'Model','type':'input','example':'EEPL 456', 'variationAllowed':true},
            {'name':'Manufacturer Part Number','type':'input','example':'RTC 54', 'variationAllowed':true},
            {'name':'Unit Count','type':'number','example':'4', 'variationAllowed':true},
            {'name':'Color','type':'input','example':'', 'variationAllowed':true},
            {'name':'Team Name','type':'input','example':'Royal', 'variationAllowed':true},
            {'name':'Item Shape','type':'input','example':'Molded cup', 'variationAllowed':false},
        ],
        'Diabetes Control':[
            {'name':'Flavour','type':'input','example':'Strawberry', 'variationAllowed':true},
            {'name':'Size','type':'input','example':'small', 'variationAllowed':true},
            {'name':'Scent','type':'input','example':'musk', 'variationAllowed':true},
            {'name':'Item Package Quantity','type':'number','example':'6', 'variationAllowed':true},
        ],
        'Health Devices':[
            {'name':'Thickness','type':'input','example':'11', 'variationAllowed':true},
            {'name':'Material Type','type':'input','example':'Steel', 'variationAllowed':true},
            {'name':'Model','type':'input','example':'EEPL 456', 'variationAllowed':true},
            {'name':'Shape','type':'input','example':'Round', 'variationAllowed':true},
            {'name':'Capacity','type':'input','example':'5','unit':unitCapacity},
            {'name':'Number of Items','type':'number','example':'6', 'variationAllowed':true},
            {'name':'Manufacturer Part Number','type':'input','example':'RTC 54', 'variationAllowed':true},
            {'name':'Color','type':'input','example':'', 'variationAllowed':true},
        ],
    },
    'Beauty & Personal Care':{
        'default': [
            {'name':'brand','type':'input','example':'Kesh King', 'variationAllowed':false},
            {'name':'color','type':'select','example':'Black', options: generateKeyValue(fashionColors), 'variationAllowed':true},
            {'name':'gender','type':'input','example':'Male', 'variationAllowed':true},
            {'name': 'ingredient','type':'input','example':'neem', 'variationAllowed':false},
            {'name':'conscious','type':'input','example':'natural', 'variationAllowed':false},
            {'name':'preference','type':'input','example':'herbal', 'variationAllowed':false},
            {'name':'formulation','type':'input','example':'liquid', 'variationAllowed':false},
            {'name':'skin_type','type':'input','example':'normal', 'variationAllowed':true},
        ],
    },
    'Food and Beverages':{

    }
};


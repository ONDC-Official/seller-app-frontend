export const MAX_STRING_LENGTH = 255;
export const MAX_STRING_LENGTH_50 = 50;
export const MAX_STRING_LENGTH_14 = 14;
export const MAX_STRING_LENGTH_10 = 10;
export const MAX_STRING_LENGTH_12 = 12;
export const MAX_STRING_LENGTH_3 = 3;
export const MAX_STRING_LENGTH_6 = 6;
export const MAX_STRING_LENGTH_8 = 8;
export const MAX_STRING_LENGTH_13 = 13;

export const PRODUCT_CATEGORY = {
    "Grocery": "Grocery",
    "F&B": "F&B",
    "Home & Decor": "Home & Decor",
    "Health & Wellness": "Health & Wellness",
    "Electronics": "Electronics",
    "Beauty & Personal Care": "Beauty & Personal Care",
    "Fashion": "Fashion",
}

export const DELIVERY_TYPE_LIST = {
    "Immediate Delivery": "Immediate Delivery",
    "Express Delivery": "Express Delivery",
    "Standard Delivery": "Standard Delivery",
    "Same Day Delivery": "Same Day Delivery",
    "Next Day Delivery": "Next Day Delivery",
}

export const PRODUCT_SUBCATEGORY = {
    "Grocery": [
        {value: 'Fruits and Vegetables', key: 'Fruits and Vegetables', protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: 'Masala & Seasoning', key: 'Masala & Seasoning', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: 'Oil & Ghee', key: 'Oil & Ghee', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: 'Gourmet & World Foods', key: 'Gourmet & World Foods', protocolKey: "@ondc/org/statutory_reqs_prepackaged_food"},
        {value: 'Foodgrains', key: 'Foodgrains', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: 'Eggs, Meat & Fish', key: 'Eggs, Meat & Fish', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: 'Cleaning & Household', key: 'Cleaning & Household', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: 'Beverages', key: 'Beverages', protocolKey: "@ondc/org/statutory_reqs_prepackaged_food"},
        {value: 'Beauty & Hygiene', key: 'Beauty & Hygiene', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: 'Bakery, Cakes & Dairy', key: 'Bakery, Cakes & Dairy', protocolKey: "@ondc/org/statutory_reqs_prepackaged_food"},
        {value: 'Kitchen Accessories', key: 'Kitchen Accessories', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: 'Baby Care', key: 'Baby Care', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: 'Snacks & Branded Foods', key: 'Snacks & Branded Foods', protocolKey: "@ondc/org/statutory_reqs_prepackaged_food"},
        {value: 'Pet Care', key: 'Pet Care', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: 'Stationery', key: 'Stationery', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
    ],
    "Beauty & Personal Care": [
        {
            "value": "Fragrance",
            "key": "Fragrance",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Bath Soaps and Gels",
            "key": "Bath Soaps and Gels",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Hair Oils, Care, and Styling",
            "key": "Hair Oils, Care, and Styling",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Shampoos and Conditioners",
            "key": "Shampoos and Conditioners",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Shaving and Grooming",
            "key": "Shaving and Grooming",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Beard Care and Tools",
            "key": "Beard Care and Tools",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Grooming Tools and Accessories",
            "key": "Grooming Tools and Accessories",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Makeup - Nail Care",
            "key": "Makeup - Nail Care",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Makeup - Eyes",
            "key": "Makeup - Eyes",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Makeup - Face",
            "key": "Makeup - Face",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Makeup - Lips",
            "key": "Makeup - Lips",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Makeup - Body",
            "key": "Makeup - Body",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Makeup - Remover",
            "key": "Makeup - Remover",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Makeup - Sets and Kits",
            "key": "Makeup - Sets and Kits",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Makeup - Tools and Brushes",
            "key": "Makeup - Tools and Brushes",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Makeup - Kits and Combos",
            "key": "Makeup - Kits and Combos",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Skin Care - Face Cleansers",
            "key": "Skin Care - Face Cleansers",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Skin Care - Hand and Feet",
            "key": "Skin Care - Hand and Feet",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Body Care - Cleansers",
            "key": "Body Care - Cleansers",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Body Care - Moisturizers",
            "key": "Body Care - Moisturizers",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Body Care - Loofah and Other Tools",
            "key": "Body Care - Loofah and Other Tools",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Body Care - Bath Salt and Additives",
            "key": "Body Care - Bath Salt and Additives",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Hair Care - Shampoo, Oils, Conditioners",
            "key": "Hair Care - Shampoo, Oils, Conditioners",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Skin Care - Lotions, Moisturisers, and Creams",
            "key": "Skin Care - Lotions, Moisturisers, and Creams",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Skin Care - Oils and Serums",
            "key": "Skin Care - Oils and Serums",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Gift Voucher",
            "key": "Gift Voucher",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        }
    ],
    "Fashion": [
        {value: "Men's Fashion Accessories", key: "Men's Fashion Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Men's Footwear Accessories", key: "Men's Footwear Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Men's Topwear", key: "Men's Topwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Men's Bottomwear", key: "Men's Bottomwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Men's Innerwear & Sleepwear", key: "Men's Innerwear & Sleepwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Men's Bags & Luggage", key: "Men's Bags & Luggage", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Men's Eyewear", key: "Men's Eyewear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Men's Footwear", key: "Men's Footwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Men's Jewellery", key: "Men's Jewellery", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Women's Fashion Accessories", key: "Women's Fashion Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Women's Footwear Accessories", key: "Women's Footwear Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Women's Indian & Fusion Wear", key: "Women's Indian & Fusion Wear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Women's Western Wear", key: "Women's Western Wear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Women's Lingerie & Sleepwear", key: "Women's Lingerie & Sleepwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Women's Bags & Luggage", key: "Women's Bags & Luggage", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Women's Eyewear", key: "Women's Eyewear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Women's Footwear", key: "Women's Footwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Women's Jewellery", key: "Women's Jewellery", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Boy's Clothing", key: "Boy's Clothing", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Boy's Footwear", key: "Boy's Footwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Girl's Clothing", key: "Girl's Clothing", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Girl's Footwear", key: "Girl's Footwear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Infant's Wear", key: "Infant's Wear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Infant Care & Accessories", key: "Infant Care & Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Infant Feeding & Nursing Essentials", key: "Infant Feeding & Nursing Essentials", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Infant Bath Accessories", key: "Infant Bath Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Infant Health & Safety", key: "Infant Health & Safety", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Infant Diapers & Toilet Training", key: "Infant Diapers & Toilet Training", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Kid's Towels & Wrappers", key: "Kid's Towels & Wrappers", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Kid's Fashion Accessories", key: "Kid's Fashion Accessories", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Kid's Jewellery", key: "Kid's Jewellery", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Kid's Eyewear", key: "Kid's Eyewear", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: "Kid's Bags & Luggage", key: "Kid's Bags & Luggage", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
    ],
    "Home & Decor": [
        {value: 'Home Decor', key: 'Home Decor', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: 'Home Furnishings', key: 'Home Furnishings', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: 'Furniture', key: 'Furniture', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: 'Garden and Outdoor Products', key: 'Garden and Outdoor Products', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: 'Home Improvement', key: 'Home Improvement', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: 'Cookware and Dining', key: 'Cookware and Dining', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {value: 'torage and Organisation', key: 'Storage and Organisation', protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
    ],
    "F&B": [
        {value: "Baklava", key: "Baklava", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Bao", key: "Bao", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Barbecue", key: "Barbecue", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Biryani", key: "Biryani", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Bread", key: "Bread", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Burger", key: "Burger", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Cakes", key: "Cakes", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Chaat", key: "Chaat", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Cheesecakes", key: "Cheesecakes", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Chicken", key: "Chicken", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Chicken wings", key: "Chicken wings", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Chips", key: "Chips", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Coffee", key: "Coffee", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Cookies", key: "Cookies", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Crepes", key: "Crepes", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Dal", key: "Dal", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Desserts", key: "Desserts", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Dhokla", key: "Dhokla", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Dosa", key: "Dosa", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Doughnuts", key: "Doughnuts", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Eggs", key: "Eggs", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Energy Drinks", key: "Energy Drinks", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Falafel", key: "Falafel", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Fresh Juice", key: "Fresh Juice", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Fries", key: "Fries", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Ice cream", key: "Ice cream", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Idli", key: "Idli", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Kabab", key: "Kabab", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Kachori", key: "Kachori", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Kulfi", key: "Kulfi", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Lassi", key: "Lassi", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Meal bowl", key: "Meal bowl", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Mezze", key: "Mezze", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Mithai", key: "Mithai", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Momos", key: "Momos", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Mutton", key: "Mutton", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Nachos", key: "Nachos", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Noodles", key: "Noodles", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Pakodas", key: "Pakodas", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Pancakes", key: "Pancakes", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Paneer", key: "Paneer", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Pasta", key: "Pasta", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Pastries", key: "Pastries", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Pie", key: "Pie", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Pizza", key: "Pizza", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Poha", key: "Poha", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Raita", key: "Raita", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Rice", key: "Rice", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Rolls", key: "Rolls", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Roti", key: "Roti", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Salad", key: "Salad", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Samosa", key: "Samosa", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Sandwich", key: "Sandwich", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Seafood", key: "Seafood", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Shakes & Smoothies", key: "Shakes & Smoothies", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Soft Drink", key: "Soft Drink", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Soup", key: "Soup", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Spring Roll", key: "Spring Roll", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Sushi", key: "Sushi", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Tacos", key: "Tacos", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Tandoori", key: "Tandoori", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Tart", key: "Tart", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Tea", key: "Tea", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Thali", key: "Thali", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Tikka", key: "Tikka", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Upma", key: "Upma", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Uttapam", key: "Uttapam", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Vada", key: "Vada", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Vegetables", key: "Vegetables", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Waffle", key: "Waffle", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Wrap", key: "Wrap", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"},
        {value: "Yogurt", key: "Yogurt", protocolKey: "@ondc/org/mandatory_reqs_veggies_fruits"}
    ],
    "Electronics": [
        {value: "Audio", key: "Audio", protocolKey: ""},
        {value: "Camera and Camcorder", key: "Camera and Camcorder", protocolKey: ""},
        {value: "Computer Peripheral", key: "Computer Peripheral", protocolKey: ""},
        {value: "Desktop and Laptop", key: "Desktop and Laptop", protocolKey: ""},
        {value: "Earphone", key: "Earphone", protocolKey: ""},
        {value: "Gaming", key: "Gaming", protocolKey: ""},
        {value: "Headphone", key: "Headphone", protocolKey: ""},
        {value: "Mobile Phone", key: "Mobile Phone", protocolKey: ""},
        {value: "Mobile Accessories", key: "Mobile Accessories", protocolKey: ""},
        {value: "Safety Security", key: "Safety Security", protocolKey: ""},
        {value: "Smart Watches", key: "Smart Watches", protocolKey: ""},
        {value: "Speaker", key: "Speaker", protocolKey: ""},
        {value: "Television", key: "Television", protocolKey: ""},
        {value: "Video", key: "Video", protocolKey: ""},
        {value: "Air Conditioning and Air Cleaners", key: "Air Conditioning and Air Cleaners", protocolKey: ""},
        {value: "Health, Home and Personal Care", key: "Health, Home and Personal Care", protocolKey: ""},
        {value: "Heaters", key: "Heaters", protocolKey: ""},
        {value: "Kitchen Appliances", key: "Kitchen Appliances", protocolKey: ""},
        {value: "Lighting & Electric Fans", key: "Lighting & Electric Fans", protocolKey: ""},
        {value: "Refrigerators and Freezers", key: "Refrigerators and Freezers", protocolKey: ""},
        {value: "Vacuum Cleaners", key: "Vacuum Cleaners", protocolKey: ""},
        {value: "Washing Machines and Accessories", key: "Washing Machines and Accessories", protocolKey: ""},
        {value: "Water Purifiers and Coolers", key: "Water Purifiers and Coolers", protocolKey: ""},
        {value: "Inverter & Stabilizer", key: "Inverter & Stabilizer", protocolKey: ""
        }
      ],
    "Health & Wellness": [
        {key: "Pain Relief", value: "Pain Relief", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {key: "Nutrition and Fitness Supplements", value: "Nutrition and Fitness Supplements", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {key: "Personal Care", value: "Personal Care", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {key: "Speciality Care", value: "Speciality Care", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {key: "Covid Essentials", value: "Covid Essentials", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {key: "Diabetes Control", value: "Diabetes Control", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {key: "Healthcare Devices", value: "Healthcare Devices", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"},
        {key: "Ayush", value: "Ayush", protocolKey: "@ondc/org/statutory_reqs_packaged_commodities"}

      ]
};

export const FIELD_NOT_ALLOWED_BASED_ON_PROTOCOL_KEY = {
    "@ondc/org/mandatory_reqs_veggies_fruits": ["manufacturerOrPackerName", "manufacturerOrPackerAddress", "commonOrGenericNameOfCommodity", "monthYearOfManufacturePackingImport", "nutritionalInfo", "additiveInfo", 'importerFSSAILicenseNo', "brandOwnerFSSAILicenseNo"],
    "@ondc/org/statutory_reqs_packaged_commodities": ["nutritionalInfo", "additiveInfo", "importerFSSAILicenseNo", "brandOwnerFSSAILicenseNo"],
    "@ondc/org/statutory_reqs_prepackaged_food": ["manufacturerOrPackerName", "manufacturerOrPackerAddress", "commonOrGenericNameOfCommodity", "monthYearOfManufacturePackingImport"],
};
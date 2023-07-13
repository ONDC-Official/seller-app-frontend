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
    "Beauty & Personal Care": "Beauty & Personal Care",
    "Fashion": "Fashion",
    "Home and Decor": "Home and Decor",
    "F&B": "F&B",
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
        {value: "Bath & Body", key: "Bath & Body", protocolKey: ''},
        {value: "Feminine Care", key: "Feminine Care", protocolKey: ''},
        {value: "Fragrance", key: "Fragrance", protocolKey: ''},
        {value: "Hair Care", key: "Hair Care", protocolKey: ''},
        {value: "Make Up", key: "Make Up", protocolKey: ''},
        {value: "Men's Grooming", key: "Men's Grooming", protocolKey: ''},
        {value: "Oral Care", key: "Oral Care", protocolKey: ''},
        {value: "Skin Care", key: "Skin Care", protocolKey: ''},
        {value: "Maternity Care", key: "Maternity Care", protocolKey: ''},
        {value: "Baby Care", key: "Baby Care", protocolKey: ''},
        {value: "Nursing & Feeding", key: "Nursing & Feeding", protocolKey: ''},
        {value: "Sexual Wellness & Sensuality", key: "Sexual Wellness & Sensuality", protocolKey: ''},
        {value: "Tools & Accessories", key: "Tools & Accessories", protocolKey: ''},
    ],
    "Fashion": [
        {value: "Men's Fashion Accessories", key: "Men's Fashion Accessories", protocolKey: ''},
        {value: "Men's Footwear Accessories", key: "Men's Footwear Accessories", protocolKey: ''},
        {value: "Men's Topwear", key: "Men's Topwear", protocolKey: ''},
        {value: "Men's Bottomwear", key: "Men's Bottomwear", protocolKey: ''},
        {value: "Men's Innerwear & Sleepwear", key: "Men's Innerwear & Sleepwear", protocolKey: ''},
        {value: "Men's Bags & Luggage", key: "Men's Bags & Luggage", protocolKey: ''},
        {value: "Men's Eyewear", key: "Men's Eyewear", protocolKey: ''},
        {value: "Men's Footwear", key: "Men's Footwear", protocolKey: ''},
        {value: "Men's Jewellery", key: "Men's Jewellery", protocolKey: ''},
        {value: "Women's Fashion Accessories", key: "Women's Fashion Accessories", protocolKey: ''},
        {value: "Women's Footwear Accessories", key: "Women's Footwear Accessories", protocolKey: ''},
        {value: "Women's Indian & Fusion Wear", key: "Women's Indian & Fusion Wear", protocolKey: ''},
        {value: "Women's Western Wear", key: "Women's Western Wear", protocolKey: ''},
        {value: "Women's Lingerie & Sleepwear", key: "Women's Lingerie & Sleepwear", protocolKey: ''},
        {value: "Women's Bags & Luggage", key: "Women's Bags & Luggage", protocolKey: ''},
        {value: "Women's Eyewear", key: "Women's Eyewear", protocolKey: ''},
        {value: "Women's Footwear", key: "Women's Footwear", protocolKey: ''},
        {value: "Women's Jewellery", key: "Women's Jewellery", protocolKey: ''},
        {value: "Boy's Clothing", key: "Boy's Clothing", protocolKey: ''},
        {value: "Boy's Footwear", key: "Boy's Footwear", protocolKey: ''},
        {value: "Girl's Clothing", key: "Girl's Clothing", protocolKey: ''},
        {value: "Girl's Footwear", key: "Girl's Footwear", protocolKey: ''},
        {value: "Infant's Wear", key: "Infant's Wear", protocolKey: ''},
        {value: "Infant Care & Accessories", key: "Infant Care & Accessories", protocolKey: ''},
        {value: "Infant Feeding & Nursing Essentials", key: "Infant Feeding & Nursing Essentials", protocolKey: ''},
        {value: "Infant Bath Accessories", key: "Infant Bath Accessories", protocolKey: ''},
        {value: "Infant Health & Safety", key: "Infant Health & Safety", protocolKey: ''},
        {value: "Infant Diapers & Toilet Training", key: "Infant Diapers & Toilet Training", protocolKey: ''},
        {value: "Kid's Towels & Wrappers", key: "Kid's Towels & Wrappers", protocolKey: ''},
        {value: "Kid's Fashion Accessories", key: "Kid's Fashion Accessories", protocolKey: ''},
        {value: "Kid's Jewellery", key: "Kid's Jewellery", protocolKey: ''},
        {value: "Kid's Eyewear", key: "Kid's Eyewear", protocolKey: ''},
        {value: "kids Kid's Bags & Luggage", key: "Kid's Bags & Luggage", protocolKey: ''},
    ],
    "Home and Decor": [
        {value: 'Home Decor', key: 'Home Decor', protocolKey: ''},
        {value: 'Home Furnishings', key: 'Home Furnishings', protocolKey: ''},
        {value: 'Furniture', key: 'Furniture', protocolKey: ''},
        {value: 'Garden and Outdoor Products', key: 'Garden and Outdoor Products', protocolKey: ''},
        {value: 'Home Improvement', key: 'Home Improvement', protocolKey: ''},
        {value: 'Cookware and Dining', key: 'Cookware and Dining', protocolKey: ''},
        {value: 'torage and Organisation', key: 'Storage and Organisation', protocolKey: ''},
    ],
    "F&B": [
        {value: 'Continental', key: 'Continental', protocolKey: ''},
        {value: 'Middle Eastern', key: 'Middle Eastern', protocolKey: ''},
        {value: 'North Indian', key: 'North Indian', protocolKey: ''},
        {value: 'Pan-Asian', key: 'Pan-Asian', protocolKey: ''},
        {value: 'Regional Indian', key: 'Regional Indian', protocolKey: ''},
        {value: 'South Indian', key: 'South Indian', protocolKey: ''},
        {value: 'Tex-Mexican', key: 'Tex-Mexican', protocolKey: ''},
        {value: 'World Cuisines', key: 'World Cuisines', protocolKey: ''},
        {value: 'Healthy Food', key: 'Healthy Food', protocolKey: ''},
        {value: 'Fast Food', key: 'Fast Food', protocolKey: ''},
        {value: 'Desserts', key: 'Desserts', protocolKey: ''},
        {value: 'Bakes & Cakes', key: 'Bakes & Cakes', protocolKey: ''},
        {value: 'Beverages (MTO)', key: 'Beverages (MTO)', protocolKey: ''},
    ]
};

export const FIELD_NOT_ALLOWED_BASED_ON_PROTOCOL_KEY = {
    "@ondc/org/mandatory_reqs_veggies_fruits": ["manufacturerOrPackerName", "manufacturerOrPackerAddress", "commonOrGenericNameOfCommodity", "monthYearOfManufacturePackingImport", "nutritionalInfo", "additiveInfo", 'importerFSSAILicenseNo', "brandOwnerFSSAILicenseNo"],
    "@ondc/org/statutory_reqs_packaged_commodities": ["nutritionalInfo", "additiveInfo", "importerFSSAILicenseNo", "brandOwnerFSSAILicenseNo"],
    "@ondc/org/statutory_reqs_prepackaged_food": ["manufacturerOrPackerName", "manufacturerOrPackerAddress", "commonOrGenericNameOfCommodity", "packQty", "monthYearOfManufacturePackingImport"],
};
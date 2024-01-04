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
        {
            "value": "Shirts",
            "key": "Shirts",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "T Shirts",
            "key": "T Shirts",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Sweatshirts",
            "key": "Sweatshirts",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Kurtas & Kurta Sets",
            "key": "Kurtas & Kurta Sets",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Jackets & Coats",
            "key": "Jackets & Coats",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Sweaters",
            "key": "Sweaters",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Suits",
            "key": "Suits",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Sherwanis",
            "key": "Sherwanis",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Track Shirts",
            "key": "Track Shirts",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Track Suits",
            "key": "Track Suits",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Unstitched Fabrics",
            "key": "Unstitched Fabrics",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Dresses",
            "key": "Dresses",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Tops",
            "key": "Tops",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Trousers",
            "key": "Trousers",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Capris",
            "key": "Capris",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Coordinates",
            "key": "Coordinates",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Playsuits",
            "key": "Playsuits",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Jumpsuits",
            "key": "Jumpsuits",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Shrugs & Blouses",
            "key": "Shrugs & Blouses",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Blazers & Waistcoats",
            "key": "Blazers & Waistcoats",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Tights, Leggings & Jeggings",
            "key": "Tights, Leggings & Jeggings",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Track Pants",
            "key": "Track Pants",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Jeans",
            "key": "Jeans",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Shorts",
            "key": "Shorts",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Joggers",
            "key": "Joggers",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Dhotis & Dhoti Pants",
            "key": "Dhotis & Dhoti Pants",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Churidars",
            "key": "Churidars",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Salwars",
            "key": "Salwars",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Dungarees & Jumpsuits",
            "key": "Dungarees & Jumpsuits",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Skirts",
            "key": "Skirts",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Clothing Sets",
            "key": "Clothing Sets",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Belts",
            "key": "Belts",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Caps & Hats",
            "key": "Caps & Hats",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Kurtis, Tunics",
            "key": "Kurtis, Tunics",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Sarees",
            "key": "Sarees",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Ethnic Wear",
            "key": "Ethnic Wear",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Palazzos",
            "key": "Palazzos",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Dress Materials",
            "key": "Dress Materials",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Lehenga Cholis",
            "key": "Lehenga Cholis",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Dupattas & Shawls",
            "key": "Dupattas & Shawls",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Burqas & Hijabs",
            "key": "Burqas & Hijabs",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Blouses",
            "key": "Blouses",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Blouse Pieces",
            "key": "Blouse Pieces",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Briefs",
            "key": "Briefs",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Boxers",
            "key": "Boxers",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Vests",
            "key": "Vests",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Robes",
            "key": "Robes",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Night Suits",
            "key": "Night Suits",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Thermal Wear",
            "key": "Thermal Wear",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Swim Bottoms",
            "key": "Swim Bottoms",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Swimwear",
            "key": "Swimwear",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Bra",
            "key": "Bra",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Shapewear",
            "key": "Shapewear",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Sleepwear & Loungewear",
            "key": "Sleepwear & Loungewear",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Camisoles",
            "key": "Camisoles",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Lingerie Sets & Accessories",
            "key": "Lingerie Sets & Accessories",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Bath Robes",
            "key": "Bath Robes",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Towels",
            "key": "Towels",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Pyjamas",
            "key": "Pyjamas",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Party Wear",
            "key": "Party Wear",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Innerwear & Sleepwear",
            "key": "Innerwear & Sleepwear",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Nightwear & Loungewear",
            "key": "Nightwear & Loungewear",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Watches",
            "key": "Watches",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Gloves",
            "key": "Gloves",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Socks",
            "key": "Socks",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Stockings",
            "key": "Stockings",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Laces",
            "key": "Laces",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Soles & Charms",
            "key": "Soles & Charms",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Shoe Racks & Organisers",
            "key": "Shoe Racks & Organisers",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Shoe Care - Accessories",
            "key": "Shoe Care - Accessories",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Flip-Flops & Flats",
            "key": "Flip-Flops & Flats",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Sandals & Floaters",
            "key": "Sandals & Floaters",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Backpacks",
            "key": "Backpacks",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Handbags",
            "key": "Handbags",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Trolley, Luggage & Suitcases",
            "key": "Trolley, Luggage & Suitcases",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Formal Shoes",
            "key": "Formal Shoes",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Casual Shoes",
            "key": "Casual Shoes",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Sports Shoes",
            "key": "Sports Shoes",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Outdoor Shoes",
            "key": "Outdoor Shoes",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Work & Safety Shoes",
            "key": "Work & Safety Shoes",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Ethnic Shoes",
            "key": "Ethnic Shoes",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Boots",
            "key": "Boots",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Heels",
            "key": "Heels",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Contact Lenses",
            "key": "Contact Lenses",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Eye Glasses",
            "key": "Eye Glasses",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Eye Glass Frames",
            "key": "Eye Glass Frames",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Sunglasses",
            "key": "Sunglasses",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Contact Lens Cases",
            "key": "Contact Lens Cases",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Contact Lens Solutions",
            "key": "Contact Lens Solutions",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Contact Lens Tweezers",
            "key": "Contact Lens Tweezers",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Eyeglasses Pouches & Cases",
            "key": "Eyeglasses Pouches & Cases",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Microfiber Wipes",
            "key": "Microfiber Wipes",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Eyewear Slings",
            "key": "Eyewear Slings",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Bracelets",
            "key": "Bracelets",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Chains",
            "key": "Chains",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Mangalsutra",
            "key": "Mangalsutra",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Anklets",
            "key": "Anklets",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Bangles & Bracelets",
            "key": "Bangles & Bracelets",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Necklaces",
            "key": "Necklaces",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Earrings",
            "key": "Earrings",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Jewellery Sets",
            "key": "Jewellery Sets",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Nosepins & Noserings",
            "key": "Nosepins & Noserings",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Pendants",
            "key": "Pendants",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Rings",
            "key": "Rings",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Toe Rings",
            "key": "Toe Rings",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Gold Coins",
            "key": "Gold Coins",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Brooch",
            "key": "Brooch",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        }
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
        {
            "value": "Mobile Phone",
            "key": "Mobile Phone",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Smart Watch",
            "key": "Smart Watch",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Headset",
            "key": "Headset",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Laptop",
            "key": "Laptop",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Desktop",
            "key": "Desktop",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Tablet",
            "key": "Tablet",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Keyboard",
            "key": "Keyboard",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Monitor",
            "key": "Monitor",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Mouse",
            "key": "Mouse",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
        },
        {
            "value": "Power Bank",
            "key": "Power Bank",
            "protocolKey": "@ondc/org/statutory_reqs_packaged_commodities"
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
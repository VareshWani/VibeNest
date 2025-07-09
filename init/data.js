const sampleListings =
//To initaite data in listings page
[
 {
    title: "Tropical Garden Villa with Pool",
    description: "Set in a lush tropical garden, this villa boasts an elegant stone facade and inviting pool deck. Surrounded by palms and exotic plants, it's perfect for immersive privacy and resort-style living.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/28915352/pexels-photo-28915352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 4400,
    location: "Phuket",
    country: "Thailand",
    owner:{
      username:"Siriwan Charoen",
    },
  },
 
  {
    title: "Stone & Wood Pool Villa",
    description: "Combining natural materials like stone and wood, this villa offers a warm, earthy design anchored by a designer pool. Surrounded by native plantings, it’s an oasis of zen and modernity.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/13914273/pexels-photo-13914273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 4300,
    location: "Bali",
    country: "Indonesia",
    owner: "Ketut Dewi"
  },
  
  {
    title: "Contemporary Poolside Villa",
    description: "A sleek villa adjacent to a pristine pool, set under clear skies with lush lawns. Features minimalist architecture and spacious outdoor lounging—perfect for family relaxation.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/17556197/pexels-photo-17556197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 4200,
    location: "Pretoria",
    country: "South Africa",
    owner: "Sipho Mokoena"
  },
 
  {
    title: "Villa among Bali Rice Terraces",
    description: "Nestled within lush Ubud terraces, this Balinese-style villa features an infinity plunge pool, natural stone interiors, and bamboo accents for a peaceful tropical retreat.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 3300,
    location: "Ubud",
    country: "Indonesia",
    owner: "Kadek Dewi"
  },

  {
    title: "French Riviera Pool Estate",
    description: "Sun-drenched Mediterranean estate with stone terraces, grand pool, and flowering bougainvillea—perfect for luxury summer escapes on the Côte d’Azur.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 6000,
    location: "Nice",
    country: "France",
    owner: "Claire Moreau"
  },
  
  {
    title: "Himalayan Retreat Lodge",
    description: "Wooden mountain lodge perched above Pokhara’s valley, offering yoga platforms, panoramic Himalaya views, and meditative seclusion.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/417313/pexels-photo-417313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 2700,
    location: "Pokhara",
    country: "Nepal",
    owner: "Anjali Gurung"
  },
  {
    title: "Zermatt Alpine Farmhouse",
    description: "Rustic Swiss farmhouse in the Bernese Alps with flower boxes, stone walls, and sweeping mountain panoramas—peace meets tradition.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/1587315/pexels-photo-1587315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 4000,
    location: "Bernese Oberland",
    country: "Switzerland",
    owner: "Lukas Zimmermann"
  },
 
  {
    title: "Villa Caldera Cliff Escape",
    description: "A cliff-hugging villa on Santorini’s caldera with private plunge pool and shaded lounges—designed for intimate gazing at volcanic sunsets.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 5200,
    location: "Oia",
    country: "Greece",
    owner: "Elena Marinakis"
  },

  {
    title: "Modern Twilight Pool Villa",
    description: "At dusk, this modern villa glows around its infinity-edge pool. Clean lines, expansive glass, and ambient lighting create an elegant ambiance for evening gatherings or quiet nights under the stars.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/30781823/pexels-photo-30781823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 6000,
    location: "Dubai",
    country: "UAE",
    owner: "Khalid Al-Fahad"
  },

  {
    title: "Contemporary Pretoria Pool House",
    description: "A modern home in Pretoria showcasing a backyard pool with sleek lines, natural stone accents, and a shaded veranda—ideal for warm climate living and stylish comfort.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/17556197/pexels-photo-17556197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 4200,
    location: "Pretoria",
    country: "South Africa",
    owner: "Sipho Mokoena"
  },
  
  {
    title: "Elegant Mediterranean Villa",
    description: "Mediterranean-style villa with arches, stone facade, lush garden, and shaded terraces—evoking timeless elegance in a warm coastal setting.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 5500,
    location: "Nice",
    country: "France",
    owner: "Claire Moreau"
  },
  
  {
    title: "Wintertime Modern Villa",
    description: "A contemporary villa with snow-covered yard, warm glow from expansive windows, and cozy interiors—a perfect alpine retreat for winter.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 6000,
    location: "Aspen",
    country: "USA",
    owner: "Bryce Gallagher"
  },
  
  {
    title: "Cliffside Aegean Infinity Estate",
    description: "Perched dramatically on a Santorini cliff, this all-white villa boasts an infinity pool that seems to blend with the Aegean Sea—pure island serenity and architectural elegance.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/32727473/pexels-photo-32727473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 7000,
    location: "Santorini",
    country: "Greece",
    owner: "Eleni Papadakis"
  },
  
  {
    title: "Fort Lauderdale Waterfront Manor",
    description: "A luxurious waterfront residence with palm-lined terraces and expansive glazing—tailored for refined coastal living with yachting style.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/16573669/pexels-photo-16573669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 9000,
    location: "Fort Lauderdale",
    country: "USA",
    owner: "James Hamilton"
  },
  
  {
    title: "Lakeside Minimalist Water Villa",
    description: "This sleek lakeside villa features glass walls, a seamless pool deck, and a private dock—tailored for tranquil waterfront escapes.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/29453302/pexels-photo-29453302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 7000,
    location: "Seattle",
    country: "USA",
    owner: "Mark Johnson"
  },
  
  {
    "title": "Canadian Lakeside Lodge",
    "description": "Rugged yet refined lodge on a pristine Canadian lake, perfect for fishing, kayaking, and enjoying nature's tranquility.",
    "image": { "filename": "listingimage", "url": "https://images.pexels.com/photos/9103980/pexels-photo-9103980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    "price": 6300,
    "location": "Banff",
    "country": "Canada",
    "owner": "Robert Tremblay"
  },
 
 
  {
    "title": "Desert Modern Home",
    "description": "Sleek, minimalist home in the desert, designed to blend with the landscape, featuring floor-to-ceiling windows and a private courtyard.",
    "image": { "filename": "listingimage", "url": "https://images.pexels.com/photos/17697472/pexels-photo-17697472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    "price": 5800,
    "location": "Joshua Tree",
    "country": "USA",
    "owner": "Maria Rodriguez"
  },
  {
    "title": "Panoramic Oceanfront Villa",
    "description": "Luxurious villa perched above the ocean, offering uninterrupted panoramic views, infinity pool, and direct beach access.",
    "image": { "filename": "listingimage", "url": "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    "price": 9500,
    "location": "Malibu",
    "country": "USA",
    "owner": "Carlos Santana"
  },

  {
    "title": "Harbor View Penthouse",
    "description": "Sophisticated penthouse apartment with expansive views of the city harbor, featuring luxury finishes and a private balcony.",
    "image": { "filename": "listingimage", "url": "https://images.pexels.com/photos/19602444/pexels-photo-19602444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    "price": 7000,
    "location": "Sydney",
    "country": "Australia",
    "owner": "James O'Connell"
  },

  {
    "title": "Japanese Zen Retreat",
    "description": "A tranquil Japanese-style retreat with minimalist design, traditional gardens, and a calming atmosphere.",
    "image": { "filename": "listingimage", "url": "https://images.pexels.com/photos/10368571/pexels-photo-10368571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    "price": 5000,
    "location": "Kyoto",
    "country": "Japan",
    "owner": "Hiroshi Sato"
  },

  {
    title: "Oceanfront Serenity Villa",
    description: "Glass-walled villa perched above turquoise waters with private beach access and sunset deck.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/210557/pexels-photo-210557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 8200,
    location: "Maui",
    country: "USA",
    owner: "Lana Thompson"
  },
  {
    title: "Alpine Glass Chalet",
    description: "Modern chalet with panoramic mountain views, heated floors, and a wraparound terrace.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 7400,
    location: "Zermatt",
    country: "Switzerland",
    owner: "Felix Meier"
  },
  {
    title: "Lakeview Horizon Estate",
    description: "Elegant lakeside mansion with infinity pool, boat dock, and mirrored interiors.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 7900,
    location: "Lake Como",
    country: "Italy",
    owner: "Matteo Bianchi"
  },
  {
    title: "Desert Mirage Villa",
    description: "Sleek desert retreat with glass walls, fire pits, and stargazing lounge.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 7100,
    location: "Sedona",
    country: "USA",
    owner: "Ava Martinez"
  },
 
  {
    title: "Highland Mist Manor",
    description: "Stone manor nestled in foggy highlands with antique interiors and glass conservatory.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 8000,
    location: "Isle of Skye",
    country: "UK",
    owner: "Fiona MacLeod"
  },
  {
    title: "Tropical Canopy Villa",
    description: "Elevated jungle villa with hanging bridges, plunge pools, and canopy views.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/2102588/pexels-photo-2102588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 7200,
    location: "Ubud",
    country: "Indonesia",
    owner: "Nyoman Putra"
  },
  
  {
    title: "Vineyard Horizon Villa",
    description: "Tuscan villa surrounded by vineyards, with wine cellar and sunset terrace.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/2102589/pexels-photo-2102589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 7500,
    location: "Tuscany",
    country: "Italy",
    owner: "Lorenzo Rossi"
  },
 
  {
    title: "Skyline Infinity Penthouse",
    description: "Rooftop penthouse with 360° city skyline views and rooftop pool.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/2102591/pexels-photo-2102591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 8100,
    location: "Dubai",
    country: "UAE",
    owner: "Omar Al-Fahim"
  },
  
  {
    title: "Coral Bay Sanctuary",
    description: "Beachfront villa with coral reef access, hammocks, and open-air dining.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/2102593/pexels-photo-2102593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 7700,
    location: "Bora Bora",
    country: "French Polynesia",
    owner: "Manu Teva"
  },
  {
    title: "Sunset Ridge Estate",
    description: "Hilltop estate with infinity pool, fire lounge, and panoramic sunset views.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/2102594/pexels-photo-2102594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 7950,
    location: "Cape Town",
    country: "South Africa",
    owner: "Naledi Mokoena"
  },
  {
    title: "Aurora Sky Dome",
    description: "Glass dome retreat under the northern lights with heated floors and stargazing beds.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/2102595/pexels-photo-2102595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 8200,
    location: "Lapland",
    country: "Finland",
    owner: "Eero Nieminen"
  },
  {
    title: "Lagoon Whisper Villa",
    description: "Secluded lagoon villa with floating deck, hammock lounge, and kayak access.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/2102596/pexels-photo-2102596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 7400,
    location: "Phuket",
    country: "Thailand",
    owner: "Somsak Rattanakosin"
  },
  
  {
    title: "Island Drift Villa",
    description: "Floating villa with glass floors, ocean hammocks, and reef snorkeling access.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/2102598/pexels-photo-2102598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 8300,
    location: "Maldives",
    country: "Maldives",
    owner: "Aisha Rasheed"
  },
  
  {
    title: "Bay Breeze Bungalow",
    description: "Coastal bungalow with wraparound porch, hammock garden, and sea breeze views.",
    image: { filename: "listingimage", url: "https://images.pexels.com/photos/2102600/pexels-photo-2102600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" },
    price: 7050,
    location: "Santorini",
    country: "Greece",
    owner: "Elena Papadopoulos"
  },

];



module.exports = { data: sampleListings };
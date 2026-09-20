export type Destination = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
};

export const DESTINATIONS: Destination[] = [
  {
    id: "1",
    name: "Sajnekhali",
    description: "The gateway to the Sundarbans. Home to the Mangrove Interpretation Centre, crocodile enclosure, and a panoramic watchtower.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger._Huge_bengal_tiger_male_from_national_park_in_India._Real_wildlife.jpg",
  },
  {
    id: "2",
    name: "Sudhanyakhali",
    description: "One of the best watchtowers for wildlife sightings — spotted deer, wild boar, and if you are fortunate, the Royal Bengal Tiger.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/30/Sundarbans_river_network.jpg",
  },
  {
    id: "3",
    name: "Dobanki",
    description: "Walk the unique 496-metre canopy walkway, 20 feet above the forest floor — a bird's-eye view into the heart of the mangroves.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Panthera_tigris_tigris.jpg",
  },
  {
    id: "4",
    name: "Netidhopani",
    description: "An ancient 400-year-old temple ruin deep inside the forest, surrounded by legends and pristine wilderness.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Walking_tiger_female.jpg",
  }
];

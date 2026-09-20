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
    imageUrl: "https://images.unsplash.com/photo--iZV3CqT7LM?q=100&w=3840&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Sudhanyakhali",
    description: "One of the best watchtowers for wildlife sightings — spotted deer, wild boar, and if you are fortunate, the Royal Bengal Tiger.",
    imageUrl: "https://images.unsplash.com/photo-K1h1ziJqtNc?q=100&w=3840&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Dobanki",
    description: "Walk the unique 496-metre canopy walkway, 20 feet above the forest floor — a bird's-eye view into the heart of the mangroves.",
    imageUrl: "https://images.unsplash.com/photo-cNXyaIFyTNg?q=100&w=3840&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Netidhopani",
    description: "An ancient 400-year-old temple ruin deep inside the forest, surrounded by legends and pristine wilderness.",
    imageUrl: "https://images.unsplash.com/photo-DJ4vjcD0s0I?q=100&w=3840&auto=format&fit=crop",
  }
];

export type Package = {
  id: string;
  slug: string;
  name: string;
  duration: string;
  startingPrice: number;
  shortDescription: string;
  highlights: string[];
  imageUrl: string;
  isPopular?: boolean;
};

export const PACKAGES: Package[] = [
  {
    id: "1",
    slug: "sundarban-day-tour",
    name: "Sundarban Day Explorer",
    duration: "1 Day / 0 Nights",
    startingPrice: 1500,
    shortDescription: "A curated day trip through the mystical mangrove waterways — perfect for a quick immersion into the wild.",
    highlights: ["Sajnekhali Bird Sanctuary", "Mangrove Creek Safari", "Local Lunch", "Golden Hour on the River"],
    imageUrl: "https://images.unsplash.com/photo-nZ2cEh8Qzcg?q=100&w=3840&auto=format&fit=crop",
  },
  {
    id: "2",
    slug: "classic-sundarban",
    name: "Classic Sundarban Experience",
    duration: "2 Days / 1 Night",
    startingPrice: 3500,
    shortDescription: "Our signature package — overnight in the delta, boat safaris at dawn, and the silence of the world's largest mangrove forest.",
    highlights: ["Sudhanyakhali Watch Tower", "Dobanki Canopy Walk", "Eco Resort", "Village Walk", "Folk Culture Night"],
    isPopular: true,
    imageUrl: "https://images.unsplash.com/photo-KNJdjEdfa-g?q=100&w=3840&auto=format&fit=crop",
  },
  {
    id: "3",
    slug: "royal-bengal-safari",
    name: "Royal Bengal Safari",
    duration: "3 Days / 2 Nights",
    startingPrice: 5500,
    shortDescription: "The ultimate Sundarban expedition — deep forest safaris, premium stay, and the best chance to spot the Royal Bengal Tiger.",
    highlights: ["Deep Creek Tiger Safari", "Netidhopani Temple", "Premium Eco Lodge", "Bird Island", "Sunset Boat Cruise"],
    imageUrl: "https://images.unsplash.com/photo-MdHHBF6i-MI?q=100&w=3840&auto=format&fit=crop",
  }
];

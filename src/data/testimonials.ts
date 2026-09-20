export type Testimonial = {
  id: string;
  name: string;
  location: string;
  review: string;
  rating: number;
  package: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Arindam Chatterjee",
    location: "Kolkata",
    review: "The boat glided through the narrow creeks as the sun set behind the mangroves. Our guide spotted a kingfisher, a monitor lizard, and fresh tiger pugmarks — all before dinner. This is the real Sundarbans.",
    rating: 5,
    package: "Classic Sundarban Experience",
  },
  {
    id: "2",
    name: "Sarah & James",
    location: "London, UK",
    review: "No fake promises. They said wildlife sightings depend on luck and nature, and we respected that honesty. What we got instead was an incredibly immersive journey into a living, breathing mangrove ecosystem.",
    rating: 5,
    package: "Royal Bengal Safari",
  },
  {
    id: "3",
    name: "Rohan & Priya Mehta",
    location: "Mumbai",
    review: "We travelled with two kids and felt completely safe. The resort was clean, the food was outstanding Bengali cuisine, and the sunset cruise was the most peaceful hour of our lives.",
    rating: 5,
    package: "Classic Sundarban Experience",
  }
];

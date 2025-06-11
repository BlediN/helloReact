// src/components/CardGrid.jsx
import Card from "./Card";

const items = [
  { title: "AI Revolution", description: "How AI is shaping the future.", category: "AI", image: "ai.jpg", link: "#" },
  { title: "Amazon Rainforest", description: "The lungs of our planet.", category: "Nature", image: "rainforest.jpg", link: "#" },
  { title: "Wearable Gadgets", description: "Smart devices to enhance life.", category: "Gadgets", image: "gadgets.jpg", link: "#" },
  { title: "Healthy Living", description: "Tips for a balanced lifestyle.", category: "Lifestyle", image: "lifestyle.jpg", link: "#" },
  { title: "Breaking News", description: "Latest updates across the globe.", category: "News", image: "news.jpg", link: "#" },
  { title: "Virtual Reality", description: "The future of entertainment.", category: "VR", image: "vr.jpg", link: "#" },
  { title: "Sustainable Agriculture", description: "Farming practices for a greener world.", category: "Agriculture", image: "agriculture.jpg", link: "#" },
  { title: "Smart Homes", description: "Innovations for modern living.", category: "Smart Life", image: "smarthome.jpg", link: "#" },
  { title: "Space Exploration", description: "The next frontier of discovery.", category: "Space", image: "space.jpg", link: "#" },
  { title: "Future Cities", description: "Innovative urban planning.", category: "Urban", image: "futurecities.jpg", link: "#" }
];

const CardGrid = () => {
  return (
    <div className="card-grid">
      {items.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};
export default CardGrid;

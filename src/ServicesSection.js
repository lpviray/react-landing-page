import ServiceBlock from "./ServiceBlock";

const SERVICE_BLOCK_DATA = [
  {
    id: 0,
    imageURL: "https://assets.codepen.io/6060109/agency-service-1.png",
    altText: "web design image",
    category: "WEB DESIGN"
  },
  {
    id: 1,
    imageURL: "https://assets.codepen.io/6060109/agency-service-2.png",
    altText: "ecommerce image",
    category: "ECOMMERCE"
  },
  {
    id: 2,
    imageURL: "https://assets.codepen.io/6060109/agency-service-3.png",
    altText: "automation image",
    category: "AUTOMATION"
  }
];

export default function ServicesSection() {
  return (
    <div className="Services">
      <h1 className="offering-title">OUR SERVICES</h1>
      <div className="offerings">
        {SERVICE_BLOCK_DATA.map((service) => {
          return (
            <ServiceBlock
              key={service.id}
              imageURL={service.imageURL}
              altText={service.altText}
              category={service.category}
            />
          );
        })}
      </div>
    </div>
  );
}

import "./style.scss";
import { Card } from "../";
import { BS1, BS2, BS3, P1, P2, P3, T1, T2, T3 } from "../../../asset";

const Trending = () => {
  const trend = [
    {
      src: T1,
      title: "Chain bucket bag",
      rating: 2,
      price: 100,
    },
    {
      src: T2,
      title: "Pendant earrings",
      rating: 2,
      price: 100,
    },
    {
      src: T3,
      title: "Cotton T-Shirt",
      rating: 2,
      price: 100,
    },
  ];
  const bestSeller = [
    {
      src: BS1,
      title: "Cotton T-Shirt",
      rating: 2,
      price: 100,
    },
    {
      src: BS2,
      title: "Zip-pockets pebbled tote briefcase",
      rating: 2,
      price: 100,
    },
    {
      src: BS3,
      title: "Round leather bag",
      rating: 2,
      price: 100,
    },
  ];

  const popular = [
    {
      src: P1,
      title: "Bow wrap skirt",
      rating: 2,
      price: 100,
    },
    {
      src: P2,
      title: "Metallic earrings",
      rating: 2,
      price: 100,
    },
    {
      src: P3,
      title: "Flap cross-body bag",
      rating: 2,
      price: 100,
    },
  ];

  return (
    <>
      <div className="trending">
        <div className="box">
          <h3>Hot Trend</h3>
          <div className="products">
            {trend.map((item, i) => (
              <Card
                type="landscape"
                src={item.src}
                rating={item.rating}
                key={i}
              />
            ))}
          </div>
        </div>
        <div className="box">
          <h3>Best seller</h3>
          {bestSeller.map((item, i) => (
            <Card
              type="landscape"
              src={item.src}
              rating={item.rating}
              key={i}
            />
          ))}
        </div>
        <div className="box">
          <h3>Feature</h3>
          {popular.map((item, i) => (
            <Card
              type="landscape"
              src={item.src}
              rating={item.rating}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Trending;

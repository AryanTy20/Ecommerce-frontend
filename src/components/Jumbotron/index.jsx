import "./style.scss";
import { cat1, cat2, cat3, cat4, cat5 } from "../../../asset";

const Jumbotrone = () => {
  const Data = [
    {
      src: cat1,
      title: "Women's fashion",
      total: 100,
      desc: "Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida.",
      link: "/women",
    },
    {
      src: cat2,
      title: "Men's fashion",
      total: 100,
      link: "/mens",
    },
    {
      src: cat3,
      title: "Kid's fashion",
      total: 100,
      link: "/kids",
    },
    {
      src: cat4,
      title: "Cosmetics",
      total: 100,
      link: "/cosmetics",
    },
    {
      src: cat5,
      title: "Accessories",
      total: 100,
      link: "/accessories",
    },
  ];

  return (
    <>
      <div className="jumbotrone">
        <div className="container">
          {Data.map((item, i) => (
            <Card
              desc={item.desc ?? ""}
              link={item.link}
              title={item.title}
              total={item.total}
              src={item.src}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const Card = ({ title, src, desc, total, link }) => {
  return (
    <>
      <div className="card">
        <img src={src} />
        <div className="meta">
          <h3>{title}</h3>
          <p>{total} items</p>
          <p>{desc}</p>
          <button>shop now</button>
        </div>
      </div>
    </>
  );
};

export default Jumbotrone;

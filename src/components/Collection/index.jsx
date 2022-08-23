import { useRef, useState, useEffect } from "react";
import { collection } from "../../../asset";
import "./style.scss";

const delay = 3000;
const Collection = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === Data.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const Data = [
    {
      title: "collection 1",
    },
    {
      title: "collection 2",
    },
    {
      title: "collection 3",
    },
  ];

  return (
    <>
      <div className="collection">
        <img src={collection} />
        <div className="slider">
          <div className="slideshow">
            <div
              className="slideshowSlider"
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {Data.map((_, i) => (
                <Slider key={i} no={i + 1} />
              ))}
            </div>

            <div className="slideshowDots">
              {Data.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Slider = ({ no, title }) => {
  return (
    <>
      <div className="item">
        <h4>Collection {no}</h4>
        <h1>Project {no}</h1>
        <button>Shop Now</button>
      </div>
    </>
  );
};

export default Collection;

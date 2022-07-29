import { collection } from "../../../asset";
import "./style.scss";

const Collection = () => {
  return (
    <>
      <div className="collection">
        <img src={collection} />
        <div className="slider">
          <Slider />
        </div>
      </div>
    </>
  );
};

const Slider = () => {
  return (
    <>
      <h1>slider</h1>
    </>
  );
};

export default Collection;

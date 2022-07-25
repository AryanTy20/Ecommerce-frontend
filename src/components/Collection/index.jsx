import {cat3,cat5 }from "../../../asset"
import "./style.scss"

const Collection = () => {
  return <>
  <div className="collections">
    <div className="dimg">
        <img src={cat5} alt="" />
    </div>
    <div className="info"></div>
    <div className="dimg">
        <img src={cat3} alt="" />
    </div>
  </div>
  </>
}

export default Collection
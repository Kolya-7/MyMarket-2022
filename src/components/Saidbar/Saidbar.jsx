import React from "react";
import "./Saidbar.css";
import Iframe from '../Iframe/Iframe';
import Cart from "./Cart/Cart";
import Favorite from "./Favorite/Favorite";

function Saidbar() {

  //   const [addLike, setAddLike] = useState(false);


  // const handleInput = (e) => {
  //   setAddLike(!addLike);
  // }

  return (
    <div className="saidbar">
      <div className="product__sidebar">
        <div className="important">
          <div className="important__wrapper">
            <div className="important__price">
              <div className="important-old">
                <p className="important-old__prise">75 990₽</p>
                <div className="old-price__sale">
                  <p className="old-price__text">-8%</p>
                </div>
              </div>
              <p className="important__actual">67 990&#x20bd;</p>
            </div>
            <Favorite />
          </div>
          <div className="important-delivery">
            <p className="important-delivery__text">
              Самовывоз в четверг, 1 сентября —
              <span className="bold-text"> бесплатно</span>
            </p>
            <p className="important-delivery__text">
              Курьером в четверг, 1 сентября —
              <span className="bold-text"> бесплатно</span>
            </p>
          </div>
          <Cart />
        </div>
      </div>

      <div className="advertisement">
        <p>Реклама</p>
        <div className="advertisement__iframes">
          <div className="ads">
            <Iframe />
          </div>
          <div className="ads">
            <Iframe />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Saidbar;

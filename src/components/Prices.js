import React from "react";
import Pizza1 from "../assets/img/pizza1.png";
import Pizza2 from "../assets/img/pizza2.png";
import Pizza3 from "../assets/img/pizza3.png";
import Pizza4 from "../assets/img/pizza4.png";
import Pizza5 from "../assets/img/pizza5.png";
import Pizza6 from "../assets/img/pizza6.png";

const Prices = () => {
  return (
    <div name='menu' className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pizza1} alt="pizza1" />
              </div>
              <h1 className="price__heading">Pizza Margeritta</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">$50.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pizza2} alt="pizza1" />
              </div>
              <h1 className="price__heading">Beer Pizza Crust</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">$39.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pizza3} alt="pizza1" />
              </div>
              <h1 className="price__heading">Pizza Biscuit Bake</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">$25.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pizza4} alt="pizza1" />
              </div>
              <h1 className="price__heading">Pizza Prosciutto</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">$29.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pizza5} alt="pizza1" />
              </div>
              <h1 className="price__heading">Crazy Crust Pizza</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">$49.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pizza6} alt="pizza1" />
              </div>
              <h1 className="price__heading">Low Carb Pizza</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel
                ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam
                risus, vel hendrerit dui tempor in.
              </p>
              <p className="price_rs">$29.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;

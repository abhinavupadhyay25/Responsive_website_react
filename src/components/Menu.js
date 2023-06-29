import React from "react";
import Pizza from '../assets/img/pizza.jpg';

function Menu() {
  return (
    <div name='new' className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src={Pizza} alt="pizza.jpg" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The Pizza Menu</h3>
            <h1>CHICAGO THIN CRUST</h1>
            <p>
            Forget the puffy, handlebarlike crust of a New York pie: Thin crust has sauce and cheese all the way to the edge — an edge that comes out extra crisp with a frizzle of nearly blackened cheese overhanging it. Most notably, the pizza is round but comes cut into small squares, no more than a bite or two apiece.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;

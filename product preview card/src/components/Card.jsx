import React from "react";
import '../scss/style.scss'

class Card extends React.Component {
    render() {
        return <div className="background">
          <div className="container">
          <div className="image"></div>
          <div className="writings">
          <h3 className="perfume">
            PERFUME
          </h3>
          <h1 className="title">
            Gabrielle <br/>Essence Eau <br/> De Parfum
          </h1>
          <p className="paragraph">
            A floral, solar and voluptuous interpretation composed by <br/>  Oliver
            Polge, Perfumer-Creator <br/>  for the House of CHANEL
          </p>
          <div className="price">
          <span className="p1">$149.99</span>
          <span className="p2">$169.99</span>
          </div>
          <div className="button">Add to cart</div>
          </div>
          </div>
        </div>
    }
}

export default Card
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
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="paragraph">
            A floral, solar and voluptuous interpretation composed by Oliver
            Polge, Perfumer-Creator for the House of CHANEL
          </p>
          </div>
          </div>
        </div>
    }
}

export default Card
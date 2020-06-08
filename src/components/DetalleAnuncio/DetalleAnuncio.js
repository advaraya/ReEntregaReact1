import React from "react";
import { render } from "@testing-library/react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import getDetalleAnuncio from "../../services/ServicioDetalleAnuncio";

//Este endpoint está securizado, es decir, si la cookie no está seteada el endpoint denegará el acceso
//Estos anuncios podrán ser filtrados por distintos campos

class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idAnuncio: props.match.params.idAnuncio,
      result: {
        /*
        tags: ["lifestyle"],
        _id: "5d3a0a5f9bd7ed2ece463ab4",
        name: "PS4Pro",
        description: "Compro PS4 Pro con menos de 1 año de uso",
        price: 200.99,
        type: "buy",
        photo: "/images/anuncios/ps4pro.jpg",
        __v: 0,
        createdAt: "2019-07-25T20:00:31.944Z",
        updatedAt: "2019-07-25T20:00:31.945Z",
        */
      },
    };
    this.adDetail();
  }
  async adDetail() {
    var miCookie = localStorage.getItem("cookie-login");
    if (miCookie === undefined) {
      alert("Oooop looks like you are not logged");
    } else {
      let anunciosDetalle;
      try {
        anunciosDetalle = await getDetalleAnuncio(this.state.idAnuncio);
      } catch (error) {}
      if (anunciosDetalle.data.success) {
        console.log(anunciosDetalle.data);
        this.setState({
          idAnuncio: this.state.idAnuncio,
          result: anunciosDetalle.data.result,
        });
      }

      console.log(this.state);
    }
  }
  render() {
    return (
      <div className="container-DetallAd">
        <div class="row">
          <div class="col-6">
            <h2>NOMBRE DEL PRODUCTO: {this.state.result.name}</h2>
            <p>DESCRIPCIÓN: {this.state.result.description}</p>
            <p>PRECIO: {this.state.result.price} €</p>
            <p>TIPO: {this.state.result.type}</p>
            <p>
              TAGS:
              <span className="badge badge-pill badge-success">
                {this.state.result.tags}
              </span>
            </p>
          </div>
          <div class="col-6">
            <figure className="figure">
              <img src={this.state.result.photo} className="img-fluid" />
            </figure>
          </div>
        </div>
        <div class="row justify-content-md-center">
          <Link to="/listing">Volver al listado de anuncios</Link>
        </div>
      </div>
    );
  }
}

export default Ad;

import React, { Component } from "react";
import { Form, Segment } from "semantic-ui-react";
import Profileİnformation from "../layouts/NaviLayout/Profileİnformation";
import Space from "./Space";
import Header from "../Components/Header";
import Profils from "../Components/Profils";
import ProfilGüncelle from "../Components/ProfilGüncelle";
import Profil from "../Components/Profil";

class GuncelP extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <div>
        <Profileİnformation />
        <ProfilGüncelle />
        <Profils />
        <Profil />
      </div>
    );
  }
}

export default GuncelP;

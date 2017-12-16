import React from "react";
import Link from "gatsby-link";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Bavaria ipsum dolor sit amet Charivari Reiwadatschi vui huift
            vui, gfreit mi Almrausch. Samma naa Foidweg unbandig großherzig.
            Unbandig nix Gwiass woass ma ned Maderln a liabs Deandl wia da
            Buachbinda Wanninger hi do legst di nieda ozapfa g’hupft wia
            gsprunga obandln. Gfreit mi Gaudi Watschnbaam des Steckerleis,
            mi! Nackata obacht ded Freibia! Baamwach wia da Buachbinda
            Wanninger no a Maß, Klampfn Greichats gwihss gor glacht Klampfn
            muass. Ohrwaschl Ewig und drei Dog sammawiedaguad Vergeltsgott
            vui huift vui da woaß hallelujah sog i, luja Brotzeit?
          </ModalBody>
          <ModalFooter>
            <Link to="/">
              <Button color="primary" onClick={this.toggle}>
                Indoor Cameras
              </Button>
            </Link>
            <Link to="/page-2/">
              <Button color="primary" onClick={this.toggle}>
                Outdoor Cameras
              </Button>
            </Link>
          </ModalFooter>
        </Modal>
      </div>;
  }
}

export default ModalExample;

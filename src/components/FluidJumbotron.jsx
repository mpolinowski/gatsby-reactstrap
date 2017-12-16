import React from 'react';
import Link from "gatsby-link";

import { Button, Jumbotron, Container } from 'reactstrap';
import JumbotronModal from "../components/JumbotronModal";

const FluidJumbotron = (props) => {
  return <div>
      <Jumbotron fluid>
        <Container>
          <h1 className="display-3">Product Porfolio</h1>
          <div className="float-left button-group">
            <JumbotronModal buttonLabel="Modal" />
          </div>
          <div className="float-right button-group">
            <Link to="/">
              <Button color="primary">Indoor Cameras</Button>
            </Link>
            <Link to="/page-2/">
              <Button color="primary">Outdoor Cameras</Button>
            </Link>
          </div>
        </Container>
      </Jumbotron>
    </div>;
};

export default FluidJumbotron;
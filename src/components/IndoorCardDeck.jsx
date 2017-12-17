import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";

const IndoorCardDeck = props => {
  return <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src="http://via.placeholder.com/256x180" alt="INSTAR IN-8015 Indoor Camera" />
          <CardBody>
            <CardTitle>IN-8015 Full HD</CardTitle>
            <CardSubtitle>1080p Indoor Camera</CardSubtitle>
            <CardText>A Product description...</CardText>
            <Button color="primary">Info</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="http://via.placeholder.com/256x180" alt="INSTAR IN-6014 Indoor Camera" />
          <CardBody>
            <CardTitle>IN-6014 HD</CardTitle>
            <CardSubtitle>PIR Indoor Camera</CardSubtitle>
            <CardText>A Product description...</CardText>
            <Button color="primary">Info</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="http://via.placeholder.com/256x180" alt="INSTAR IN-6012 Indoor Camera" />
          <CardBody>
            <CardTitle>IN-6012 HD</CardTitle>
            <CardSubtitle>Pan & Tilt Indoor Camera</CardSubtitle>
            <CardText>A Product description...</CardText>
            <Button color="primary">Info</Button>
          </CardBody>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src="http://via.placeholder.com/256x180" alt="INSTAR IN-6001 Indoor Camera" />
          <CardBody>
            <CardTitle>IN-6001 HD</CardTitle>
            <CardSubtitle>Compact Indoor Camera</CardSubtitle>
            <CardText>A Product description...</CardText>
            <Button color="primary">Info</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="http://via.placeholder.com/256x180" alt="INSTAR IN-6012 Indoor Camera" />
          <CardBody>
            <CardTitle>IN-6012 HD</CardTitle>
            <CardSubtitle>Pan & Tilt Indoor Camera</CardSubtitle>
            <CardText>A Product description...</CardText>
            <Button color="primary">Info</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="http://via.placeholder.com/256x180" alt="INSTAR IN-6014 Indoor Camera" />
          <CardBody>
            <CardTitle>IN-6014 HD</CardTitle>
            <CardSubtitle>
              Indoor Camera with integrated PIR Sensor
            </CardSubtitle>
            <CardText>A Product description...</CardText>
            <Button color="primary">Info</Button>
          </CardBody>
        </Card>
      </CardDeck>
    </div>;
};

export default IndoorCardDeck;

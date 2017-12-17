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

const OutdoorCardDeck = props => {
  return <div>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src="http://via.placeholder.com/256x180" alt="INSTAR IN-9008 Outdoor Camera" />
          <CardBody>
            <CardTitle>IN-8015 Full HD</CardTitle>
            <CardSubtitle>
              Outdoor Camera with integrated PIR Sensor
            </CardSubtitle>
            <CardText>A Product description...</CardText>
            <Button color="primary">Info</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="http://via.placeholder.com/256x180" alt="INSTAR IN-7011 Outdoor Camera" />
          <CardBody>
            <CardTitle>IN-7011 HD</CardTitle>
            <CardSubtitle>PTZ Outdoor Camera</CardSubtitle>
            <CardText>A Product description...</CardText>
            <Button color="primary">Info</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="http://via.placeholder.com/256x180" alt="INSTAR IN-5907 Outdoor Camera" />
          <CardBody>
            <CardTitle>IN-5907 HD</CardTitle>
            <CardSubtitle>Long Distance Outdoor Camera</CardSubtitle>
            <CardText>A Product description...</CardText>
            <Button color="primary">Info</Button>
          </CardBody>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src="http://via.placeholder.com/256x180" alt="INSTAR IN-5905 Outdoor Camera" />
          <CardBody>
            <CardTitle>IN-5905 HD</CardTitle>
            <CardSubtitle>Compact Outdoor Camera</CardSubtitle>
            <CardText>A Product description...</CardText>
            <Button color="primary">Info</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="http://via.placeholder.com/256x180" alt="INSTAR IN-5907 Outdoor Camera" />
          <CardBody>
            <CardTitle>IN-5907 HD</CardTitle>
            <CardSubtitle>Power User Outdoor Camera</CardSubtitle>
            <CardText>A Product description...</CardText>
            <Button color="primary">Info</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="http://via.placeholder.com/256x180" alt="INSTAR IN-4010 Outdoor Camera" />
          <CardBody>
            <CardTitle>IN-4010 V2</CardTitle>
            <CardSubtitle>Pan & Tilt Outdoor Camera</CardSubtitle>
            <CardText>A Product description...</CardText>
            <Button color="primary">Info</Button>
          </CardBody>
        </Card>
      </CardDeck>
    </div>;
};

export default OutdoorCardDeck;

import React from 'react';
import {
  Row,
  Col,
  Jumbotron,
  ListGroup,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from 'reactstrap';
import {Link} from 'react-router-dom';

import IconUser from '../../assets/icon-user.svg';
import IconMerchant from '../../assets/icon-merchant.svg';
import IconAdmin from '../../assets/icon-admin.svg';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Jumbotron style={{ backgroundColor: '#dedede' }}>
              <h1 className="display-3">Demo page</h1>
              <p className="lead">
                Demos built to display how PAYZY would work on a real case scenario. <br/>
                <strong>THERE ARE NO</strong> real transactions happening with this example.
              </p>
              <hr className="my-2" />
              <p>All logos from banks and payment methods, are purely representative and we don't have any affiliation with them.</p>
            </Jumbotron>

            <h3 className="mt-4 mb-1">Available demos</h3>
            <ListGroup>
              <Link to="/payment-flow" className="list-group-item-action list-group-item">1) Simulation of a e-commerce payment (full-flow)</Link>
              <Link to="/about" className="list-group-item-action list-group-item">2) Merchant dashboard with transactions</Link>
              <Link to="/about" className="list-group-item-action list-group-item">3) Customer area (view orders)</Link>
            </ListGroup>
          </Col>
        </Row>

        <Row className="mt-4 mb-1">
          <Col>
            <h3>Entities</h3>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardImg top width="100%" src={IconUser} alt="customer" />
              <CardBody>
                <CardTitle>Customer</CardTitle>
                <CardText>
                  This entity represents a regular customer that goes to a web shop and is willing to make a payment
                </CardText>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card>
              <CardImg top width="100%" src={IconMerchant} alt="bia.pt merchant" />
              <CardBody>
                <CardTitle>Merchant</CardTitle>
                <CardText>For this demo purposes, we are displaying an example shopping cart from our brancd bia.pt</CardText>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card>
              <CardImg top width="100%" src={IconAdmin} alt="payzy admin" />
              <CardBody>
                <CardTitle>PAYZY Admin</CardTitle>
                <CardText>As PAYZY admin, we can check all the merchants, and the transactions each merchant has.</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;

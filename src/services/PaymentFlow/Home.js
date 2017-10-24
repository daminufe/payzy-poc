import React from 'react';
import {
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalHeader,
  ModalBody,
  ListGroup,
  ListGroupItem,
  Badge,
  Card,
  CardHeader,
  CardText,
  CardBody
} from 'reactstrap';

import LogoPayzy from '../../assets/logo-payzy.svg';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: true
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
              <BreadcrumbItem><a href="/">Cart</a></BreadcrumbItem>
              <BreadcrumbItem active>Checkout</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>

        <Row>
          <Col md="8">
            <Card>
              <CardHeader><span className="fa fa-fw fa-shopping-basket" /> Your shopping basket</CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem>
                    iPhone 12 512gb yellow
                    <Badge color="success" pill className="pull-right">€ 1499,99</Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    Cover for iPhone 12 blue
                    <Badge color="success" pill className="pull-right">€ 14,99</Badge>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>

            <hr className="mt-3 mb-3"/>

            <Card>
              <CardHeader><span className="fa fa-fw fa-credit-card-alt" /> Payment method</CardHeader>
              <CardBody>
                <ListGroup style={{ cursor: 'pointer'}}>
                  <ListGroupItem action><span className="fa fa-fw fa-cc-paypal" /></ListGroupItem>
                  <ListGroupItem action>
                    <span className="fa fa-fw fa-credit-card" />{' '}
                    <span className="fa fa-fw fa-cc-visa" />{' '}
                    <span className="fa fa-fw fa-cc-mastercard" />{' '}
                    <span className="fa fa-fw fa-cc-amex" />
                  </ListGroupItem>
                  <ListGroupItem action onClick={this.toggleModal}><img src={LogoPayzy} style={{ height: '1.5rem' }} alt="PAYZY logo"/></ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>



          <Col md="4">
            <Card>
              <CardHeader>Shipping info</CardHeader>
              <CardBody>
                <CardText>
                  John Doe <br/>
                  Some Street 22<br/>
                  1010-010 - Lisbon
                </CardText>
              </CardBody>
            </Card>

            <hr className="mt-3 mb-3"/>

            <Card>
              <CardHeader>Billing info</CardHeader>
              <CardBody>
                <CardText>
                  John Doe <br/>
                  Some Street 22<br/>
                  1010-010 - Lisbon
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Modal isOpen={this.state.modal} toggle={this.toggleModal} size="lg">
          <ModalHeader toggle={this.toggleModal}>
            <img src={LogoPayzy} style={{ height: '1.5rem' }} alt="PAYZY logo"/>
          </ModalHeader>
          <ModalBody>
            <h6 className="mb-4">Choose your bank</h6>
            <p className="lead">After you choose your bank, you will be redirected to your homebanking to authorize the payment.</p>

            <hr className="mt-3 mb-3"/>

            <Row>
              <Col>
                <div className="m-4 text-center">
                  <span className="fa fa-5x fa-bank" />
                  <div className="pt-2 small">Caixa Geral de Depósitos</div>
                </div>
              </Col>
              <Col>
                <div className="m-4 text-center">
                  <span className="fa fa-5x fa-bank" />
                  <div className="pt-2 small">BPI</div>
                </div>
              </Col>
              <Col>
                <div className="m-4 text-center">
                  <span className="fa fa-5x fa-bank" />
                  <div className="pt-2 small">Santander</div>
                </div>
              </Col>
              <Col>
                <div className="m-4 text-center">
                  <span className="fa fa-5x fa-bank" />
                  <div className="pt-2 small">BIC</div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="m-4 text-center">
                  <span className="fa fa-5x fa-bank" />
                  <div className="pt-2 small">Novo Banco</div>
                </div>
              </Col>
              <Col>
                <div className="m-4 text-center">
                  <span className="fa fa-5x fa-bank" />
                  <div className="pt-2 small">BBVA</div>
                </div>
              </Col>
              <Col>
                <div className="m-4 text-center">
                  <span className="fa fa-5x fa-bank" />
                  <div className="pt-2 small">Millennium BCP</div>
                </div>
              </Col>
              <Col>
                <div className="m-4 text-center">
                  <span className="fa fa-5x fa-bank" />
                  <div className="pt-2 small">Santander Totta</div>
                </div>
              </Col>
            </Row>
          </ModalBody>
        </Modal>

      </div>
    );
  }
}

export default Home;

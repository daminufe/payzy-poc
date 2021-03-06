import React from 'react';
import {connect} from 'react-redux';
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

import './Home.css';
import LogoPayzy from '../../assets/logo-payzy.svg';
import LogoBankCgd from '../../assets/banks/cgd.png';
import LogoBankBpi from '../../assets/banks/bpi.png';
import LogoBankCreditoAgricola from '../../assets/banks/credito-agricola.png';
import LogoBankSantander from '../../assets/banks/santander.png';
import LogoBankBic from '../../assets/banks/bic.png';
import LogoBankNovoBanco from '../../assets/banks/novo-banco.png';
import LogoBankBbva from '../../assets/banks/bbva.png';
import LogoBankMillennium from '../../assets/banks/millennium.png';

import initiateTransaction from './actions/initiate-transaction.action';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orderRef: `BIA-${String(Date.now()).substr(5, 11)}`,
      modal: false,
      amount: 2998.99,
      customerId: 'john.doe@customer.tld',
      isRedirecting: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.onBankChoose = this.onBankChoose.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onBankChoose(bank) {
    return () => {
      const {amount, customerId, orderRef} = this.state;
      this.setState({ bank, isRedirecting: true });

      this.props.initiateTransaction({
        merchantId: this.props.app.merchantId,
        customerId,
        amount,
        bank,
        orderRef
      }).then(data => {
        setTimeout(() => {
          this.props.history.push(`/bank-simulation/${bank}/login`);
        }, 1500);
      });
    }
  }

  render() {
    return (
      <div className="payment-flow-home-component">
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><a href="/"><span className="fa fa-home"/> bia.pt</a></BreadcrumbItem>
              <BreadcrumbItem><a href="/">Cart</a></BreadcrumbItem>
              <BreadcrumbItem active>Checkout <span className="text-muted">{this.state.orderRef}</span></BreadcrumbItem>
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

              <p className="ml-4">Order reference: <strong>{this.state.orderRef}</strong></p>

              <h4 className="m-4"><span className="pull-right">€ {this.state.amount}</span> Total amount to pay</h4>
            </Card>

            <hr className="mt-3 mb-3"/>

            <Card>
              <CardHeader><span className="fa fa-fw fa-credit-card-alt" /> Payment method</CardHeader>
              <CardBody>
                <CardText>Please select the payment method</CardText>
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
                  1010-010 - Lisbon<br/>
                  {this.state.customerId}
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
                  1010-010 - Lisbon<br/>
                  {this.state.customerId}
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

            {!this.state.isRedirecting && (
              <div className="payzy-bank-selector">
                <Row>
                  <Col>
                    <div className="m-4 p-1 text-center bank-container" onClick={this.onBankChoose('cgd')}>
                      <img src={LogoBankCgd} alt=""/>
                      <div className="pt-2 small">Caixa Geral de Depósitos</div>
                    </div>
                  </Col>
                  <Col>
                    <div className="m-4 p-1 text-center bank-container" onClick={this.onBankChoose('bpi')}>
                      <img src={LogoBankBpi} alt=""/>
                      <div className="pt-2 small">BPI</div>
                    </div>
                  </Col>
                  <Col>
                    <div className="m-4 p-1 text-center bank-container" onClick={this.onBankChoose('santander')}>
                      <img src={LogoBankSantander} alt=""/>
                      <div className="pt-2 small">Santander</div>
                    </div>
                  </Col>
                  <Col>
                    <div className="m-4 p-1 text-center bank-container" onClick={this.onBankChoose('bic')}>
                      <img src={LogoBankBic} alt=""/>
                      <div className="pt-2 small">BIC</div>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="m-4 p-1 text-center bank-container" onClick={this.onBankChoose('novoBanco')}>
                      <img src={LogoBankNovoBanco} alt=""/>
                      <div className="pt-2 small">Novo Banco</div>
                    </div>
                  </Col>
                  <Col>
                    <div className="m-4 p-1 text-center bank-container" onClick={this.onBankChoose('bbva')}>
                      <img src={LogoBankBbva} alt=""/>
                      <div className="pt-2 small">BBVA</div>
                    </div>
                  </Col>
                  <Col>
                    <div className="m-4 p-1 text-center bank-container" onClick={this.onBankChoose('millennium')}>
                      <img src={LogoBankMillennium} alt=""/>
                      <div className="pt-2 small">Millennium BCP</div>
                    </div>
                  </Col>
                  <Col>
                    <div className="m-4 p-1 text-center bank-container" onClick={this.onBankChoose('creditoAgricola')}>
                      <img src={LogoBankCreditoAgricola} alt=""/>
                      <div className="pt-2 small">Crédito Agrícola</div>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
            {this.state.isRedirecting && (
              <div className="mt-5 mb-5 text-center">
                <span className="fa fa-spin fa-spinner fa-5x" />
                <div className="m-4">Loading...</div>
              </div>
            )}
          </ModalBody>
        </Modal>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
  transactions: state.transactions
});

export default connect(mapStateToProps, {initiateTransaction})(Home);

import React from 'react';
import {connect} from 'react-redux';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Button
} from 'reactstrap';
import {Link} from 'react-router-dom';

import {banks} from './Layout';

const receivers = {
  biapt: {
    name: 'Cereja no Topo da Net, Lda (bia.pt)',
    iban: 'PT50 0002 0123 1234 5678 9015 4'
  }
};

class Confirmation extends React.Component {
  constructor(props) {
    super(props);

    if (!this.props.newTransaction.isCreated) {
      this.props.history.push('/bia.pt/cart');
    }
  }

  render() {
    if (!this.props.newTransaction.isCreated) {
      return null;
    }

    const bank = banks[this.props.match.params.bank];
    const colorBank = {color: bank.color};
    const payment = this.props.newTransaction.details;

    return (
      <Row>
        <Col md="2" />
        <Col md="8">
          <Row>
            <Col>
              <h3 className="mt-3 mb-2" style={colorBank}>Paying with PAYZY <small className="text-muted">(step 3 of 4)</small></h3>
              <h6 className="mb-3">Are these details correct?</h6>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <h5>Amount</h5>
            </Col>
            <Col>
              <h2>€ {payment.amount}</h2>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <strong>Receiver</strong>
            </Col>
            <Col>
              {receivers[payment.merchantId].name}<br/>
              {receivers[payment.merchantId].iban}
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <strong>From account</strong>
            </Col>
            <Col>
              <strong>Current account</strong><br/>
              Mr. John Doe<br/>
              PT76 1234 4311 1234 5678 9092 1
            </Col>
          </Row>

          <Row className="mt-5 mb-3">
            <Col>
              <Card>
                <CardHeader>Two factor Authentication</CardHeader>
                <CardBody>
                  You have to choose your bank's 2 step authentication if activated:
                  <ul>
                    <li>SMS Token</li>
                    <li>Matrix card</li>
                    <li>QR Code</li>
                  </ul>

                  <hr className="my-2"/>

                  <p className="text-justify">A bank transfer will be made on your behalf. After you press "Send payment" a new SEPA bank transfer will be made,
                    and the receiver will receive a confirmation to ship your goods or services.</p>
                </CardBody>
                <CardFooter>
                  <Link className="btn btn-primary pull-left" to="./confirmation"><span className="fa fa-chevron-left" /> Back</Link>
                  <Link className="btn btn-primary pull-right" to="./transaction-completed">Send payment <span className="fa fa-chevron-right" /></Link>
                </CardFooter>
              </Card>

              <div className="mt-3">
                <Button outline color="info"><span className="fa fa-question-circle" /> Help</Button>
              </div>

            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
  newTransaction: state.newTransaction
});

export default connect(mapStateToProps, {})(Confirmation);

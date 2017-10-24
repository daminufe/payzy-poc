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
              <span className="fa fa-5x fa-check pull-right" style={{ color: 'green' }} />
              <h3 className="mt-3 mb-2" style={colorBank}>Paying with PAYZY <small className="text-muted">(step 4 of 4)</small></h3>
              <h6 className="mb-3">Transaction completed</h6>
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
                <CardHeader>Your SEPA transfer was booked!</CardHeader>
                <CardBody>
                  <strong>Now what is going to happen?</strong>
                  <ul>
                    <li>The merchant is notified the payment was successful</li>
                    <li>The merchant can now ship the goods or services</li>
                    <li>You will receive an email with the proof of payment</li>
                  </ul>
                </CardBody>
                <CardFooter>
                  <Link className="btn btn-primary pull-right" to={`/bia.pt/confirmed/${payment.id}`}>Return to merchant <span className="fa fa-chevron-right" /></Link>
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

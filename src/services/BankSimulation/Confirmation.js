import React from 'react';
import {connect} from 'react-redux';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  ListGroup,
  ListGroupItem,
  Badge
} from 'reactstrap';
import moment from 'moment';
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
              <h3 className="mt-3 mb-5" style={colorBank}>Paying with PAYZY <small className="text-muted">(step 2 of 4)</small></h3>
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
              <strong>Date</strong>
            </Col>
            <Col>{moment(payment.createdOn).format('LL')}</Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <strong>{bank.name}'s Id</strong>
            </Col>
            <Col>{String(Date.now()).substr(2, 12)}</Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <strong>Payzy Id</strong>
            </Col>
            <Col>{payment.id}</Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <strong>Description</strong>
            </Col>
            <Col>{payment.description}</Col>
          </Row>

          <Row className="mt-5 mb-3">
            <Col>
              <Card>
                <CardHeader>Choose an account to pay</CardHeader>
                <CardBody>
                  <ListGroup>
                    <ListGroupItem active action style={{ cursor: 'pointer' }}>
                      <Badge pill color="light" className="pull-right">€ 4.295,42</Badge>
                      <strong>Current account</strong> <br/>
                      <Badge pill color="primary" className="pull-right">PT76 1234 4311 1234 5678 9092 1</Badge>
                      Mr. John Doe
                    </ListGroupItem>
                    <ListGroupItem action style={{ cursor: 'pointer' }}>
                      <Badge pill color="primary" className="pull-right">€ 14.512,58</Badge>
                      <strong>Savings account</strong> <br/>
                      <Badge pill color="light" className="pull-right">PT97 9816 6438 6951 0008 9839 9</Badge>
                      Mr. John Doe
                    </ListGroupItem>
                    <ListGroupItem action style={{ cursor: 'pointer' }}>
                      <Badge pill color="primary" className="pull-right">€ 2.142.512,58</Badge>
                      <strong>Corporate account</strong> <br/>
                      <Badge pill color="light" className="pull-right">PT96 4798 5009 8619 2454 3387 8</Badge>
                      Fictional Company, Ltd (Mr. John Doe)
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
                <CardFooter>
                  <Link className="btn btn-secondary pull-left" to={`/bia.pt/cancel/${payment.id}`}><span className="fa fa-chevron-left" /> Cancel</Link>
                  <Link className="btn btn-primary pull-right" to="./sms-token">Next <span className="fa fa-chevron-right" /></Link>
                </CardFooter>
              </Card>
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

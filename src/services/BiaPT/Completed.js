import React from 'react';
import {connect} from 'react-redux';
import {
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  ListGroup,
  ListGroupItem,
  Badge,
  Card,
  CardHeader,
  CardText,
  CardBody
} from 'reactstrap';

import './Home.css';
import {banks} from '../BankSimulation/Layout';
import getTransaction from './actions/get-transaction.action';

class Completed extends React.Component {
  componentWillMount() {
    setTimeout(() => {
      this.props.getTransaction(this.props.match.params.transactionId);
    }, 1000);
  }

  render() {
    if (!this.props.newTransaction.isLoaded || this.props.newTransaction.isFetching) {
      return (
        <Row className="mt-5 mb-3 text-center">
          <Col>
            <div className="mt-5">
              <span className="fa fa-spin fa-spinner fa-5x" />
              <br/><br/>
              <div className="m-4">We are fetching your order...</div>
            </div>
          </Col>
        </Row>
      );
    }

    const order = this.props.newTransaction.details;
    let stamp = '';
    switch (order.status) {
      case 'cancelled': stamp = 'cancelled'; break;
      case 'completed': stamp = 'PAID'; break;
      case 'open': stamp = 'open'; break;
      default: stamp = order.status;
    }

    return (
      <div className="payment-flow-home-component">
        <Row>
          <Col>
            <Breadcrumb>
              <BreadcrumbItem><a href="/">Completed</a></BreadcrumbItem>
              <BreadcrumbItem><a href="/">Cart</a></BreadcrumbItem>
              <BreadcrumbItem active>Order {order.status}</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>

        <Row>
          <Col md="8">
            <span className="paid">{stamp}</span>
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

              <p className="ml-4">
                <strong>{order.description}</strong><br/>
                Paid via PAYZY ({banks[order.bank].name})
              </p>

              <h4 className="m-4"><span className="pull-right">€ {order.amount}</span> Paid successfully</h4>
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
                  {order.customerId}
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
                  {order.customerId}
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
  newTransaction: state.newTransaction,
});

export default connect(mapStateToProps, {getTransaction})(Completed);

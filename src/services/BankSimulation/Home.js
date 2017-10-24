import React from 'react';
import {connect} from 'react-redux';
import {
  Row,
  Col,
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';

import {banks} from './Layout';

class Home extends React.Component {
  constructor(props) {
    super(props);

    if (!this.props.newTransaction.isCreated) {
      this.props.history.push('/bia.pt/cart');
    }

    this.state = {
      username: 'john.doe',
      password: '',
      isLoggingIn: false
    };

    this.changeField = this.changeField.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  changeField(event) {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({isLoggingIn: true});

    setTimeout(() => {
      this.setState({isLoggingIn: false});
      this.props.history.push('confirmation');
    }, 2500)
  }

  render() {
    if (!this.props.newTransaction.isCreated) {
      return null;
    }

    const bank = banks[this.props.match.params.bank];
    const colorBank = {color: bank.color};
    const buttonBank = {background: bank.color, borderColor: bank.color};
    const payment = this.props.newTransaction.details;

    return (
      <div className="">
        <Row>
          <Col>
            <Jumbotron style={colorBank}>
              <h1>{bank.name}</h1>
              <p className="lead"><span className="fa fa-lock"/> Personal Homebanking</p>
              <hr className="my-2" />
              Login to pay <code>{payment.merchantId}</code> the amount of € {payment.amount}
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col md="2" />
          {!this.state.isLoggingIn && (
            <Col md="8">
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="exampleEmail"><span className="fa fa-user"/> Username</Label>
                  <Input name="username" value={this.state.username} onChange={this.changeField} />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword"><span className="fa fa-asterisk"/> Password</Label>
                  <Input type="password" name="password" value={this.state.password} onChange={this.changeField} />
                  <FormText>Look around you. Secure your password.</FormText>
                </FormGroup>

                <Button color="primary" style={buttonBank} block><span className="fa fa-lock"/> Login ></Button>
              </Form>
            </Col>
          )}
          {this.state.isLoggingIn && (
            <Col md="8" className="text-center">
              <div className="mt-5">
                <span className="fa fa-spin fa-spinner fa-5x" />
                <div className="m-4">Logging in...</div>
              </div>
            </Col>
          )}
        </Row>

        <Row className="mt-5">
          <Col>
            <hr className="mt-5 mb-5"/>
            <p className="text-muted small text-center">
              <strong>All rights reserved <span className="fa fa-copyright" /> Cereja no Topo da Net, Lda</strong><br/>
              The "{bank.name}" logo is used for demonstration purposes only.<br/>
              We <strong>do not have</strong> any connection NOR we represent "{bank.name}".
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
  newTransaction: state.newTransaction
});

export default connect(mapStateToProps, {})(Home);

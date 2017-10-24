import React from 'react';
import {connect} from 'react-redux';
import {
  Row,
  Col,
} from 'reactstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  render() {
    return (
      <div className="">
        <Row>
          <Col>
            <pre>{JSON.stringify(this.props.newTransaction.details, false, 4)}</pre>
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

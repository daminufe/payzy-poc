import React from 'react';
import {connect} from 'react-redux';

import cancelTransaction from './actions/cancel-transaction.action';

class Cancel extends React.Component {
  componentWillMount() {
    this.props.cancelTransaction(this.props.newTransaction.details)
      .then(data => {
        this.props.history.push('/bia.pt/cart');
      });
  }

  render() {
    return null;
  }
}

const mapStateToProps = (state) => ({
  newTransaction: state.newTransaction
});

export default connect(mapStateToProps, {cancelTransaction})(Cancel);

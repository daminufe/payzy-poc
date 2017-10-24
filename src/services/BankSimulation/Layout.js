import React from 'react';
import {withRouter} from 'react-router-dom';
import {
  Container
} from 'reactstrap';

import Navbar from '../../components/Navbar';
import LogoBankCgd from '../../assets/banks/cgd.png';
import LogoBankBpi from '../../assets/banks/bpi.png';
import LogoBankCreditoAgricola from '../../assets/banks/credito-agricola.png';
import LogoBankSantander from '../../assets/banks/santander.png';
import LogoBankBic from '../../assets/banks/bic.png';
import LogoBankNovoBanco from '../../assets/banks/novo-banco.png';
import LogoBankBbva from '../../assets/banks/bbva.png';
import LogoBankMillennium from '../../assets/banks/millennium.png';

const menuItems = [
  { url: '/sign-in', title: <div><span className="fa fa-lock" /> Secure login</div> }
];

const banks = {
  cgd: { logo: LogoBankCgd, color: '#0f75b5' },
  bpi: { logo: LogoBankBpi, color: '#' },
  creditoAgricola: { logo: LogoBankCreditoAgricola, color: '#' },
  santander: { logo: LogoBankSantander, color: '#' },
  bic: { logo: LogoBankBic, color: '#' },
  novoBanco: { logo: LogoBankNovoBanco, color: '#' },
  bbva: { logo: LogoBankBbva, color: '#' },
  millennium: { logo: LogoBankMillennium, color: '#' }
};

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar logo={banks[this.props.match.params.bank].logo} items={menuItems} />

        <Container style={{ marginTop: '3.5rem', paddingTop: '1rem' }}>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default withRouter(Layout);

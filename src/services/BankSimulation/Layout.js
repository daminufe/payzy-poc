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

export const banks = {
  cgd: { logo: LogoBankCgd, name: 'Caixa Geral de Depósitos', color: '#0f75b5' },
  bpi: { logo: LogoBankBpi, name: 'Banco BPI', color: '#da4a13' },
  creditoAgricola: { logo: LogoBankCreditoAgricola, name: 'Caixa de Crédito Agrícola', color: '#1a523b' },
  santander: { logo: LogoBankSantander, name: 'Banco Santander Totta', color: '#e10f1b' },
  bic: { logo: LogoBankBic, name: 'Banco BIC', color: '#dc1427' },
  novoBanco: { logo: LogoBankNovoBanco, name: 'Novo Banco', color: '#b9d050' },
  bbva: { logo: LogoBankBbva, name: 'Banco BBVA', color: '#335aa3' },
  millennium: { logo: LogoBankMillennium, name: 'Millennium BCP', color: '#c8456f' }
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

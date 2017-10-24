# FLOW 1: Payment simulation

**PASSOS:**

* Uma loja online com o carrinho de compras e 2 produtos
Fazer um simples processo de checkout com os seguintes elementos:
    - 2 produtos no cesto
    - Total a pagar
    - Dados de cliente fictícios
    - Escolher método de pagamento:
        - PayPal
        - Cartão de Crédito
        - *PAYZY*

* Escolher pagar com *PAYZY* e mostrar os diversos bancos

* Escolher o banco: CGD, Millenium BCP, (colocar outros bancos)
Dependendo do banco, mudar o logo, mas o flow e o interface ser o mesmo
    - POST transação na base de dados com a informação do MERCHANT
        - `amount`
        - `created`
        - `merchantId`
        - `customerIdentifier`
        - `status`: `open`
    - Quando receber a transação redirecciona e guarda a currente transação no REDUX

* Ir para um ecrã de login do "Banco"
Página de login com username e password

* Ecrã de autorização da transferência para IBAN e com o montante correto
Incluir os seguintes detalhes:
    - Saldo actual da conta do banco
    - IBAN da conta do cliente
    - Nome da empresa de destino
    - IBAN de destino
    - Montante a pagar
    - Botão para prosseguir

* Se cancelado, enviar o PUT para a transação para definir:
    - `status`: `cancelled`
    - Redireccionar para o carrinho de compras
    - Remover `transactionId` do REDUX

* Introduzir SMS token e botão para confirmar

* Ecrã de confirmação do pagamento com sucesso
Mostrar os seguintes elementos:
    - Montante transferido
    - Botão para imprimir comprovativo
    - Botão para voltar para a loja {{ nome da loja }}
    - PUT da transação para confirmar o pagamento
    - callback a confirmar a transferência (visível no dashboard do merchant)
    - callback a confirmar a transferência (visível na área do cliente)

* Redirect para a loja online com a confirmação da venda

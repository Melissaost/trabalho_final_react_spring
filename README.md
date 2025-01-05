# INFNET - PROJETO DE PÓS-GRADUAÇÃO
## GESTÃO ESCOLAR
**Autor:** Melissa Ost

---

### Tecnologias Utilizadas

#### **Frontend**
- **React**: Biblioteca JavaScript para criação de interfaces de usuário dinâmicas e interativas.
- **TailwindCSS**: Framework de CSS utilitário para estilização rápida e responsiva.
- **@mui/material**: Biblioteca de componentes de UI baseada no Material Design, trazendo componentes prontos e estilizados.
- **@emotion/react** e **@emotion/styled**: Bibliotecas para estilização de componentes com CSS-in-JS, usadas em conjunto com Material UI.
- **@fontsource/roboto**: Fonte "Roboto" para o design tipográfico da aplicação.
- **React Router DOM**: Biblioteca para roteamento de páginas, possibilitando a navegação entre diferentes seções.
- **React Icons**: Biblioteca para a adição de ícones variados no frontend.

#### **Gerenciamento de Estado**
- **Redux Toolkit**: Ferramenta para gerenciamento centralizado de estado, simplificando a configuração do Redux.
- **React Redux**: Integração do Redux com o React para fácil acesso e atualização do estado global.

#### **Comunicação com APIs**
- **Axios**: Biblioteca para realizar requisições HTTP, usada para interagir com a API do sistema e o backend.

#### **Alertas e Notificações**
- **SweetAlert2**: Biblioteca para exibição de alertas e modais customizados, melhorando a experiência do usuário.

---

### Instruções de Execução

#### **Pré-requisitos**
Certifique-se de ter os seguintes itens instalados:
- **Node.js** (versão 16 ou superior)
- **npm** (gerenciador de pacotes do Node)

#### **Passo a Passo**

1. **Clonar o Repositório**

   Abra o terminal e execute o seguinte comando para clonar o repositório:
   ```bash
   git clone https://github.com/Melissaost/trabalho_final_react_spring
   cd trabalho_final_react_spring
   ```

2. #### Contruindo
    ```bash
    npm install
    ```
3. #### Iniciar o back-end(Foi usada a api do professor porém com alguns ajustes)
    ```bash
    git clone https://github.com/Melissaost/trabalho_final_react_spring_back
    ```

- Nota: É necessário rodar o back do meu git para que funcione corretamente pois a anterior não funcionará bem.

4. #### Rodando
    ```bash
    npm run dev
    ```

5. #### Rodando
- http://127.0.0.1:5173/

5. #### Resolução de Problemas Comuns
Erros de Dependência: Caso encontre erros relacionados a dependências, execute o comando abaixo para limpar o cache do npm e reinstalar as dependências. Abrir o terminal e copiar código:

    npm cache clean --force
    npm install


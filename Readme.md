# Iniciar o Node.js
    npm init --yes

# Instalando o Cypres
    npm install cypress

# Configurar idioma vs code Portugues
    ctrl+shift+p
    Digite display
    Escolha a opção: Configure Display Language

# Quando baixar projeto em Cypress que não vai ter as pastas node_modules e package-lock.json,
# pois no .gitignore normalmente é informando para não enviar ao repositorio
    npm install

# Instalar o Cypress neste projeto baixado
    npx cypress install

# Se já instalado, necessita reinstalar com --force
    npx cypress install --force 

# Verificar a instalação do cypress
    npx cypress verify

# Iniciar o Cypress
    npx cypress open

# Aplicação do testes front
    https://automationpratice.com.br/my-account/customer-order

# Buscar por ID
    #btnLogin

# Buscar por Class
    .theme-btn-one

## Elemento <a class="theme-btn-one btn-black-overlay btn_md" href="/cart">View Cart</a>
    .theme-btn-one.btn-black-overlay.btn_md

## Botão direito -> Copy -> Selector
## Sempre vai pegar a melhor opção de selector, neste caso id
    #btnLogin

## Caso não tivesse ID, ou seja posso apagar no F12 o id e Botão direito -> Copy -> Selector

    #login_area div.login_submit > button

## Caso haja só um botão dentro do Login area
    #login_area button

# Selecionando elementos
## Encontrar e selecionar elementos
    get()

## Encontrar elementos por texto
## geralmetne diminuimos o escopo com um get()
    contaisn()

## Encontrar elementos, geralmetne diminuimos o escopo com um get()
    find()

## Éh um apelido (atalhos) para grande comandos
    as() - alias    
    cy.get('#top_header').as('cabecalho')
        
    cy.get('cabecalho')
        .find('.fa-user')

# Faker JS
https://fakerjs.dev/guide/

## Instalação
npm install @faker-js/faker --save-dev

## Importar para o arquivo de teste
import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

# Gerador e Validador de CPF
https://www.npmjs.com/package/gerador-validador-cpf

## Instalação
npm install gerador-validador-cpf --save

## Gerando CPF
import { generate } from 'gerador-validador-cpf'

generate() // Gera um CPF no formato 00000000000
generate({ format: true }) // Gera um CPF no formato 000.000.000-00
Validando CPF
import { validate } from 'gerador-validador-cpf'

validate('12345678900')
// ou
validate('123.456.789-00')

# Generate Password
https://www.npmjs.com/package/generate-password

## Instalação
npm install generate-password --save

## Gerando Password
var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});

// 'uEyMTw32v9'
console.log(password);

# Benefícios dos Padrão de Page Objects

## Manutenção
## Organização
## Responsabilidades
## Curva de aprendizado

# Relatório com mochawasome
https://github.com/LironEr/cypress-mochawesome-reporter

## Setup install cypress-mochawesome-reporter
npm i --save-dev cypress-mochawesome-reporter

## Change cypress reporter & setup hooks cypress.config.js

## Add to cypress/support/e2e.js
import 'cypress-mochawesome-reporter/register';

## Run Cypress
npx cypress run


# Adicionar Projeto no GitLab
## Push an existing folder
git init
git add .
git commit -m "Iniciando Projeto Github"
git remote add origin https://github.com/reginabecker/Bootcamp-cypress-primeiro.git
git branch -M master
git push -u origin master
git push --set-upstream origin master





## Criar Branch
Criar Branch
git checkout -b feature/branch-nova-oficial
git add .
git commit -m "Iniciando Projeto no Repositório Git"
git push
git push --set-upstream origin feature/branch-nova-oficial
git fetch exibe todo conteúdo do repositorio gitlab e demais branchs
git checkout nomeoutrabranch
No gitlab clicar no botão Create merge request
Clicar no texto em From feature/branch-nova-oficial into master -->>  Change branches
Clicar no botão Compare branches and continue
Caso desejar excluir a branch
No rodapé Deixar marcado Merge options: Delete source branch when merge request is accepted.
Clicar no botão Create merge request
Clicar no like
Clicar em Merge
git checkout master
git pull

# Abrir o Cypress
npx cypress open
Clicar menu runs
Conectar no Cypress Cloud
New Project
Chave: 
npx cypress run --record --key 25074789-9965-47cf-81ae-96c18833488c
Acessar o Repositorio Github
https://github.com/reginabecker/Bootcamp-cypress-primeiro/settings/secrets/actions
Criar a chave com a senha
CYPRESS_RECORD_KEY
25074789-9965-47cf-81ae-96c18833488c
No Cypress Cloud
https://cloud.cypress.io/projects/qpby7b/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D
Menu Project settings
Localizar 
GitHub Integration
Clicar Enable GitHub
Selecionar na combo _Bootcamp-cypress-primeiro

# Criar a Brach
git checkout -b feature/create-pipeline-file
git add .
git commit -m "Criando o Pull Request"
git push
git push --set-upstream origin feature/create-pipeline-file

# Run pipeline com push
Modificar projeto
git add .
git commit -m "Ajustes para pipeline com push"
git push



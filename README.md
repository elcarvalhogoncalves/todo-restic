# To-Do Bloco de Notas - React Native

Este é um aplicativo de To-Do estilo bloco de notas, desenvolvido em **React Native**, que permite ao usuário adicionar, editar e remover tarefas de forma simples e intuitiva.

## Funcionalidades

-   Adicionar novas tarefas
-   Editar e remover tarefas existentes
-   Marcar tarefas como concluídas
-   Interface amigável

## Tecnologias e Bibliotecas Utilizadas

-   [React Native](https://reactnative.dev/)
-   [Expo](https://expo.dev/)
-   [Styled Components](https://styled-components.com/)
-   [React Navigation](https://reactnavigation.org/)
-   [Formik](https://formik.org/)
-   [Yup](https://github.com/jquense/yup)
-   [Async Storage](https://docs.expo.dev/versions/latest/sdk/async-storage/)

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em seu computador as seguintes ferramentas:

-   [Node.js](https://nodejs.org/en/)
-   [Expo CLI](https://docs.expo.dev/get-started/installation/)
-   Um dispositivo físico ou emulador configurado para Android/iOS

## Rodando Localmente

Siga estas instruções para rodar o projeto localmente.

#### Passo 1: Clone o repositório

```bash
git clone https://github.com/elcarvalhogoncalves/todo-restic.git
cd todo-restic
```

#### Passo 2: Instale as dependências

```bash
npm install
# ou
yarn install
```

#### Passo 3: Inicie o projeto com Expo

```bash
npx expo start
```

#### Passo 4: Rodando no emulador ou dispositivo físico

Após iniciar o projeto com o Expo, você pode rodá-lo em um dispositivo físico ou emulador:

-   **Dispositivo físico**: Baixe o aplicativo Expo Go no seu dispositivo e escaneie o QR Code gerado pelo npx expo start.
-   **Emulador**: Se estiver usando Android Studio ou Xcode, inicie um emulador antes de rodar o comando de inicialização.

#### Scripts Disponíveis

No diretório do projeto, você pode rodar os seguintes comandos:

-   **npx expo start**: Inicializa o ambiente de desenvolvimento.
-   **npm run android**: Inicializa o aplicativo no emulador Android.
-   **npm run ios**: Inicializa o aplicativo no emulador iOS (requer um Mac com Xcode).

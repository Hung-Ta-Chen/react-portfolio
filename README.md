# Hung-Ta's Personal Website

## Requirements
- Node LTS (use `nvm install --lts && nvm use`)
- Yarn (`corepack enable && yarn --version`)
- Git

## How to run the codebase

### Local Development
```
# Clone the codebase
git clone https://github.com/Hung-Ta-Chen/react-portfolio.git
cd react-portfolio

# Add environment variables
cp .env.example .env   # then fill values (see below)

# Install dependencies
yarn install

# Add new depenedency
yarn add <dep>

# Run the project locally
yarn dev
# open http://localhost:3000
```

### Prod Development 

```
yarn build
yarn start
```

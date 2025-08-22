# Hotel Website Mock

A fully responsive, React-based mock website showcasing a hotel landing page. Built with Create React App, this project demonstrates modern front-end development practices, including component-based architecture, routing, and CSS modules.

![Hotel Showcase](public/images/showcase.jpg)

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive design with mobile-first layout
- React Router-based navigation
- Customizable components: NavBar, Footer, Home, About, Contact
- CSS modules for scoped styling
- Image assets served statically

## Demo

A live demo is available by running the application locally.

## Tech Stack

- React (v17+)
- Create React App
- React Router DOM
- CSS modules

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm (v6 or above) or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/neeldas6789/Hotel-website-mock.git
   cd Hotel-website-mock
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Available Scripts

In the project directory, you can run:

- `npm start` or `yarn start`
  Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
- `npm test` or `yarn test`
  Launches the test runner in interactive watch mode.
- `npm run build` or `yarn build`
  Builds the app for production to the `build` folder.
- `npm run eject`
  Ejects the Create React App configuration (use with caution).

## Project Structure

```
root
├── public
│   ├── images/      # Static image assets
│   ├── index.html   # Main HTML file
│   └── manifest.json
├── src
│   ├── App.js       # Root component
│   ├── index.js     # Entry point
│   ├── pages/       # Page-level components (Home, About, Contact)
│   ├── components/  # Reusable UI components (NavBar, Footer)
│   ├── styles/      # Component-specific CSS files
│   └── utils/       # Utility functions and assets
├── examples         # Usage examples and demonstrations
│   └── check.md     # Example: how to interact with the repo
├── package.json
└── README.md
```

## Examples

Check the [examples/check.md](examples/check.md) file for usage snippets and walkthroughs on how to explore and extend this project.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs, feature requests, or improvements.

## License

This project is licensed under the MIT License.
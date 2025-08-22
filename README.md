# Hotel Website Mock

A mock hotel website built with React showcasing a simple multi-page hotel landing site.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- React.js single-page application with multiple routes (Home, About, Contact)
- Responsive navigation bar and footer components
- Modular CSS styling per component/page
- Example images and assets served from `public` and `src/utils/images`

## Demo
To see a live demo, run the app locally (see [Usage](#usage)).

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/neeldas6789/Hotel-website-mock.git
   cd Hotel-website-mock
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage
Start the development server:
```bash
npm start
```
Open http://localhost:3000 in your browser to view the site.

## Project Structure
```
Hotel-website-mock/
├── public/             # Static assets (images, index.html, manifest)
├── src/
│   ├── components/     # Reusable UI components (NavBar, Footer)
│   ├── pages/          # Route components (Home, About, Contact)
│   ├── styles/         # CSS files per component/page
│   ├── utils/images/   # Sample image assets
│   ├── App.js          # Main application component with routing
│   └── index.js        # Entry point
├── examples/           # Example usage or code snippets
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is open source and available under the MIT License.
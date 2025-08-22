# Hotel Website Mock

An elegant static hotel website mock built with React. This project demonstrates a beautiful, responsive multi-page layout including Home, About, and Contact sections, reusable components, and CSS styling.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Demo

_A placeholder for live demo or screenshots._

## Features

- **Home Page** with a full-screen showcase banner, service highlights, and call-to-action buttons
- **About Page** featuring hotel description and guest reviews
- **Contact Page** with a functional contact form
- Reusable **NavBar** and **Footer** components across all pages
- Responsive design with CSS flexbox layouts and hover interactions

## Getting Started

### Prerequisites

- Node.js (>=12.x)
- npm (>=6.x) or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/neeldas6789/Hotel-website-mock.git
cd Hotel-website-mock

# Install dependencies
npm install

# Start development server
npm start
```

### Available Scripts

In the project directory, you can run:

- `npm start` &ndash; Runs the app in development mode at http://localhost:3000
- `npm test` &ndash; Launches the test runner
- `npm run build` &ndash; Builds the app for production to `build/`

## Project Structure

```
Hotel-website-mock/
├── public/                 # Static assets and root HTML
│   ├── index.html
│   └── images/             # Favicons and demo images
├── src/                    # Main source code
│   ├── components/         # Reusable UI components
│   │   ├── NavBar.js       # Navigation bar
│   │   └── Footer.js       # Footer section
│   ├── pages/              # Page-level components
│   │   ├── Home.js         # Home page layout
│   │   ├── About.js        # About page layout
│   │   └── Contact.js      # Contact page layout
│   ├── styles/             # CSS modules for each section
│   │   ├── Home.css
│   │   ├── About.css
│   │   └── contact.css
│   ├── utils/              # Utility files and images
│   │   └── images/
│   ├── App.js              # Application root component
│   └── index.js            # Entry point
├── README.md               # Project overview and docs
├── package.json            # Dependencies and scripts
└── ...
```

## Technologies Used

- React (CRA)
- CSS (Flexbox, hover effects)
- Create React App toolchain

## Contributing

Contributions are welcome! Please open an issue for suggestions or submit a pull request for improvements.

## License

This project is open source and available under the MIT License.
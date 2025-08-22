# Hotel Website Mock

A responsive mock hotel website built with React. This project demonstrates a multi-page layout with Home, About, and Contact sections, using React Router, Font Awesome icons, and modern CSS techniques.

## Features

- **Home Page** with a full-screen hero section and call-to-action button
- **About Page** showcasing hotel details and guest reviews
- **Contact Page** with a responsive contact form and address banner
- Navigation bar and footer components across all pages
- Mobile-first, responsive design using CSS modules
- Asset management for images via a utility folder

## Technologies

- React (v17)
- React Router DOM (v5)
- React Icons & Font Awesome
- CSS for styling (organized per component/page)
- Create React App build setup
- Cross-platform environment variables support with `cross-env`

## Getting Started

### Prerequisites

- Node.js (>=12.x)
- npm (>=6.x)

### Installation

```bash
# Clone the repository
git clone https://github.com/neeldas6789/Hotel-website-mock.git
cd Hotel-website-mock

# Install dependencies
npm install
```

### Available Scripts

In the project directory, you can run:

```bash
# Runs the app in development mode on http://localhost:3000
npm start

# Builds the app for production to the `build` folder
npm run build

# Launches the test runner in interactive watch mode
npm test

# Ejects the configuration when you need to customize CRA settings
npm run eject
```

> Note: All scripts prepend `cross-env NODE_OPTIONS=--openssl-legacy-provider` to ensure compatibility on some environments.

## Project Structure

```
public/                # Static files and HTML template
  ├─ index.html
  ├─ manifest.json
  └─ robots.txt         # Robots.txt allowing all crawlers
src/                   # Application source code
  ├─ components/        # Reusable UI components (NavBar, Footer)
  ├─ pages/             # Page-level components (Home, About, Contact)
  ├─ styles/            # CSS modules for layout and design
  ├─ utils/images/      # Image assets
  ├─ App.js             # Root component
  └─ index.js           # Entry point
README.md               # Project overview and instructions
```

## License

This project is open source and available under the MIT License.
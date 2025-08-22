# Hotel BT — Mock Hotel Website (React)

Welcome to **Hotel BT**, a responsive mock hotel website built with React and plain CSS. This project demonstrates a multi-page layout (Home, About, Contact) complete with a navigation bar, footer, and styled UI components.

## Features

- Home page with a full-screen hero section, key highlights, and feature cards.
- About page showcasing hotel description and guest reviews.
- Contact page with a styled contact form (see `src/pages/Contact.js`).
- Reusable `NavBar` and `Footer` components.
- Responsive design using CSS flexbox and media-query–ready styles.
- Image assets stored under `src/utils/images` and served from `public`.

## Technologies

- React (via Create React App)
- Plain CSS (no preprocessors)
- JavaScript ES6+

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/neeldas6789/Hotel-website-mock.git
   cd Hotel-website-mock
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

Open http://localhost:3000 to view in your browser. The app will reload on code changes.

## Available Scripts

In the project directory, you can run:

- `npm start` — Runs the app in development mode.
- `npm test` — Launches the test runner.
- `npm run build` — Bundles the app for production to the `build/` folder.
- `npm run eject` — Ejects Create React App configuration (not reversible).

## Project Structure

```
Hotel-website-mock/
├─ public/               # Public assets (HTML, images, manifest)
├─ src/                  # Application source code
│  ├─ components/        # Shared UI components
│  │   ├─ NavBar.js
│  │   └─ Footer.js
│  ├─ pages/             # Route pages
│  │   ├─ Home.js
│  │   ├─ About.js
│  │   └─ Contact.js
│  ├─ styles/            # CSS styles by page/component
│  │   ├─ Home.css
│  │   ├─ About.css
│  │   └─ Contact.css
│  ├─ utils/             # Static utilities (images, helpers)
│  │   └─ images/
│  ├─ App.js             # Root component with router
│  ├─ index.js           # Entry point
│  └─ index.css          # Global styles
└─ README.md             # This documentation
```

## Contributing

Contributions are welcome! Please fork the repo and open a pull request with your changes.

## License

This project is open source and available under the MIT License.
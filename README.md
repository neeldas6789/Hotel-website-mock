# Hotel Website Mock

A responsive, static hotel website built with React. This project demonstrates the use of React components, plain CSS, and asset management to create a multi-page layout including Home, About, and Contact pages.

## Features
- **Home Page**: Full-screen hero section, history overview, service highlights
- **About Page**: Hotel description, guest reviews, team showcase
- **Contact Page**: Interactive contact form for user inquiries
- **Responsive Design**: Mobile-first layout using CSS flexbox and media queries

## Built With
- [React](https://reactjs.org/) (Create React App)
- Plain CSS for styling

## Getting Started
Follow these instructions to set up the project locally.

### Prerequisites
- Node.js (v14 or newer)
- npm (v6 or newer)

### Installation
1. **Clone the repo**
   ```bash
   git clone https://github.com/neeldas6789/Hotel-website-mock.git
   ```
2. **Install dependencies**
   ```bash
   cd Hotel-website-mock
   npm install
   ```
3. **Start the development server**
   ```bash
   npm start
   ```
4. **View in browser**
   Open http://localhost:3000

## Available Scripts
In the project directory, you can run:

- `npm start`
  Runs the app in development mode.
- `npm test`
  Launches the test runner.
- `npm run build`
  Builds the app for production to the `build` folder.
- `npm run eject`
  Ejects the Create React App configuration. **Use with caution.**

## Project Structure
```
Hotel-website-mock/
├── public/               # Static files and assets
│   ├── index.html
│   ├── favicon.ico
│   └── images/
├── src/                  # Source files
│   ├── components/       # Shared UI components (NavBar, Footer)
│   ├── pages/            # Page components (Home, About, Contact)
│   ├── styles/           # CSS styles for each page/component
│   ├── utils/            # Utility assets (images)
│   ├── App.js            # Root component
│   └── index.js          # Entry point
└── README.md             # Project overview and setup instructions
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is open source and free to use.
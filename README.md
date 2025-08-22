# Hotel Website Mock

This is a mock hotel website built with React (using Create React App). It demonstrates a simple multi-page layout with reusable components.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Features
- Multi-page layout (Home, About, Contact)
- Responsive navigation bar and footer
- CSS modularity per component
- Static asset management (images, favicon)
- Built with React and modern tooling

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/neeldas6789/Hotel-website-mock.git
   ```
2. Install dependencies:
   ```bash
   cd Hotel-website-mock
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view in the browser.

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.

### `npm test`
Launches the test runner.

### `npm run build`
Builds the app for production to the `build` folder.

## Project Structure

```
Hotel-website-mock/
├── public/          
│   ├── index.html
│   └── images/      Static assets (jpg, png, favicon)
├── src/             
│   ├── components/  Reusable UI components (NavBar, Footer)
│   ├── pages/       Individual page components (Home, About, Contact)
│   ├── styles/      CSS files scoped to components/pages
│   ├── utils/
│   ├── App.js
│   └── index.js
├── examples/        
│   └── check.md     Examples on how to extend or customize the project
├── package.json
└── README.md
```

## Examples

Use the examples in the `examples` folder to learn how to extend or customize:

- **Adding a new page**  
  1. Create a new file under `src/pages/`.  
  2. Add a corresponding route in `src/App.js`.  
  3. Create or update CSS in `src/styles/`.

- **Customizing images**  
  Replace image files in `public/images/` or `src/utils/images/` to update assets in the app.

- **Styling components**  
  Modify or add `.css` files in `src/styles` or component-specific CSS in `src/components/`.

- **Run checks and examples**  
  Refer to `examples/check.md` for scripted usage examples and tests.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT License.

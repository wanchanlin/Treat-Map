# Halloween Candy App

This is a Next.js application that showcases a collection of Halloween candies. The app displays a list of candies with their names, images, and descriptions.

## Project Structure

```
halloween-candy-app
├── pages
│   ├── _app.js          # Initializes pages and global styles
│   └── index.js         # Main entry point of the application
├── public
│   └── assets
│       └── candy-images
│           ├── candy1.jpg  # Image for Candy Corn
│           └── candy2.jpg  # Image for Chocolate Bar
├── components
│   └── CandyCard.js      # Component to display individual candy items
├── styles
│   ├── globals.css       # Global CSS styles
│   └── Home.module.css    # Scoped styles for the Home page
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd halloween-candy-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Features

- Displays a collection of Halloween candies.
- Each candy card includes an image, name, and description.
- Built using Next.js for server-side rendering and optimized performance.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.

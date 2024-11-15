# Hópaverkefni 2 - TÖL107G - Team 38

This is the repository for Hópaverkefni 2 in TÖL107G. The project is structured to use modern web development tools like Sass, Stylelint, and Browser-Sync for streamlined development and styling.

## How to Clone the Repository

To clone this repository to your local machine, follow these steps:

1. Open your terminal.
2. Navigate to the directory where you want to store the project.
3. Run the following command to clone the repository:

   ```bash
   git clone https://github.com/janusbirgisson/hopaverkefni-2
   ```

4. Navigate into the project directory:

   ```bash
   cd hopaverkefni-2
   ```

5. Install the required dependencies by running:

   ```bash
   npm install
   ```

## Project Setup and Structure

The project is organized in the following way:

- `/data`: Contains JSON data, such as lectures.json and keywords.json, which are used to populate the content on pages.
- `/lib`: Includes all the main JavaScript files for the project, organized by functionality:
  - `components/`: Smaller reusable components like navigation (navigation.js).
  - `pages/`: Specific page logic, including content-page.js, lectures-page.js, and keyword-page.js.
- `/styles`: Contains all CSS/Sass files for styling the project.
- `/public`: Stores images and other public assets that are served directly to the browser.

CSS is organized into modular styles:
- Each part of the page has its own specific styles.
- Uses stylelint to enforce consistent styling and best practices in CSS.

## Implemented Features

### Pages and Navigation:
- A homepage displaying a navigation bar with an overview of the content.
- Dedicated pages for lectures and keywords, dynamically populated with data from JSON files.
- Navigation links connect pages using a slug-based structure.

### Content Display:
- Content is displayed in a responsive, flexible layout using CSS Grid.

### Footer:
- Configured to appear at the bottom of the screen or content, depending on the page layout.

### Linting:
- Supports JavaScript linting with eslint and CSS linting with stylelint.

### Development Setup:
- Uses vite for a fast development environment with the following scripts:
  - `npm run dev`: Starts the development server with hot reloading.
  - `npm run build`: Builds the project for production.
  - `npm run preview`: Previews the production build locally.
  - `npm run lint`: Runs eslint and stylelint to enforce coding standards.


## Contributors

- **Aser Kroma**  
  HÍ email: `ask57@hi.is`  
  GitHub Username: [AserKr](https://github.com/AserKr)

- **Janus Bjarki Brigisson**  
  HÍ email: `jbb24@hi.is`  
  GitHub Username: [janusbirgisson](https://github.com/janusbirgisson)

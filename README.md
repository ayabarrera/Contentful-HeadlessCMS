Hello! This project is deployed on  **Vercel: https://contentful-headless-cms.vercel.app/**

This is a project where I created a database of my trinket collection to Contentful! It is [Next.js](https://nextjs.org) project that fetches and displays data from Contentful, a headless CMS.

## Getting Started

### Prerequisites

- **Node.js and npm:** Make sure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the repository:**
    bash
    git clone <repository-url>
    cd <project-directory>

2. **Install Dependencies:**
    bash
    npm install

3. **.ENV.LOCAL**
    you won't be able to access the contentful API as I've hidden the 
    <CONTENTFUL_SPACE_ID>
    <CONTENTFUL_ACCESS_TOKEN>

3. **TO RUN**
    Start the development server 
    bash
    npm run dev
    Open **http://localhost:3000** with your web browser to see results.


### PROJECT STRUCTURE


`app/`: This directory is the heart of your Next.js application, using the App Router. It contains all your routes, components, and layout files.
`about/`: (Optional) This directory represents a specific route in your application, accessed via `/about`.`api/contentful/`: This directory contains API routes which then we would call from our page.jsx (makes the page.jsx uncluttered). 
`route.jsx`: This file defines an API endpoint at `/api/contentful`. It handles fetching data from Contentful and sending it as a JSON response.
`page.jsx`: This is the main page component for the root route (`/`). It fetches data from the /api/contentful` endpoint and renders it.
`HeaderFooter.jsx`: This file likely contains a reusable component for the header and footer of your pages.
`.env.local`: This file stores environment variables, such as your Contentful Space ID and Access Token. It is kept out of version control for security.
`.gitignore`: This file specifies files and directories that should be ignored by Git (version control).
### CSS
`layout.js`: This file defines the root layout for your application, wrapping all pages.
`HeaderFooter.module.css`: This file contains CSS module styles specific to the `HeaderFooter` component, ensuring styles are locally scoped.
`globals.css`: This file contains global CSS styles that apply to the entire application.

### Learn More
Next.js:
[Next.js Documentation](https://nextjs.org/docs)
[Learn Next.js](https://nextjs.org/learn)
Contentful:
[Contentful Documentation](https://www.google.com/url?sa=E&source=gmail&q=https://www.con%3C0%3Etentful.com/developers/docs/)
[Contentful JavaScript SDK](https://www.google.com/url?sa=E&source=gmail&q=https://www.contentful.com/developers/docs/javascript/)
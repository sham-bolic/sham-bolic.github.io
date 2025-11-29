# Maximillian Fong - Portfolio Website

A modern, interactive portfolio website built with Next.js 15, React 19, and Tailwind CSS. This project showcases my skills, experience, projects, and hobbies in a responsive and visually engaging way.

## 🌟 Features

- **Modern UI/UX:** Clean, responsive design with a focus on readability and user experience.
- **Interactive Elements:**
  - **Custom Cursor:** A CS:GO-inspired crosshair cursor with dynamic interactions.
  - **Kill Feed:** A playful notification system that mimics a gaming kill feed when users interact with the site.
  - **Animated Background:** Subtle, dynamic background effects.
  - **Scroll Animations:** Smooth reveal animations as you scroll through sections.
- **Dark Mode:** Fully supported dark mode with a toggle switch.
- **Section Navigation:** Smooth scrolling to sections (Home, Timeline, Projects, Skills, Hobbies, Contact).
- **Dynamic Content:** Content is separated from the UI logic, making it easy to update via `app/data/portfolio.ts`.
- **Botpress Integration:** Integrated AI chatbot for user interaction.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **PDF Rendering:** [React-PDF](https://github.com/wojtekmaj/react-pdf)
- **Deployment:** GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/sham-bolic/sham-bolic.github.io.git
    cd sham-bolic.github.io
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the application for production:

```bash
npm run build
```

To deploy to GitHub Pages (configured in `package.json`):

```bash
npm run deploy
```

## 📁 Project Structure

- `app/`: Main application source code (Next.js App Router).
  - `components/`: Reusable UI components (sections, layout, etc.).
  - `data/`: Static data files (portfolio content, skills, etc.).
  - `hooks/`: Custom React hooks (e.g., `useOnScreen`, `useActiveSection`).
- `public/`: Static assets (images, icons, PDFs).

## 👤 Author

**Maximillian Fong**

- Honors Computer Science Major, Statistics Minor at McGill University.
- GitHub: [@sham-bolic](https://github.com/sham-bolic)
- LinkedIn: [Maximillian Fong](https://www.linkedin.com/in/maximillian-fong-8b8577294/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

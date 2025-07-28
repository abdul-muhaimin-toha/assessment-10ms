# Frontend Engineer Assessment - 10 Minute School

This project was developed as a technical assessment for the Frontend Engineer position at 10 Minute School. It demonstrates the implementation of a modern, responsive, and feature-rich web application using a robust and scalable tech stack.

---

## ✨ Key Features

*   **Modern & Responsive UI:** Built with **Tailwind CSS 4**, the application is fully responsive, providing an optimal experience across desktops, tablets, and mobile devices.
*   **Interactive Components:** Features dynamic UI elements like accordions (`@radix-ui/react-accordion`) and carousels (`swiper`) to create an engaging and professional user experience.
*   **Component-Based Architecture:** The code is organized into modular and reusable components, promoting clean code, scalability, and ease of maintenance.
*   **Internationalization Ready:** Integrated with `next-intl`, the project is architected for easy localization to support multiple languages.
*   **Code Quality & Consistency:** Enforces a strict code style using **ESLint** and **Prettier**, ensuring the codebase is readable, consistent, and free of common errors.
*   **Latest Technologies:** Leverages the latest versions of **Next.js (v15)** and **React (v19)** to take advantage of new features and performance improvements.

---

## 🛠️ Tech Stack

The project is built using a curated set of modern frontend technologies:

*   **Framework:** [Next.js](https://nextjs.org/) v15.4.4
*   **UI Library:** [React](https://reactjs.org/) v19.1.0
*   **Language:** [TypeScript](https://www.typescriptlang.org/) v5
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
*   **UI Primitives:** [Radix UI](https://www.radix-ui.com/)
*   **Carousel:** [Swiper](https://swiperjs.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/)
*   **Linting & Formatting:** [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

---

## ⚙️ Getting Started

### Prerequisites

Ensure you have **Node.js (version 20 or higher)** and **npm** installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/abdul-muhaimin-toha/assessment-10ms.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd assessment-10ms
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## 🐳 Deployment with Docker

This project includes a production-ready, multi-stage `Dockerfile` to make deployment simple and consistent.

The Docker setup provides:
*   **Optimized Caching:** Faster builds by caching dependencies.
*   **Small Production Image:** A minimal and secure final image using an Alpine base.
*   **Security:** Runs the application as a non-root user.

### Running with Docker

1.  **Build the Docker image:**
    ```bash
    docker build -t assessment-10ms .
    ```

2.  **Run the Docker container:**
    ```bash
    docker run -dp 3000:3000 assessment-10ms
    ```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

---

## 📜 Available Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Creates a production-ready build.
*   `npm run start`: Starts the production server (requires a prior build).
*   `npm run lint`: Lints the codebase for quality and style issues.

---

## ✍️ Author & Contact

**Abdul Muhaimin Toha**

*   **Email:** `abdulmuhaimintoha.business@gmail.com`
*   **Phone:** `+88 01839 6429 56`
*   **Portfolio:** [abdulmuhaimintoha.vercel.app](https://abdulmuhaimintoha.vercel.app/)
*   **GitHub:** [@abdul-muhaimin-toha](https://github.com/abdul-muhaimin-toha)
*   **LinkedIn:** [in/abdul-muhaimin-toha](http://www.linkedin.com/in/abdul-muhaimin-toha)
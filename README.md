# Developer Portfolio

A modern, responsive portfolio built with Next.js 16, React 19, and Tailwind CSS 4.

## 🌐 Live Demo

Visit my portfolio: [https://your-portfolio-url.com](https://your-portfolio-url.com)

## Prerequisites

- **Docker Desktop** - [Download here](https://www.docker.com/products/docker-desktop)
- **Git** - [Download here](https://git-scm.com/downloads)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/developer-portfolio.git
   cd developer-portfolio
   ```

2. **Start the portfolio**
   ```bash
   docker-compose up
   ```

3. **Open your browser**: Visit [http://localhost:3000](http://localhost:3000)

4. **Stop the portfolio**
   
   Press `Ctrl+C` or run:
   ```bash
   docker-compose down
   ```

## Customization

All portfolio content is in `utils/data/` folder. Update these files:

- `personal-data.js` - Your name, bio, contact info, social links
- `experience.js` - Work experience
- `projects-data.js` - Your projects
- `skills.js` - Technical skills
- `educations.js` - Education background

Add your profile picture to the `public/` folder and update the path in `personal-data.js`.
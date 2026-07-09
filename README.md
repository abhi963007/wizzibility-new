# Wizzibility - Webflow Template Converted to React

A modern React application converted from a Webflow template, featuring a photography and videography studio website with smooth scrolling, animations, and a multi-page structure.

## Features

- **Multi-page Architecture**: Home, Services, Projects, and Contact pages
- **Smooth Scrolling**: Implemented with Lenis library
- **Animations**: GSAP animations for scroll-triggered effects
- **Responsive Design**: Mobile-friendly layout
- **Component-based Structure**: Reusable React components
- **Shared Navigation & Footer**: Consistent layout across all pages

## Pages

- **Home**: Full landing page with Hero, About, Projects, Services, Photography, Gallery, WhyChoose, Process, Cinematic, Pricing, Team, and Testimonials sections
- **Services**: Dedicated services page showcasing photography, videography, and editing services
- **Projects**: Portfolio page displaying recent projects
- **Contact**: Contact form for inquiries

## Tech Stack

- **React 18.3.1** - UI library
- **Vite 5.4.1** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **GSAP** - Animation library
- **Lenis** - Smooth scrolling
- **Webflow CSS** - Original styling from template

## Project Structure

```
wizzibility-new/
├── public/                 # Static assets
│   ├── css/               # Stylesheets
│   ├── images/            # Image assets
│   ├── js/                # JavaScript libraries
│   └── media/             # Video files
├── src/
│   ├── components/        # React components
│   │   ├── shared/        # Shared components (Navbar, Footer)
│   │   ├── About.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Photography.jsx
│   │   ├── Gallery.jsx
│   │   ├── WhyChoose.jsx
│   │   ├── Process.jsx
│   │   ├── Cinematic.jsx
│   │   ├── Pricing.jsx
│   │   ├── Team.jsx
│   │   └── Testimonials.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── hooks/             # Custom React hooks
│   ├── css/               # Source CSS
│   ├── App.jsx            # Main App component
│   └── main.jsx           # Entry point
├── reference/             # Original Webflow export (gitignored)
├── index.html             # HTML entry point
├── package.json           # Dependencies
└── vite.config.js         # Vite configuration
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/abhi963007/wizzibility-new.git
cd wizzibility-new
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## Build

Build for production:
```bash
npm run build
```

The built files will be in the `dist/` directory.

## Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Custom Scripts

The project includes custom scripts that run before the dev server:

- `fix-html.js` - Fixes malformed HTML attributes from Webflow export
- `copy-css.js` - Copies CSS from `src/css` to `public/css`

## Dependencies

### Production
- react ^18.3.1
- react-dom ^18.3.1

### Development
- vite ^5.4.1
- @vitejs/plugin-react ^4.3.1
- react-router-dom
- gsap
- @studio-freight/lenis
- prettier ^3.9.4
- js-beautify ^2.0.3

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is converted from a Webflow template. Please check the original template's license for usage rights.

## Credits

- Original template: Framevo Webflow Template
- Converted to React by: Wizzibility
- Icons: Webflow template assets
- Fonts: Inter Tight, Phudu (Google Fonts)

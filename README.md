# Around the USA in 50 States

[![Netlify Status](https://api.netlify.com/api/v1/badges/29514b82-5ddc-46c2-9c73-06a33107b20d/deploy-status)](https://app.netlify.com/sites/aroundtheusinfiftystates/deploys)

An interactive React application showcasing all 50 US states with their flags and information. Explore America state by state with filtering and detailed views.

## Features

- Interactive state selection and filtering
- Complete collection of US state flags
- Detailed state information display
- Responsive design for all devices
- Fast performance with Vite

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Lodash** - Utility functions
- **CSS3** - Styling

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd aroundtheusin50states
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # React components
│   ├── content/    # Content display components
│   ├── filter/     # Filtering components
│   ├── modals/     # Modal components
│   └── navigation/ # Navigation components
├── contexts/       # React contexts
├── data/          # State data and configurations
└── assets/        # Static assets
```

## Deployment

This project is automatically deployed to Netlify. The deployment status is shown in the badge above.

## License

This project is licensed under the terms specified in the LICENSE file.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

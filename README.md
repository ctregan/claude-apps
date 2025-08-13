# Claude Apps

A collection of useful applications built with Claude AI, starting with the Family Chore Manager PWA.

## 🚀 Live Demo

Deploy this project to Vercel for easy hosting and automatic deployments.

## 📱 Apps Included

### Family Chore Manager
- **Description**: Organize and track household chores for you and your partner on a weekly basis
- **Features**:
  - Weekly chore tracking with navigation
  - Two-person management with customizable names
  - Touch-friendly mobile interface
  - Offline PWA functionality
  - iOS homescreen installation support
  - Local data persistence

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: CSS3 with mobile-first responsive design
- **Routing**: React Router DOM
- **PWA**: Service Worker, Web App Manifest
- **Build**: Create React App
- **Deployment**: Vercel

## 🏗️ Project Structure

```
claude-apps/
├── public/
│   ├── manifest.json          # PWA configuration
│   └── index.html            # Main HTML template
├── src/
│   ├── components/
│   │   ├── HomePage.tsx      # Landing page with app cards
│   │   ├── AppCard.tsx       # Reusable app card component
│   │   ├── ChoreManager.tsx  # Family Chore Manager app
│   │   └── *.css            # Component styles
│   ├── App.tsx              # Main app with routing
│   └── App.css              # Global styles
├── vercel.json              # Vercel deployment config
└── package.json             # Dependencies and scripts
```

## 🚦 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd claude-apps

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. **Automatic Deployment** (Recommended):
   - Connect your GitHub repository to Vercel
   - Push changes to trigger automatic deployments

2. **Manual Deployment**:
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel --prod
   ```

### Deploy to Other Platforms
The build output in the `build/` folder can be deployed to any static hosting service:
- Netlify
- GitHub Pages  
- AWS S3
- Firebase Hosting

## 📱 PWA Installation

### iOS (Safari)
1. Open the deployed app in Safari
2. Tap the Share button
3. Select "Add to Home Screen"
4. Tap "Add" to install

### Android (Chrome)
1. Open the app in Chrome
2. Tap the menu (three dots)
3. Select "Add to Home Screen" or "Install App"

## 🔧 Adding New Apps

To add a new Claude-built app to the collection:

1. **Create the component**:
   ```tsx
   // src/components/NewApp.tsx
   import React from 'react';
   import './NewApp.css';
   
   const NewApp: React.FC = () => {
     return <div>Your new app content</div>;
   };
   
   export default NewApp;
   ```

2. **Add routing**:
   ```tsx
   // src/App.tsx
   import NewApp from './components/NewApp';
   
   // Add to Routes
   <Route path="/newapp" element={<NewApp />} />
   ```

3. **Update homepage**:
   ```tsx
   // src/components/HomePage.tsx
   const apps = [
     // ... existing apps
     {
       title: 'New App',
       description: 'Description of your new app',
       icon: '🆕',
       path: '/newapp'
     }
   ];
   ```

## 🎨 Customization

### Theme Colors
Update colors in:
- `src/App.css` (global styles)
- `public/manifest.json` (PWA theme)
- Individual component CSS files

### App Icons
Replace the following files in `public/`:
- `favicon.ico` (16x16, 32x32, 64x64)
- `logo192.png` (192x192)
- `logo512.png` (512x512)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🐛 Issues

If you encounter any issues, please report them in the GitHub Issues section.

---

Built with ❤️ using Claude AI

import React from 'react';
import AppCard from './AppCard';
import './HomePage.css';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const apps = [
    {
      title: 'Family Chore Manager',
      description: 'Organize and track household chores for you and your partner on a weekly basis.',
      icon: '🏠',
      path: '/chores'
    }
    // Future apps will be added here
  ];

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Claude Apps</h1>
        <p>A collection of useful applications built with Claude AI</p>
      </header>
      
      <main className="home-content">
        <div className="apps-grid">
          {apps.map((app, index) => (
            <AppCard
              key={index}
              title={app.title}
              description={app.description}
              icon={app.icon}
              path={app.path}
              onNavigate={onNavigate}
            />
          ))}
        </div>
        
        {apps.length === 0 && (
          <div className="no-apps">
            <p>No apps available yet. Check back soon!</p>
          </div>
        )}
      </main>
      
      <footer className="home-footer">
        <p>Built with ❤️ using Claude AI</p>
      </footer>
    </div>
  );
};

export default HomePage;
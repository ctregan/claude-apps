import React from 'react';
import './AppCard.css';

interface AppCardProps {
  title: string;
  description: string;
  icon: string;
  path: string;
  onNavigate: (path: string) => void;
}

const AppCard: React.FC<AppCardProps> = ({ title, description, icon, path, onNavigate }) => {
  const handleClick = () => {
    if (path.startsWith('http')) {
      // External URL - open in new tab
      window.open(path, '_blank');
    } else {
      // Internal route - use navigation
      onNavigate(path);
    }
  };

  return (
    <div className="app-card" onClick={handleClick}>
      <div className="app-icon">{icon}</div>
      <h3 className="app-title">{title}</h3>
      <p className="app-description">{description}</p>
      <div className="app-arrow">→</div>
    </div>
  );
};

export default AppCard;
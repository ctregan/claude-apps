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
  return (
    <div className="app-card" onClick={() => onNavigate(path)}>
      <div className="app-icon">{icon}</div>
      <h3 className="app-title">{title}</h3>
      <p className="app-description">{description}</p>
      <div className="app-arrow">→</div>
    </div>
  );
};

export default AppCard;
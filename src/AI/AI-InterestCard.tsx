import React from 'react';
import './UCSCCard.css';

interface Props {
  title: string;
  icon?: string;
  children: React.ReactNode;
}

export const UCSCCard: React.FC<Props> = ({ title, icon, children }) => (
  <div className="ucsc-card">
    <div className="ucsc-card-header">
      {icon && <span className="ucsc-icon">{icon}</span>}
      <h3>{title}</h3>
    </div>
    <div className="ucsc-card-body">{children}</div>
  </div>
);

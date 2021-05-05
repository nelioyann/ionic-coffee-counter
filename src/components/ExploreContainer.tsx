import { IonButton } from '@ionic/react';
import React from 'react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <IonButton>Ready to create something cool?</IonButton>
    </div>
  );
};

export default ExploreContainer;

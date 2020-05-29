import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import { add, trash} from 'ionicons/icons'
import './Home.css';

const Home: React.FC = () => {

  const [coffees, setCoffees] = useState(()=>{
    const localCoffes = localStorage.getItem("coffees");
    return localCoffes ? JSON.parse(localCoffes) : 0
  })
  useEffect(()=>{
    localStorage.setItem("coffees", JSON.stringify(coffees))
  }, [coffees])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Coffee Counter</IonTitle>
          
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="container">
        <h1>You drank {coffees} coffees</h1>
        <h3>Add or remove coffees</h3>
        <IonButton onClick={()=> setCoffees(0)}>
          <IonIcon icon={trash}/>
          Reset
        </IonButton>
        
        <IonButton slot="start" onClick={()=> setCoffees(+coffees + 1)}>
          <IonIcon icon={add}/>
          Add
        </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

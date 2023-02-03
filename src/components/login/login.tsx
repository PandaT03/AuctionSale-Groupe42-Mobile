import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, useIonRouter  } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import Inscription from '../inscription/inscription';
import axios from 'axios';
import './loin.css';

interface Connexion {connect:Function}
const Login: React.FC<Connexion> = ({connect}) => {
  const router = useIonRouter();
  const connexion = async (props : any,connect : Function) =>{
    axios.post("https://auctionsale-cloud-webservice-production.up.railway.app/user/authenticate",{
      email : props.email,
      password : props.password
    }).then((data) => {
      props.email = "divno@gmail.com";
      props.password = "Divno01!";
      localStorage.setItem("token",JSON.stringify(data.data));
      connect(true);
      router.push("/accueil","forward","push");
    }).catch((err) => {
    });
  }
  const [email, setEmail] = useState('divno@gmail.com');
  const [password, setPassword] = useState('Divno01!');
  const utilisateur = {
    email : email,
    password : password
  };

  
  return (
    
    <IonPage className="ion-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          required
          placeholder="Email"
          value={email}
          onIonInput={(e:any) => setEmail(e.target.value)}
        />
        <IonInput
          type="password"
          placeholder="Password"
          value={password}
          onIonInput={(e:any) => setPassword(e.target.value)}
        />
         
        <IonButton expand="block" onClick={() => connexion(utilisateur,connect).then(() =>{
            setEmail("");
            setPassword("");
          })}>
          Login
        </IonButton>
        
        <Link to="/inscription">S'inscrire</Link>
      </IonContent>
    </IonPage>
  );
};

export default Login;

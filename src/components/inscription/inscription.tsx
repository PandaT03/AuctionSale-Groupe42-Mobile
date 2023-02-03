import React, { useState } from 'react';
import './inscription.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, useIonRouter   } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Inscription : React.FC = () => {
    const insertInscription = (props : any) =>
    {
    const data = axios.post("https://auctionsale-cloud-webservice-production.up.railway.app/user/register",{
        name : props.name,
        mobile : props.mobile,
        email : props.email,
        password : props.password
    }).then(() => router.push("/"));
    }
    const router = useIonRouter();
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const utilisateur = {
        name : name,
        mobile : mobile,
        email : email,
        password : password
      };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Inscription</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonInput
                    placeholder="Name"
                    value={name}
                    onIonChange={(e) => setName(e.detail.value!)}
                />
                <IonInput
                    placeholder="Mobile"
                    value={mobile}
                    onIonChange={(e) => setMobile(e.detail.value!)}
                />
                <IonInput
                    placeholder="Email"
                    value={email}
                    onIonChange={(e) => setEmail(e.detail.value!)}
                />
                <IonInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onIonChange={(e) => setPassword(e.detail.value!)}
                />
                <IonButton expand="block" onClick={() => insertInscription(utilisateur)} type="submit">
                    S'incrire
                </IonButton>
                <Link to="/">Retour</Link>
            </IonContent>
        </IonPage>
    );
};

export default Inscription;

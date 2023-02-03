import React, { useState } from 'react';
import './rechargerCompte.css'
import { IonButtons, IonMenuButton } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonItem } from '@ionic/react';

const RechargeCompte: React.FC = () => {
    const [vola, setVola] = useState('');

    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Recharger son compte</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonItem> saisir le montant </IonItem>
                <IonInput
                    placeholder="Vola"
                    value={vola}
                    onIonChange={(e) => setVola(e.detail.value!)}
                />
                <IonButton expand="block" onClick={() => console.log(vola)}>
                    Valider
                </IonButton>
            </IonContent>

        </IonPage>
    );
};

export default RechargeCompte;


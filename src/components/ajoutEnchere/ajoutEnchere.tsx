import React, { useState } from 'react';
import { IonButtons, IonMenuButton } from '@ionic/react';
import { IonImg, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonSelect, IonLabel, IonItem, IonSelectOption, IonDatetime, useIonRouter } from '@ionic/react';
import axios from 'axios';

const liste_categorie = () =>
{
    const data = axios.get("https://auctionsale-cloud-webservice-production.up.railway.app/categories/collection");
    return data;
}
const AjoutEnchere: React.FC = () => {
    const [categorie, setCategorie] = useState('');
    const [description, setDescription] = useState('');
    const [minimumPrice, setMinimumPrice] = useState('');
    const [liste_categoriee,setListeCategorie] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const router = useIonRouter();

    const ajout_enchere = (props:any) =>
    {
        const id = localStorage.getItem("token");
        let iduser = null;
        if(id != null)
        {
        const json = JSON.parse(id);
        iduser = json.email;
        }
        axios.post("https://auctionsale-cloud-webservice-production.up.railway.app/encheres?email="+iduser+"&categorie_id="+props.categorie,{
        email : iduser,
        categorie_id  : props.categorie,
        prixdepart : props.prix_min+'.0',
        datefin : selectedDate,
        description : props.description
        }).then((data) => {
        router.push("/accueil","forward","push");
        }).catch((err) => {
            alert(err);
          });
    }

    liste_categorie().then(data => setListeCategorie(data.data)).catch(() => alert("Connexion impossible"));

    const ajout={
        categorie : categorie,
        description : description,
        prix_min : minimumPrice,
        dureeenchere : selectedDate,
    
      };

      const handleDateChange = (event: CustomEvent) => {
        var exemple=event.detail.value!;
        var annee=exemple.split("T")[0];
        var heure=exemple.split("T")[1];
        var anneeSplit=annee.split("-");
        var heureSplit=heure.split(":");
        var trueAnnee=anneeSplit[2]+"/"+anneeSplit[1]+"/"+anneeSplit[0];
        var trueHeure=heureSplit[0]+":"+heureSplit[1];
        setSelectedDate(trueAnnee+" "+trueHeure);
      };
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>Ajout Enchere</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">

                <IonItem>
                    <IonLabel>Date Fin</IonLabel>
                    <IonDatetime
                        display-format="DD-MM-YYYY HH:mm"
                        value={selectedDate}
                        onIonChange={handleDateChange}
                    />
                </IonItem>


                <IonLabel>Description</IonLabel>
                <IonInput
                    placeholder="Description"
                    value={description}
                    onIonChange={(e) => setDescription(e.detail.value!)}
                />

                <IonLabel>Categorie</IonLabel>
                <IonSelect interface='popover' onIonChange={(e) => setCategorie(e.detail.value)}>
                {
                    liste_categoriee.map( item =>{
                    return(
                        <IonSelectOption key={item["id"]} value={item["id"]}>{item['name']}</IonSelectOption>
                    );
                    })
                }
                </IonSelect>


                <IonLabel>Prix de départ</IonLabel>
                <IonInput
                    placeholder="Prix Depart"
                    type="number"
                    value={minimumPrice}
                    onIonChange={(e) => setMinimumPrice(e.detail.value!)}
                />

                
                <IonButton expand="block" onClick={() => ajout_enchere(ajout)} type="submit">
                    Ajouter
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default AjoutEnchere;
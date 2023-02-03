import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, addOutline, homeOutline, homeSharp, mailOutline, addSharp, paperPlaneOutline, paperPlaneSharp, exitOutline, exitSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Accueil',
    url: '/accueil',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Ajout Enchere',
    url: '/ajoutEnchere',
    iosIcon: addOutline,
    mdIcon: addSharp
  },
  {
    title: 'Liste de mes Encheres',
    url: '/liste',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Recharger compte',
    url: '/rechargerCompte',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Deconnexion',
    url: '/deconnexion',
    iosIcon: exitOutline,
    mdIcon: exitSharp
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Auction Sale</IonListHeader>
          <IonNote>Groupe 42</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;

import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Message } from '../data/messages';
import './MessageListItem.css';

interface MessageListItemProps {
  message: Message;
}

const MessageListItem: React.FC<MessageListItemProps> = ({ message }) => {
  return (
    <IonItem routerLink={`/message/${message.id}`} detail={false}>
      <IonLabel className="ion-text-wrap">
        <h2>
          {message.Description}
          <span className="date">
            <IonNote>{message.statut}</IonNote>
          </span>
        </h2>
        <h3>{message.categorie}
          <span className="date">
            <IonNote>{message.prix} Ar</IonNote>
          </span>
          </h3>
        <p>
          Debut: {message.dateDebut}  et  Fin: {message.dateFin}
        </p>
      </IonLabel>
    </IonItem>
  );
};

export default MessageListItem;

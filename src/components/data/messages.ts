export interface Message {
  Description: string;
  categorie: string;
  dateDebut: string;
  dateFin: string;
  statut: string;
  prix: number;
  id: number;
}

const messages: Message[] = [
  {
    Description: 'Tecno N11',
    categorie: 'Téléphones',
    dateDebut: '03/02/2023 12:13',
    dateFin: '03/02/2023 12:14',
    statut: 'Terminée',
    prix: 200000,
    id: 0
  },
  {
    Description: 'iphone X 64Gb',
    categorie: 'Téléphones',
    dateDebut: '01/02/2023 13:13',
    dateFin: '01/02/2023 14:14',
    statut: 'Terminée',
    prix: 1200000,
    id: 1
  },
  {
    Description: 'Samsung S22 Ultra',
    categorie: 'Téléphones',
    dateDebut: '02/02/2023 12:13',
    dateFin: '03/02/2023 12:14',
    statut: 'Terminée',
    prix: 2000000,
    id: 2

  },
  {
    Description: 'Peugeot 106 S16',
    categorie: 'Téléphones',
    dateDebut: '05/02/2023 12:13',
    dateFin: '15/02/2023 09:14',
    statut: 'Terminée',
    prix: 18000000,
    id: 3
  },
  {
    Description: 'Tecno N11',
    categorie: 'Téléphones',
    dateDebut: '03/02/2023 12:13',
    dateFin: '03/02/2023 12:14',
    statut: 'Terminée',
    prix: 200000,
    id: 4
  },
  {
    Description: 'Tecno N11',
    categorie: 'Téléphones',
    dateDebut: '03/02/2023 12:13',
    dateFin: '03/02/2023 12:14',
    statut: 'Terminée',
    prix: 200000,
    id: 5
  },
  {
    Description: 'Tecno N11',
    categorie: 'Téléphones',
    dateDebut: '03/02/2023 12:13',
    dateFin: '03/02/2023 12:14',
    statut: 'Terminée',
    prix: 200000,
    id: 6
  },
  {
    Description: 'Tecno N11',
    categorie: 'Téléphones',
    dateDebut: '03/02/2023 12:13',
    dateFin: '03/02/2023 12:14',
    statut: 'Terminée',
    prix: 200000,
    id: 7
  }
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);

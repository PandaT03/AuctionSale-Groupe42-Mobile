import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      Bienvenue à <strong>Auction Sale</strong>
      <br/>
      <p>Groupe 42</p>
      <br/>
      <p>ETU1471 - ETU1379 - ETU1411 - ETU1481</p>
    </div>
  );
};

export default ExploreContainer;

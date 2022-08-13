import React from 'react';
// Api
import { fetchCharacter } from './api';
// Components
import Card from './components/Card';
// context hook
import { useCharacterId } from './components/Context';
// Types
import { Character } from './api';
// Styles
import { Wrapper } from './App.styles';

const App: React.FC = () => {
  const [character, setCharacter] = React.useState<Character>({} as Character);
  const [isLoading, setIsLoading] = React.useState(false);

  const { characterId, setCharacterId } = useCharacterId();

  React.useEffect(() => {
    const fetchFromApi = async () => {
      setIsLoading(true);
      const result = await fetchCharacter(characterId);
      setIsLoading(false);
      setCharacter(result);
    };

    fetchFromApi();
  }, [characterId]);

  return (
    <Wrapper characterId={characterId}>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <Card
            gender={character.gender}
            name={character.name}
            imgUrl={character.img_url}
          />
          <button onClick={() => setCharacterId(Math.floor(Math.random() * 10) + 1)}>
            Random Character
          </button>
        </>
      )}
    </Wrapper>
  );
};

export default App;

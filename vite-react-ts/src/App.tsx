import React from 'react';
// Api
import { fetchCharacter } from './api';
// Components
import Card from './components/Card';
import Item from './components/Item';
// context hook
import { useCharacterId } from './components/Context';
// Types
import { Character } from './api';
// Styles
import { Wrapper } from './App.styles';

const App: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

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

  const handleMouseClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(e.currentTarget);
    setCharacterId(Number(inputRef.current?.value));
  };

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
          <Item item={character} onClick={(item) => console.log(item.origin)} />
          <input type="text" ref={inputRef} />
          <button onClick={handleMouseClick}>Get Character</button>
        </>
      )}
    </Wrapper>
  );
};

export default App;

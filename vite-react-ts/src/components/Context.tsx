import React from 'react';

type CharacterIdtype = {
  characterId: number;
  setCharacterId: React.Dispatch<React.SetStateAction<number>>;
};

const Context = React.createContext<CharacterIdtype>({} as CharacterIdtype);

const CharacterIdProvider: React.FC = ({ children }) => {
  const [characterId, setCharacterId] = React.useState(1);

  return (
    <Context.Provider value={{ characterId, setCharacterId }}>
      {children}
    </Context.Provider>
  );
};

export default CharacterIdProvider;

export const useCharacterId = () => React.useContext(Context);

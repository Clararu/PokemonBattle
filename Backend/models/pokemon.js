const pokemonData = {
  2: {
    name: {
      english: 'Ivysaur',
      japanese: 'フシギソウ',
      chinese: '妙蛙草',
      french: 'Herbizarre',
    },
    type: ['Grass', 'Poison'],
    base: {
      HP: 60,
      Attack: 62,
      Defense: 63,
      'Sp. Attack': 80,
      'Sp. Defense': 80,
      Speed: 60,
    },
  },
};

export const getAllPokemon = (id) => {
  return pokemondata[id];
};

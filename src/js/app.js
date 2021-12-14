import GameSavingLoader from './GameSavingLoader';

export default async function savingGame() {
  try {
    const output = await GameSavingLoader.load();
    return output;
  } catch (err) { throw new Error('Ошибка в файле reader.js'); }
}

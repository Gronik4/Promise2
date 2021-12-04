import GameSavingLoader from './GameSavingLoader';

export default async function savingGame() {
  return GameSavingLoader.load()
    .then((res) => res)
    .catch(() => 'Ошибка!');
}

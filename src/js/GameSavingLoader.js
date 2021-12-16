import GameSaving from './GameSaving';
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    const reading = await read();
    const parsing = await json(reading);
    return new GameSaving(JSON.parse(parsing));
  }
}

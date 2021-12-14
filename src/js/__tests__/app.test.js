import savingGame from '../app';
import GameSaving from '../GameSaving';

test('Test app.js async', async () => {
  const dat = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const result = new GameSaving(JSON.parse(dat));
  const data = await savingGame();
  expect(data).toEqual(result);
});

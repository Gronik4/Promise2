import savingGame from '../app';

jest.mock('../reader.js');
const expected = 'Ошибка!';

test('Test async with mock', async () => {
  const date = await savingGame();
  expect(date).toBe(expected);
});

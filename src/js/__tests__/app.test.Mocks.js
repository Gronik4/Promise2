import savingGame from '../app';

jest.mock('../reader.js');

test('Test async with mock', async () => {
  await expect(savingGame()).rejects.toThrow();
});

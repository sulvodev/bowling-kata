import Sum from '../main/sum';

test('adds 1 + 2 to equal 3', () => {
  const sum = new Sum();
  
  expect(sum.s(1, 2)).toBe(3);
});
import {getCompactFormat} from '../getCompactFormat';

describe('getCompactFormat', () => {
  it('should return the number as a string if less than 1000', () => {
    expect(getCompactFormat(950)).toBe('950');
  });

  it('should correctly format numbers in the thousands', () => {
    expect(getCompactFormat(1000)).toBe('1K');
    expect(getCompactFormat(1500)).toBe('1.5K');
    expect(getCompactFormat(500000)).toBe('500K');
  });

  it('should correctly format numbers in the millions', () => {
    expect(getCompactFormat(3000000)).toBe('3M');
    expect(getCompactFormat(2500000)).toBe('2.5M');
  });

  it('should correctly format numbers in the billions', () => {
    expect(getCompactFormat(2500000000)).toBe('2.5B');
  });
});

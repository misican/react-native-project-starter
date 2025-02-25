import { getOrdinalFormat } from '../getOrdinalFormat';

describe('getOrdinalFormat', () => {
  it('should return "1st" for 1', () => {
    expect(getOrdinalFormat(1)).toBe('1st');
  });

  it('should return "2nd" for 2', () => {
    expect(getOrdinalFormat(2)).toBe('2nd');
  });

  it('should return "3rd" for 3', () => {
    expect(getOrdinalFormat(3)).toBe('3rd');
  });

  it('should return "4th" for 4', () => {
    expect(getOrdinalFormat(4)).toBe('4th');
  });

  it('should handle special cases: 11, 12, 13', () => {
    expect(getOrdinalFormat(11)).toBe('11th');
    expect(getOrdinalFormat(12)).toBe('12th');
    expect(getOrdinalFormat(13)).toBe('13th');
  });

  it('should correctly format numbers like 21, 22, 23, 24', () => {
    expect(getOrdinalFormat(21)).toBe('21st');
    expect(getOrdinalFormat(22)).toBe('22nd');
    expect(getOrdinalFormat(23)).toBe('23rd');
    expect(getOrdinalFormat(24)).toBe('24th');
  });

  it('should correctly handle larger numbers', () => {
    expect(getOrdinalFormat(101)).toBe('101st');
    expect(getOrdinalFormat(102)).toBe('102nd');
    expect(getOrdinalFormat(103)).toBe('103rd');
    // Special case: 111 should be "111th" due to the 11-13 rule.
    expect(getOrdinalFormat(111)).toBe('111th');
  });
});

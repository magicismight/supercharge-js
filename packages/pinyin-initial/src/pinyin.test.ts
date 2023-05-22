import { getPinyinInitial } from './pinyin';

describe('getPinyinInitial', () => {
  it('should get initial from Hanzi', () => {
    expect(getPinyinInitial('一')).toBe('Y');
    expect(getPinyinInitial('二')).toBe('E');
    expect(getPinyinInitial('测')).toBe('C');
    expect(getPinyinInitial('试')).toBe('S');
  });

  it('should get letter from letter', () => {
    expect(getPinyinInitial('a')).toBe('A');
    expect(getPinyinInitial('z')).toBe('Z');
  });

  it('should throw if input is length is not 1', () => {
    expect(() => getPinyinInitial('')).toThrowError();
    expect(() => getPinyinInitial('aa')).toThrowError();
  });

  it('should get empty string if input is not letter or Hanzi', () => {
    expect(getPinyinInitial('1')).toBe('');
    expect(getPinyinInitial('!')).toBe('');
  });
});

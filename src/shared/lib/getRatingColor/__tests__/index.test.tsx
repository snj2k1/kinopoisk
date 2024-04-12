import { getRatingColor } from '..';

describe('getRatingColor', () => {
  it('should get a valid color with rating 7', () => {
    const getColor = getRatingColor(7);

    expect(getColor).toEqual('green');
  });
  it('should get a valid color with rating 10', () => {
    const getColor = getRatingColor(10);

    expect(getColor).toEqual('green');
  });
  it('should get a valid color with rating 6', () => {
    const getColor = getRatingColor(6);

    expect(getColor).toEqual('yellow');
  });
  it('should get a valid color with rating 4', () => {
    const getColor = getRatingColor(4);

    expect(getColor).toEqual('yellow');
  });
  it('should get a valid color with rating 3', () => {
    const getColor = getRatingColor(3);

    expect(getColor).toEqual('red');
  });
  it('should get a valid color with rating 0', () => {
    const getColor = getRatingColor(0);

    expect(getColor).toEqual('red');
  });
});

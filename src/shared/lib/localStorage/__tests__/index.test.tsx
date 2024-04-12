import { getSuggest, setSuggest } from '..';

describe('setSuggest function', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('adds suggest to localStorage', () => {
    const suggest = 'test suggest';
    setSuggest(suggest);

    const storedItems = localStorage.getItem('suggests');
    const parsedItems = storedItems ? JSON.parse(storedItems) : [];

    expect(parsedItems).toContain(suggest);
  });
});

describe('getSuggest function', () => {
  beforeEach(() => {
    localStorage.setItem('suggests', JSON.stringify(['suggest1', 'suggest2', 'suggest3']));
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('returns filtered suggests when suggest is provided', () => {
    const suggest = 'suggest';
    const filteredSuggests = getSuggest(suggest);

    expect(filteredSuggests).toEqual(['suggest3', 'suggest2', 'suggest1']);
  });

  it('returns all suggests when no suggest is provided', () => {
    const allSuggests = getSuggest('');

    expect(allSuggests).toEqual(['suggest3', 'suggest2', 'suggest1']);
  });

  it('returns empty array if localStorage is empty', () => {
    localStorage.clear();
    const suggests = getSuggest('');

    expect(suggests).toEqual([]);
  });
});

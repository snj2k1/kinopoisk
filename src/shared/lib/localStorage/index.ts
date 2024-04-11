export const setSuggest = (suggest: string) => {
  const items = localStorage.getItem('suggests');
  const suggests: Set<string> = items !== null ? new Set(JSON.parse(items)) : new Set();
  suggests.add(suggest);
  localStorage.setItem('suggests', JSON.stringify(Array.from(suggests)));
};

export const getSuggest = (suggest: string) => {
  const items = localStorage.getItem('suggests');
  const suggests: string[] = items !== null ? JSON.parse(items) : [];
  if (suggest) {
    return suggests
      .reverse()
      .filter((el) => el.includes(suggest))
      .slice(0, 5);
  } else {
    return suggests.reverse().slice(0, 5);
  }
};

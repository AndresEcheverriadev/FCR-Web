const getItem = async (key) => {
  const data = sessionStorage.getItem(key);
  return JSON.parse(data);
};

const setItem = async (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

const removeItem = async (key) => sessionStorage.removeItem(key);

const clearAll = async () => sessionStorage.clear();

export const LocalStorageService = { getItem, setItem, removeItem, clearAll };

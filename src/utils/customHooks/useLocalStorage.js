import { useState, useEffect } from "react";

const getStorageValue = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  return (saved && JSON.parse(saved)) || defaultValue;
};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));
  console.log(value);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

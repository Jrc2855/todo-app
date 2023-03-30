import React, { useEffect, useState } from "react";

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [displayCount, setDisplayCount] = useState(3);
  const [showComplete, setShowComplete] = useState(false);
  const [sort, setSort] = useState('difficulty');

  const saveLocal = () => {
    localStorage.setItem('todo-1', JSON.stringify({ displayCount, showComplete, sort }))
  }

  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('todo-1'));
    if (storage) {
      setShowComplete(storage.showComplete);
      setDisplayCount(storage.displayCount);
      setSort(storage.sort);
    }
  }, []);

  const values = {
    displayCount,
    showComplete,
    sort,
    setShowComplete,
    setDisplayCount,
    setSort,
    saveLocal
  };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
};

export default SettingsProvider;
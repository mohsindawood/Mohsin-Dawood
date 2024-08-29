import { useState, useEffect } from 'react';

// Check if the code is running in a browser environment
const isBrowser = typeof window !== 'undefined';

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    if (!isBrowser) {
      // If not in a browser, return the default value
      return defaultValue;
    }
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue === null ? defaultValue : JSON.parse(storedValue);
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      return defaultValue;
    }
  });

  useEffect(() => {
    if (!isBrowser) return;

    const listener = (e) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(JSON.parse(e.newValue));
      }
    };
    window.addEventListener('storage', listener);

    return () => {
      window.removeEventListener('storage', listener);
    };
  }, [key]);

  const setValueInLocalStorage = (newValue) => {
    setValue((currentValue) => {
      const result =
        typeof newValue === 'function' ? newValue(currentValue) : newValue;
      if (isBrowser) {
        try {
          localStorage.setItem(key, JSON.stringify(result));
        } catch (error) {
          console.error('Error setting localStorage:', error);
        }
      }
      return result;
    });
  };

  return [value, setValueInLocalStorage];
}

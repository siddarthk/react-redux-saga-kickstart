import { useState, useCallback } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback((defaultValue) => {
    defaultValue !== undefined
      ? setValue(defaultValue) 
      : setValue((value) => !value); 
  }, []);

  return [value, toggle];
};

export {
  useToggle
}

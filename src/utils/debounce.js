import { useEffect, useState } from "react";

export default function useDebounce(value, time = 500) {
  const [debounceValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const debounceRef = setTimeout(() => {
      setDebouncedValue(value);
    }, time);
  
    return () => {
      clearTimeout(debounceRef);
    };
  }, [value, time]);

  return debounceValue;
}

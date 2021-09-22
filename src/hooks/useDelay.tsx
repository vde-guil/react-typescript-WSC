import React, { useEffect, useState } from 'react';

const useDelay = (
    ms: number
    ): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
        const [delayed, setDelayed] = useState(false);

  useEffect(() : (() => void) => {
    if (delayed) {
      const timer = setTimeout(() => setDelayed(false), ms);
      return () => {
        clearTimeout(timer);
      };
    }
    return () => (null);
  }, [delayed, ms]);
  return [delayed, setDelayed];
};

export default useDelay;

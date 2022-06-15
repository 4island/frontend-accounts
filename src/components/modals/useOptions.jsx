import { useState } from 'react';

const useOptions = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default useOptions;
import { useState } from 'react';

export const useToggle = (initToggle: boolean = true) => {
  const [isToggled, setToggle] = useState(initToggle);
  const onToggle = () => setToggle(!isToggled);

  return {
    isToggled,
    onToggle,
  };
};

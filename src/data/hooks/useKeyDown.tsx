import { useState, useEffect } from "react";

interface keyInput {
  key: string;
}

const useKeyDown = (targetKey: string) => {
  const [keyDown, setKeyDown] = useState(false);
  const downHandler = ({ key }: keyInput) => {
    if (key === targetKey) {
      setKeyDown(true);
    }
  };
  const upHandler = ({ key }: keyInput) => {
    if (key === targetKey) {
      setKeyDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);

  return keyDown;
};

export default useKeyDown;

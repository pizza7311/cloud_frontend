import { useState } from "react";

const useFolderLayout = () => {
  const [isGrid, setIsGrid] = useState(true);

  const handleLayout = () => {
    setIsGrid(!isGrid);
  };

  return {
    isGrid,
    handleLayout,
  };
};

export default useFolderLayout;

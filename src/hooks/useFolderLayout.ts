import { useRecoilState, atom } from "recoil";

const gridState = atom({
  key: "gridState",
  default: true,
});

const useFolderLayout = () => {
  const [isGrid, setIsGrid] = useRecoilState(gridState);

  const handleLayout = () => {
    setIsGrid(!isGrid);
  };

  return {
    isGrid,
    handleLayout,
  };
};

export default useFolderLayout;

import { useState } from "react";
import { MouseEvent } from "react";
import { atom, useRecoilState } from "recoil";

const dragRangeState = atom({
  key: "dragRange",
  default: {
    startPoint: { x: 0, y: 0 },
    endPoint: { x: 0, y: 0 },
  },
});

const selectedItemsState = atom({
  key: "selectedItems",
  default: new Set<string>(),
});

const mouseDownState = atom({
  key: "isMouseDown",
  default: false,
});

/**
 * FileList 컴포넌트에서 마우스로 파일 선택하는 기능
 */
const useFileSelection = () => {
  const [selectedItems, setSelectedItems] = useRecoilState(selectedItemsState);
  const [isMouseDown, setIsMouseDown] = useRecoilState(mouseDownState);
  const [dragRange, setDragRange] = useRecoilState(dragRangeState);
  const [clickPoint, setClickPoint] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    setIsMouseDown(true);
    setDragRange({
      startPoint: { x: e.pageX, y: e.pageY },
      endPoint: { x: e.pageX, y: e.pageY },
    });
    setClickPoint({ x: e.pageX, y: e.pageY });
  };

  const handleDrag = (e: MouseEvent) => {
    if (!isMouseDown) return;
    const { pageX: x, pageY: y } = e;
    setDragRange({
      startPoint: {
        x: Math.min(clickPoint.x, x),
        y: Math.min(clickPoint.y, y),
      },
      endPoint: {
        x: Math.max(clickPoint.x, x),
        y: Math.max(clickPoint.y, y),
      },
    });
  };

  const handleMouseUp = (e: MouseEvent) => {
    setIsMouseDown(false);
    setDragRange({
      startPoint: { x: 0, y: 0 },
      endPoint: { x: 0, y: 0 },
    });
  };

  return {
    handleDrag,
    handleMouseDown,
    handleMouseUp,
    setSelectedItems,
    selectedItems,
    isMouseDown,
    dragRange,
  };
};

export default useFileSelection;

import { MenuInfo } from "rc-menu/lib/interface";
import { useEffect, useRef, useState } from "react";
import useFileSelection from "./useFileSelection";

const useFileItem = (fileId: string) => {
  const [selected, setSelected] = useState(false);
  const { dragRange, selectedItems, isMouseDown, setSelectedItems } =
    useFileSelection();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const boundingRect = ref.current?.getBoundingClientRect();
    const { startPoint, endPoint } = dragRange;
    if (!isMouseDown) {
      return;
    }
    if (boundingRect) {
      if (
        startPoint.y <= boundingRect.bottom &&
        boundingRect.top <= endPoint.y &&
        startPoint.x <= boundingRect.right &&
        boundingRect.left <= endPoint.x
      ) {
        setSelected(true);
        selectedItems.add(fileId);
        setSelectedItems(selectedItems);
      } else {
        setSelected(false);
        selectedItems.delete(fileId);
        setSelectedItems(selectedItems);
      }
    }
  }, [dragRange]);

  // 참조: https://github.com/ant-design/ant-design/issues/25467
  const handleClick = (e: MenuInfo) => {
    switch (e.key) {
      case "preview":
        return;
      case "download":
        return;
    }
  };

  const handleDownload = (url: string) => {
    //TODO:다운로드 기능
  };

  const handleCreateLink = (url: string) => {
    //TODO:공유 링크 생성 기능
  };

  const handlePreview = () => {
    //TODO:새창에서 파일뷰어 열기
  };

  return { handleClick, selected, ref };
};

export default useFileItem;

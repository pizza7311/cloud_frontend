import { MenuInfo } from "rc-menu/lib/interface";

const useFileItem = (fileUrl: string) => {
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

  return { handleClick };
};

export default useFileItem;

import { Button, Layout } from "antd";
import DirectoryNavigation from "./DirectoryNavigation";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import useFolderLayout from "@/hooks/useFolderLayout";

const FolderViewerHeader = () => {
  const { Header } = Layout;

  //TODO: useFolderLayout isGrid에 따라 파일 목록 레이아웃 변경하는 기능 추가

  const { isGrid, handleLayout } = useFolderLayout();

  return (
    <div className="bg-white">
      <Header className="bg-white">
        <div className="flex">
          <div className="flex-1">
            <DirectoryNavigation></DirectoryNavigation>
          </div>
          <div>
            <Button
              title="그리드"
              shape="circle"
              icon={
                isGrid ? (
                  <AppstoreOutlined></AppstoreOutlined>
                ) : (
                  <BarsOutlined></BarsOutlined>
                )
              }
              onClick={handleLayout}
            ></Button>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default FolderViewerHeader;

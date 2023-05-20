import { Button, Layout } from "antd";
import DirectoryNavigation from "./DirectoryNavigation";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import useFolderLayout from "@/hooks/useFolderLayout";

const FolderViewerHeader = () => {
  const { Header } = Layout;
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

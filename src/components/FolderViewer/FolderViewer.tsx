import { Layout } from "antd";
import FolderViewerHeader from "./FolderViewerHeader";
import FileList from "./FileList";

const FolderViewer = () => {
  return (
    <Layout className="h-full">
      <FolderViewerHeader></FolderViewerHeader>
      <FileList></FileList>
    </Layout>
  );
};

export default FolderViewer;

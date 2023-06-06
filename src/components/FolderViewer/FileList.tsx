import { Layout, Col, Row, List } from "antd";
import FileItem from "./FileItem";
import useFolderLayout from "@/hooks/FolderViewer/useFolderLayout";
import useFileSelection from "@/hooks/FolderViewer/useFileSelection";

const files = [
  {
    fileName: "texxt",
    extention: "txt",
    date: new Date(),
    owner: "나",
    fileUrl: "파일7",
    size: 897,
    thumbnail:
      "https://img.photographyblog.com/reviews/kodak_pixpro_fz201/photos/kodak_pixpro_fz201_01.jpg",
    fileId: "id1",
  },
  {
    fileName: "texxt",
    extention: "txt",
    date: new Date(),
    owner: "나",
    fileUrl: "파일6",
    size: 897,
    thumbnail:
      "https://img.photographyblog.com/reviews/kodak_pixpro_fz201/photos/kodak_pixpro_fz201_01.jpg",
    fileId: "id2",
  },
  {
    fileName: "texxt",
    extention: "txt",
    date: new Date(),
    owner: "나",
    fileUrl: "파일5",
    size: 897,
    thumbnail:
      "https://img.photographyblog.com/reviews/kodak_pixpro_fz201/photos/kodak_pixpro_fz201_01.jpg",
    fileId: "id3",
  },
  {
    fileName: "texxt",
    extention: "txt",
    date: new Date(),
    owner: "나",
    fileUrl: "파일4",
    size: 172897,
    fileId: "id4",
  },
  {
    fileName: "texxt",
    extention: "txt",
    date: new Date(),
    owner: "나",
    fileUrl: "파일3",
    size: 8097,
    thumbnail:
      "https://img.photographyblog.com/reviews/kodak_pixpro_fz201/photos/kodak_pixpro_fz201_01.jpg",
    fileId: "id5",
  },
  {
    fileName: "texxt",
    extention: "txt",
    date: new Date(),
    owner: "나",
    fileUrl: "파일2",
    size: 897,
    thumbnail:
      "https://img.photographyblog.com/reviews/kodak_pixpro_fz201/photos/kodak_pixpro_fz201_01.jpg",
    fileId: "id6",
  },
  {
    fileName: "texxt",
    extention: "txt",
    date: new Date(),
    owner: "나",
    fileUrl: "파일1",
    size: 897,
    thumbnail:
      "https://img.photographyblog.com/reviews/kodak_pixpro_fz201/photos/kodak_pixpro_fz201_01.jpg",
    fileId: "id7",
  },
];

const FileList = () => {
  const { Content } = Layout;
  const { isGrid } = useFolderLayout();
  const { handleMouseDown, handleDrag, handleMouseUp, isMouseDown, dragRange } =
    useFileSelection();
  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleDrag}
      onMouseUp={handleMouseUp}
      className="h-full bg-white overflow-y-scroll"
    >
      <Content className="m-8">
        {isGrid ? (
          <Row
            gutter={[
              {
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              },
              {
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              },
            ]}
          >
            {files.map((file, index) => {
              return (
                <Col key={index} xl={4} xs={6}>
                  <FileItem data={file}></FileItem>
                </Col>
              );
            })}
          </Row>
        ) : (
          <List>
            {files.map((file, index) => {
              return (
                <List.Item style={{ padding: "6px" }} key={index}>
                  <FileItem data={file} layout={"list"}></FileItem>
                </List.Item>
              );
            })}
          </List>
        )}
      </Content>
      {isMouseDown && (
        <div
          className="absolute bg-blue-400 opacity-30"
          //참조: https://v2.tailwindcss.com/docs/just-in-time-mode#arbitrary-value-support
          //tailwind에서 동적인 className으로 스타일 변경이 불가능하여 인라인 스타일 직접 사용
          style={{
            left: dragRange.startPoint.x,
            top: dragRange.startPoint.y,
            width: Math.abs(dragRange.startPoint.x - dragRange.endPoint.x),
            height: Math.abs(dragRange.startPoint.y - dragRange.endPoint.y),
          }}
        ></div>
      )}
    </div>
  );
};

export default FileList;

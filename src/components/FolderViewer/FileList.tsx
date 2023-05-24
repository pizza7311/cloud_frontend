import { Layout, Col, Row, List } from "antd";
import FileItem from "./FileItem";
import useFolderLayout from "@/hooks/useFolderLayout";

const files = [
  {
    fileName: "texxt",
    extention: "txt",
    date: new Date(),
    owner: "나",
    fileUrl: "파일 주소",
    size: 897,
    thumbnail:
      "https://img.photographyblog.com/reviews/kodak_pixpro_fz201/photos/kodak_pixpro_fz201_01.jpg",
  },
  {
    fileName: "texxt",
    extention: "txt",
    date: new Date(),
    owner: "나",
    fileUrl: "파일 주소",
    size: 897,
    thumbnail:
      "https://img.photographyblog.com/reviews/kodak_pixpro_fz201/photos/kodak_pixpro_fz201_01.jpg",
  },
  {
    fileName: "texxt",
    extention: "txt",
    date: new Date(),
    owner: "나",
    fileUrl: "파일 주소",
    size: 897,
    thumbnail:
      "https://img.photographyblog.com/reviews/kodak_pixpro_fz201/photos/kodak_pixpro_fz201_01.jpg",
  },
  {
    fileName: "texxt",
    extention: "txt",
    date: new Date(),
    owner: "나",
    fileUrl: "파일 주소",
    size: 172897,
  },
  {
    fileName: "texxt",
    extention: "txt",
    date: new Date(),
    owner: "나",
    fileUrl: "파일 주소",
    size: 8097,
    thumbnail:
      "https://img.photographyblog.com/reviews/kodak_pixpro_fz201/photos/kodak_pixpro_fz201_01.jpg",
  },
  {
    fileName: "texxt",
    extention: "txt",
    date: new Date(),
    owner: "나",
    fileUrl: "파일 주소",
    size: 897,
    thumbnail:
      "https://img.photographyblog.com/reviews/kodak_pixpro_fz201/photos/kodak_pixpro_fz201_01.jpg",
  },
  {
    fileName: "texxt",
    extention: "txt",
    date: new Date(),
    owner: "나",
    fileUrl: "파일 주소",
    size: 897,
    thumbnail:
      "https://img.photographyblog.com/reviews/kodak_pixpro_fz201/photos/kodak_pixpro_fz201_01.jpg",
  },
];

const FileList = () => {
  const { Content } = Layout;
  const { isGrid } = useFolderLayout();

  return (
    <div className="h-full bg-white overflow-y-scroll">
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
                <List.Item
                  style={{ padding: "6px" }}
                  key={index}
                  className="hover:bg-gray-100"
                >
                  <FileItem data={file} layout={"list"}></FileItem>
                </List.Item>
              );
            })}
          </List>
        )}
      </Content>
    </div>
  );
};

export default FileList;

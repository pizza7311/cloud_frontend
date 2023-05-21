import { Layout, Col, Row } from "antd";
import FileItem from "./FileItem";

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
    size: 897,
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
    size: 897,
    thumbnail:
      "https://img.photographyblog.com/reviews/kodak_pixpro_fz201/photos/kodak_pixpro_fz201_01.jpg",
  },
];

const FileList = () => {
  const { Content } = Layout;

  return (
    <div className="h-full bg-white overflow-y-scroll">
      <Content className="m-8">
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
                <FileItem key={file.fileUrl} data={file}></FileItem>
              </Col>
            );
          })}
        </Row>
      </Content>
    </div>
  );
};

export default FileList;

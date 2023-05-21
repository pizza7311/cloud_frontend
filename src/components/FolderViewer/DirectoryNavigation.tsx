import { Breadcrumb } from "antd";

const DirectoryNavigation = () => {
  //TODO: 현재 폴더의 이동경로 표시 필요
  const items = [{ title: "test" }, { title: "내 드라이브" }];
  return (
    <Breadcrumb
      className=" inline-block text-2xl font-bold align-middle"
      items={items}
    ></Breadcrumb>
  );
};

export default DirectoryNavigation;

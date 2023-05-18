import { Layout, Menu } from "antd";
import { DeleteOutlined, CloudOutlined } from "@ant-design/icons";
import useSideMenu from "@/hooks/useSideMenu";

const items = [
  {
    label: "내 드라이브",
    key: "my-drive",
    icon: <CloudOutlined></CloudOutlined>,
  },
  { label: "휴지통", key: "trash", icon: <DeleteOutlined></DeleteOutlined> },
];

const SideMenu = () => {
  const { Sider } = Layout;
  const { handleClick } = useSideMenu();
  return (
    <Sider width={250}>
      <div className="bg-gray-200 h-full">
        <Menu onClick={handleClick} mode="inline" items={items}></Menu>
      </div>
    </Sider>
  );
};

export default SideMenu;

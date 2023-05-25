import { Button, Layout, Menu, Dropdown } from "antd";
import {
  DeleteOutlined,
  CloudOutlined,
  PlusOutlined,
  FolderAddOutlined,
  CloudUploadOutlined,
} from "@ant-design/icons";
import useSideMenu from "@/hooks/useSideMenu";

const items = [
  {
    label: "내 드라이브",
    key: "my-drive",
    icon: <CloudOutlined></CloudOutlined>,
  },
  { label: "휴지통", key: "trash", icon: <DeleteOutlined></DeleteOutlined> },
];

const createMenu = [
  {
    label: "새 폴더",
    key: "newFolder",
    icon: <FolderAddOutlined />,
  },
  {
    label: "파일 업로드",
    key: "uploadFile",
    icon: <CloudUploadOutlined />,
  },
];

const SideMenu = () => {
  const { Sider } = Layout;
  const { handleClick } = useSideMenu();
  return (
    <Sider width={250}>
      <div className="p-2 bg-white">
        <Dropdown trigger={["click"]} menu={{ items: createMenu }}>
          <Button
            className="bg-red-500 text-white w-full h-10"
            size="large"
            shape="round"
            icon={<PlusOutlined />}
            title="새로 만들기"
            type="text"
          >
            새로 만들기
          </Button>
        </Dropdown>
      </div>

      <div className="bg-gray-200 h-auto">
        <Menu onClick={handleClick} mode="inline" items={items}></Menu>
      </div>
    </Sider>
  );
};

export default SideMenu;

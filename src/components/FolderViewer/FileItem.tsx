import { File } from "@/types/Files.types";
import { Avatar, Button, Dropdown } from "antd";
import dayjs from "dayjs";
import bytes from "bytes";
import {
  DownloadOutlined,
  EllipsisOutlined,
  EyeFilled,
  LinkOutlined,
} from "@ant-design/icons";
import useFileItem from "@/hooks/FolderViewer/useFileItem";

enum mode {
  grid = "grid",
  list = "list",
}

type props = {
  data: File;
  layout?: string;
};

const fileMenu = [
  {
    label: "미리보기",
    icon: <EyeFilled />,
    key: "preview",
  },
  {
    label: "다운로드",
    icon: <DownloadOutlined />,
    key: "download",
  },
  {
    label: "링크 생성",
    icon: <LinkOutlined />,
    key: "createLink",
  },
];

const FileItem = ({ data, layout = "grid" }: props) => {
  const { handleClick, ref, selected } = useFileItem(data.fileId);

  if (layout === mode.grid) {
    return (
      <div
        ref={ref}
        className={
          selected
            ? "flex flex-col rounded-lg bg-white dark:bg-neutral-700 h-full outline-4 shadow-[0_0_8px_rgb(82,189,255),0_0_8px_rgb(82,189,255)]"
            : "flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 h-full hover:bg-slate-200 "
        }
      >
        {data.thumbnail ? (
          <img
            className="rounded-t-lg"
            src={data.thumbnail}
            alt={data.fileName}
          />
        ) : (
          <div className="w-full h-full">이미지 넣기</div>
        )}
        <div className="p-2 flex">
          <h5 className="text-lg text-center font-medium leading-tight text-neutral-800 dark:text-neutral-50 flex-auto">
            {data.fileName}
          </h5>
          <div className="flex-none">
            <Dropdown
              className="w-[200px]"
              trigger={["click"]}
              menu={{ items: fileMenu, onClick: handleClick }}
            >
              <Button
                type="text"
                icon={<EllipsisOutlined />}
                shape="circle"
              ></Button>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        ref={ref}
        className={
          selected
            ? "flex w-full bg-blue-200"
            : "flex w-full hover:bg-slate-200"
        }
      >
        <Avatar
          className="ml-2 mr-2"
          src={data.thumbnail}
          shape="square"
          size={"large"}
        ></Avatar>
        <div className="grow">
          <h4 className="m-2">{data.fileName}</h4>
        </div>
        <div className="flex-none">
          <p className="m-2 text-gray-500">{bytes(data.size)}</p>
        </div>
        <div className="flex-none">
          <p className="m-2">
            {dayjs(data.date).format("YYYY. MM. DD. hh:mm")}
          </p>
        </div>
      </div>
    );
  }
};

export default FileItem;

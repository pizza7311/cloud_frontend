import { File } from "@/types/Files.types";
import { Avatar } from "antd";
import dayjs from "dayjs";
import bytes from "bytes";

enum mode {
  grid = "grid",
  list = "list",
}

type props = {
  data: File;
  layout?: string;
};

//TODO: 리스트 레이아웃 디자인 적용하기

const FileItem = ({ data, layout = "grid" }: props) => {
  if (layout === mode.grid) {
    return (
      <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 h-full">
        {data.thumbnail ? (
          <img
            className="rounded-t-lg"
            src={data.thumbnail}
            alt={data.fileName}
          />
        ) : (
          <div className="w-full h-full">이미지 넣기</div>
        )}
        <div className="p-2">
          <h5 className="text-lg text-center font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {data.fileName}
          </h5>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex w-full">
        <Avatar
          className="ml-2 mr-2"
          src={data.thumbnail}
          shape="square"
          size={"large"}
        ></Avatar>
        <div className="grow text-red-400">
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

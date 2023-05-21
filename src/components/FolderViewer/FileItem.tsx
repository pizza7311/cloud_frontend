import { File } from "@/types/Files.types";

type props = {
  data: File;
};

//TODO: 파라미터에 레이아웃 종류 추가하고 레이아웃에 따라 다르게 랜더링하는 기능 추가

const FileItem = ({ data }: props) => {
  return data.thumbnail ? (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <img className="rounded-t-lg" src={data.thumbnail} alt={data.fileName} />
      <div className="p-2">
        <h5 className="text-lg text-center font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Card title
        </h5>
      </div>
    </div>
  ) : (
    <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 h-full">
      <div className="w-full h-full">이미지 넣기</div>

      <div className="p-2">
        <h5 className="text-lg text-center font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Card title
        </h5>
      </div>
    </div>
  );
};

export default FileItem;

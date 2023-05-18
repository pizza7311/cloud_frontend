// 참조: https://github.com/ant-design/ant-design/issues/25467
import { MenuInfo } from "rc-menu/lib/interface";
import { useRouter } from "next/router";

const useSideMenu = () => {
  //TODO: 하위 폴더 받아오는 기능 필요
  const router = useRouter();
  const handleClick = (e: MenuInfo) => {
    router.push(e.key);
  };

  return {
    handleClick,
  };
};

export default useSideMenu;

import { checkLogin } from "@/lib/api/User.api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/**
 * 메인페이지 진입시 로그인여부 확인후 개인 드라이브 주소로 리다이렉트 여부 결정
 */
const useRedirect = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const check = async () => {
      const { data } = await checkLogin();
      if (data) {
        router.replace("/my-drive");
      }
      setLoading(false);
    };
    check();
  }, []);

  return {
    loading,
  };
};

export default useRedirect;

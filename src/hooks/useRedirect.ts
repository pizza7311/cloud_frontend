import { checkLogin } from "@/lib/api/User.api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/**
 * index 페이지와 my-drive 페이지에서 로그인 여부에 따라 리다이렉트 실행.
 * index 페이지에서 로그인한 사용자는 my-drive로 리다이렉트, my-drive 페이지에서 로그인 안된사용자는 login 페이지로 리다이렉트.
 * @param {boolean} toLogin - true일경우 로그인 안된 사용자는 login 페이지로 이동.
 */
const useRedirect = (toLogin = false) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const check = async () => {
      const { data } = await checkLogin();

      if (toLogin) {
        if (!data) {
          router.replace("/login");
          return;
        }
        setLoading(false);
      }

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

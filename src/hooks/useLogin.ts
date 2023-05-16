import { useState } from "react";
import { LoginForm } from "@/types/Login.types";
import { Login } from "@/lib/api/User.api";
import { useRouter } from "next/router";

const useLogin = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const router = useRouter();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserid(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    if (userid === "" || password === "") {
      setAlertMsg("ID와 비밀번호를 입력해주세요.");
      setAlertVisible(true);
      return;
    }
    const payload: LoginForm = {
      userid,
      password,
    };
    try {
      await Login(payload);
      router.push("/my-drive");
    } catch (e: unknown) {
      setAlertVisible(true);
      setAlertMsg("ID 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  const handleCloseAlert = () => {
    setAlertVisible(false);
  };

  return {
    handleEmail,
    handlePassword,
    handleSubmit,
    handleCloseAlert,
    userid,
    password,
    alertVisible,
    alertMsg,
  };
};

export default useLogin;

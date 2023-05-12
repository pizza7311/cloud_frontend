import useLogin from "@/hooks/useLogin";
import { Button } from "antd";
import { Alert } from "antd";

const Login = () => {
  const {
    userid,
    handleEmail,
    handlePassword,
    password,
    handleSubmit,
    alertVisible,
    alertMsg,
    handleCloseAlert,
  } = useLogin();
  return (
    <section className="bg-blue-400">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              로그인
            </h1>
            <div className="space-y-4 md:space-y-6">
              <div>
                {alertVisible && (
                  <Alert
                    message={alertMsg}
                    type="error"
                    action={false}
                    closable
                    showIcon
                    afterClose={handleCloseAlert}
                  ></Alert>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  이메일 또는 닉네임
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={userid}
                  onChange={handleEmail}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                ></input>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  패스워드
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handlePassword}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                ></input>
              </div>
              <div className="flex items-center justify-between">
                <Button
                  onClick={handleSubmit}
                  className="bg-blue-600 w-full"
                  type="primary"
                >
                  로그인
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

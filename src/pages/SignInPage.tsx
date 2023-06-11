import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../api/sign";

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signin(email, password)
      .then((res) => {
        if (res?.status === 200) {
          localStorage.setItem("access_token", res?.data.access_token);
          navigate("/todo");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              로그인
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  이메일
                </label>
                <input
                  data-testid="email-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  type="email"
                  onChange={handleEmail}
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  비밀번호
                </label>
                <input
                  data-testid="password-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  type="password"
                  onChange={handlePassword}
                ></input>
              </div>
              <div>
                <button
                  data-testid="signup-button"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  로그인
                </button>
              </div>
              <p className="text-sm font-light text-gray-500">
                계정이 존재하지 않으시나요?
                <Link to="/signup">
                  <button className="font-medium text-primary-600 mx-1 hover:underline">
                    회원가입
                  </button>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignInPage;

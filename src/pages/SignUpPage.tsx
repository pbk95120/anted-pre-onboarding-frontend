import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              회원가입
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div className="flex flex-col">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  이메일
                </label>
                <input
                  data-testid="email-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  type="email"
                  value={email}
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
                  value={password}
                ></input>
              </div>
              <div>
                <Link to="/signin">
                  <button
                    data-testid="signup-button"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    가입하기
                  </button>
                </Link>
              </div>
              <p className="text-sm font-light text-gray-500">
                이미 계정이 존재하시나요?
                <Link to="/signin">
                  <button className="font-medium text-primary-600 mx-1 hover:underline">
                    로그인
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
export default SignUpPage;

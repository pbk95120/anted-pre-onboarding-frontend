import { baseURL } from "./baseURL";

export const signup = async (email: string, password: string) => {
  try {
    const res = await baseURL.post("/auth/signup", {
      email: email,
      password: password,
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const signin = async (email: string, password: string) => {
  try {
    const res = await baseURL.post("/auth/signin", {
      email: email,
      password: password,
    });
    return res;
  } catch (error) {
    alert("이메일과 비밀번호를 다시 확인해주세요");
  }
};

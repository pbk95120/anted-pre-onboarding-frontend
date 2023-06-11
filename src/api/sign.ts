import { baseURL } from "./index";

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

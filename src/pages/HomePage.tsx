import { useNavigate } from "react-router-dom";
import { RiCalendarTodoFill } from "react-icons/ri";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-around">
      <div>Wanted Pre Onboarding</div>
      <button
        className="flex items-center gap-1"
        onClick={() => navigate("/todo")}
      >
        <RiCalendarTodoFill /> Todo
      </button>
      <nav className="flex gap-4">
        <button onClick={() => navigate("/signin")}>로그인</button>
        <button onClick={() => navigate("/signup")}>회원가입</button>
      </nav>
    </header>
  );
};
export default HomePage;

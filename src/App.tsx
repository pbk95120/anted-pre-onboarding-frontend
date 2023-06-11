import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import TodoPage from "./pages/TodoPage";
import AuthRoute from "./routes/AuthRoute";
import UnAuthRoute from "./routes/UnAuthRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/signin"} />} />
        <Route element={<UnAuthRoute />}>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Route>
        <Route element={<AuthRoute />}>
          <Route path="/todo" element={<TodoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

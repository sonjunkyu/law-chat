import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("로그인 시도", { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* 상단 헤더 */}
      <div className="w-full px-6 py-4">
        <button
          onClick={() => navigate("/")}
          className="text-2xl font-extrabold text-gray-800 cursor-pointer"
        >
          Law-Chat
        </button>
      </div>

      {/* 로그인 박스 - 가운데 정렬 */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-12 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-6">로그인</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">이메일</label>
              <input
                type="email"
                placeholder="이메일을 입력해 주세요."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">비밀번호</label>
              <input
                type="password"
                placeholder="비밀번호를 입력해 주세요."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#303030] text-white py-3 rounded-md font-semibold hover:bg-gray-600 transition"
            >
              로그인
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4 text-center">
            지금 가입하고 14일 동안 무료로 체험하세요!{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-black font-semibold cursor-pointer"
            >
              회원가입
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

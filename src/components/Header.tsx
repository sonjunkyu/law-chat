import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useHeaderColor } from "../context/HeaderContext";

const Header = () => {
  const { isWhite } = useHeaderColor();
  const navigate = useNavigate();

  return (
    <header
      className={`fixed top-0 w-full z-50 border-b transition-colors duration-300 ${
        isWhite
          ? "bg-white text-black border-gray-400"
          : "bg-[#1E1E1E] text-gray-300 border-gray-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Law-Chat
        </Link>

        <nav className="hidden md:flex space-x-8 text-sm font-semibold">
          <Link to="/" className="hover:text-gray-400">
            HOME
          </Link>
          <button
            onClick={() => navigate("/chatbot")}
            className="hover:text-gray-400"
          >
            AI 진단
          </button>
          <Link to="#" className="hover:text-gray-400">
            상담 안내
          </Link>
          <Link to="#" className="hover:text-gray-400">
            내 상담
          </Link>
        </nav>

        <div className="flex items-center space-x-3 ">
          <button
            onClick={() => navigate("/login")}
            className={`px-6 py-2 border border-gray-500 rounded text-sm font-semibold hover:bg-gray-600 ${
              isWhite
                ? "bg-white text-black border border-gray-400 hover:bg-gray-200"
                : "border border-gray-500 text-white hover:bg-gray-500"
            }`}
          >
            로그인
          </button>
          <button
            onClick={() => navigate("/signup")}
            className={`px-6 py-2 rounded text-sm font-semibold transition-all duration-300 ${
              isWhite
                ? "bg-black text-white hover:bg-gray-700" // Section2 → 검정 버튼
                : "bg-white text-black hover:bg-gray-300" // Section1 → 흰색 버튼
            }`}
          >
            회원가입
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

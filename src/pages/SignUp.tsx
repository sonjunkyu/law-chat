import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    nickname: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    name: "",
    nickname: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let error = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,11}$/;

    if (name === "email") {
      if (!value) error = "이메일을 입력해 주세요.";
      else if (!emailRegex.test(value))
        error = "유효한 이메일 형식이 아닙니다.";
    }

    if (name === "password") {
      if (!value) error = "비밀번호를 입력해 주세요.";
      else if (value.length < 6)
        error = "비밀번호는 최소 6자 이상이어야 합니다.";
    }

    if (name === "name" && !value) error = "이름을 입력해 주세요.";
    if (name === "nickname" && !value) error = "닉네임을 입력해 주세요.";

    if (name === "phone") {
      if (!value) error = "전화번호를 입력해 주세요.";
      else if (!phoneRegex.test(value))
        error = "숫자만 입력하며 10~11자리여야 합니다.";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const hasError = Object.values(errors).some((err) => err !== "");
    const isEmpty = Object.values(formData).some((val) => val === "");

    if (!hasError && !isEmpty) {
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    } else {
      alert("모든 항목을 올바르게 입력해 주세요.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* 헤더 */}
      <div className="w-full px-6 py-4">
        <button
          onClick={() => navigate("/")}
          className="text-2xl font-extrabold text-gray-800 cursor-pointer"
        >
          Law-Chat
        </button>
      </div>

      {/* 본문 */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">회원가입</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 이메일 */}
            <div>
              <label className="block text-sm font-semibold mb-1">이메일</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="이메일을 입력해 주세요."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* 비밀번호 */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                비밀번호
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="비밀번호를 입력해 주세요."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* 이름 */}
            <div>
              <label className="block text-sm font-semibold mb-1">이름</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="이름을 입력해 주세요."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* 닉네임 */}
            <div>
              <label className="block text-sm font-semibold mb-1">닉네임</label>
              <input
                type="text"
                name="nickname"
                value={formData.nickname}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="닉네임을 입력해 주세요."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {errors.nickname && (
                <p className="text-red-500 text-sm mt-1">{errors.nickname}</p>
              )}
            </div>

            {/* 전화번호 */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                전화번호
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="전화번호를 입력해 주세요."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#303030] text-white py-2 rounded-md font-semibold hover:bg-gray-600 transition"
            >
              회원가입
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4 text-center">
            이미 계정이 있으신가요?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-black font-semibold cursor-pointer"
            >
              로그인
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

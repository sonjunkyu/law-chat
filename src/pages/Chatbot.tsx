import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

type Message = {
  sender: "user" | "bot";
  text: string;
};

const Chatbot = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const chatEndRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { sender: "user" as const, text: input }];
    setMessages(newMessages);
    setInput("");

    // 더미 응답
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "안녕하세요. 해당 질문에 대해 검토 중입니다.",
        } as const,
      ]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className={`flex flex-col h-screen ${
        isDarkMode ? "bg-[#1E1E1E] text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* 헤더 */}
      <div
        className={`w-full px-6 py-4 border-b text-2xl font-bold ${
          isDarkMode
            ? "border-gray-100 bg-[#1E1E1E]"
            : "border-gray-300 bg-gray-100"
        }`}
      >
        <button onClick={() => navigate("/")} className="cursor-pointer">
          Law-Chat
        </button>
      </div>

      {/* SideNav */}
      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 border-r p-4 flex flex-col justify-between">
          <div>
            <button className="bg-gray-200 text-black font-semibold px-4 py-2 rounded mt-4 mb-4 w-full">
              + 새 대화
            </button>
          </div>

          {/* 테마 컬러 설정 버튼 */}
          <div className="mb-2">
            <label className="block text-sm font-medium mb-1">
              Theme Color
            </label>
            <button
              onClick={toggleTheme}
              className={`w-16 h-8 flex items-center rounded-full p-1 ${
                isDarkMode ? "bg-gray-100" : "bg-[#1E1E1E]"
              }`}
            >
              <div
                className={`bg-[#1E1E1E] w-6 h-6 rounded-full transform transition-transform duration-300 ${
                  isDarkMode ? "translate-x-8" : "translate-x-0 bg-gray-100"
                }`}
              />
            </button>
          </div>
        </div>

        {/* 채팅 영역 */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 p-8 overflow-y-auto space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className="flex flex-col items-start space-y-1">
                {msg.sender === "bot" ? (
                  <>
                    <span className="text-xs text-gray-400">AI</span>
                    <div className="inline-block px-4 py-2 rounded-lg break-words max-w-[80%] bg-gray-300 text-black">
                      {msg.text}
                    </div>
                  </>
                ) : (
                  <div className="inline-block px-4 py-2 rounded-lg break-words max-w-[80%] ml-auto bg-[#303030] text-white">
                    {msg.text}
                  </div>
                )}
              </div>
            ))}

            <div ref={chatEndRef} />
          </div>

          {/* 사용자 질문 입력란 */}
          <div className="px-8 py-4">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[630px]">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="무엇이든 물어보세요"
                  className={`w-full p-3 pr-10 rounded-lg focus:outline-none ${
                    isDarkMode
                      ? "bg-[#303030] text-white"
                      : "bg-white text-black border border-gray-300"
                  }`}
                />
                {/* 이건 나중에 패키지 설치해서 아이콘 바꿀예정 */}
                <button
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl"
                >
                  ✅
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useHeaderColor } from "../context/HeaderContext";

const IntroPage = () => {
  const secondSectionRef = useRef(null);
  const isInView = useInView(secondSectionRef, {
    margin: "-30% 0px -60% 0px",
  });
  const navigate = useNavigate();

  const { setIsWhite } = useHeaderColor();

  useEffect(() => {
    setIsWhite(isInView);
  }, [isInView, setIsWhite]);

  return (
    <div className="bg-[#1E1E1E] text-white">
      {/* SECTION 1 */}
      <motion.div
        className="min-h-screen pt-24 flex flex-col items-center justify-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.h1
          className="text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          법률이 어려운 사람들을 위한 <br /> AI 어시스턴트
        </motion.h1>

        <motion.h1
          className="text-5xl font-bold mb-4 text-center"
          style={{ color: "rgb(83,143,250)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Law-Chat
        </motion.h1>

        <motion.p
          className="text-center max-w-xl text-sm text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Law-Chat는 생성형 AI와 법률 데이터를 활용하여 <br />
          법률리서치, 판례 검색, 서면 작성 등 다양한 업무를 <br />
          효율적으로 지원하는 서비스입니다.
        </motion.p>

        <motion.div
          className="flex items-center space-x-6 mt-8 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={() => navigate("/signup")}
            className="px-6 py-2 bg-white text-black font-semibold rounded text-lg hover:bg-gray-200"
          >
            무료 체험 시작
          </button>
        </motion.div>

        <motion.img
          src="/assets/intro.png"
          alt="LawEase 소개 이미지"
          className="rounded-xl w-full max-w-3xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.3)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        />
      </motion.div>
      {/* SECTION 2 */}
      <motion.div
        ref={secondSectionRef}
        className="min-h-screen flex flex-col items-center justify-center px-4 bg-white text-black"
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          왜 Law-Chat인가?
        </motion.h2>

        <motion.p
          className="max-w-xl text-center text-gray-700 text-lg font-semibold mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="font-bold" style={{ color: "rgb(83,143,250)" }}>
            맞춤형 판례 제공
          </span>
          으로
          <br />
          당신의 상황에 가장 적합한 해결책을 제시합니다.
        </motion.p>

        <motion.p
          className="max-w-xl text-center text-gray-600 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          수많은 판례와 전문 변호사의 법률 데이터를 기반으로, <br />
          AI가 사용자의 상담 내용에 맞는 사례를 빠르고 정확하게 찾아줍니다.
        </motion.p>
      </motion.div>
      {/* SECTION 3 */}
      <motion.div
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-20 gap-12 bg-gray-100 text-black"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* 왼쪽 텍스트 */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold leading-relaxed mb-4">
            일반적인AI 서비스가
            <br />
            제공하는 기능도
            <br />
            활용할 수 있어요.
          </h2>
        </motion.div>

        {/* 오른쪽 이미지 */}
        <motion.img
          src="/assets/intro2.png"
          alt="AI 기능 카드 예시"
          className="w-full md:w-[600px] lg:w-[700px] max-w-none rounded-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        />
      </motion.div>
    </div>
  );
};

export default IntroPage;

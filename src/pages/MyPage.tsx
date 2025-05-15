import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

// TODO: 실제 API 연동 시 아래 더미데이터 부분을 삭제하고, useEffect 등으로 사용자 정보를 불러오면된다.
const dummyUser = {
  name: '민승기',
  email: 'sammymin@naver.com',
  phone: '010-3022-3942',
  joinDate: '2025.05.07',
};

const MyPage: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto bg-white min-h-screen p-6 pt-36">
      {/* 프로필 영역 */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-3xl text-gray-400">
          {/* 실제 프로필 이미지가 있다면 <img src={user.profileUrl} ... /> */}
          <span className="material-icons">Pic</span>
        </div>
        <div>
          <div className="text-lg font-semibold">{dummyUser.name}님 계정 정보</div>
        </div>
      </div>

      <hr className="mb-4" />

      {/* 정보 영역 */}
      <div className="mb-8">
        <div className="text-gray-500 mb-2">정보</div>
        <div className="flex justify-between py-2 text-sm">
          <span>이메일</span>
          <span className="text-gray-700">{dummyUser.email}</span>
        </div>
        <div className="flex justify-between py-2 text-sm">
          <span>휴대전화번호</span>
          <span className="text-gray-700">{dummyUser.phone}</span>
        </div>
        <div className="flex justify-between py-2 text-sm">
          <span>서비스 가입일</span>
          <span className="text-gray-700">{dummyUser.joinDate}</span>
        </div>
      </div>

      <hr className="mb-4" />

      {/* 서비스 영역 */}
      <div>
        <div className="text-gray-500 mb-2">서비스</div>
        <div>
          {[
            { label: '내 상담' },
            { label: 'AI 진단 내역' },
            { label: '만나지 않기' },
            { label: '회원 탈퇴' },
          ].map((item, idx) => (
            <button
              key={item.label}
              className="w-full flex justify-between items-center py-2 text-sm focus:outline-none"
              style={{ background: 'transparent', border: 'none' }}
              // TODO: 각 버튼 클릭 시 라우팅 또는 기능 연결
            >
              <span>{item.label}</span>
              <FaChevronRight className="text-gray-400" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPage; 
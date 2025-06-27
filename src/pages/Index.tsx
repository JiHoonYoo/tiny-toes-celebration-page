
import React from 'react';
import { MapPin, Calendar, Clock, Heart, Cake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const handleMapClick = () => {
    window.open('https://map.naver.com/v5/search/무지개%20커뮤니티센터', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-pink-25 to-yellow-50 overflow-hidden">
      {/* Hero Section with Baby's Photo Placeholder */}
      <div className="relative pt-12 pb-8">
        <div className="container mx-auto px-6 max-w-sm text-center">
          {/* Decorative elements */}
          <div className="absolute top-8 left-8 w-3 h-3 bg-blue-300 rounded-full opacity-60"></div>
          <div className="absolute top-16 right-6 w-2 h-2 bg-pink-300 rounded-full opacity-50"></div>
          
          {/* Baby photo placeholder */}
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-pink-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
            <div className="text-4xl">👶🏻</div>
          </div>
          
          {/* Baby's name and title */}
          <h1 className="text-3xl font-bold text-blue-800 mb-2 font-serif">
            서준이
          </h1>
          <p className="text-lg text-blue-600 mb-1">첫 번째 생일에</p>
          <p className="text-xl font-semibold text-pink-600 mb-6">초대합니다</p>
          
          {/* Cute decorations */}
          <div className="flex justify-center items-center space-x-3 mb-8">
            <span className="text-2xl">🎈</span>
            <span className="text-2xl">🐉</span>
            <Cake className="w-8 h-8 text-yellow-500" />
            <span className="text-2xl">🐉</span>
            <span className="text-2xl">🎈</span>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="container mx-auto px-6 max-w-sm">
        <Card className="mb-6 bg-white/90 backdrop-blur-sm shadow-lg border-0 rounded-2xl">
          <CardContent className="p-6 text-center">
            <div className="space-y-4">
              <div className="flex flex-col items-center space-y-2">
                <Calendar className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-600 mb-1">DATE</p>
                  <p className="text-lg font-semibold text-gray-800">2025년 3월 15일</p>
                  <p className="text-base text-gray-700">토요일</p>
                </div>
              </div>
              
              <div className="w-full h-px bg-gray-200"></div>
              
              <div className="flex flex-col items-center space-y-2">
                <Clock className="w-6 h-6 text-green-500" />
                <div>
                  <p className="text-sm text-gray-600 mb-1">TIME</p>
                  <p className="text-lg font-semibold text-gray-800">오후 2시 - 5시</p>
                </div>
              </div>
              
              <div className="w-full h-px bg-gray-200"></div>
              
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="w-6 h-6 text-pink-500" />
                <div>
                  <p className="text-sm text-gray-600 mb-1">PLACE</p>
                  <p className="text-lg font-semibold text-gray-800">무지개 커뮤니티센터</p>
                  <p className="text-sm text-gray-600">서울시 강남구 행복로 123</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Parents' Message */}
        <Card className="mb-6 bg-gradient-to-br from-blue-50 to-pink-50 shadow-lg border-0 rounded-2xl">
          <CardContent className="p-6 text-center">
            <Heart className="w-8 h-8 mx-auto text-pink-400 mb-4" />
            <p className="text-gray-700 leading-relaxed mb-4">
              우리 서준이가 벌써 첫 돌을<br />
              맞았습니다 🥳
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              어제 태어난 것 같은데 벌써 걸어 다니고,<br />
              옹알이하며 매일 우리의 마음을 녹이고 있어요.<br />
              소중한 첫 돌을 사랑하는 가족, 친구들과<br />
              함께 축하하고 싶습니다.
            </p>
            <div className="text-sm text-gray-500 italic">
              사랑을 담아<br />
              지혜 & 민수 ❤️
            </div>
          </CardContent>
        </Card>

        {/* Map Button */}
        <Button 
          onClick={handleMapClick}
          className="w-full bg-gradient-to-r from-blue-400 to-pink-400 hover:from-blue-500 hover:to-pink-500 text-white py-4 text-base font-medium rounded-2xl shadow-lg transition-all duration-300 mb-8 border-0"
        >
          <MapPin className="w-5 h-5 mr-2" />
          오시는 길 보기
        </Button>

        {/* Bottom decorative section */}
        <div className="text-center pb-8">
          <div className="flex justify-center space-x-2 mb-4">
            <span className="text-2xl">🎂</span>
            <span className="text-2xl">🎈</span>
            <span className="text-2xl">🐉</span>
            <span className="text-2xl">🎈</span>
            <span className="text-2xl">🎂</span>
          </div>
          <p className="text-gray-500 text-sm">
            함께 축하해 주세요 🌈
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

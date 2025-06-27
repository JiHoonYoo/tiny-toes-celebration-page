
import React from 'react';
import { MapPin, Calendar, Clock, Heart, Cake, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect } from "react";

const Index = () => {
  const handleRSVP = () => {
    // You can integrate with actual RSVP system here
    window.open('mailto:parents@email.com?subject=하민이 첫 돌잔치 참석 의사', '_blank');
  };

  const handleMapClick = () => {
    // Replace with actual venue coordinates
    window.open('https://map.naver.com/v5/search/돌잔치%20장소', '_blank');
  };

  useEffect(() => {
    console.log("✅ 현재 경로:", window.location.pathname);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-green-50 to-yellow-50">
      {/* Floating decorative elements */}
      <div className="fixed top-10 left-5 animate-bounce">
        <div className="w-8 h-8 bg-blue-200 rounded-full opacity-60"></div>
      </div>
      <div className="fixed top-20 right-8 animate-pulse">
        <div className="w-6 h-6 bg-green-200 rounded-full opacity-50"></div>
      </div>
      <div className="fixed top-32 left-12 animate-bounce delay-300">
        <div className="w-4 h-4 bg-yellow-200 rounded-full opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-md">
        {/* Header with baby's name */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="mb-4">
            <Baby className="w-16 h-16 mx-auto text-blue-400 mb-2" />
          </div>
          <h1 className="text-4xl font-bold text-blue-800 mb-2 font-serif">
            하민이
          </h1>
          <div className="text-lg text-blue-600 mb-2">
            첫 번째 생일에
          </div>
          <div className="text-2xl font-bold text-green-600 mb-4">
            초대합니다! 🎂
          </div>
          <div className="text-sm text-blue-500">
            소중한 첫 돌을 함께 축하해 주세요
          </div>
        </div>

        {/* Cute illustration section */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="text-4xl animate-bounce">🎈</div>
            <div className="text-4xl animate-pulse">🐉</div>
            <Cake className="w-12 h-12 text-yellow-400 animate-pulse" />
            <div className="text-4xl animate-bounce delay-300">🐉</div>
          </div>
          <div className="flex justify-center space-x-2">
            <div className="text-2xl">🎈</div>
            <div className="text-2xl">🎈</div>
            <div className="text-2xl">🎈</div>
          </div>
        </div>

        {/* Event details card */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm border-blue-200 shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-4 text-center">
              돌잔치 안내
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-green-500" />
                <div>
                  <div className="font-semibold text-blue-800">날짜</div>
                  <div className="text-blue-600">2025년 8월 17일 (일요일)</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-500" />
                <div>
                  <div className="font-semibold text-blue-800">시간</div>
                  <div className="text-blue-600">오후 2시 - 오후 5시</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-500" />
                <div>
                  <div className="font-semibold text-blue-800">장소</div>
                  <div className="text-blue-600">
                    동탄 파티멜로우<br />
                    경기 화성시 동탄역로 196 판매시설동 2층 L2-163~L2-168호
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Parents' message */}
        <Card className="mb-6 bg-gradient-to-r from-blue-50 to-green-50 border-green-200 shadow-lg">
          <CardContent className="p-6">
            <div className="text-center">
              <Heart className="w-8 h-8 mx-auto text-green-500 mb-3" />
              <h3 className="font-bold text-blue-800 mb-3">엄마, 아빠의 인사</h3>
              <p className="text-blue-700 leading-relaxed">
                우리 하민이가 벌써 첫 돌을 맞았습니다! 🥳<br/><br/>
                어제 태어난 것 같은데 벌써 걸어 다니고, 옹알이하며 
                매일 우리의 마음을 녹이고 있어요. 소중한 첫 돌을 
                사랑하는 가족, 친구들과 함께 축하하고 싶습니다.
              </p>
              <div className="mt-4 text-sm text-blue-600 italic">
                사랑을 담아,<br/>
                재량 & 지훈 ❤️
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action buttons */}
        <div className="space-y-3 mb-8">
          <Button 
            onClick={handleRSVP}
            className="w-full bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-500 hover:to-green-500 text-white py-6 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            참석 의사 전달 💌
          </Button>
          
          <Button 
            onClick={handleMapClick}
            variant="outline"
            className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
          >
            <MapPin className="w-5 h-5 mr-2" />
            오시는 길
          </Button>
        </div>

        {/* Footer with decorative elements */}
        <div className="text-center">
          <div className="flex justify-center space-x-2 mb-4">
            <div className="text-3xl">🎂</div>
            <div className="text-3xl">🎈</div>
            <div className="text-3xl">🐉</div>
            <div className="text-3xl">🎈</div>
            <div className="text-3xl">🎂</div>
          </div>
          <p className="text-blue-500 text-sm">
            함께 축하해 주세요! 🌈
          </p>
        </div>
      </div>

      {/* Floating hearts animation */}
      <div className="fixed bottom-10 right-5 animate-pulse">
        <Heart className="w-6 h-6 text-green-300" />
      </div>
      <div className="fixed bottom-20 left-8 animate-pulse delay-500">
        <Heart className="w-4 h-4 text-blue-300" />
      </div>
    </div>
  );
};

export default Index;

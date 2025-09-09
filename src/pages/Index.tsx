import React, { useEffect } from 'react';
import { MapPin, Calendar, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Index = () => {
  const handleRSVP = () => {
    window.open('mailto:parents@email.com?subject=하민이 첫 돌잔치 참석 의사', '_blank');
  };

  const handleMapClick = () => {
    window.open('https://map.naver.com/v5/search/돌잔치%20장소', '_blank');
  };

  useEffect(() => {
    console.log("✅ 현재 경로:", window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-8 py-16 max-w-2xl">

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-10">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] blur-lg" />
            {/* 메인사진 프레임: 점선+링으로 더 러블리하게 */}
            <div className="relative overflow-hidden rounded-3xl shadow-elegant border-4 border-dashed border-primary ring-8 ring-white ring-offset-4 ring-offset-primary/20">
              <img
                src="/lovable-uploads/51fd49f4-8a9b-4a2d-a136-b2698a2b8681.png"
                alt="하민이 첫 돌 기념 사진"
                className="w-80 h-80 object-cover"
              />
            </div>
          </div>

          {/* 제목 문구 통합 & 약간 더 작게 */}
          <h1 className="text-3xl font-light text-foreground tracking-tight">
            하민이, 첫 생일❤️
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
        </div>

        {/* 엄마·아빠 인사 (안내보다 먼저) */}
        <div className="mb-20">
          <div className="text-center p-12 rounded-3xl bg-card/30 backdrop-blur-sm border border-border/30">
            <Heart className="w-12 h-12 mx-auto text-primary mb-8" />
            <h3 className="text-3xl font-bold text-foreground mb-8">엄마, 아빠의 인사</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
              우리 하민이가 벌써 첫 돌을 맞았습니다!<br /><br />
              어제 태어난 것 같은데 벌써 걸어 다니고, 옹알이하며
              매일 우리의 마음을 녹이고 있어요. 소중한 첫 돌을
              사랑하는 가족, 친구들과 함께 축하하고 싶습니다.
            </p>
            <div className="text-lg text-muted-foreground/80 font-light">사랑을 담아 ❤️</div>
          </div>
        </div>

        {/* 돌잔치 안내 (기존 데이터 유지) */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">돌잔치 안내</h2>

          <div className="space-y-8">
            <div className="flex items-start space-x-6 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">날짜</h3>
                <p className="text-lg text-muted-foreground">2025년 9월 28일 (일요일)</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">시간</h3>
                <p className="text-lg text-muted-foreground">오전 11시 30분 ~ 오후 12시 30분</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">장소</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  동탄 파티멜로우<br />
                  경기 화성시 동탄역로 196 판매시설동 2층<br />
                  L2-163~L2-168호
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 성장 앨범 (기존 리소스 그대로) */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">성장 앨범</h2>
          <div className="relative">
            <Carousel className="w-full max-w-lg mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-2">
                    <div className="relative overflow-hidden rounded-2xl shadow-soft border-2 border-white/30">
                      <img src="/lovable-uploads/c86ac4fe-3d37-44a9-a96a-88aca1ba4772.png" alt="누워있는 하민이" className="w-full aspect-square object-cover" />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-2">
                    <div className="relative overflow-hidden rounded-2xl shadow-soft border-2 border-white/30">
                      <img src="/lovable-uploads/0082baab-186d-42bb-8041-768e9cff2e0c.png" alt="웃고 있는 하민이" className="w-full aspect-square object-cover" />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-2">
                    <div className="relative overflow-hidden rounded-2xl shadow-soft border-2 border-white/30">
                      <img src="/lovable-uploads/341126ff-394c-483f-afb1-592159c4ea2e.png" alt="장난감과 함께하는 하민이" className="w-full aspect-square object-cover" />
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-2">
                    <div className="relative overflow-hidden rounded-2xl shadow-soft border-2 border-white/30">
                      <img src="/lovable-uploads/4b5bea2c-ae32-4812-ae68-6136e8e96189.png" alt="책과 함께하는 하민이" className="w-full aspect-square object-cover" />
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>

        {/* 액션 버튼 */}
        <div className="space-y-6">
          <Button
            onClick={handleRSVP}
            className="w-full h-16 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-foreground text-xl font-semibold rounded-2xl shadow-elegant transition-all duration-300 transform hover:scale-[1.02] border-0"
          >
            참석 의사 전달하기
          </Button>

          <Button
            onClick={handleMapClick}
            variant="outline"
            className="w-full h-16 border-2 border-border/50 text-foreground hover:bg-card/50 text-xl font-semibold rounded-2xl transition-all duration-300 bg-card/20 backdrop-blur-sm"
          >
            <MapPin className="w-6 h-6 mr-3" />
            오시는 길 안내
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-12 border-t border-border/30">
          <p className="text-muted-foreground text-lg font-light">함께 축하해 주세요</p>
        </div>
      </div>
    </div>
  );
};

export default Index;

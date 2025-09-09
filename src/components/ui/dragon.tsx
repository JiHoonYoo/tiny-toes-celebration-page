// src/components/DragonDecor.tsx
import React from "react";

export const DragonDecor: React.FC = () => {
  const dragons = Array.from({ length: 50 }); // 원하는 수로 조절

  return (
    // 배경 레이어: 부모(relative) 기준으로 전체 덮기
    <div className="pointer-events-none absolute inset-0 z-0">
      {dragons.map((_, i) => {
        const top = Math.random() * 100;    // 0~100%
        const left = Math.random() * 100;   // 0~100%
        const rotation = Math.floor(Math.random() * 360);
        const scale = 0.3 + Math.random() * 0.4; // 0.3~0.7
        const size = 56 + Math.random() * 32;    // 56~88px

        return (
          <img
            key={i}
            src="/lovable-uploads/dragon.png"
            alt="dragon"
            className="absolute opacity-60"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              transform: `rotate(${rotation}deg) scale(${scale})`,
              // zIndex: -1  ❌ (삭제) — 부모 배경 뒤로 숨습니다.
            }}
          />
        );
      })}
    </div>
  );
};

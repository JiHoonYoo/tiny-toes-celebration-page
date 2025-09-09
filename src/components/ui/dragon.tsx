import React from "react";

export const DragonDecor: React.FC = () => {
  const dragons = Array.from({ length: 12 }); // 12마리 랜덤 배치

  return (
    <>
      {dragons.map((_, i) => {
        const top = Math.random() * 100;  // % 단위 위치
        const left = Math.random() * 100; // % 단위 위치
        const rotation = Math.floor(Math.random() * 360);
        const scale = 0.3 + Math.random() * 0.4; // 0.3~0.7 크기

        return (
          <img
            key={i}
            src="/lovable-uploads/dragon.png"
            alt="dragon"
            className="pointer-events-none absolute opacity-60"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              transform: `rotate(${rotation}deg) scale(${scale})`,
              zIndex: -1,
            }}
          />
        );
      })}
    </>
  );
};

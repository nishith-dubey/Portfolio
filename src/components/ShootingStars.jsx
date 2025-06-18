import React, { useState, useEffect } from 'react';

const ShootingStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate stars with staggered start times
    const starConfigs = [
      { id: 1, top: 'calc(50% - 100px)', left: 'calc(50% - 250px)', delay: 0 },
      { id: 2, top: 'calc(50% - 50px)', left: 'calc(50% - 200px)', delay: 200 },
      { id: 3, top: 'calc(50% + 0px)', left: 'calc(50% - 150px)', delay: 400 },
      { id: 4, top: 'calc(50% + 50px)', left: 'calc(50% - 100px)', delay: 600 },
      { id: 5, top: 'calc(50% + 100px)', left: 'calc(50% - 150px)', delay: 800 },
      { id: 6, top: 'calc(50% + 150px)', left: 'calc(50% - 250px)', delay: 1000 },
    ];

    const initialStars = starConfigs.map(config => ({
      ...config,
      visible: false,
      animating: false
    }));

    setStars(initialStars);

    // Start animations with proper timing
    starConfigs.forEach((config, index) => {
      setTimeout(() => {
        setStars(prev => prev.map(star => 
          star.id === config.id 
            ? { ...star, visible: true, animating: true }
            : star
        ));
      }, config.delay);
    });

    // Set up repeating cycle
    const interval = setInterval(() => {
      starConfigs.forEach((config, index) => {
        setTimeout(() => {
          setStars(prev => prev.map(star => 
            star.id === config.id 
              ? { ...star, visible: true, animating: true }
              : star
          ));
        }, config.delay);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleAnimationEnd = (starId) => {
    setStars(prev => prev.map(star => 
      star.id === starId 
        ? { ...star, visible: false, animating: false }
        : star
    ));
  };

  return (
    <div className="stars-container">
      {stars.map(star => (
        <div
          key={star.id}
          className={`shooting-star ${star.visible ? 'active' : ''}`}
          style={{
            top: star.top,
            left: star.left,
            opacity: star.visible ? 1 : 0,
          }}
          onAnimationEnd={() => handleAnimationEnd(star.id)}
        />
      ))}
      
      <style jsx>{`
        .stars-container {
          position: absolute;
          width: 70%;
          height: 80%;
          border-radius: 50%;
          overflow: hidden;
          z-index: 0;
          transform: translateX(-80px) translateY(-260px) rotateZ(40deg);
          pointer-events: none;
        }

        .shooting-star {
          position: absolute;
          height: 2px;
          width: 0;
          background: linear-gradient(-45deg, #5F91FF, rgba(0,0,255,0));
          border-radius: 999px;
          filter: drop-shadow(0 0 6px #699BFF);
          opacity: 0;
          will-change: transform, width, opacity;
          transform: translateZ(0);
        }

        .shooting-star.active {
          animation: shootingStar 3s ease forwards;
        }

        .shooting-star::before,
        .shooting-star::after {
          content: '';
          position: absolute;
          top: calc(50% - 2px);
          right: 0;
          height: 4px;
          width: 0;
          background: linear-gradient(-45deg, rgba(0,0,255,0), #5F91FF, rgba(0,0,255,0));
          border-radius: 100%;
          transform: translateX(50%) rotateZ(45deg);
          will-change: width;
        }

        .shooting-star::after {
          transform: translateX(50%) rotateZ(-45deg);
        }

        .shooting-star.active::before,
        .shooting-star.active::after {
          animation: shining 3s ease infinite;
        }

        @keyframes shootingStar {
          0% {
            width: 0;
            opacity: 1;
            transform: translateX(0px);
          }
          10% {
            width: 60px;
            opacity: 1;
          }
          70% {
            width: 100px;
            opacity: 1;
          }
          100% {
            width: 0;
            opacity: 0;
            transform: translateX(300px);
          }
        }

        @keyframes shining {
          0% {
            width: 0;
          }
          30% {
            width: 30px;
          }
          70% {
            width: 30px;
          }
          100% {
            width: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ShootingStars;
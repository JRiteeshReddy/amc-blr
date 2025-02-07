
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-white to-pink/5">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <div className={`space-y-4 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-purple">
              Welcome to <span className="text-pink">AnimeClub</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple/80 max-w-2xl mx-auto">
              Join our vibrant community of anime and manga enthusiasts
            </p>
          </div>
          
          <div className={`animate-float mt-8 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <a
              href="#about"
              className="inline-block px-8 py-4 text-lg font-semibold text-white bg-pink hover:bg-purple transition-colors rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-purple/5">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple mb-4">
              About Us
            </h2>
            <div className="h-1 w-20 bg-pink mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <p className="text-lg leading-relaxed text-purple/90 mb-6">
              The Anime and Manga Club is a creative haven for anime lovers and manga enthusiasts 
              to connect, share, and celebrate Japanese pop culture. Whether you're a hardcore 
              otaku or just starting your anime journey, this is the perfect place for you.
            </p>
            <p className="text-lg leading-relaxed text-purple/90">
              From thrilling competitions and engaging events to vibrant discussions, we strive 
              to build a community fueled by passion and creativity. Come join us as we explore 
              the worlds of epic battles, heartwarming friendships, and boundless imagination!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

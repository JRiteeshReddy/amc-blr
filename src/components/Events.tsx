
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

const Events = () => {
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

    const element = document.getElementById("events");
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
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`text-center ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-purple mb-4">
            Our Events
          </h2>
          <div className="h-1 w-20 bg-pink mx-auto rounded-full mb-12"></div>
          
          <div className="inline-block">
            <button className="group relative inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-pink hover:bg-purple transition-colors rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <Calendar className="w-5 h-5" />
              <span>Explore Our Events</span>
              <div className="absolute inset-0 border-2 border-pink group-hover:border-purple rounded-lg transition-colors -z-10 translate-x-1 translate-y-1"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

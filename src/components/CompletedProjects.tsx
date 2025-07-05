
import { Button } from "@/components/ui/button";
import { Shield, IndianRupee, Play } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

export const CompletedProjects = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  const [currentMedia, setCurrentMedia] = useState<{ url: string; type: 'image' | 'video' } | null>(null);
  
  // Mixed content - images and videos
  const projectMedia = [
    { url: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", type: 'image' as const },
    { url: "https://www.w3schools.com/html/mov_bbb.mp4", type: 'video' as const },
    { url: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", type: 'image' as const },
    { url: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4", type: 'video' as const },
    { url: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", type: 'image' as const },
    { url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4", type: 'video' as const },
    { url: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", type: 'image' as const },
    { url: "https://www.w3schools.com/html/movie.mp4", type: 'video' as const },
    { url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", type: 'image' as const },
    { url: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", type: 'image' as const }
  ];

  const handleCardClick = (mediaItem: { url: string; type: 'image' | 'video' }, index: number) => {
    setCurrentMedia(mediaItem);
  };

  const closeMediaViewer = () => {
    setCurrentMedia(null);
  };

  return (
    <section 
      ref={sectionRef} 
      className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-100 via-gray-50 to-blue-50 fade-in-section ${isVisible ? 'is-visible' : ''}`}
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-4 animate-fade-in-up">
          Check our Completed Projects.
        </h2>
        <p className="text-base sm:text-lg text-[#808080] mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up animate-delay-200 font-medium">
          Trusted by 3000+ Happy Homeowners!
        </p>
        
        <div className="mb-8 sm:mb-12 lg:mb-16 overflow-hidden">
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={24}
            slidesPerView="auto"
            freeMode={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="project-media-swiper"
            breakpoints={{
              320: {
                spaceBetween: 16,
              },
              640: {
                spaceBetween: 20,
              },
              1024: {
                spaceBetween: 24,
              },
            }}
          >
            {[...projectMedia, ...projectMedia].map((mediaItem, index) => (
              <SwiperSlide key={index} className="!w-[280px] sm:!w-[320px] lg:!w-[360px]">
                <div 
                  className="bg-gradient-to-br from-[#F5F5F5] to-[#E8E8E8] rounded-xl flex items-center justify-center relative group cursor-pointer transition-all duration-500 shadow-lg hover:shadow-2xl border border-white/50 overflow-hidden"
                  style={{ height: '240px', willChange: 'transform', transform: 'translateZ(0)' }}
                  onClick={() => handleCardClick(mediaItem, index)}
                >
                  {mediaItem.type === 'image' ? (
                    <img
                      src={mediaItem.url}
                      alt={`Project ${(index % projectMedia.length) + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <>
                      <video
                        src={mediaItem.url}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        muted
                        playsInline
                        preload="metadata"
                      />
                      {/* Play button overlay for videos only */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-black/80 transition-all duration-300 group-hover:scale-110">
                          <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="white" />
                        </div>
                      </div>
                    </>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Project {(index % projectMedia.length) + 1}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* Media Viewer Modal */}
        {currentMedia && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 video-modal-fade-in">
            <div className="relative max-w-4xl w-full bg-black rounded-lg overflow-hidden video-player-scale-in">
              <button
                onClick={closeMediaViewer}
                className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                ×
              </button>
              {currentMedia.type === 'image' ? (
                <img
                  src={currentMedia.url}
                  alt="Project"
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              ) : (
                <video
                  src={currentMedia.url}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[80vh]"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          <div className="flex items-center gap-3 animate-fade-in-left animate-delay-400 hover-scale group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center animate-pulse-slow shadow-professional group-hover:shadow-interactive transition-all duration-300">
              <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="text-left">
              <p className="text-slate-700 font-bold text-base sm:text-lg">Guaranteed</p>
              <p className="text-slate-600 text-sm">On Time Delivery</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 animate-fade-in-right animate-delay-500 hover-scale group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center animate-pulse-slow shadow-professional group-hover:shadow-interactive transition-all duration-300">
              <IndianRupee className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                <p className="text-slate-700 font-bold text-base sm:text-lg">Zero</p>
              </div>
              <p className="text-slate-600 text-sm">Cost Overruns</p>
            </div>
          </div>
        </div>
        
        <div className="animate-bounce-in animate-delay-600">
          <Button className="bg-[#00FF00] hover:bg-[#00DD00] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg btn-hover rounded-xl shadow-professional hover:shadow-interactive">
            Start Your Construction
          </Button>
        </div>
      </div>
      
      <style>{`
        .project-media-swiper .swiper-slide {
          height: auto;
        }
        
        .video-modal-fade-in {
          animation: modal-fade-in 0.3s ease-out;
        }
        
        .video-player-scale-in {
          animation: player-scale-in 0.4s ease-out;
        }
        
        @keyframes modal-fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes player-scale-in {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

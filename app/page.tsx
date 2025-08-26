

'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [showNitinAnimation, setShowNitinAnimation] = useState(false);
  const [nitinImagePhase, setNitinImagePhase] = useState(0);

  useEffect(() => {
    const startNitinAnimation = () => {
      // Phase 0: Initial rotation (1.2 seconds)
      setTimeout(() => setNitinImagePhase(1), 300);
      // Phase 1: Destroy effect (0.8 seconds)
      setTimeout(() => setNitinImagePhase(2), 1500);
      // Phase 2: Remake effect (0.8 seconds) 
      setTimeout(() => setNitinImagePhase(3), 2300);
      // Phase 3: Second rotation (1.2 seconds)
      setTimeout(() => setNitinImagePhase(4), 3100);
      // Phase 4: Rest briefly then restart loop
      setTimeout(() => setNitinImagePhase(5), 4300);
      // Restart the entire animation loop after 6 seconds
      setTimeout(() => {
        setNitinImagePhase(0);
        startNitinAnimation();
      }, 6000);
    };

    const timer = setTimeout(() => {
      setShowNitinAnimation(true);
      // Start the animation sequence
      startNitinAnimation();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Background Tech Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #00ff88 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #0088ff 0%, transparent 50%)`,
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Welcome Section */}
        <section className="text-center mb-20 animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-cyan-400/30">
              <span className="text-4xl font-bold text-black">&lt;/&gt;</span>
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              WELCOME TO
            </h1>
            <h2 className="text-4xl font-light text-gray-300 mb-2">
              CODING CLUB
            </h2>
            <h3 className="text-2xl font-mono text-cyan-400 tracking-wider">
              BIRLA INSTITUTE OF APPLIED SCIENCES
            </h3>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            LEADERSHIP TEAM
          </h2>

          {/* Secretaries */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                <div className="w-40 h-40 mx-auto bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <span className="text-6xl">👤</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 text-center mb-2">HARSHIT JOSHI</h3>
                <p className="text-lg text-gray-400 text-center font-mono">SECRETARY</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                <div className="w-40 h-40 mx-auto bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <span className="text-6xl">👤</span>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 text-center mb-2">HARSHIT JOSHI</h3>
                <p className="text-lg text-gray-400 text-center font-mono">SECRETARY</p>
              </div>
            </div>
          </div>

          {/* Vice Secretary */}
          <div className="flex justify-center mb-16">
            <div className="group max-w-md">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20">
                <div className="w-40 h-40 mx-auto bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <span className="text-6xl">👤</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 text-center mb-2">ARMAAN KHAN</h3>
                <p className="text-lg text-gray-400 text-center font-mono">VICE SECRETARY</p>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Heads Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            FACULTY HEADS
          </h2>

          <div className="space-y-16 max-w-7xl mx-auto">
            {/* Sandesh Sir - Full Width Card */}
            <div className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-green-400/20 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/20 transform hover:-translate-y-2">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="w-72 h-72 bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-green-400/20 flex-shrink-0">
                    <span className="text-9xl">👨‍🏫</span>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-5xl font-bold text-green-400 mb-4">SANDESH SIR</h3>
                    <p className="text-2xl text-gray-400 font-mono mb-6">FACULTY HEAD</p>
                    <p className="text-lg text-gray-500 leading-relaxed max-w-3xl">
                      Leading innovation in computer science education and guiding students towards technological excellence. With years of experience in computer science, he continues to inspire and mentor the next generation of developers and programmers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nitin Chimwal - Full Width Card with Extra Large Image */}
            <div className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20 transform hover:-translate-y-2 relative overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-3xl"></div>
                
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="w-80 h-80 rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-500 border-4 border-cyan-400/30 relative shadow-xl shadow-cyan-400/30 flex-shrink-0">
                    {/* Rotating ring effect around the image */}
                    <div className="absolute -inset-2 border-2 border-cyan-400/20 rounded-full animate-spin" style={{animationDuration: '4s'}}></div>
                    <div className="absolute -inset-4 border border-blue-400/10 rounded-full animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
                    
                    {showNitinAnimation ? (
                      <div className={`w-full h-full relative ${
                        nitinImagePhase === 0 ? 'transition-all duration-700 ease-in-out rotate-0 scale-100 opacity-100' :
                        nitinImagePhase === 1 ? 'transition-all duration-1000 ease-in-out rotate-[720deg] scale-110 opacity-100' :
                        nitinImagePhase === 2 ? 'transition-all duration-500 ease-in scale-0 opacity-0 rotate-[1080deg]' :
                        nitinImagePhase === 3 ? 'transition-all duration-600 ease-out scale-100 opacity-100 rotate-0' :
                        nitinImagePhase === 4 ? 'transition-all duration-1000 ease-in-out rotate-[720deg] scale-105 opacity-100' :
                        'transition-all duration-800 ease-out rotate-0 scale-100 opacity-100'
                      }`}>
                        {nitinImagePhase !== 2 ? (
                          <>
                            <Image
                              src="/chimps.jpeg"
                              alt="Nitin Chimwal"
                              width={320}
                              height={320}
                              className={`w-full h-full object-cover ${
                                nitinImagePhase === 3 ? 'animate-pulse' : ''
                              } ${nitinImagePhase === 1 || nitinImagePhase === 4 ? 'drop-shadow-lg' : ''}`}
                            />
                            {/* Sparkle effects during rotation */}
                            {(nitinImagePhase === 1 || nitinImagePhase === 4) && (
                              <>
                                <div className="absolute top-4 right-4 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
                                <div className="absolute bottom-4 left-4 w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                                <div className="absolute top-1/2 right-2 w-3 h-3 bg-white rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
                                <div className="absolute left-2 top-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-ping" style={{animationDelay: '0.9s'}}></div>
                              </>
                            )}
                          </>
                        ) : (
                          <div className="w-full h-full bg-gradient-to-r from-red-500/40 to-orange-500/40 flex items-center justify-center animate-pulse">
                            <div className="relative">
                              {/* Multiple explosion effects */}
                              <div className="absolute inset-0 animate-ping">
                                <span className="text-9xl">💥</span>
                              </div>
                              <div className="absolute inset-0 animate-bounce">
                                <span className="text-7xl">⚡</span>
                              </div>
                              <span className="text-9xl animate-spin">💥</span>
                              {/* Enhanced particle effects */}
                              <div className="absolute -top-6 -left-6 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
                              <div className="absolute -top-4 -right-4 w-4 h-4 bg-red-400 rounded-full animate-ping" style={{animationDelay: '0.1s'}}></div>
                              <div className="absolute -bottom-6 -left-4 w-3 h-3 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                              <div className="absolute -bottom-4 -right-6 w-4 h-4 bg-orange-500 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                              <div className="absolute top-0 left-1/2 w-3 h-3 bg-red-500 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
                              <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-yellow-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                        <span className="text-9xl">👨‍🏫</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-5xl font-bold text-cyan-400 mb-4">NITIN CHIMWAL</h3>
                    <p className="text-2xl text-gray-400 font-mono mb-6">FACULTY HEAD</p>
                    <p className="text-lg text-gray-500 leading-relaxed max-w-3xl">
                      Inspiring the next generation of programmers and fostering a culture of continuous learning and innovation. A passionate educator dedicated to advancing computer science education and mentoring students in their journey towards becoming skilled developers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Thank You Section */}
        <section className="text-center mb-12">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-600/20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              THANK YOU
            </h2>
            <p className="text-xl text-gray-400 font-mono max-w-2xl mx-auto leading-relaxed">
              Together, we code the future. Join us in our journey of innovation, learning, and technological excellence.
            </p>
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-20" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-3/4 w-2 h-2 bg-purple-500 rounded-full animate-ping opacity-20" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
}

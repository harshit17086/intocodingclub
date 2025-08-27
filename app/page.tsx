

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
    <div className="text-white overflow-hidden">
      {/* Background Tech Pattern - Fixed */}
      <div className="fixed inset-0 opacity-10 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #00ff88 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #0088ff 0%, transparent 50%)`,
        }}></div>
      </div>

      {/* Section 0: QR Code Page - Full Height */}
      <section className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 flex items-center justify-center relative z-10">
        <div className="text-center px-6">
          <div className="mb-8">            
            {/* Large QR Code Container */}
            <div className="relative mx-auto mb-8">
              <div className="w-[600px] h-[600px] mx-auto bg-white rounded-3xl p-12 shadow-2xl shadow-cyan-400/20 transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                  {/* Large QR Code using QR Server API */}
                  <Image
                    src="https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://codingclub.birlainstitute.co.in/"
                    alt="QR Code for Coding Club Website"
                    width={500}
                    height={500}
                    className="w-full h-full rounded-xl"
                    unoptimized={true}
                  />
                </div>
              </div>
              
              {/* Animated border rings */}
              <div className="absolute -inset-6 border-4 border-cyan-400/30 rounded-3xl animate-pulse"></div>
              <div className="absolute -inset-12 border-2 border-blue-400/20 rounded-3xl animate-ping"></div>
            </div>
            
            {/* Website URL */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20 max-w-2xl mx-auto">
              <a 
                href="https://codingclub.birlainstitute.co.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-blue-300 hover:text-blue-200 underline break-all transition-colors duration-200 font-mono"
              >
                https://codingclub.birlainstitute.co.in/
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Welcome - Full Height */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center relative z-10">
        <div className="text-center px-6">
          <div className="mb-8">
            <div className="w-60 h-60 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-cyan-400/30 animate-pulse overflow-hidden">
              <Image
                src="/logo.jpeg"
                alt="Coding Club Logo"
                width={240}
                height={240}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 animate-fade-in">
              WELCOME TO
            </h1>
            <h2 className="text-6xl font-light text-gray-300 mb-4">
              CODING CLUB
            </h2>
            <h3 className="text-3xl font-mono text-cyan-400 tracking-wider">
              BIRLA INSTITUTE OF APPLIED SCIENCES
            </h3>
          </div>
        </div>
      </section>

      {/* Section 2: Faculty Heads - Full Height */}
      <section className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            FACULTY HEADS
          </h2>

          <div className="grid grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Sandesh Sir */}
            <div className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-green-400/20 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/20 transform hover:-translate-y-2 h-[500px] flex flex-col items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-green-400/20 mb-8 overflow-hidden">
                  <Image
                    src="/1bbf03c6-f29a-4b50-aeb3-b4a990336fb5.jpeg"
                    alt="Sandesh Sir"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-4xl font-bold text-green-400 text-center mb-3">SANDESH SIR</h3>
                <p className="text-2xl text-gray-400 text-center font-mono mb-4">FACULTY HEAD</p>
                <p className="text-lg text-gray-500 text-center leading-relaxed max-w-md">
                  Leading innovation in computer science education and guiding students towards technological excellence.
                </p>
              </div>
            </div>

            {/* Nitin Chimwal */}
            <div className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20 transform hover:-translate-y-2 relative overflow-hidden h-[500px] flex flex-col items-center justify-center">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-3xl"></div>
                
                <div className="w-64 h-64 rounded-3xl overflow-hidden group-hover:scale-110 transition-transform duration-500 border-4 border-cyan-400/30 relative shadow-xl shadow-cyan-400/30 mb-8">
                  {/* Rotating ring effect around the image */}
                  <div className="absolute -inset-2 border-2 border-cyan-400/20 rounded-3xl animate-spin" style={{animationDuration: '4s'}}></div>
                  <div className="absolute -inset-4 border border-blue-400/10 rounded-3xl animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
                  
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
                            width={256}
                            height={256}
                            className={`w-full h-full object-cover rounded-2xl ${
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
                        <div className="w-full h-full bg-gradient-to-r from-red-500/40 to-orange-500/40 flex items-center justify-center animate-pulse rounded-2xl">
                          <div className="relative">
                            {/* Multiple explosion effects */}
                            <div className="absolute inset-0 animate-ping">
                              <span className="text-8xl">💥</span>
                            </div>
                            <div className="absolute inset-0 animate-bounce">
                              <span className="text-6xl">⚡</span>
                            </div>
                            <span className="text-8xl animate-spin">💥</span>
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
                    <div className="w-full h-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center rounded-2xl">
                      <span className="text-8xl">👨‍🏫</span>
                    </div>
                  )}
                </div>
                <h3 className="text-4xl font-bold text-cyan-400 text-center mb-3">NITIN CHIMWAL</h3>
                <p className="text-2xl text-gray-400 text-center font-mono mb-4">FACULTY HEAD</p>
                <p className="text-lg text-gray-500 text-center leading-relaxed max-w-md">
                  Inspiring the next generation of programmers and fostering a culture of continuous learning and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Leadership Team - Full Height */}
      <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            LEADERSHIP TEAM
          </h2>

          <div className="grid grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Secretary 1 - Harshit */}
            <div className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-10 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20 transform hover:-translate-y-2 h-[450px] flex flex-col items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-cyan-400/20 overflow-hidden">
                  <Image
                    src="/hatshit1.jpeg"
                    alt="Harshit Joshi"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-3xl font-bold text-cyan-400 text-center mb-3">HARSHIT JOSHI</h3>
                <p className="text-xl text-gray-400 text-center font-mono">SECRETARY</p>
              </div>
            </div>

            {/* Secretary 2 - Center Secretary */}
            <div className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-10 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20 transform hover:-translate-y-2 h-[450px] flex flex-col items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-cyan-400/20 overflow-hidden">
                  <Image
                    src="/fb8d44b9-9ba0-4a88-b0e5-9dcca67ce123.jpeg"
                    alt="Center Secretary"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-3xl font-bold text-cyan-400 text-center mb-3">HARSHIT JOSHI</h3>
                <p className="text-xl text-gray-400 text-center font-mono">SECRETARY</p>
              </div>
            </div>

            {/* Vice Secretary - Armaan */}
            <div className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-10 border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-400/20 transform hover:-translate-y-2 h-[450px] flex flex-col items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-purple-400/20 overflow-hidden">
                  <Image
                    src="/ar.jpeg"
                    alt="Armaan Khan"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-3xl font-bold text-purple-400 text-center mb-3">ARMAAN KHAN</h3>
                <p className="text-xl text-gray-400 text-center font-mono">VICE SECRETARY</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Second QR Code Page - Full Height */}
      <section className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 flex items-center justify-center relative z-10">
        <div className="text-center px-6">
          <div className="mb-8">            
            {/* Large QR Code Container */}
            <div className="relative mx-auto mb-8">
              <div className="w-[600px] h-[600px] mx-auto bg-white rounded-3xl p-12 shadow-2xl shadow-green-400/20 transform hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                  {/* Large QR Code for Pixel App */}
                  <Image
                    src="https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://coding-club-pixel.vercel.app/"
                    alt="QR Code for Coding Club Pixel App"
                    width={500}
                    height={500}
                    className="w-full h-full rounded-xl"
                    unoptimized={true}
                  />
                </div>
              </div>
              
              {/* Animated border rings with green theme */}
              <div className="absolute -inset-6 border-4 border-green-400/30 rounded-3xl animate-pulse"></div>
              <div className="absolute -inset-12 border-2 border-teal-400/20 rounded-3xl animate-ping"></div>
            </div>
            
            {/* Website URL */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-green-400/20 max-w-2xl mx-auto">
              <a 
                href="https://coding-club-pixel.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-green-300 hover:text-green-200 underline break-all transition-colors duration-200 font-mono"
              >
                https://coding-club-pixel.vercel.app/
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Thank You - Full Height */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center relative z-10">
        <div className="text-center px-6">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-16 border border-gray-600/20 max-w-4xl">
            <h2 className="text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8">
              THANK YOU
            </h2>
            <p className="text-2xl text-gray-400 font-mono leading-relaxed mb-8">
              Together, we code the future. Join us in our journey of innovation, learning, and technological excellence.
            </p>
            <div className="flex justify-center">
              <div className="flex space-x-4">
                <div className="w-6 h-6 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-6 h-6 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-6 h-6 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-20" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-3/4 w-2 h-2 bg-purple-500 rounded-full animate-ping opacity-20" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
}

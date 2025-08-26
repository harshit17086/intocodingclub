

'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [showNitinAnimation, setShowNitinAnimation] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNitinAnimation(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showNitinAnimation) {
      const phases = setTimeout(() => {
        setAnimationPhase(1);
        setTimeout(() => {
          setAnimationPhase(2);
        }, 2000);
      }, 500);

      return () => clearTimeout(phases);
    }
  }, [showNitinAnimation]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Background Tech Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #00ff88 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #0088ff 0%, transparent 50%)`,
        }}></div>
      </div>

      {/* Animated Nitin Image Overlay */}
      {showNitinAnimation && (
        <div className={`fixed inset-0 z-50 pointer-events-none transition-all duration-2000 ${
          animationPhase === 0 ? 'opacity-100' : 
          animationPhase === 1 ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className={`absolute transition-all duration-2000 ease-in-out ${
            animationPhase === 0 ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0 scale-100' :
            animationPhase === 1 ? 'top-0 left-0 rotate-[720deg] scale-150' : 
            'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0 scale-100'
          }`}>
            <Image
              src="/chimps.jpeg"
              alt="Nitin Chimwal"
              width={200}
              height={200}
              className="rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-400/50"
            />
          </div>
        </div>
      )}

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

          <div className="grid md:grid-cols-2 gap-12">
            {/* Sandesh Sir */}
            <div className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-400/20 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20">
                <div className="w-40 h-40 mx-auto bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <span className="text-6xl">👨‍🏫</span>
                </div>
                <h3 className="text-2xl font-bold text-green-400 text-center mb-2">SANDESH SIR</h3>
                <p className="text-lg text-gray-400 text-center font-mono">FACULTY HEAD</p>
                <p className="text-sm text-gray-500 text-center mt-4 leading-relaxed">
                  Leading innovation in computer science education and guiding students towards technological excellence.
                </p>
              </div>
            </div>

            {/* Nitin Chimwal */}
            <div className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 group-hover:scale-105 transition-transform border-4 border-cyan-400/30">
                  {animationPhase === 2 ? (
                    <Image
                      src="/chimps.jpeg"
                      alt="Nitin Chimwal"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                      <span className="text-6xl">👨‍🏫</span>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 text-center mb-2">NITIN CHIMWAL</h3>
                <p className="text-lg text-gray-400 text-center font-mono">FACULTY HEAD</p>
                <p className="text-sm text-gray-500 text-center mt-4 leading-relaxed">
                  Inspiring the next generation of programmers and fostering a culture of continuous learning and innovation.
                </p>
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

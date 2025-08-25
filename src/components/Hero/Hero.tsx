import { useRef, useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '../../lib/gsap-config'
import siteConfig from '../../config/site.config.json'
import { getAssetUrl } from '../../utils/assetUrl'

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const characterRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [playerCount, setPlayerCount] = useState(0)

  // Loading animation
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          setIsLoading(false)
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(timer)
  }, [])

  // Player count animation
  useEffect(() => {
    const targetCount = Math.floor(Math.random() * (siteConfig.server.maxPlayers - 100)) + 100
    const duration = 2000
    const increment = targetCount / (duration / 16)
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= targetCount) {
        setPlayerCount(targetCount)
        clearInterval(timer)
      } else {
        setPlayerCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [])

  useGSAP(() => {
    if (!isLoading) {
      const tl = gsap.timeline()

      // Smooth entrance animations
      tl.from(characterRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      })
      .from(contentRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.8')
      .from('.stat-item', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      }, '-=0.4')

      // Parallax on scroll with unique IDs
      ScrollTrigger.create({
        id: 'hero-character-parallax',
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
        animation: gsap.to(characterRef.current, {
          yPercent: 30,
          ease: 'none'
        })
      })

      ScrollTrigger.create({
        id: 'hero-content-parallax',
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        animation: gsap.to(contentRef.current, {
          yPercent: 20,
          ease: 'none'
        })
      })

      // Cleanup function
      return () => {
        ScrollTrigger.getById('hero-character-parallax')?.kill()
        ScrollTrigger.getById('hero-content-parallax')?.kill()
      }
    }
  }, [isLoading])

  // Loading Screen
  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <h1 className="text-7xl md:text-9xl font-bebas text-white mb-4 animate-fade-in">
            {siteConfig.server.name}
          </h1>
          <div className="w-96 max-w-full mx-auto mb-8">
            <div className="progress-bar">
              <div 
                className="h-full bg-gta-gold transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <p className="text-gta-light text-sm mt-2">Loading... {loadingProgress}%</p>
          </div>
          <p className="text-gta-light text-sm animate-pulse">
            Appuyez sur une touche 
          </p>
        </div>
      </div>
    )
  }

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gta-black via-gta-graphite to-gta-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={getAssetUrl("/images/hero/city-night.jpg")} 
          alt="see.off" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gta-black via-transparent to-gta-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-gta-black via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div ref={heroRef} className="relative z-10 min-h-screen flex items-center">
        <div className="container-gta">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Character/Visual */}
            <div ref={characterRef} className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-gta-dark to-gta-graphite rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.discordapp.com/attachments/1158001090994896957/1409354943546130562/0WNx17I.png?ex=68ad1393&is=68abc213&hm=60637693e39a0e11a5f1d8912fd1b50de16cbb5c3eeda6e152d5fc2c60155c1c&" 
                  alt="GTA Character" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gta-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h2 className="text-4xl font-bebas text-gta-gold mb-2">Bienvenue sur</h2>
                  <h1 className="text-6xl font-bebas text-white text-shadow-lg">F-Line</h1>
                </div>
              </div>
            </div>

            {/* Right Side - Server Info */}
            <div ref={contentRef}>
              <div className="relative">
                <h1 className="text-5xl md:text-7xl font-bebas text-white mb-2">
                  {siteConfig.server.name}
                </h1>
                <p className="text-xl text-gta-gold font-inter">
                  {siteConfig.server.tagline}
                </p>
              </div>

              <p className="text-gta-light mb-8 text-lg leading-relaxed">
                {siteConfig.server.description}
              </p>

              {/* Server Stats */}
              <div ref={statsRef} className="grid grid-cols-2 gap-4 mb-8">
                <div className="stat-item">
                  <p className="stat-label">Players Online</p>
                  <p className="stat-value">{playerCount}/{siteConfig.server.maxPlayers}</p>
                </div>
                <div className="stat-item">
                  <p className="stat-label">Server Status</p>
                  <p className="stat-value text-gta-green">ONLINE</p>
                </div>
                <div className="stat-item">
                  <p className="stat-label">Active Jobs</p>
                  <p className="stat-value">{siteConfig.jobs.list.length}+</p>
                </div>
                <div className="stat-item">
                  <p className="stat-label">Uptime</p>
                  <p className="stat-value">99.9%</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="btn-gta">
                  Connect to Server
                </button>
                <a 
                  href={siteConfig.server.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gta-outline"
                >
                  Join Discord
                </a>
                {siteConfig.whitelist.enabled && (
                  <a 
                    href={siteConfig.whitelist.applicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gta-gold"
                  >
                    Apply for Whitelist
                  </a>
                )}
              </div>

              {/* Server Connection */}
              <div className="mt-8 p-4 bg-gta-graphite/50 backdrop-blur-sm rounded">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gta-light text-sm">Server Address</p>
                    <p className="text-white font-mono text-lg">{siteConfig.server.ip}</p>
                  </div>
                  <button 
                    onClick={() => navigator.clipboard.writeText(siteConfig.server.ip)}
                    className="px-4 py-2 bg-gta-dark hover:bg-gta-medium transition-colors rounded"
                  >
                    Copy IP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-gta-light text-sm uppercase tracking-wider">Scroll</p>
          <svg className="w-6 h-6 text-gta-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
import { useEffect, useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger, smoothScrollTo } from '../../lib/gsap-config'
import { Home, Briefcase, Shield, Users, Image, ScrollText } from 'lucide-react'
import siteConfig from '../../config/site.config.json'
import { BottomNavigation } from './BottomNavigation'

const navItems = [
  { id: 'Home', label: 'Acceuil', href: '#home', icons: <Home className="w-5 h-5" /> },
  { id: 'Features', label: 'Features', href: '#features', icon: <Shield className="w-5 h-5" /> },
  { id: 'Jobs', label: 'Jobs', href: '#jobs', icon: <Briefcase className="w-5 h-5" /> },
  { id: 'Règle', label: 'Règle', href: '#rules', icon: <ScrollText className="w-5 h-5" /> },
  { id: 'Equipe', label: 'Equipe', href: '#team', icon: <Users className="w-5 h-5" /> },
  { id: 'Gallery', label: 'Gallery', href: '#gallery', icon: <Image className="w-5 h-5" /> }
]

export const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false)
  
  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Return mobile navigation for mobile devices
  if (isMobile) {
    return <BottomNavigation />
  }

  // Desktop navigation continues below
  return <DesktopNavigation />
}

const DesktopNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navRef = useRef<HTMLElement>(null)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  // GSAP animations for desktop nav
  useGSAP(() => {
    // Clean entrance animation
    gsap.from('.nav-item', {
      y: -10,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power2.out',
      delay: 0.5
    })

    // Setup scroll-triggered active states with unique IDs
    navItems.forEach((item) => {
      if (item.id !== 'home') {
        ScrollTrigger.create({
          id: `nav-${item.id}`,
          trigger: `#${item.id}`,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveSection(item.id),
          onEnterBack: () => setActiveSection(item.id)
        })
      }
    })

    // Cleanup function
    return () => {
      navItems.forEach((item) => {
        const trigger = ScrollTrigger.getById(`nav-${item.id}`)
        if (trigger) trigger.kill()
      })
    }
  }, { scope: navRef })


  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      smoothScrollTo(target, -80) // -80px offset for fixed navigation
    }
  }

  return (
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass-gta shadow-gta' : 'bg-transparent'
        }`}
      >
        <div className="container-gta py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center">
                <img 
                  src="https://cdn.discordapp.com/attachments/1158001090994896957/1409354943546130562/0WNx17I.png?ex=68ad1393&is=68abc213&hm=60637693e39a0e11a5f1d8912fd1b50de16cbb5c3eeda6e152d5fc2c60155c1c&" 
                  alt="GTA Character" 
                  className="w-full h-full object-cover"
                />
                <span className="font-bebas text-lg md:text-xl text-white"></span>
              </div>
              <span className="font-bebas text-xl md:text-2xl text-white">
                <span className="hidden sm:inline">{siteConfig.server.name}</span>
                <span className="sm:hidden">FL-RP</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`nav-item relative px-4 py-2 text-sm font-inter font-medium transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-gta-gold' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gta-gold" />
                  )}
                </a>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="flex items-center gap-4">
              <a 
                href={siteConfig.server.ip}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-sm font-inter font-medium uppercase tracking-wider bg-gta-green text-white hover:bg-gta-green/90 transition-all duration-300"
              >
                Connect
              </a>
              <a 
                href={siteConfig.social.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-sm font-inter font-medium uppercase tracking-wider border border-gta-gold text-gta-gold hover:bg-gta-gold hover:text-gta-black transition-all duration-300"
              >
                Discord
              </a>
            </div>

          </div>
        </div>
      </nav>
  )
}
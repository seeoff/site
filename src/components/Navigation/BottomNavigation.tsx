import { useState, useEffect } from 'react'
import { Home, Gamepad2, Briefcase, Users, Plug } from 'lucide-react'
import siteConfig from '../../config/site.config.json'

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  href: string
  badge?: string | number
}

export const BottomNavigation = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [onlinePlayers, setOnlinePlayers] = useState<number | null>(null)

  const navItems: NavItem[] = [
    { 
      id: 'home', 
      label: 'Home', 
      icon: <Home size={20} />,
      href: '#home'
    },
    { 
      id: 'server', 
      label: 'Server', 
      icon: <Gamepad2 size={20} />,
      href: '#features',
      badge: onlinePlayers !== null ? String(onlinePlayers) : undefined
    },
    { 
      id: 'jobs', 
      label: 'Jobs', 
      icon: <Briefcase size={20} />,
      href: '#jobs'
    },
    { 
      id: 'community', 
      label: 'Team', 
      icon: <Users size={20} />,
      href: '#team'
    },
    { 
      id: 'connect', 
      label: 'Connect', 
      icon: <Plug size={20} />,
      href: '#connect'
    }
  ]

  // Hide/show navigation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false) // Scrolling down
      } else {
        setIsVisible(true) // Scrolling up
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Track active section based on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          if (sectionId === 'features' || sectionId === 'rules') {
            setActiveSection('server')
          } else if (sectionId === 'team' || sectionId === 'gallery') {
            setActiveSection('community')
          } else {
            setActiveSection(sectionId)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    const sections = ['home', 'features', 'jobs', 'rules', 'team', 'gallery']
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // Simulate online players (in production, fetch from API)
  useEffect(() => {
    setOnlinePlayers(Math.floor(Math.random() * 100) + 50)
    const interval = setInterval(() => {
      setOnlinePlayers(prev => {
        const change = Math.floor(Math.random() * 10) - 5
        const newCount = (prev || 0) + change
        return Math.max(0, Math.min(128, newCount))
      })
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, itemId: string) => {
    e.preventDefault()
    
    if (itemId === 'connect') {
      // Handle connect action
      handleConnect()
    } else {
      // Smooth scroll to section
      const target = document.querySelector(href)
      if (target) {
        const offset = 80
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  const handleConnect = () => {
    // Copy server IP to clipboard
    navigator.clipboard.writeText(siteConfig.server.ip).then(() => {
      // Show toast notification
      const toast = document.createElement('div')
      toast.className = 'fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-gta-green text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce-in'
      toast.textContent = `Server IP copied: ${siteConfig.server.ip}`
      document.body.appendChild(toast)
      
      setTimeout(() => {
        toast.classList.add('animate-fade-out')
        setTimeout(() => toast.remove(), 300)
      }, 3000)
    })

    // Open FiveM if available
    window.open(`fivem://connect/${siteConfig.server.ip}`, '_blank')
  }

  return (
    <nav 
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-gta-black/95 backdrop-blur-lg border-t border-gta-dark/50" />
      
      {/* Navigation Items */}
      <div className="relative flex items-center justify-around h-16 px-2">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href, item.id)}
            className={`relative flex flex-col items-center justify-center flex-1 h-full py-2 transition-all duration-200 ${
              activeSection === item.id 
                ? 'text-gta-gold' 
                : 'text-gta-light active:scale-95'
            }`}
          >
            {/* Active indicator */}
            {activeSection === item.id && (
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gta-gold rounded-full" />
            )}
            
            {/* Icon with badge */}
            <div className="relative">
              <span className={`transition-transform duration-200 ${
                activeSection === item.id ? 'scale-110' : ''
              }`}>
                {item.icon}
              </span>
              
              {/* Badge for online players */}
              {item.badge !== undefined && item.badge !== null && (
                <span className="absolute -top-1 -right-2 min-w-[16px] h-4 px-1 bg-gta-green text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </div>
            
            {/* Label */}
            <span className={`text-[10px] mt-1 font-medium transition-all duration-200 ${
              activeSection === item.id 
                ? 'font-semibold transform scale-105' 
                : ''
            }`}>
              {item.label}
            </span>

            {/* Touch feedback ripple effect */}
            <span className="absolute inset-0 rounded-lg overflow-hidden">
              <span className="touch-ripple" />
            </span>
          </a>
        ))}
      </div>

      {/* Server status bar */}
      <div className="absolute -top-6 left-0 right-0 h-6 bg-gta-black/90 backdrop-blur-sm border-t border-gta-dark/30 flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gta-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gta-green"></span>
          </span>
          <span className="text-gta-light">Online</span>
          {onlinePlayers !== null && (
            <>
              <span className="text-gta-medium">•</span>
              <span className="text-white font-medium">{onlinePlayers}/128</span>
            </>
          )}
        </div>
        <span className="text-gta-light text-xs font-mono">{siteConfig.server.ip}</span>
      </div>
    </nav>
  )
}
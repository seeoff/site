import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '../../lib/gsap-config'
import { AlertTriangle, Shield } from 'lucide-react'
import siteConfig from '../../config/site.config.json'

export const Rules = () => {
  const containerRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Title animation
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })

    // Animate rule cards
    const rules = gsap.utils.toArray('.rule-card') as HTMLElement[]
    
    rules.forEach((rule, index) => {
      // Staggered entrance
      gsap.from(rule, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: rule,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })

      // Animate number separately
      const ruleNumber = rule.querySelector('.rule-number')
      if (ruleNumber) {
        gsap.from(ruleNumber, {
          scale: 0,
          rotation: 180,
          duration: 0.6,
          delay: index * 0.1 + 0.2,
          scrollTrigger: {
            trigger: rule,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        })
      }
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger && containerRef.current?.contains(trigger.trigger as Element)) {
          trigger.kill()
        }
      })
    }
  }, { scope: containerRef })

  return (
    <section ref={containerRef} id="rules" className="relative py-20 bg-gradient-to-b from-gta-black to-gta-graphite">
      <div className="container-gta">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <Shield className="w-16 h-16 text-gta-gold mx-auto mb-4" />
          <h2 className="text-5xl md:text-7xl font-bebas text-white mb-4">
            Queleque règle
          </h2>
          <p className="text-xl text-gta-light max-w-2xl mx-auto">
            Suivez ce petit guide pour une meilleur experience
          </p>
        </div>

        {/* Rules Grid */}
        <div className="max-w-5xl mx-auto space-y-6">
          {siteConfig.rules.map((rule, index) => (
            <div key={rule.id} className="rule-card">
              <div className="card-gta overflow-hidden">
                <div className="flex items-start gap-6">
                  {/* Rule Number */}
                  <div className="rule-number flex-shrink-0">
                    <div className="relative w-20 h-20">
                      <div className="absolute inset-0 bg-gradient-to-br from-gta-gold/20 to-gta-gold/5 rounded-lg" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bebas text-gta-gold">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Rule Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bebas text-white mb-3">
                      {rule.title}
                    </h3>
                    <p className="text-gta-light leading-relaxed mb-4">
                      {rule.description}
                    </p>
                    
                    {/* Warning */}
                    <div className="flex items-center gap-2 text-gta-gold/80 text-sm">
                      <AlertTriangle className="w-4 h-4" />
                      <span className="uppercase tracking-wider">
                        Toute violation peut entraîner un bannissement
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Footer Card */}
          <div className="rule-card">
            <div className="card-gta bg-gradient-to-br from-gta-dark to-gta-graphite text-center p-12">
              <AlertTriangle className="w-16 h-16 text-gta-gold mx-auto mb-6" />
              <h3 className="text-3xl font-bebas text-white mb-4">
                Souvenez vous
              </h3>
              <p className="text-gta-light mb-8 max-w-2xl mx-auto">
                Le non-respect de ces règles peut entraîner des avertissements, des bannissements temporaires ou une exclusion permanente du serveur.
Notre équipe d’administration se réserve le droit de prendre des mesures en fonction de la gravité de la violation.
              </p>
              <a 
                href={siteConfig.social.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gta-gold inline-block"
              >
                Lisez tout sur notre discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
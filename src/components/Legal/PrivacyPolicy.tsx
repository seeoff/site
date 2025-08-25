import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Database, Lock, Eye, Users, Globe, Cookie, AlertCircle } from 'lucide-react'
import siteConfig from '../../config/site.config.json'

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    { id: 'introduction', title: '1. Introduction', icon: <Shield /> },
    { id: 'collection', title: '2. Informations que nous collectons', icon: <Database /> },
    { id: 'usage', title: '3. Comment nous utilisons vos informations', icon: <Eye /> },
    { id: 'sharing', title: '4. Partage des informations', icon: <Users /> },
    { id: 'security', title: '5. Sécurité des données', icon: <Lock /> },
    { id: 'retention', title: '6. Conservation des données', icon: <Database /> },
    { id: 'rights', title: '7. Vos droits', icon: <Users /> },
    { id: 'cookies', title: '8. Cookies & Analyses', icon: <Cookie /> },
    { id: 'third-party', title: '9. Services tiers', icon: <Globe /> },
    { id: 'contact', title: '10. Informations de contact', icon: <AlertCircle /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gta-black to-gta-graphite">
      {/* Header */}
      <div className="bg-gta-graphite/90 backdrop-blur-sm border-b border-gta-medium sticky top-0 z-40">
        <div className="container-gta py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-gta-light hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Retour à l’accueil
          </Link>
        </div>
      </div>

      <div className="container-gta py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
          <img 
            src="https://cdn.discordapp.com/attachments/1158001090994896957/1409354943546130562/0WNx17I.png?ex=68ad1393&is=68abc213&hm=60637693e39a0e11a5f1d8912fd1b50de16cbb5c3eeda6e152d5fc2c60155c1c&" 
            alt="GTA Character" 
            className="w-64 h-64 text-gta-gold mx-auto mb-4"               
          />           
           <h1 className="text-5xl md:text-7xl font-bebas text-white mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-gta-light">
              Derniere mise a jour : {new Date(siteConfig.legal.lastUpdated).toLocaleDateString('fr-FR', {month: 'long', year: 'numeric' })}
            </p>
          </div>

          {/* GDPR Notice */}
          <div className="card-gta bg-gta-green/10 border border-gta-green/30 mb-12">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-gta-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bebas text-gta-green mb-2">Conforme au RGPD</h3>
                <p className="text-gta-light text-sm">
                  Cette politique de confidentialité est conforme au Règlement Général sur la Protection des Données (RGPD) 
                  et aux autres lois applicables en matière de protection des données. Nous nous engageons à protéger votre vie privée 
                  et à traiter vos données de manière transparente.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="card-gta mb-12">
            <h2 className="text-2xl font-bebas text-gta-gold mb-4">Table des Matières</h2>
            <div className="grid md:grid-cols-2 gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 p-3 hover:bg-gta-dark/50 transition-colors rounded"
                >
                  <span className="text-gta-green">{section.icon}</span>
                  <span className="text-white">{section.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <section id="introduction" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">1. Introduction</h2>
              <div className="space-y-4 text-gta-light">
                <p>
                  Bienvenue sur notre serveur FiveM Roleplay. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous jouez sur notre serveur ou interagissez avec nos plateformes communautaires.
                </p>
                <p>
                  En accédant à notre serveur, vous consentez aux pratiques de gestion des données décrites dans cette politique.
Si vous n’êtes pas d’accord avec celle-ci, veuillez ne pas utiliser nos services.
                </p>
              </div>
            </section>

            <section id="collection" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">2. Information que nous collectons </h2>
              <div className="space-y-4 text-gta-light">
                <h3 className="text-xl font-bebas text-gta-gold">Collecter automatiquement</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Licences Fivem (Licence unique de FiveM)</li>
                  <li>Steam ID / ID Discord </li>
                  <li>Adresse IP (à des fins de sécurité et de lutte contre la triche)</li>
                  <li>Identifiant Materiel (pour l’application des bannissements)</li>
                  <li>Horodatages de connexion et durée des sessions</li>
                  <li>Actions en jeu et historiques de discussion</li>
                </ul>

                <h3 className="text-xl font-bebas text-gta-gold mt-6">Informations que vous fournissez</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Détails des candidature Staff (âge, expérience, etc.)</li>
                  <li>Nom d’utilisateur Discord et informations de profil</li>
                  <li>Adresse e-mail (si fournie pour les notifications)</li>
                  <li>Noms et histoires de vos personnages</li>
                  <li>Contenu des tickets de support</li>
                  <li>Messages et commentaires sur nos résaux sociaux</li>
                </ul>

                <h3 className="text-xl font-bebas text-gta-gold mt-6">Données de jeu</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Statistiques des personnages et inventaire</li>
                  <li>Propriété des biens et des véhicules</li>
                  <li>Transactions financières</li>
                  <li>Progression et historique des métiers</li>
                  <li>Affiliations à des factions ou gangs</li>
                </ul>
              </div>
            </section>

            <section id="usage" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">3. Comment nous utilisons les informations</h2>
              <div className="space-y-4 text-gta-light">
                <p>Nous utilisons les informations collectées aux fins suivantes :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fournir et maintenir le fonctionnement du serveur</li>
                  <li>Faire respecter les règles du serveur et prévenir la triche</li>
                  <li>Traiter les candidatures staff</li>
                  <li>Examiner les violations des règles et les tickets</li>
                  <li>Améliorer l’expérience de jeu et l’équilibrage</li>
                  <li>Communiquer les mises à jour importantes du serveur</li>
                  <li>Générer des statistiques et analyses du serveur</li>
                  <li>Prévenir l’évasion de bannissement et la multi-comptes</li>
                  <li>Sauvegarder et restaurer les données des joueurs</li>
                </ul>
              </div>
            </section>

            <section id="sharing" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">4. Partage des informations</h2>
              <div className="space-y-4 text-gta-light">
                <p>
                  Nous ne vendons, n’échangeons ni ne louons vos informations personnelles à des tiers. 
      Nous pouvons partager des informations dans les situations suivantes :

                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Avec d’autres membres du staff à des fins administratives</li>
                  <li>Lorsque la loi ou une procédure légale l’exige</li>
                  <li>Pour se protéger contre la fraude ou les menaces de sécurité</li>
                  <li>Avec FiveM/Cfx.re pour la conformité de la plateforme</li>
                  <li>Classements publics (noms de personnages uniquement)</li>
                </ul>

                <div className="bg-gta-dark/50 p-4 rounded border-l-4 border-gta-gold mt-6">
                  <p className="text-sm">
                    <strong>Note:</strong> Les informations de bannissement peuvent être partagées avec d’autres serveurs 
        de notre réseau partenaire afin de maintenir les standards de la communauté.
                  </p>
                </div>
              </div>
            </section>

            <section id="security" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">5. Sécurité des données</h2>
              <div className="space-y-4 text-gta-light">
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Stockage des bases de données chiffré</li>
                  <li>Audits de sécurité et mises à jour réguliers</li>
                  <li>Accès limité du personnel aux données sensibles</li>
                  <li>Procédures de sauvegarde sécurisées</li>
                  <li>Protection DDoS et systèmes de pare-feu</li>
                  <li>Authentification à deux facteurs pour les comptes administrateurs</li>
                </ul>
                <p className="mt-4">
                  Cependant, aucune méthode de transmission sur Internet n’est sécurisée à 100 %, et nous ne pouvons garantir la sécurité absolue de vos données.
                </p>
              </div>
            </section>

            <section id="retention" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">6. Conservation des données</h2>
              <div className="space-y-4 text-gta-light">
                <p>Nous conservons vos informations pendant les périodes suivantes :</p>
                <table className="w-full mt-4">
                  <thead>
                    <tr className="border-b border-gta-medium">
                      <th className="text-left py-2 text-gta-gold">Type de données</th>
                      <th className="text-left py-2 text-gta-gold">Durée de conservation</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gta-dark">
                      <td className="py-2">Données des personnages</td>
                      <td className="py-2">{siteConfig.legal.dataRetention.characterData}</td>
                    </tr>
                    <tr className="border-b border-gta-dark">
                      <td className="py-2">Historique des discussions</td>
                      <td className="py-2">{siteConfig.legal.dataRetention.chatLogs}</td>
                    </tr>
                    <tr className="border-b border-gta-dark">
                      <td className="py-2">Historique de connexion</td>
                      <td className="py-2">{siteConfig.legal.dataRetention.connectionLogs}</td>
                    </tr>
                    <tr className="border-b border-gta-dark">
                      <td className="py-2">Enregistrements de bannissement</td>
                      <td className="py-2">{siteConfig.legal.dataRetention.banRecords}</td>
                    </tr>
                    <tr className="border-b border-gta-dark">
                      <td className="py-2">Candidatures Staff</td>
                      <td className="py-2">{siteConfig.legal.dataRetention.whitelistApplications}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="rights" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">7. Vos droits</h2>
              <div className="space-y-4 text-gta-light">
                <p>Conformément au RGPD et aux lois applicables, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Accès :</strong> Demander une copie de vos données personnelles</li>
                  <li><strong>Rectification:</strong> Corriger des données inexactes ou incomplètes</li>
                  <li><strong>Effacement :</strong> Demander la suppression de vos données (« droit à l’oubli »)</li>
                  <li><strong>Portabilité :</strong> Recevoir vos données dans un format portable</li>
                  <li><strong>Opposition :</strong> Vous opposer à certains traitements de données</li>
                  <li><strong>Limitation :</strong> Restreindre la manière dont nous utilisons vos données</li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, contactez notre Délégué à la Protection des Données par e-mail. 
      Nous répondrons dans un délai de 30 jours.

                </p>
              </div>
            </section>

            <section id="cookies" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">8. Cookies & Analyses</h2>
              <div className="space-y-4 text-gta-light">
                <p>
                  Notre site utilise des cookies et technologies similaires pour améliorer l’expérience utilisateur :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cookies de session pour l’authentification</li>
                  <li>Cookies de préférences pour les paramètres de langue/thème</li>
                  <li>Cookies d’analyse pour comprendre les habitudes d’utilisation</li>
                  <li>Cookies de sécurité pour prévenir la fraude</li>
                </ul>
                <p className="mt-4">
                  Vous pouvez gérer les paramètres des cookies via votre navigateur. La désactivation des cookies peut affecter le fonctionnement du site.
                </p>
              </div>
            </section>

            <section id="third-party" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">9. Services tiers</h2>
              <div className="space-y-4 text-gta-light">
                <p>Nous intégrons les services tiers suivants :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Discord:</strong> Communication communautaire et authentification</li>
                  <li><strong>FiveM/Cfx.re:</strong> Plateforme de serveur de jeu</li>
                  <li><strong>Steam:</strong> Identification des joueurs</li>
                  <li><strong>CloudFlare:</strong> Protection DDoS et CDN</li>
                  <li><strong>PayPal/Tebex:</strong> Traitement des dons (optionnel)</li>
                </ul>
                <p className="mt-4">
                  Ces services disposent de leurs propres politiques de confidentialité. Nous recommandons de les consulter 
      pour comprendre comment ils traitent vos données.
                </p>
              </div>
            </section>

            <section id="contact" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">10. Informations de contact</h2>
              <div className="space-y-4 text-gta-light">
                <p>
                  Pour toute question ou préoccupation concernant la vie privée, contactez-nous via :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email: {siteConfig.legal.privacyEmail}</li>
                  <li>Délégué à la protection des données : {siteConfig.legal.dpoEmail}</li>
                </ul>
                <p className="mt-4">
                  Délais de réponse : 48 heures pour les questions générales, 30 jours pour les demandes formelles.
                </p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section className="card-gta bg-gta-dark/50">
              <h2 className="text-3xl font-bebas text-white mb-4">Confidentialité des enfants</h2>
              <div className="space-y-4 text-gta-light">
                <p> 
      Nous ne collectons pas sciemment d’informations personnelles auprès des enfants de moins de 16 ans. 
      Si nous découvrons que de telles informations ont été collectées, nous les supprimerons immédiatement.
                </p>
              </div>
            </section>

            {/* Updates */}
            <section className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">Mises à jour de la politique</h2>
              <div className="space-y-4 text-gta-light">
                <p>
                  Nous pouvons mettre à jour cette politique de confidentialité périodiquement. Les modifications seront publiées sur cette page avec une date de révision mise à jour. 
      Les changements significatifs seront annoncés via Discord et les notifications du serveur.
                </p>
                <p>
                  L’utilisation continue de nos services après ces changements constitue une acceptation de la politique mise à jour.
                </p>
              </div>
            </section>
          </div>

          {/* Footer CTA */}
          <div className="card-gta mt-12 text-center bg-gradient-to-br from-gta-dark to-gta-graphite">
            <h2 className="text-2xl font-bebas text-white mb-4">Des questions?</h2>
            <p className="text-gta-light mb-6">
    Nous nous engageons à la transparence. Contactez notre équipe pour toute question concernant la confidentialité.
            </p>
            <a 
              href={siteConfig.social.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gta-gold inline-block"
            >
              Contacter l’équipe confidentialité
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
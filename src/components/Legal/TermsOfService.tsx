import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileText, AlertTriangle, Shield, Users, DollarSign, Ban, Video } from 'lucide-react'
import siteConfig from '../../config/site.config.json'

export const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
  { id: 'acceptance', title: '1. Acceptation des conditions', icon: <FileText /> },
  { id: 'eligibility', title: '2. Éligibilité & Accès', icon: <Users /> },
  { id: 'conduct', title: '3. Code de conduite', icon: <Shield /> },
  { id: 'accounts', title: '4. Politiques de compte', icon: <Users /> },
  { id: 'violations', title: '5. Violations & Sanctions', icon: <Ban /> },
  { id: 'donations', title: '6. Dons & Avantages', icon: <DollarSign /> },
  { id: 'content', title: '7. Création de contenu', icon: <Video /> },
  { id: 'liability', title: '8. Limitation de responsabilité', icon: <AlertTriangle /> }
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
            Conditions d'utilisation
          </h1>
          <p className="text-xl text-gta-light">
            Dernière mise à jour : {new Date(siteConfig.legal.lastUpdated).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Table of Contents */}
        <div className="card-gta mb-12">
          <h2 className="text-2xl font-bebas text-gta-gold mb-4">Table des matières</h2>
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
          <section id="acceptance" className="card-gta">
            <h2 className="text-3xl font-bebas text-white mb-4">1. Acceptation des conditions</h2>
            <div className="space-y-4 text-gta-light">
              <p>
                En vous connectant à notre serveur FiveM, vous acceptez d’être lié par ces Conditions d’utilisation. 
                Si vous n’acceptez pas ces conditions, vous ne pouvez pas accéder ou utiliser notre serveur.
              </p>
              <p>
                Ces conditions s’appliquent à tous les joueurs, membres du staff et visiteurs de notre communauté roleplay. 
                Nous nous réservons le droit de mettre à jour ces conditions à tout moment sans préavis.
              </p>
            </div>
          </section>

          <section id="eligibility" className="card-gta">
            <h2 className="text-3xl font-bebas text-white mb-4">2. Éligibilité & Accès</h2>
            <div className="space-y-4 text-gta-light">
              <h3 className="text-xl font-bebas text-gta-gold">Exigences d’âge</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Vous devez avoir au moins {siteConfig.legal.minAge} ans pour jouer sur notre serveur</li>
                <li>Les joueurs de moins de 18 ans nécessitent le consentement parental</li>
                <li>Une vérification de l’âge peut être requise pour les candidatures staff</li>
              </ul>

              <h3 className="text-xl font-bebas text-gta-gold mt-6">Recrutement Staff</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Tous les joueurs peuvenbt passer notre candidature staff</li>
                <li>Les candidatures sont examinées sous 48 à 72 heures</li>
                <li>Les informations fausses entraîneront un refus immédiat</li>
                <li>Le statut staff n’est pas transférable</li>
              </ul>
            </div>
          </section>

          <section id="conduct" className="card-gta">
            <h2 className="text-3xl font-bebas text-white mb-4">3. Code de conduite</h2>
            <div className="space-y-4 text-gta-light">
              <h3 className="text-xl font-bebas text-gta-gold">Comportements interdits</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Harcèlement, discrimination ou discours de haine</li>
                <li>Exploitation, triche ou utilisation de modifications non autorisées</li>
                <li>Échange réel d’objets du jeu contre de l’argent</li>
                <li>Usurpation d’identité de membres du staff</li>
                <li>Partage d’informations personnelles d’autres joueurs</li>
                <li>Stream sniping ou métajeu</li>
              </ul>

<h3 className="text-xl font-bebas text-gta-gold mt-6">Standards de Roleplay</h3>
<ul className="list-disc list-inside space-y-2 ml-4">
  <li>Maintenir l’immersion du personnage en tout temps</li>
  <li>Ne pas sortir du personnage dans les zones publiques</li>
  <li>Respecter les scénarios de roleplay en cours</li>
  <li>Respecter la règle New Life Rule (NLR) après la mort</li>
  <li>Se conformer aux directives Fear RP</li>
                </ul>
              </div>
            </section>

<section id="accounts" className="card-gta">
  <h2 className="text-3xl font-bebas text-white mb-4">4. Politiques de compte</h2>
  <div className="space-y-4 text-gta-light">
    <p>
      Chaque joueur n’est autorisé à posséder qu’un seul compte. Le partage de compte est strictement interdit 
      et entraînera la suspension permanente de tous les comptes concernés.
    </p>
    <h3 className="text-xl font-bebas text-gta-gold">Sécurité du compte</h3>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Vous êtes responsable de la sécurité de votre compte</li>
      <li>Utilisez des mots de passe forts et uniques</li>
      <li>Activez l’authentification à deux facteurs sur Discord</li>
      <li>Signalez immédiatement tout compte compromis</li>
                </ul>
              </div>
            </section>

<section id="violations" className="card-gta">
  <h2 className="text-3xl font-bebas text-white mb-4">5. Violations & Sanctions</h2>
  <div className="space-y-4 text-gta-light">
    <h3 className="text-xl font-bebas text-gta-gold">Système d’avertissement</h3>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>1re infraction : Avertissement verbal</li>
      <li>2e infraction : Bannissement de 24 heures</li>
      <li>3e infraction : Bannissement de 7 jours</li>
      <li>4e infraction : Bannissement de 30 jours</li>
      <li>5e infraction : Bannissement permanent</li>
    </ul>

    <div className="bg-gta-dark/50 p-4 rounded border-l-4 border-gta-gold mt-6">
      <p className="text-sm">
        <strong>Note :</strong> Les violations graves peuvent entraîner un bannissement permanent immédiat 
        sans avertissement préalable.
                  </p>
                </div>
              </div>
            </section>

<section id="donations" className="card-gta">
  <h2 className="text-3xl font-bebas text-white mb-4">6. Dons & Avantages</h2>
  <div className="space-y-4 text-gta-light">
    <p>
      Les dons contribuent à couvrir les coûts et le développement du serveur. Tous les dons sont volontaires 
      et non remboursables.
    </p>
    <h3 className="text-xl font-bebas text-gta-gold">Avantages des dons</h3>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Véhicules et tenues exclusifs</li>
      <li>Emplacements supplémentaires pour les personnages</li>
      <li>Rôle Discord spécial et canaux dédiés</li>
    </ul>
    <p className="mt-4">
      Les avantages liés aux dons ne confèrent pas d’immunité face aux règles ni de traitement préférentiel en roleplay.
                </p>
              </div>
            </section>

<section id="content" className="card-gta">
  <h2 className="text-3xl font-bebas text-white mb-4">7. Création de contenu</h2>
  <div className="space-y-4 text-gta-light">
    <p>
      Nous encourageons la création de contenu et le streaming. En jouant sur notre serveur, vous nous autorisez 
      à utiliser votre contenu à des fins promotionnelles.
    </p>
    <h3 className="text-xl font-bebas text-gta-gold">Directives de contenu</h3>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Inclure le nom du serveur dans les titres de stream</li>
      <li>Pas de monétisation du contenu spécifique au serveur sans permission</li>
      <li>Respecter les préférences de confidentialité des autres joueurs</li>
      <li>Masquer les éléments sensibles de l’UI lors du streaming</li>
                </ul>
              </div>
            </section>

<section id="liability" className="card-gta">
  <h2 className="text-3xl font-bebas text-white mb-4">8. Limitation de responsabilité</h2>
  <div className="space-y-4 text-gta-light">
    <p>
      Le serveur est fourni « tel quel » sans aucune garantie. Nous ne sommes pas responsables 
      de toute perte de progression, d’objets virtuels ou de données.
    </p>
    <p>
      Nous nous réservons le droit de :
                </p>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Modifier ou interrompre le serveur à tout moment</li>
      <li>Réinitialiser les données des joueurs pour des raisons techniques ou de gameplay</li>
      <li>Changer les mécaniques de jeu et l’équilibre de l’économie</li>
      <li>Supprimer les joueurs inactifs de la whitelist</li>
                </ul>
              </div>
            </section>
          </div>

{/* Contact */}
<div className="card-gta mt-12 text-center">
  <h2 className="text-2xl font-bebas text-white mb-4">Questions ?</h2>
  <p className="text-gta-light mb-6">
    Si vous avez des questions concernant ces Conditions d’utilisation, veuillez contacter notre équipe admin.
  </p>
  <a 
    href={siteConfig.social.discord}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-gta-gold inline-block"
  >
    Contacter le support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
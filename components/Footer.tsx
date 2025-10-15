import { LINKS } from "@/lib/constants";
import { FaYoutube, FaTwitter, FaInstagram, FaDiscord, FaPatreon } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "YouTube",
      href: LINKS.youtube,
      icon: FaYoutube,
    },
    {
      name: "Twitter",
      href: LINKS.twitter,
      icon: FaTwitter,
    },
    {
      name: "Instagram",
      href: LINKS.instagram,
      icon: FaInstagram,
    },
    {
      name: "Discord",
      href: LINKS.discord,
      icon: FaDiscord,
    },
    {
      name: "Patreon",
      href: LINKS.patreon,
      icon: FaPatreon,
    },
  ];

  return (
    <footer className="bg-charcoal border-t border-fire-orange/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Social Icons */}
          <div className="flex justify-center items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-ash-grey hover:text-fire-orange transition-all hover:scale-110"
              >
                <link.icon className="w-8 h-8" />
              </a>
            ))}
          </div>

          {/* Copyright & BUILDAI Credit */}
          <div className="space-y-2">
            <p className="text-ash-grey">© 2025 Jesse ON FIRE</p>
            <div className="text-fire-orange font-display text-lg uppercase tracking-wider">
              Built by BUILDAI
            </div>
            <p className="text-ash-grey/60 text-sm">The Legendary Dankster Building Algorithm</p>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="font-heading text-lg text-white mb-4 uppercase">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href={LINKS.discord} className="text-ash-grey hover:text-fire-orange transition-colors">
                  Discord Server
                </a>
              </li>
              <li>
                <a href={LINKS.patreon} className="text-ash-grey hover:text-fire-orange transition-colors">
                  Patreon
                </a>
              </li>
              <li>
                <a href="/youtube-members" className="text-ash-grey hover:text-fire-orange transition-colors flex items-center gap-1">
                  YouTube Members
                  <span className="text-xs bg-fire-orange/20 text-fire-orange px-2 py-0.5 rounded-full">New</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex justify-center items-center gap-6 text-sm">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

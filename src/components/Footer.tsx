
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-natural-50 border-t border-natural-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-display font-semibold bg-clip-text text-transparent bg-gradient-to-r from-natural-700 to-natural-500">
                Natural&Pure
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Votre laboratoire de recherche dédié à la santé naturelle et au bien-être fondé sur des preuves scientifiques.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-natural-100 hover:bg-natural-200">
                  <Instagram className="h-4 w-4 text-natural-700" />
                </Button>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-natural-100 hover:bg-natural-200">
                  <Twitter className="h-4 w-4 text-natural-700" />
                </Button>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-natural-100 hover:bg-natural-200">
                  <Facebook className="h-4 w-4 text-natural-700" />
                </Button>
              </a>
              <a href="mailto:contact@naturalpure.com" aria-label="Email">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-natural-100 hover:bg-natural-200">
                  <Mail className="h-4 w-4 text-natural-700" />
                </Button>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-natural-700 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-sm text-muted-foreground hover:text-natural-700 transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-natural-700 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-natural-700 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium mb-4">Catégories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/articles?category=supplements" className="text-sm text-muted-foreground hover:text-natural-700 transition-colors">
                  Compléments Alimentaires
                </Link>
              </li>
              <li>
                <Link to="/articles?category=skincare" className="text-sm text-muted-foreground hover:text-natural-700 transition-colors">
                  Soins de la Peau
                </Link>
              </li>
              <li>
                <Link to="/articles?category=haircare" className="text-sm text-muted-foreground hover:text-natural-700 transition-colors">
                  Santé des Cheveux
                </Link>
              </li>
              <li>
                <Link to="/articles?category=wellness" className="text-sm text-muted-foreground hover:text-natural-700 transition-colors">
                  Bien-être
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Abonnez-vous pour recevoir nos derniers articles et actualités.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-white border-natural-200"
              />
              <Button className="w-full bg-gradient-to-r from-natural-500 to-natural-600 hover:from-natural-600 hover:to-natural-700">
                S'abonner
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-natural-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Natural&Pure. Tous droits réservés.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-xs text-muted-foreground hover:text-natural-700 transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="text-xs text-muted-foreground hover:text-natural-700 transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

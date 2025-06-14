import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import ThemeSwitcher from "./ThemeSwitcher";

export default function MainNav() {
  return (
    <nav className="w-full bg-white dark:bg-background shadow sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        {/* Logo à gauche */}
        <Link to="/" className="mr-6 flex items-center group" aria-label="Accueil">
          <img
            src="/lovable-uploads/4306d701-cc79-4903-8214-b171651fed22.png"
            alt="Cuisine Astuce Logo"
            className="h-12 w-auto transition-transform duration-200 group-hover:scale-105"
            style={{ maxHeight: 48 }}
          />
        </Link>
        {/* Barre de menu */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* Accueil */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className="px-4 py-2 text-sm font-semibold hover:text-primary">Accueil</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            {/* Recettes */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Recettes</NavigationMenuTrigger>
              <NavigationMenuContent className="md:left-auto md:right-auto">
                <div className="min-w-[220px] p-2">
                  <div className="font-semibold text-xs text-gray-400 px-2 mb-2">Par pays/cuisine :</div>
                  <ul>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/recettes/france" className="block px-3 py-1 hover:bg-accent rounded">France</Link>
                      </NavigationMenuLink>
                    </li>
                    {/* Maroc supprimé */}
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/recettes/italie" className="block px-3 py-1 hover:bg-accent rounded">Italie</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/recettes/inde" className="block px-3 py-1 hover:bg-accent rounded">Inde</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/recettes/asie" className="block px-3 py-1 hover:bg-accent rounded">Asie</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                  {/* Sous-menus supprimés */}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            {/* Astuces de Cuisine */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Astuces de Cuisine</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="min-w-[200px] p-2">
                  <ul>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/astuces/nettoyage" className="block px-3 py-1 hover:bg-accent rounded">Nettoyage & hygiène</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/astuces/conservation" className="block px-3 py-1 hover:bg-accent rounded">Conservation des aliments</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/astuces/gagner-temps" className="block px-3 py-1 hover:bg-accent rounded">Gagner du temps</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/astuces/economie" className="block px-3 py-1 hover:bg-accent rounded">Économie au quotidien</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            {/* Guides Pratiques */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/guides" className="px-4 py-2 text-sm font-semibold hover:text-primary">Guides Pratiques</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Ingrédients 101 */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/ingredients" className="px-4 py-2 text-sm font-semibold hover:text-primary">Ingrédients 101</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Plans de Repas */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/plans-repas" className="px-4 py-2 text-sm font-semibold hover:text-primary">Plans de Repas</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* À propos */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/a-propos" className="px-4 py-2 text-sm font-semibold hover:text-primary">À propos</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/contact" className="px-4 py-2 text-sm font-semibold hover:text-primary">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Theme toggle at the far right */}
        <div className="ml-auto flex items-center">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}

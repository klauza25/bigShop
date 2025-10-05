import React from 'react';
import { Link } from 'react-router-dom';

// Composants réutilisables (à créer ultérieurement)
// import BarreRecherche from '../composants/acheteur/BarreRecherche';
// import CarteProduit from '../composants/interface/CarteProduit';

const Accueil = () => {
  // Données temporaires pour le MVP
  const categories = [
    'FEMME', 'HOMME', 'ENFANT', 'BEAUTÉ',
    'MAISON', 'ALIMENTATION', 'NUMÉRIQUE',
    'ARTISANAT', 'ACCESSOIRES'
  ];

  const produitsEnAvant = [
    { id: 1, nom: 'Robe d’été', prix: 12000, boutique: 'Mode Brazza', image: 'https://via.placeholder.com/150' },
    { id: 2, nom: 'Huile de coco bio', prix: 3500, boutique: 'Beauté Naturelle', image: 'https://via.placeholder.com/150' },
    { id: 3, nom: 'Écouteurs Bluetooth', prix: 25000, boutique: 'Tech Congo', image: 'https://via.placeholder.com/150' },
    { id: 4, nom: 'Panier en raphia', prix: 8000, boutique: 'Artisanat Lokota', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="min-h-screen bg-white font-body">
      {/* En-tête */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-primary font-heading text-2xl font-bold">
            BIG SHOP
          </Link>

          {/* Barre de recherche */}
          <div className="flex-1 mx-4">
            <input
              type="text"
              placeholder="Rechercher un produit, une boutique..."
              className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Icônes (panier, profil) */}
          <div className="flex space-x-4">
            <button className="text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-5m6-5V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2" />
              </svg>
            </button>
            <button className="text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation par catégories */}
      <nav className="bg-secondary py-3 overflow-x-auto">
        <div className="container mx-auto px-4 flex space-x-3">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={`/categorie/${cat.toLowerCase()}`}
              className="bg-primary text-white whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium hover:bg-yellow-600 transition"
            >
              {cat}
            </Link>
          ))}
        </div>
      </nav>

      {/* Section : Produits en avant */}
      <main className="container mx-auto px-4 py-6">
        <h2 className="font-heading text-xl font-bold text-secondary mb-4">À la une</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {produitsEnAvant.map((produit) => (
            <Link
              key={produit.id}
              to={`/produit/${produit.id}`}
              className="bg-white border rounded-lg p-3 shadow-sm hover:shadow-md transition"
            >
              <img
                src={produit.image}
                alt={produit.nom}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h3 className="font-medium text-sm text-gray-800 truncate">{produit.nom}</h3>
              <p className="text-primary font-bold text-sm">{produit.prix.toLocaleString()} FCFA</p>
              <p className="text-xs text-gray-500 mt-1">{produit.boutique}</p>
            </Link>
          ))}
        </div>

        {/* Section : Promotions / Nouveautés (optionnel pour MVP) */}
        {/* <div className="mt-8">
          <h2 className="font-heading text-xl font-bold text-secondary mb-4">Nouveautés</h2>
          ...
        </div> */}
      </main>

      {/* Pied de page (simple pour MVP) */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600 mt-8">
        <p>© 2025 BIG SHOP – La marketplace fiable du Congo</p>
        <p className="mt-1">Sécurisé • Local • Simple</p>
      </footer>
    </div>
  );
};

export default Accueil;
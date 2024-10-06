import React from 'react';

export default function PokemonCard({ pokemon, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
      <div className="bg-red-500 rounded-lg shadow-xl max-w-md w-full overflow-hidden">
        <div className="relative p-6 bg-white m-2 rounded-lg">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col items-center">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-32 h-32 object-contain bg-gray-100 rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 capitalize mb-2">{pokemon.name}</h2>
            <p className="text-gray-600 mb-4">#{pokemon.id.toString().padStart(3, '0')}</p>
            <div className="flex gap-2 mb-4">
              {pokemon.types.map((type) => (
                <span
                  key={type.type.name}
                  className={`px-3 py-1 text-sm font-semibold rounded-full ${getTypeColor(type.type.name)}`}
                >
                  {translateType(type.type.name)}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Estadísticas</h3>
              {pokemon.stats.map((stat) => (
                <p key={stat.stat.name} className="text-sm text-gray-600">
                  <span className="capitalize">{translateStat(stat.stat.name)}:</span> {stat.base_stat}
                </p>
              ))}
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Habilidades</h3>
              {pokemon.abilities.map((ability) => (
                <p key={ability.ability.name} className="text-sm text-gray-600 capitalize">
                  {ability.ability.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getTypeColor(type) {
  const colors = {
    normal: 'bg-gray-400 text-white',
    fire: 'bg-red-500 text-white',
    water: 'bg-blue-500 text-white',
    electric: 'bg-yellow-400 text-gray-800',
    grass: 'bg-green-500 text-white',
    ice: 'bg-blue-200 text-gray-800',
    fighting: 'bg-red-600 text-white',
    poison: 'bg-purple-500 text-white',
    ground: 'bg-yellow-600 text-white',
    flying: 'bg-indigo-400 text-white',
    psychic: 'bg-pink-500 text-white',
    bug: 'bg-green-400 text-gray-800',
    rock: 'bg-yellow-700 text-white',
    ghost: 'bg-purple-600 text-white',
    dragon: 'bg-indigo-600 text-white',
    dark: 'bg-gray-800 text-white',
    steel: 'bg-gray-400 text-gray-800',
    fairy: 'bg-pink-300 text-gray-800',
  };
  return colors[type] || 'bg-gray-400 text-white';
}

function translateType(type) {
  const translations = {
    normal: 'Normal',
    fire: 'Fuego',
    water: 'Agua',
    electric: 'Eléctrico',
    grass: 'Planta',
    ice: 'Hielo',
    fighting: 'Lucha',
    poison: 'Veneno',
    ground: 'Tierra',
    flying: 'Volador',
    psychic: 'Psíquico',
    bug: 'Bicho',
    rock: 'Roca',
    ghost: 'Fantasma',
    dragon: 'Dragón',
    dark: 'Siniestro',
    steel: 'Acero',
    fairy: 'Hada',
  };
  return translations[type] || type;
}

function translateStat(stat) {
  const translations = {
    hp: 'PS',
    attack: 'Ataque',
    defense: 'Defensa',
    'special-attack': 'Ataque Especial',
    'special-defense': 'Defensa Especial',
    speed: 'Velocidad',
  };
  return translations[stat] || stat;
}
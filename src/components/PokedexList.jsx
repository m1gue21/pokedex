import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';

export default function PokedexList() {
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const pokemonPerPage = 20;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=200');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );
        setPokemon(pokemonDetails);
        setFilteredPokemon(pokemonDetails);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los Pokémon: ' + err.message);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    const results = pokemon.filter(poke =>
      poke.name.toLowerCase().includes(search.toLowerCase()) ||
      poke.id.toString().includes(search)
    );
    setFilteredPokemon(results);
    setCurrentPage(1);
  }, [search, pokemon]);

  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = filteredPokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <div className="text-center text-2xl font-bold text-gray-600">Cargando Pokémon...</div>;
  if (error) return <div className="text-center text-2xl font-bold text-red-600">{error}</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Buscar Pokémon por nombre o ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-full border-2 border-red-500 focus:outline-none focus:border-red-600"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentPokemon.map((poke) => (
          <div 
            key={poke.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
            style={{ border: `4px solid ${getTypeBorderColor(poke.types[0].type.name)}` }}
            onClick={() => setSelectedPokemon(poke)}
          >
            <div className="p-4">
              <img 
                src={poke.sprites.front_default} 
                alt={poke.name} 
                className="w-full h-48 object-contain"
              />
              <h2 className="text-xl font-semibold text-gray-800 capitalize">{poke.name}</h2>
              <p className="text-gray-600">#{poke.id.toString().padStart(3, '0')}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {poke.types.map((type) => (
                  <span 
                    key={type.type.name} 
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(type.type.name)}`}
                  >
                    {translateType(type.type.name)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(filteredPokemon.length / pokemonPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      {selectedPokemon && (
        <PokemonCard pokemon={selectedPokemon} onClose={() => setSelectedPokemon(null)} />
      )}
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

function getTypeBorderColor(type) {
  const colors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
  };
  return colors[type] || '#A8A878';
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
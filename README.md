# 🚀 Pokédex - Astro & React Project

Este proyecto es una Pokédex construida utilizando **Astro** y **React**, que consume la **PokeAPI** para obtener y mostrar información de los Pokémon. La aplicación permite buscar, filtrar y visualizar detalles de los Pokémon, ofreciendo una experiencia interactiva basada en cliente.

## 🎮 Características

- **Buscar Pokémon**: Busca Pokémon por su nombre o ID.
- **Filtrado**: Los resultados se filtran dinámicamente a medida que escribes.
- **Paginación**: Navega por una lista de Pokémon de 20 en 20.
- **Ver detalles**: Muestra detalles específicos de cada Pokémon, incluyendo sus estadísticas, tipos y habilidades.

## 📂 Estructura del Proyecto
```
/
├── public/
│   └── favicon.svg          # Icono del proyecto
├── src/
│   ├── components/
│   │   ├── PokedexList.jsx   # Componente principal que gestiona la lista de Pokémon
│   │   └── PokemonCard.jsx   # Componente que muestra detalles de un Pokémon seleccionado
│   └── pages/
│       └── index.astro       # Página principal que carga la Pokédex
└── package.json              # Archivo de configuración de dependencias
```

### 📁 Descripción de Carpetas

- **public/**: Archivos estáticos como imágenes o íconos.
- **src/pages/**: Contiene las páginas principales del proyecto.
- **src/components/**: Aquí se encuentran los componentes reutilizables de React, como la lista de Pokémon (PokedexList) y la tarjeta con los detalles del Pokémon (PokemonCard).

## 🚀 Instalación y Uso
```
### 1. Clona el repositorio:


git clone https://github.com/m1gue21/pokedex.git
cd pokedex


### 2. Instala las dependencias:

sh
npm install


### 3. Inicia el servidor de desarrollo:

sh
npm run dev


Esto iniciará el servidor en localhost:4321.

### 4. Compila para producción:

sh
npm run build


Este comando generará los archivos de producción en la carpeta dist/.

### 5. Previsualiza la compilación:

sh
npm run preview


Este comando te permitirá previsualizar la aplicación compilada antes de desplegarla.
```
## 📦 Dependencias Principales

- [Astro](https://astro.build/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PokeAPI](https://pokeapi.co/)

## 📚 Documentación

Para aprender más sobre las tecnologías utilizadas en este proyecto, visita:

- [Documentación de Astro](https://docs.astro.build)
- [Documentación de React](https://reactjs.org/docs/getting-started.html)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [PokeAPI Docs](https://pokeapi.co/docs/v2)

## 👥 Contribuciones

Si quieres contribuir al proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama con tus cambios: git checkout -b feature/nueva-funcionalidad.
3. Haz commit de tus cambios: git commit -m 'Agrega nueva funcionalidad'.
4. Envía un push a la rama: git push origin feature/nueva-funcionalidad.
5. Abre un **Pull Request**.

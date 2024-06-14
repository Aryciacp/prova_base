import Link from 'next/link';
import recipesData from '../receitas.json';
import '../global.css';

const RecipesPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Lista de Receitas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipesData.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <Link href={`/recipes/${recipe.id}`}>
              <a>
                <img src={recipe.image} alt={recipe.name} className="recipe-image" />
              </a>
            </Link>
            <div className="p-4">
              <Link href={`/recipes/${recipe.id}`}>
                <a className="block recipe-name">{recipe.name}</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;

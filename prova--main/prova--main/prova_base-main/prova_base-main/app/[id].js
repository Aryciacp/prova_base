import recipesData from '../../receitas.json';

const RecipeDetailsPage = ({ recipe }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-lg mx-auto">
        <img src={recipe.image} alt={recipe.name} className="w-full h-auto mb-4 rounded-lg" />
        <h1 className="text-3xl font-bold mb-2">{recipe.name}</h1>
        <h2 className="text-xl font-semibold mb-2">Ingredientes:</h2>
        <ul className="list-disc pl-8 mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mb-2">Instruções:</h2>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = recipesData.map((recipe) => ({
    params: { id: String(recipe.id) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const recipe = recipesData.find((recipe) => recipe.id === parseInt(params.id));

  return {
    props: {
      recipe,
    },
  };
}

export default RecipeDetailsPage;

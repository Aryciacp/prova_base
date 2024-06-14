'use client';

import React, {createContext, useState} from "react";

export type Recipe = {
    id:number;
    name:string;
    ingredients:[];
    instructions:[];
    image:string;
}

type RecipeContextType = {
    Recipes: Recipe[];
    addRecipe: (id:number,name:string,ingredients:[],instructions:[],image:string)=>void;
};

export const RecipeContext = createContext({} as RecipeContextType);

export const RecipeContextProvider = ( {children}: {children: React.ReactNode;}) => {
    const [Recipes, setRecipes] = useState<Recipe[]>([])

    const addRecipe = (id:number,name:string,ingredients:[],instructions:[],image:string)=>{
        let newRecipe = {
            id:id,
            name:name,
            ingredients:ingredients,
            instructions:instructions,
            image:image,
        }
        setRecipes([...Recipes,newRecipe]);
        const posts = fetch('@/recipes.json').then((res) => res.json())
    //const posts = require("@/recipes.json");
    console.log(posts);
    }


    
    return (
        <RecipeContext.Provider value={{Recipes, addRecipe}}>
            {children}
        </RecipeContext.Provider>
    );
};
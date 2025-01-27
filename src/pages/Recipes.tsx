import React from 'react';
import { motion } from 'framer-motion';
import { Recipe } from '../types';

const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Boab Berry Smoothie',
    description: 'A refreshing smoothie packed with antioxidants and natural energy.',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&q=80',
    ingredients: [
      '1 bottle Dopiro Classic',
      '1 cup mixed berries',
      '1 banana',
      'Greek yogurt',
      'Honey to taste'
    ],
    instructions: [
      'Blend all ingredients until smooth',
      'Add ice if desired',
      'Garnish with fresh berries'
    ],
    author: 'Chef Maria Santos',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: '2',
    title: 'Tropical Boab Punch',
    description: 'Perfect for summer parties and gatherings.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80',
    ingredients: [
      '2 bottles Dopiro Mango',
      'Pineapple juice',
      'Coconut water',
      'Fresh mint leaves',
      'Lime slices'
    ],
    instructions: [
      'Mix Dopiro with juices in a punch bowl',
      'Add ice and garnish with mint and lime',
      'Serve chilled'
    ],
    author: 'Mixologist John Doe',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  }
];

export const Recipes = () => {
  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-24 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Dopiro Recipes
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {recipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {recipe.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {recipe.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      Ingredients
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                      {recipe.ingredients.map((ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      Instructions
                    </h3>
                    <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400">
                      {recipe.instructions.map((instruction, i) => (
                        <li key={i}>{instruction}</li>
                      ))}
                    </ol>
                  </div>
                  
                  <div className="flex items-center mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <img
                      src={recipe.authorImage}
                      alt={recipe.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {recipe.author}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Recipe Creator
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};
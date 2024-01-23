import React from 'react';
import MealItem from './MealItem';

interface Meal {
    // id: number;
    title: string;
    slug: string;
    image: string;
    summary: string;
    instructions: string;
    creator: string;
    creator_email: string;
}

const MealsGrid = ({meals}: {meals: Meal[]}) => {

    return (
        <div className='grid grid-cols-4 gap-4 relative p-10 min-h-[calc(100vh-40px)]'>
            {meals?.map((meal: any) => (
                <div key={meal.id} className='relative'>
                    <MealItem {...meal} />
                </div>
            ))}
        </div>
    );
};

export default MealsGrid;
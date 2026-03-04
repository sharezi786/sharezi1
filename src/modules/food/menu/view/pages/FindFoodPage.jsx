import React, { useEffect } from 'react';
import useMenuController from '../../controller/useMenuController';
import FoodCard from '../components/FoodCard';

const FindFoodPage = () => {
  const { items, loading, error, fetchItems } = useMenuController();

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const handleAddToCart = (item) => {
    // TODO: Integrate with cart controller to add item
    console.log('Add to cart', item);
  };

  if (loading) return <div className="p-4">Loading menu...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Find Food</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <FoodCard key={item.id} item={item} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default FindFoodPage;

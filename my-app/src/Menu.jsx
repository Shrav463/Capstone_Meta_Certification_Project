import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const { categoryName } = useParams();

  const allMenuItems = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Hummus with Pita', price: '8.99', description: 'Creamy chickpea dip served with warm pita bread.', image: 'hummus-pita.jpg' },
        { name: 'Spicy Feta Dip', price: '9.50', description: 'Whipped feta with roasted red peppers and a kick.', image: 'spicy-feta.jpg' },
        { name: 'Falafel Bites', price: '7.75', description: 'Crispy fried chickpea patties with tahini sauce.', image: 'falafel.jpg' },
      ]
    },
    {
      category: 'Main Courses',
      items: [
        { name: 'Chicken Shawarma Plate', price: '18.99', description: 'Marinated chicken, grilled and served with rice, salad, and garlic sauce.', image: 'chicken-shawarma.webp' },
        { name: 'Lamb Kofta Skewers', price: '21.50', description: 'Ground lamb skewers, seasoned and grilled to perfection, served with couscous.', image: 'lamb-kofta.avif' },
        { name: 'Vegetable Moussaka', price: '16.75', description: 'Layers of eggplant, potatoes, and rich tomato sauce, baked with a creamy béchamel topping.', image: 'moussaka.jpg' },
        { name: 'Grilled Salmon', price: '22.00', description: 'Fresh salmon fillet, grilled with herbs and lemon, served with seasonal vegetables.', image: 'grilled-salmon.jpg' },
      ]
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Baklava', price: '6.50', description: 'Traditional sweet pastry with layers of filo, nuts, and honey syrup.', image: 'baklava.jpg' },
        { name: 'Greek Yogurt with Honey', price: '5.00', description: 'Creamy Greek yogurt drizzled with local honey and walnuts.', image: 'greek-yogurt.jpg' },
      ]
    },
    {
      category: 'Drinks',
      items: [
        { name: 'Fresh Lemonade', price: '4.00', description: 'Homemade lemonade, perfectly tart and sweet.', image: 'lemonade.jpg' },
        { name: 'Mint Iced Tea', price: '3.50', description: 'Refreshing iced tea with fresh mint leaves.', image: 'iced-tea.jpg' },
        { name: 'Sparkling Water', price: '3.00', description: 'Bottled sparkling water.', image: 'sparkling-water.webp' },
      ]
    },
  ];

  const filteredMenuItems = categoryName
    ? allMenuItems.filter(cat => cat.category.toLowerCase().replace(/\s/g, '-') === categoryName)
    : allMenuItems;

  const pageTitle = categoryName
    ? `${filteredMenuItems[0]?.category || 'Menu'} Items`
    : 'Our Full Menu';

  const pageDescription = categoryName
    ? `Explore our delicious ${filteredMenuItems[0]?.category || 'menu'} offerings.`
    : 'Explore the diverse and delicious offerings at Little Lemon.';

  return (
    <main className="menu-page">
      <div className="menu-container">
        <div className="menu-header">
          <div>
            <h1>{pageTitle}</h1>
            <p>{pageDescription}</p>
          </div>
        </div>

        {filteredMenuItems.length > 0 ? (
          filteredMenuItems.map(category => (
            <section key={category.category} className="menu-category-section">
              <h2>{category.category}</h2>
              <div className="menu-items-grid">
                {category.items.map(item => (
                  <article key={item.name} className="menu-item-card">
                    <div className="item-image-container">
                      <img src={item.image} alt={item.name} className="item-image" />
                    </div>
                    <div className="item-info">
                      <div className="item-details">
                        <h3 className="item-name">{item.name}</h3>
                        <p className="item-price">${item.price}</p>
                      </div>
                      <p className="item-description">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))
        ) : (
          <p>No menu items found for this category.</p>
        )}

        <div className="menu-note">
          <p>Please inform your server of any allergies or dietary restrictions.</p>
        </div>

        {categoryName && (
          <div className="back-to-menu-cta">
            <NavLink to="/menu" className="menu-link-button">← Back to Full Menu</NavLink>
          </div>
        )}
      </div>
    </main>
  );
}

export default Menu;
import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [filter, setFilter] = useState('*');
  const [portfolioItems, setPortfolioItems] = useState([
    { id: 1, category: 'web', title: 'Web', price: '$99', img: 'images/1.web.jpg', url: 'https://github.com/Asem04/web' },
    { id: 2, category: 'django', title: 'Funny Site', price: '$99', img: 'images/2.web.jpg', url: 'https://github.com/Asem04/task9' },
    { id: 3, category: 'sql', title: 'Portfolio', price: '$99', img: 'images/3.web.jpg', url: 'https://github.com/Asem04/demo' },
    { id: 4, category: 'react', title: 'Game', price: '$2.41', img: 'images/4.web.jpg', url: 'https://github.com/Asem04/react_project' },
  ]);

  const [newItem, setNewItem] = useState({ category: '', title: '', price: '', img: '', url: '' });

  const handleFilterClick = (category, e) => {
    e.preventDefault();
    setFilter(category);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAddItem = () => {
    const id = portfolioItems.length + 1;
    const newItemWithId = { ...newItem, id };
    setPortfolioItems([...portfolioItems, newItemWithId]);
    setNewItem({ category: '', title: '', price: '', img: '', url: '' }); // Очистить форму после добавления
  };

  const filteredItems = filter === '*' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

  return (
    <div>
      <main id="main">
        <div className="site-section site-portfolio">
          <div className="container">
            <div className="row mb-5 align-items-center">
              <div className="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
                <h2>Welcom!</h2>
                <p className="mb-0">This is my portfolio</p>
              </div>
              <div className="col-md-12 col-lg-6 text-left text-lg-right" data-aos="fade-up" data-aos-delay="100">
                <div id="filters" className="filters">
                <a href="#" className={filter === '*' ? 'active' : ''} onClick={(e) => handleFilterClick('*', e)}>All</a>
                <a href="#" className={filter === 'web' ? 'active' : ''} onClick={(e) => handleFilterClick('web', e)}>Web</a>
                <a href="#" className={filter === 'django' ? 'active' : ''} onClick={(e) => handleFilterClick('django', e)}>sgl</a>
                <a href="#" className={filter === 'design' ? 'active' : ''} onClick={(e) => handleFilterClick('design', e)}>Design</a> </div>
              </div>
            </div>
            <div id="portfolio-grid" className="row" data-aos="fade-up" data-aos-delay="200">
              {filteredItems.map(item => (
                <div key={item.id} className={`item ${item.category} col-sm-6 col-md-4 col-lg-4 mb-4`}>
                  <div className="card">
                    <a href={item.url} className="item-wrap fancybox" target="_blank" rel="noopener noreferrer">
                      <img className="card-img-top" src={item.img} alt={item.title} />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.price}</p>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      
      {/* <div className="modal fade" id="addItemModal" tabIndex="-1" role="dialog" aria-labelledby="addItemModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addItemModalLabel">Add New Item</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <input type="text" className="form-control" id="category" name="category" value={newItem.category} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input type="text" className="form-control" id="title" name="title" value={newItem.title} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input type="text" className="form-control" id="price" name="price" value={newItem.price} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="img">Image URL</label>
                  <input type="text" className="form-control" id="img" name="img" value={newItem.img} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="url">URL</label>
                  <input type="text" className="form-control" id="url" name="url" value={newItem.url}onChange={handleChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleAddItem}>Add Item</button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Кнопка для открытия модального окна */}
      {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addItemModal">
        Add New Item
      </button> */}
    </div>
  );
}

export default Home;


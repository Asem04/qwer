import React, { useState } from 'react';
import './Works.css';

function Works() {
  const [filter, setFilter] = useState('*');
  const [works, setWorks] = useState([
    { id: 1, category: 'web', title: 'Web', price: '$99', img: 'images/1.web.jpg', url: 'https://github.com/Asem04/web' },
    { id: 2, category: 'django', title: 'Funny Site', price: '$99', img: 'images/2.web.jpg', url: 'https://github.com/Asem04/task9' },
    { id: 3, category: 'sql', title: 'Portfolio', price: '$99', img: 'images/3.web.jpg', url: 'https://github.com/Asem04/demo' },
    { id: 4, category: 'react', title: 'Game', price: '$2.41', img: 'images/4.web.jpg', url: 'https://github.com/Asem04/react_project' },
  ]);

  const [newWork, setNewWork] = useState({ category: '', title: '', price: '', img: '', url: '' });

  const handleFilterClick = (category, e) => {
    e.preventDefault();
    setFilter(category);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWork(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAddWork = async () => {
    try {
      const id = works.length + 1;
      const newWorkWithId = { ...newWork, id };
      
      console.log("New work added:", newWorkWithId);
      setWorks([...works, newWorkWithId]);
      setNewWork({ category: '', title: '', price: '', img: '', url: '' });
    } catch (error) {
      console.error('Error adding work:', error);
      
    }
  };

  const filteredWorks = filter === '*' ? works : works.filter(work => work.category === filter);

  return (
    <div className="works-container">
      <div className="container">
        <h2>My Works</h2>
        <div className="row">
          <div className="col-md-12 text-center">
            <div id="filters" className="filters">
              <a href="#" className={filter === '*' ? 'active' : ''} onClick={(e) => handleFilterClick('*', e)}>All</a>
              <a href="#" className={filter === 'web' ? 'active' : ''} onClick={(e) => handleFilterClick('web', e)}>Web</a>
              <a href="#" className={filter === 'django' ? 'active' : ''} onClick={(e) => handleFilterClick('django', e)}>sgl</a>
              <a href="#" className={filter === 'design' ? 'active' : ''} onClick={(e) => handleFilterClick('design', e)}>Design</a>
            </div>
          </div>
        </div>
        <div className="row">
          {filteredWorks.map(work => (
            <div key={work.id} className={`col-sm-6 col-md-4 col-lg-4 mb-4`}>
              <div className="work-item">
                <div className="card">
                  <a href={work.url} className="item-wrap fancybox" target="_blank" rel="noopener noreferrer">
                    <img className="card-img-top" src={work.img} alt={work.title} />
                    <div className="card-body">
                      <h5 className="card-title">{work.title}</h5>
                      <p className="card-text">{work.price}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Work</h5>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" className="form-control" value={newWork.category} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" className="form-control" value={newWork.title} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input type="text" id="price" name="price" className="form-control" value={newWork.price} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="img">Image URL:</label>
                <input type="text" id="img" name="img" className="form-control" value={newWork.img} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="url">URL:</label>
                <input type="text" id="url" name="url" className="form-control" value={newWork.url} onChange={handleChange} />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setNewWork({ category: '', title: '', price: '', img: '', url: '' })}>Cancel</button>
              <button className="btn btn-primary" onClick={handleAddWork}>Add Work</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;

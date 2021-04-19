import React from 'react';
import './homepage.styles.scss'

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">hats</h1>
            <div className="subtitle">shop now</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">jackets</h1>
            <div className="subtitle">shop now</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">sneakers</h1>
            <div className="subtitle">shop now</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">womens</h1>
            <div className="subtitle">shop now</div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">mens</h1>
            <div className="subtitle">shop now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

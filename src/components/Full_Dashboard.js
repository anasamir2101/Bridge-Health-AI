import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Search from './Search';
import data from './data/data';

const Full_Dashboard = () => {
  const [displayCount, setDisplayCount] = useState(5);

  const handleViewMore = () => {
    setDisplayCount(displayCount + 1);
  };

  const isViewMoreDisabled = data.length <= displayCount;

  return (
    <>
      <div>
        <Search />
        <Sidebar />
      </div>
      <div className='dashboard'>
        <h1 className='dashboard-title'>Roaster Patients</h1>

        {data.slice(0, displayCount).map((person) => {
          const { id, name, appointment, image, risk } = person;
          const riskClass =
            risk === 'Low'
              ? 'low-risk'
              : risk === 'Medium'
              ? 'medium-risk'
              : 'high-risk';
          return (
            <Link
              key={id}
              to={{
                pathname: `/full-dashboard/${id}`,
              }}
              className='person-link'
            >
              <article className='person'>
                <div className='peron-info'>
                  <div>
                    <img src={image} alt='img' />
                  </div>
                  <div className='person-text'>
                    <h1>{name}</h1>
                    <p>{appointment}</p>
                  </div>
                </div>
                <div className='risk'>
                  <h1>
                    Risk Status: <span className={`${riskClass}`}>{risk}</span>
                  </h1>
                </div>
              </article>
            </Link>
          );
        })}

        <button
          onClick={handleViewMore}
          className='view-more-button'
          disabled={isViewMoreDisabled}
        >
          View More
        </button>
      </div>
    </>
  );
};
export default Full_Dashboard;

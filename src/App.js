import React, { useEffect, useState } from 'react';
import './App.css';
import { postsObj } from './Components/postsData/postsData';
import { Degs } from './Components/degs/degs';
import { Header } from './Components/header/header';
import { Footer } from './Components/footer/footer';
import InfiniteScroll from 'react-infinite-scroll-component';
import Group from './images/Group 1.png';
import NewImg from './images/new_badge.png';
import Hr from './images/Rectangle 219.png';
import Banner from './images/promo_banner.png';
import { ScrollCards } from './Components/loader/loader';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [degs, setDegs] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [oldPosts, setOldPosts] = useState([postsObj]);
  const getSearchResults = () => {
    const results = !searchTerm.trim()
      ? oldPosts
      : oldPosts.filter((item) =>
          item.title
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        );
    setOldPosts(results);
    if (searchTerm.trim() == '') {
      setOldPosts(postsObj);
    }
  };

  const fetchMoreData = () => {
    setTimeout(() => {
      setOldPosts(oldPosts.concat(Array.from(postsObj)));
    }, 1000);
  };

  useEffect(() => {
    Degs(setDegs);
  }, []);

  useEffect(() => {
    getSearchResults();
  }, [searchTerm]);

  return (
    <>
      <Header />
      <main>
        <span className='blog'>
          Home {'>'} Blog {'>'}
        </span>
        <span className='blog-mini'>{'<'} Home</span>
        <div className='topWrapperMini'>
          <h1>Stay always tuned with planting trends</h1>
          <span>Tips & Tricks selected specially for you!</span>
          <input
            type='text'
            onChange={handleChange}
            className='searchInp mini-search'
            placeholder='Search'
          />
        </div>
        <div className='topWrapper'>
          <div>
            <h1>Stay always tuned with planting trends</h1>
            <h4>Current temperature is: {Math.ceil(degs)} &#x2103;</h4>
            <input
              type='text'
              onChange={handleChange}
              className='searchInp'
              placeholder='Search'
            />
          </div>
          <img src={Group} alt='group' className='image-left' />
        </div>
        {searchTerm.trim() && oldPosts.length !== 0 ? (
          <span className='block-name'>Posts Found</span>
        ) : null}

        {searchTerm.trim() && !oldPosts.length ? (
          <span className='block-name'>Nothing Found</span>
        ) : null}
        {searchTerm.trim() ? null : (
          <div className='newIcon'>
            <img src={NewImg} alt='new' />
          </div>
        )}
        {oldPosts.slice(0, 1).map((item, i) => {
          return (
            <div className='first-card' key={i}>
              <img src={item.img_url} alt='card-img' />
              <div className='first-card-text-wrapper'>
                <span>{item.time}</span>
                <h1 className='tips'>{item.title}</h1>
                <span>{item.descr}</span>
              </div>
            </div>
          );
        })}
        {!searchTerm.trim() ? (
          <>
            <img src={Hr} className='hr' alt='hr' />
            <span className='block-name'>TOP OF THE DAY</span>
          </>
        ) : null}
        {searchTerm.trim() && oldPosts.length ? (
          <>
            <img src={Hr} className='hr' alt='hr' />
            <span className='block-name'>TOP OF THE DAY</span>
          </>
        ) : null}
        <div className='day-top-wrapper'>
          {oldPosts.slice(0, 2).map((el, i) => {
            return (
              <div className='first-card day-top' key={i}>
                <img src={el.img_url} alt='card-img' />
                <div className='first-card-text-wrapper day-new-text'>
                  <span>{el.time}</span>
                  <h1 className='tips'>{el.title}</h1>
                  <span>{el.descr}</span>
                </div>
              </div>
            );
          })}
        </div>

        {!searchTerm.trim() ? (
          <>
            <img src={Hr} className='hr' alt='hr' />
            <span className='block-name'>INTERESTING</span>
          </>
        ) : null}
        {searchTerm.trim() && oldPosts.length ? (
          <>
            <img src={Hr} className='hr' alt='hr' />
            <span className='block-name'>INTERESTING</span>
          </>
        ) : null}
        <div className='day-top-wrapper'>
          {oldPosts.slice(0, 6).map((elem, i) => {
            return (
              <div className='first-card day-top interesting' key={i}>
                <img src={elem.img_url} alt='card-img' />
                <div className='first-card-text-wrapper day-new-text'>
                  <span>{elem.time}</span>
                  <h1 className='tips'>{elem.title}</h1>
                  <span>{elem.descr}</span>
                </div>
              </div>
            );
          })}
        </div>
        {!searchTerm.trim() ? (
          <img src={Banner} alt='banner' className='banner' />
        ) : null}
        <div className='day-top-wrapper'>
          {oldPosts.map((elem, i) => {
            return (
              <div className='first-card day-top interesting int' key={i}>
                <img src={elem.img_url} alt='card-img' />
                <div className='first-card-text-wrapper day-new-text'>
                  <span>{elem.time}</span>
                  <h1 className='tips'>{elem.title}</h1>
                  <span>{elem.descr}</span>
                </div>
              </div>
            );
          })}
        </div>
        {!searchTerm.trim() ? (
          <InfiniteScroll
            dataLength={oldPosts.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<ScrollCards />}
          ></InfiniteScroll>
        ) : null}
      </main>
      <Footer />
    </>
  );
}

export default App;

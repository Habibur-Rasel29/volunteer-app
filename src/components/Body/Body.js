import React from 'react';
import Home from '../Home/Home';
import './Body.css';

const Body = () => {
    var tasks = [
    {
        name: 'Animal Shelter',
        pic :'animalShelter.png'
    },
    {
        name: 'Baby Sit',
        pic :'babySit.png'
    },
    {
        name: 'Bird House',
        pic :'birdHouse.png'
    },
    {
        name: 'Child Support',
        pic :'childSupport.png'
    },
    {
        name: 'Clean Water',
        pic :'cleanWater.png'
    },
    {
        name: 'Clearn Park',
        pic :'clearnPark.png'
    },
    {
        name: 'Cloth Swap',
        pic :'clothSwap.png'
    },
    {
        name: 'drive Safety',
        pic :'driveSafety.png'
    },
    {
        name: 'Food Charity',
        pic :'foodCharity.png'
    },
    {
        name: 'Good Education',
        pic :'goodEducation.png'
    },
    {
        name: 'IT Help',
        pic :'ITHelp.png'
    },
    {
        name: 'Library Books',
        pic :'libraryBooks.png'
    },
    {
        name: 'musicLessons',
        pic :'musicLessons.png'
    },
    {
        name: 'New Books',
        pic :'newBooks.png'
    },
    {
        name: 'Refuse Shelter',
        pic :'refuseShelter.png'
    },
    {
        name: 'River Clean',
        pic :'riverClean.png'
    },
    {
        name: 'School Suffiles',
        pic :'schoolSuffiles.png'
    },
    {
        name: 'Study Group',
        pic :'studyGroup.png'
    },
    {
        name: 'Stuffed Animals',
        pic :'stuffedAnimals.png'
    },
    {
        name: 'Vote Register',
        pic :'voteRegister.png'
    }
]
    return (
      <div>
            <div>
            <div className="title">
                <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
            </div>
            <div className="search">
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
        </div>
        <div className="row">
        {
            tasks.map(task => <Home task={task}></Home>)
        }
        </div>
      </div>
    );
};

export default Body;
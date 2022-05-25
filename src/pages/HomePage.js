import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import HobbyList from '../components/Home/HobbyList';
import { addNewHobby, setActiveHobby } from '../store/actions/hobby';

const HomePage = props => {
    const generateUUID = () => { // Public Domain/MIT
        var d = new Date().getTime();//Timestamp
        var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16;//random number between 0 and 16
            if (d > 0) {//Use timestamp until depleted
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            } else {//Use microseconds since page-load if supported
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
    const hobbyList = useSelector((state) => state.hobby.list);
    const activeId = useSelector((state) => state.hobby.activeId);
    const dispatch = useDispatch();
    const handleAddHobbyClick = () => {
        const newHobby = {
            id: generateUUID(),
            title: 'abc'
        }

        console.log(newHobby)
        const action = addNewHobby(newHobby);
        dispatch(action);
    }


    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }
    return (
        <div className='home-page'>
            <h1>
                HomePage
            </h1>
            <button onClick={handleAddHobbyClick}>Random</button>
            <HobbyList hobbyList={hobbyList} activeId={activeId} onHobbyClick={handleHobbyClick} />
        </div>
    )
}

HomePage.propTypes = {}

export default HomePage
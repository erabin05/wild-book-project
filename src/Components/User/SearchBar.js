import React, { useState } from 'react'

import { connect } from "react-redux";
import axios from 'axios'

import { setSearchBarIsFocus } from '../../Reducers/searchBarIsFocus/action'
import { setSearchProjectsList } from '../../Reducers/searchProjectsList/action'

const mapDispatchToProps = dispatch => ({
    setSearchBarIsFocus: isFocus => dispatch( setSearchBarIsFocus(isFocus) ),
    setSearchProjectsList: projects => dispatch( setSearchProjectsList(projects) )
});


const SearchBar = ({setSearchBarIsFocus, setSearchProjectsList}) => {

    const [research, setResearch] = useState('')

    const researchBarOnChange = (e) => {
        setResearch(e.target.value)

        e.target.value && 
        axios.get(`http://localhost:5000/projects/research=${e.target.value}`)
            .then(res => {
                setSearchProjectsList(res.data.projects)
            })
    }

    return (
        <section className='search-bar'>
            <input 
                type="text" 
                value={research} 
                onChange={researchBarOnChange} 
                onFocus={()=>setSearchBarIsFocus(true)}
                onBlur={()=>setSearchBarIsFocus(false)}
            />
        </section>
    )
}

export default 
connect(
    null,
    mapDispatchToProps
)(SearchBar)

import React, { useState } from 'react'
import { connect } from "react-redux";

import { setSearchBarIsFocus } from '../../Reducers/searchBarIsFocus/action'

const mapDispatchToProps = dispatch => ({
    setSearchBarIsFocus: isFocus => dispatch( setSearchBarIsFocus(isFocus) )
  });

const SearchBar = ({setSearchBarIsFocus}) => {
    const [research, setResearch] = useState('')

    const researchBarOnChange = (e) => {
        setResearch(e.target.value)
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

import React from 'react'
import "./Search.scss";

const Search = () => {
  return (
    <form action="" class="search-bar">
        <input  className='search-bar-input' type="search" name="search" pattern=".*\S.*"   />
         <button class="search-btn" type="submit">
    </button>
  </form>
  )
}
export default Search;
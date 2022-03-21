import React from 'react'

function Header({handleToggleTheme}) {
  return (
    <div className='header'>
      <h1>Notes</h1>
      <button 
      className='toggle'
      onClick={() => handleToggleTheme((prevTheme) => !prevTheme)}
      >Toggle Mode</button>
    </div>
  )
}

export default Header
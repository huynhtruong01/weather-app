import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

Header.propTypes = {
  onSubmit: PropTypes.func,
}

Header.defaultProps = {
  onSubmit: null,
}

function Header(props) {
  const { onSubmit } = props
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!onSubmit) return
    onSubmit(value)
    setValue('')
  }

  console.log(value)
  return (
    <form className="app-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="app-input"
        placeholder="Search..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </form>
  )
}

export default Header

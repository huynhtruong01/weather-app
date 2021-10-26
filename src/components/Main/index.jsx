import React from 'react'
import './styles.scss'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

Main.propTypes = {}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}))

const dateTime = (date) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return `${days[date.getDay()]} ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`
}

function Main(props) {
  const { weathers, loading, hire } = props
  const { name, main, weather } = weathers
  const date = new Date()

  const classes = useStyles()
  console.log(weather)
  return (
    <div className="app-main">
      {loading && (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      )}
      {hire && (
        <div className="main-container">
          <div className="main-title">
            <div className="main-city">{name}</div>
            <div className="main-date">{dateTime(date)}</div>
          </div>
          <div className="main-temperature">
            <div className="detail-temperature">{Math.ceil(main.temp)}ºC</div>
          </div>
          <div className="main-description">{weather[0].main}</div>
        </div>
      )}
    </div>
  )
}

export default Main

import React from 'react'

export default function MonthCounter({monthNumber, setMonthNumber}) {
  const decreaseDayCount = () => {
    if (monthNumber <= 1) return
    setMonthNumber(monthNumber - 1)
  }

  const increaseDayCount = () => {
    if (monthNumber >= 12) return
    setMonthNumber(monthNumber + 1)
  }

  return (
    <div className="month-number-wrapper">
      <div>number of months: </div>
      <button className="month-number month-number-btn" onClick={decreaseDayCount}>-</button>
      <div className="month-number month-number-text">{monthNumber}</div>
      <button className="month-number month-number-btn" onClick={increaseDayCount}>+</button>
    </div>
  )
}

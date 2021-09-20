import React from 'react'

export default function TableElement({milestone, onElementClick, monthId}) {
  const hasDescription = (milestone) => milestone && milestone.description

  return (
    <div className={hasDescription(milestone) ? 'has-value' : 'no-value'} onClick={() => onElementClick(milestone, monthId)}>
      {hasDescription(milestone) ? milestone.description : 'brak'}
    </div>
  )
}

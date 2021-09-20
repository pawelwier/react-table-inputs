import React from 'react'

export default function MilestonePopup({milestone, setMilestoneDescription, submitMilestoneDescription, deleteMilestone}) {
    return (
        <div>
            <form onSubmit={(e) => submitMilestoneDescription(e, milestone.monthId)}>
                <input value={milestone ? milestone.description : ''} onChange={(e) => setMilestoneDescription(e.target.value)} />
                <input type="submit" value="Submit" />
                {milestone.description ? <button onClick={(e) => deleteMilestone(e, milestone)}>Delete</button> : null}
            </form>
        </div>
    )
}

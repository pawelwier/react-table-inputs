import React, { useState } from 'react'
import TableElement from './TableElement'
import MilestonePopup from './MilestonePopup'

const months = [
    {
        id: 1,
        name: 'JAN',
    },
    {
        id: 2,
        name: 'FEB',
    },
    {
        id: 3,
        name: 'MAR',
    },
    {
        id: 4,
        name: 'APR',
    },
    {
        id: 5,
        name: 'MAY',
    },
]

export default function TableMain() {
    const [showPopup, setShowPopup] = useState(false)
    const [selectedMilestone, setSelectedMilestone] = useState({})
    const [project, setProject] = useState({
        projectName: 'Pierwszy projekt',
        milestones: [
            {
                description: 'First milestone',
                monthId: 2
            }
        ]
    })

    const getMilestone = (id) => project.milestones.find(milestone => milestone.monthId === id)

    const onElementClick = (milestone, monthId) => {
        setShowPopup(true)
        setSelectedMilestone(milestone ? milestone : {
            description: '',
            monthId,
        })
    }

    const setMilestoneDescription = (description) => {
        setSelectedMilestone({
            ...selectedMilestone,
            description,
        })
    }

    const deleteMilestone = (e, milestone) => {
        e.preventDefault()
        console.log(project.milestones.filter(m => m.monthId !== milestone.monthId))
        setProject({
            ...project,
            milestones: project.milestones.filter(m => m.monthId !== milestone.monthId)
        })
        setSelectedMilestone({})
        setShowPopup(false)
    }

    const submitMilestoneDescription = (e, id) => {
        e.preventDefault()
        const hasId = !!project.milestones.find(milestone => milestone.monthId === id)
        console.log(hasId)
        const milestones = hasId ? project.milestones.map(milestone => {
            if (milestone.monthId === id) {
                return {
                    ...milestone,
                    description: selectedMilestone.description
                }
            } 
            return milestone
        }) : [
            ...project.milestones,
            {
                ...selectedMilestone
            }
        ]
        setProject({
            ...project,
            milestones,
        })
        setShowPopup(false)
        console.log(project)
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        {months.map((month, i) => {
                            return (
                                <th key={i}>
                                    <div className="month-name">
                                        {month.name}
                                    </div>
                                    <TableElement monthId={month.id} onElementClick={onElementClick} milestone={getMilestone(month.id)} key={i}/>
                                </th>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
            {
                showPopup ? (
                    <MilestonePopup milestone={selectedMilestone} setMilestoneDescription={setMilestoneDescription} submitMilestoneDescription={submitMilestoneDescription} deleteMilestone={deleteMilestone} />
                ) : null
            }
        </div>
    )
}

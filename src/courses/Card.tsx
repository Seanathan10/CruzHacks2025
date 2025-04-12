import React from "react"
import './Card.css'

interface CardProps {
    classStatus: string,
    className: string,
    instructor: string,
    location: string,
    time: string,
    enrollment: string,
    
    // used in callback
    term: string,
    classID: string,
    onCardClick: (term: string, classID: string) => void
}
function statusEmoji(status: string) {
    switch (status) {
        case "Open": return "🟢";
        case "Closed": return "🟦";
        default: return "⚠️";
    }
}

const Card: React.FC<CardProps> = ({ classStatus, className, instructor, location, time, enrollment, term, classID, onCardClick }) => {
    return (
        <div className="cardParent" onClick={() => {onCardClick(term, classID)}}>
            <div className="card">
                <div className="classInfo">
                    <p style={{ margin: '-2px 0' }}><span style={{ fontWeight: '600' }}>{statusEmoji(classStatus)} {className}</span></p>
                    <p style={{ margin: '-2px 0' }}><span style={{ fontWeight: '600' }}>Instructor:</span> {instructor}</p>
                    <p style={{ margin: '-2px 0' }}><span style={{ fontWeight: '600' }}>Location:</span> {location}</p>
                    <p style={{ margin: '-2px 0' }}><span style={{ fontWeight: '600' }}>Time:</span> {time}</p>
                    <p style={{ margin: '-2px 0' }}><span style={{ fontWeight: '600' }}>Enrollment:</span> {enrollment}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
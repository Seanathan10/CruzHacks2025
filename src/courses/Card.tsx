import React from "react"
import './Card.css'

interface CardProps {
    classStatus: string,
    className: string,
    instructor: string,
    location: string,
    time: string,
    enrollment: string
}

function statusEmoji(status: string) {
    switch (status) {
        case "Open": return "🟢";
        case "Closed": return "🟦";
        default: return "⚠️";
    }
}

const Card: React.FC<CardProps> = ({ classStatus, className, instructor, location, time, enrollment }) => {
    return (
        <div className="cardParent">
            <div className="card">
                {/* <h3 className="className">{classStatus} {className}</h3> */}
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
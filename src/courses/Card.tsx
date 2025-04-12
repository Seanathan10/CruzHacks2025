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

const Card: React.FC<CardProps> = ({ classStatus, className, instructor, location, time, enrollment }) => {
    return (
        <div className="cardParent">
            <div className="card">
                <h3>{classStatus} {className}</h3>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                }}>
                    <p style={{ margin: '4px 0' }}><span style={{ fontWeight: '600' }}>Instructor:</span> {instructor}</p>
                    <p style={{ margin: '4px 0' }}><span style={{ fontWeight: '600' }}>Location:</span> {location}</p>
                    <p style={{ margin: '4px 0' }}><span style={{ fontWeight: '600' }}>Time:</span> {time}</p>
                    <p style={{ margin: '4px 0' }}><span style={{ fontWeight: '600' }}>Enrollment:</span> {enrollment}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
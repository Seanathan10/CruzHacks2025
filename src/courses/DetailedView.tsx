import React from "react"
import './DetailedView.css';
import { statusEmoji } from './Card.tsx';

interface DetailedViewProps {
    details: string,
}

function classDetailsGridEntry(title: string, content: string) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: '500', color: '#6c757d', fontSize: '0.9rem' }}>{title}</span>
            <span style={{ fontSize: '1.1rem' }}>{content}</span>
        </div>
    )
}

const DetailedView: React.FC<DetailedViewProps> = ({ details }) => {
    const detailsObj = JSON.parse(details);
    console.log(detailsObj)

    return (
        <div className="parent" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'left' }}>
            <div style={{
                height: '0px',
                margin: '20px 0'
            }}>
            </div>
            {detailsObj.primary_section &&
                <div className="classDetails">
                    <h3 className="heading">Class Details</h3>
                    <div className="classDetailsGrid">
                        {classDetailsGridEntry("Status", detailsObj.primary_section.enrl_status)}
                        {classDetailsGridEntry("Capacity", detailsObj.primary_section.capacity)}
                        {classDetailsGridEntry("Credits", detailsObj.primary_section.credits)}
                        {classDetailsGridEntry("Total", detailsObj.primary_section.enrl_total)}
                        {classDetailsGridEntry("GenEd", detailsObj.primary_section.gened || "None")}
                        {classDetailsGridEntry("Waitlist", detailsObj.primary_section.waitlist_capacity)}
                    </div>
                </div>}

            {detailsObj.primary_section.description &&
                <div className="description classDetails">
                    <h3 className="heading">Description</h3>
                    <p>{detailsObj.primary_section.description || "None"}</p>
                </div>}
            <div className="enrollmentReq classDetails">
                <h3 className="heading">Requirements</h3>
                <p>{detailsObj.primary_section.requirements || "None"}</p>
            </div>
            {detailsObj.notes &&
                <div className="notes classDetails">
                    <h3 className="heading">Notes</h3>
                    <p>{detailsObj.notes}</p>
                </div>
            }
            {detailsObj.meetings &&
                <div
                    className="meetings classDetails">
                    <h3 className="heading">Meeting Times</h3>
                    {detailsObj.meetings.map((meeting: any, index: number) => {
                        return (
                            <div key={index} style={{ marginBottom: '15px' }}>
                                <p><strong>Day and Times:</strong> {meeting.days} {meeting.start_time}-{meeting.end_time}</p>
                                <p><strong>Location:</strong> {meeting.location}</p>
                                <p><strong>Instructor(s):</strong> {meeting.instructors.map((instructor: any, i: number) =>
                                    <span key={i}>{instructor.name}{i < meeting.instructors.length - 1 ? ', ' : ''}</span>
                                )}</p>
                            </div>
                        )
                    })}
                </div>}
            {detailsObj.secondary_sections &&
                <div className="sections classDetails">
                    <h3 className="heading">Sections</h3>
                    {detailsObj.secondary_sections.map((section: any, index: number) => {
                        if (!section.meetings) return null;

                        return (
                            <div key={index} className="section-card" style={{ 
                                borderRadius: '8px',
                            }}>
                                {index > 0 && <hr style={{ margin: '0 0 15px 0', borderTop: '1px solid #dee2e6' }} />}
                                <div style={{ marginBottom: '10px' }}>
                                    <p style={{ margin: '-8px 0' }}>
                                        {statusEmoji(section.enrl_status)}Enrolled: {section.enrl_total}/{section.capacity}
                                    </p>
                                </div>
                                <div>
                                    {section.meetings.map((meeting: any, i: number) => (
                                        <div key={i} style={{ margin: '8px 0' }}>
                                            <p style={{ margin: '2px 0' }}><strong>Day and Times:</strong> {meeting.days} {meeting.start_time}-{meeting.end_time}</p>
                                            <p style={{ margin: '2px 0' }}><strong>Location:</strong> {meeting.location}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>}

            {/* Spacer at the bottom */}
            <div style={{
                height: '20px',
                margin: '20px 0'
            }}>
            </div>
        </div>
    );
}

export default DetailedView;
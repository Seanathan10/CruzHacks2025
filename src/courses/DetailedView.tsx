import React from "react"
import './DetailedView.css';
import { statusEmoji } from './Card.tsx';
import ExternalLinkIcon from './external-link.svg';

interface DetailedViewProps {
    details: string,
    modality: string,
    link: string
}

function classDetailsGridEntry(title: string, content: string) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: '500', color: '#6c757d', fontSize: '0.9rem' }}>{title}</span>
            <span style={{ fontSize: '1.1rem' }}>{content}</span>
        </div>
    )
}

const DetailedView: React.FC<DetailedViewProps> = ({ details, modality, link }) => {
    const detailsObj = JSON.parse(details);
    const spacer = (<div style={{height: '0px', margin: '20px 0'}}></div>)

    return (
        <div className="parent" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'left' }}>
            {spacer}

            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <div>
                    <h3>{detailsObj.primary_section.subject}-{detailsObj.primary_section.catalog_nbr}: {detailsObj.primary_section.title_long}</h3>
                </div>
                <button 
                    onClick={() => window.open(link, '_blank')}
                    style={{ 
                        padding: '8px 8px', 
                        backgroundColor: '#4CAF50', 
                        borderRadius: '4px', 
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                    }}
                >
                    <img src={ExternalLinkIcon} alt="View in Pisa" width="20px" height="20px" style={{ verticalAlign: 'middle' }} />
                </button>
            </div>


            {detailsObj.primary_section &&
                <div className="classDetails">
                    <h3 className="heading">Class Details</h3>
                    <div className="classDetailsGrid">
                        {classDetailsGridEntry("Status", detailsObj.primary_section.enrl_status)}
                        {classDetailsGridEntry("Capacity", detailsObj.primary_section.capacity)}
                        {classDetailsGridEntry("Total", detailsObj.primary_section.enrl_total)}
                        {classDetailsGridEntry("Waitlist", detailsObj.primary_section.waitlist_capacity)}
                        {classDetailsGridEntry("Credits", detailsObj.primary_section.credits)}
                        {classDetailsGridEntry("GenEd", detailsObj.primary_section.gened || "None")}
                        {classDetailsGridEntry("Modality", modality)}
                        {classDetailsGridEntry("Class ID", detailsObj.primary_section.class_nbr)}
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

            {spacer}
        </div>
    );
}

export default DetailedView;
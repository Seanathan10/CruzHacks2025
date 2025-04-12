import React from "react"
import { useState, useEffect } from "react";
import './DetailedView.css';

interface DetailedViewProps {
    details: string,
}

const DetailedView: React.FC<DetailedViewProps> = ({ details }) => {
    const detailsObj = JSON.parse(details);
    console.log(detailsObj)

    return (
        <div className="parent" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
                height: '0px',
                margin: '20px 0'
            }}>
            </div>
            {detailsObj.primary_section &&
                <div className="classDetails" style={{
                    borderRadius: '8px',
                    padding: '15px',
                    marginBottom: '20px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    boxSizing: 'border-box',
                    width: '100%'
                }}>
                    <h3 style={{
                        borderBottom: '2px solid #e9ecef',
                        paddingBottom: '10px',
                        marginBottom: '15px'
                    }}>Class Details</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '15px',
                        maxWidth: '800px',
                        margin: '0 auto',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontWeight: '500', color: '#6c757d', fontSize: '0.9rem' }}>Status</span>
                            <span style={{ fontSize: '1.1rem' }}>{detailsObj.primary_section.enrl_status}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontWeight: '500', color: '#6c757d', fontSize: '0.9rem' }}>Capacity</span>
                            <span style={{ fontSize: '1.1rem' }}>{detailsObj.primary_section.capacity}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontWeight: '500', color: '#6c757d', fontSize: '0.9rem' }}>Credits</span>
                            <span style={{ fontSize: '1.1rem' }}>{detailsObj.primary_section.credits}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontWeight: '500', color: '#6c757d', fontSize: '0.9rem' }}>Total</span>
                            <span style={{ fontSize: '1.1rem' }}>{detailsObj.primary_section.enrl_total}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontWeight: '500', color: '#6c757d', fontSize: '0.9rem' }}>GenEd</span>
                            <span style={{ fontSize: '1.1rem' }}>{detailsObj.primary_section.gened == "" ? "None" : detailsObj.primary_section.gened}</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontWeight: '500', color: '#6c757d', fontSize: '0.9rem' }}>Waitlist</span>
                            <span style={{ fontSize: '1.1rem' }}>{detailsObj.primary_section.waitlist_capacity}</span>
                        </div>
                    </div>
                </div>}

            {detailsObj.primary_section.description &&
                <div className="description" style={{
                    borderRadius: '8px',
                    padding: '15px',
                    marginBottom: '20px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    boxSizing: 'border-box',
                    width: '100%'
                }}>
                    <h3 style={{
                        borderBottom: '2px solid #e9ecef',
                        paddingBottom: '10px',
                        marginBottom: '15px'
                    }}>Description</h3>
                    <p>{detailsObj.primary_section.description}</p>
                </div>}
            <div className="enrollmentReq" style={{
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '20px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                boxSizing: 'border-box',
                width: '100%'
            }}>
                <h3 style={{
                    borderBottom: '2px solid #e9ecef',
                    paddingBottom: '10px',
                    marginBottom: '15px'
                }}>Requirements</h3>
                <p>{detailsObj.primary_section.requirements}</p>
            </div>
            {detailsObj.notes &&
                <div className="notes" style={{
                    borderRadius: '8px',
                    padding: '15px',
                    marginBottom: '20px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    boxSizing: 'border-box',
                    width: '100%'
                }}>
                    <h3 style={{
                        borderBottom: '2px solid #e9ecef',
                        paddingBottom: '10px',
                        marginBottom: '15px'
                    }}>Notes</h3>
                    <p>{detailsObj.notes}</p>
                </div>
            }
            {detailsObj.meetings &&
                <div
                    className="meetings"
                    style={{
                        borderRadius: '8px',
                        padding: '15px',
                        marginBottom: '20px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        boxSizing: 'border-box',
                        width: '100%'
                    }}>
                    <h3 style={{
                        borderBottom: '2px solid #e9ecef',
                        paddingBottom: '10px',
                        marginBottom: '15px'
                    }}>Meeting Times</h3>
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
                <div className="sections" style={{
                    borderRadius: '8px',
                    padding: '15px',
                    marginBottom: '20px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    boxSizing: 'border-box',
                    width: '100%'
                }}>
                    <h3 style={{
                        borderBottom: '2px solid #e9ecef',
                        paddingBottom: '10px',
                        marginBottom: '15px'
                    }}>Sections</h3>
                    {detailsObj.secondary_sections.map((section: any, index: number) => {
                        if (!section.meetings) return null;

                        return (
                            <div key={index} style={{ marginBottom: '15px' }}>
                                {section.meetings.map((meeting: any, i: number) => (
                                    <div key={i} style={{ marginBottom: '10px' }}>
                                        <p><strong>Day and Times:</strong> {meeting.days} {meeting.start_time}-{meeting.end_time}</p>
                                        <p><strong>Location:</strong> {meeting.location}</p>
                                    </div>
                                ))}
                                <p><strong>{section.enrl_status}</strong> Enrolled: {section.enrl_total}/{section.capacity}</p>
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
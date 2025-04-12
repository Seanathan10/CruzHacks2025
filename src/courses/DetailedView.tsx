import { AnchorStylesNames } from "@mantine/core";
import React from "react"

interface DetailedViewProps {
    details: string,
    // instructor: string,
    // location: string,
    // time: string,
}

const DetailedView: React.FC<DetailedViewProps> = ({ details }) => {
    const detailsObj = JSON.parse(details);
    console.log(detailsObj)

    return (
        <div className="parent" style={{ display: 'flex', flexDirection: 'column' }}>
            {detailsObj.primary_section &&
                <div className="classDetails">
                    <h3>Class Details</h3>
                    <p>Status: {detailsObj.primary_section.enrl_status}</p>
                    <p>Capacity: {detailsObj.primary_section.capacity}</p>
                    <p>Total: {detailsObj.primary_section.enrl_total}</p>
                    <p>Waitlist: {detailsObj.primary_section.waitlist_capacity}</p>
                </div>}
            {detailsObj.primary_section.description &&
                <div className="description">
                    <h3>Description</h3>
                    <p>{detailsObj.primary_section.description}</p>
                </div>}
            <div className="enrollmentReq">
                <h3>Requirements</h3>
                <p>{detailsObj.primary_section.requirements}</p>
            </div>
            {detailsObj.notes &&
                <div className="notes">
                    <h3>Notes</h3>
                    <p>{detailsObj.notes}</p>
                </div>
            }
            {detailsObj.meetings &&
                <div>
                <h3>Meeting Times</h3>
                {detailsObj.meetings.map((meeting: any, _: number) => {
                    return (
                        <>
                            <p>Day and Times: {meeting.days} {meeting.start_time}-{meeting.end_time}</p>
                            <p>Location: {meeting.location}</p>
                            <p>Instructor(s): </p>{meeting.instructors.map((instructor: any, _: number) => {
                                return instructor.name;
                            })}
                        </>
                    )
                })}
            </div>}
            {detailsObj.secondary_sections &&
                <div className="sections">
                    <h3>Sections</h3>
                    {detailsObj.secondary_sections.map((section: any, _: number) => {

                        return (
                            <div>
                                {section.meetings.map((meeting: any, _: any) => {
                                    return (
                                        <>
                                            <p>Day and Times: {meeting.days} {meeting.start_time}-{meeting.end_time}</p>
                                            <p>Location: {meeting.location}</p>
                                        </>
                                    );
                                })}
                                <p>{section.enrl_status} Enrolled: {section.enrl_total}/{section.capacity}</p>
                            </div>
                        );
                    })}
                </div>}
        </div>
    );
}

export default DetailedView;
import { useState, useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { TopBar as MobileTopBar } from "../dashboard/mobile/TopBar";
import { TopBar as DesktopTopBar } from "../dashboard/desktop/TopBar";

import Card from "./Card";

export default function Courses() {
    const [courseData, setCourseData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const isMobile = useMediaQuery("(max-width: 600px)");
    const [selectedCourseID, setSelectedCourseID] = useState<number>(0);
    const [selectedTerm, setSelectedTerm] = useState<number>(0);

    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await fetch('http://127.0.0.1:8000/courses?term=2248&regStatus=all');
                const data = await response.json();
                setCourseData(data);
            } catch (error) {
                console.error("Failed to fetch courses:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchCourses();
    }, []);

    return (
        <div>
            {isMobile ? <MobileTopBar /> : <DesktopTopBar />}

            <div className="parent" style={{ display: 'flex', width: '100%', height: '100%' }}>
                <div className="courseList" style={{ width: '30%', overflowY: 'auto', padding: '10px' }}>
                    {loading ? <p>Loading courses...</p> :
                        <div className="courses-container">
                            {courseData.map((course: any, index: number) => (
                                <Card
                                    key={index}
                                    classStatus={course.status}
                                    className={course.name}
                                    instructor={course.instructor}
                                    location={course.location}
                                    time={course.time}
                                    enrollment={course.enrolled}
                                    term={"2248"} //temp
                                    classID={course.class_number}
                                    onCardClick={(term: string, classID: string) => { setSelectedCourseID(Number(classID)); setSelectedTerm(Number(term)) }}
                                />
                            ))}
                        </div>
                    }
                </div>
                <div className="contentRight" style={{ width: '70%', padding: '10px', backgroundColor: "#0000FF" }}>
                    {selectedCourseID}
                    <br></br>
                    {selectedTerm}
                </div>
            </div>
        </div>
    );
}

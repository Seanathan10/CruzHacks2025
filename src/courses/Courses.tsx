import { useState, useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { TopBar as MobileTopBar } from "../dashboard/mobile/TopBar";
import { TopBar as DesktopTopBar } from "../dashboard/desktop/TopBar";

import Card from "./Card";
import DetailedView from "./DetailedView";
import './Courses.css';

export default function Courses() {
    const [courseData, setCourseData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const isMobile = useMediaQuery("(max-width: 600px)");
    const [selectedCourseID, setSelectedCourseID] = useState<number>(0);
    const [selectedTerm, setSelectedTerm] = useState<number>(0);
    const [detailedData, setDetailedData] = useState<any>(null);
    const [selectedClassModality, setSelectedClassModality] = useState<string>("");
    const TERM = 2252;


    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await fetch(`http://127.0.0.1:8000/courses?term=${TERM}&regStatus=all`);
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

    useEffect(() => {
        getDetailedView().then(() => { console.log(detailedData) });
    }, [selectedCourseID]);


    const getDetailedView = async () => {
        const response = await fetch(`https://my.ucsc.edu/PSIGW/RESTListeningConnector/PSFT_CSPRD/SCX_CLASS_DETAIL.v1/${selectedTerm}/${selectedCourseID}`);
        const data = await response.text();

        setDetailedData(data);
    }

    const spacer = (<div style={{height: '0px', margin: '30px 0'}}></div>)


    return (
        <div className="courses-page">
            <div className="topbar-container">
                {isMobile ? <MobileTopBar /> : <DesktopTopBar />}
            </div>
            <div className="parent">
                <div className="courseList">
                    {loading ? <p>Loading courses...</p> :
                        <div className="courses-container">
                            {spacer}
                            {courseData.map((course: any, index: number) => (
                                <Card
                                    key={index}
                                    classStatus={course.status}
                                    className={course.name}
                                    instructor={course.instructor}
                                    location={course.location}
                                    time={course.time}
                                    enrollment={course.enrolled}
                                    term={String(TERM)} //temp
                                    classID={course.class_number}
                                    onCardClick={(term: string, classID: string) => { setSelectedCourseID(Number(classID)); setSelectedTerm(Number(term)); console.log(term, classID); setSelectedClassModality(course.modality)}}
                                />
                            ))}
                        </div>
                    }
                </div>
                <div className="contentRight">
                    {detailedData && <DetailedView key={selectedCourseID} details={detailedData} modality={selectedClassModality}/>}
                </div>
            </div>
        </div>
    );
}

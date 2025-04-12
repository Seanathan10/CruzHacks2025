import { useState, useEffect } from "react";
import Card from "./Card";

export default function Courses() {
    const [courses, setCourses] = useState<JSX.Element[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await fetch('http://127.0.0.1:8000/courses?term=2248&regStatus=all');
                const data = await response.json();

                const courseElements = data.map((course: any, index: number) => (
                    <Card
                        key={index}
                        classStatus={course.status}
                        className={course.name}
                        instructor={course.instructor}
                        location={course.location}
                        time={course.time}
                        enrollment={course.enrollment}
                    />
                ));

                setCourses(courseElements);
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
            {loading ? <p>Loading courses...</p> : courses}
            {/* <Card
                // key={index}
                classStatus={"Open"}
                className={"CSE 4 - Introduction to some Bullshit"}
                instructor={"John Doe"}
                location={"Thimann Lecture Hall"}
                time={"MWF 12pm to 1pm"}
                enrollment={"0 of 150"}
            /> */}
        </div>
    );
}
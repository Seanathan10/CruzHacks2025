import { useState, useEffect } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { TopBar as MobileTopBar } from "../dashboard/mobile/TopBar";
import { TopBar as DesktopTopBar } from "../dashboard/desktop/TopBar";

import Card from "./Card";
import DetailedView from "./DetailedView";
import Search from './Search.tsx';
import './Courses.css';



function parseInput(query: string) {
	let results = {
		dept: "",
		catalogNum: ""
	};

	if (query.length == 0) return results;

	const deptExtractor = new RegExp('^([a-zA-Z]{3,4})');
	const deptResults = deptExtractor.exec(query);
	if (deptResults) results["dept"] = deptResults[0].toUpperCase();


	const catalogNumExtractor = new RegExp('([0-9]{1,3}[a-zA-Z]?)');
	const cnumResults = catalogNumExtractor.exec(query);
	if (cnumResults) results["catalogNum"] = cnumResults[0].toUpperCase();


	return results;
}


export default function Courses() {
	const [courseData, setCourseData] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const isMobile = useMediaQuery("(max-width: 600px)");
	const [selectedCourseID, setSelectedCourseID] = useState<number>(0);
	const [detailedData, setDetailedData] = useState<any>(null);
	const [selectedClassModality, setSelectedClassModality] = useState<string>("");
	const [inputData, setInputData] = useState<{ dept: string; catalogNum: string }>({ dept: "", catalogNum: "" });

	//filter states
	const [term, setTerm] = useState<string>("2252");
	const [ge, setGE] = useState<string>("");
	const [status, setStatus] = useState<string>("all");
	const [time, setTimes] = useState<string>("");


	const TERM = 2252;

	async function fetchCourses() {
		try {
			setLoading(true);
			console.log("loading with", inputData)
			const response = await fetch(`http://127.0.0.1:8000/courses?term=${term}&regStatus=all&department=${inputData.dept}&catalogNum=${inputData.catalogNum}&ge=${ge}&regStatus=${status}&meetingTimes=${time}`);
			const data = await response.json();
			setCourseData(data);
		} catch (error) {
			console.error("Failed to fetch courses:", error);
		} finally {
			setLoading(false);
		}
	}


	useEffect(() => {
		fetchCourses();
	}, []);

	// useEffect(() => {
	// 	getDetailedView()//.then(() => { console.log(detailedData) });
	// }, [selectedCourseID]);


	const getDetailedView = async (courseTerm: string, courseID: string) => {
		console.log("detailed view called with term", courseTerm)
		const response = await fetch(`https://my.ucsc.edu/PSIGW/RESTListeningConnector/PSFT_CSPRD/SCX_CLASS_DETAIL.v1/${courseTerm}/${courseID}`);
		const data = await response.text();

		setDetailedData(data);
	}


	const onSearch = (query: string) => {
		console.log("query is", query);

		let parse = parseInput(query);
		console.log(parse);
		setInputData(parse);

		console.log("parsed", parse)

		// fetchCourses();
	}

	useEffect(() => {
		fetchCourses();
	}, [inputData]);

	const spacer = (<div style={{ height: '0px', margin: '30px 0' }}></div>)


	return (
		<div className="courses-page">
			<div className="topbar-container">
				{isMobile ? <MobileTopBar /> : <DesktopTopBar />}
			</div>
			<div className="parent">
				<div className="contentLeft">
					{spacer}

					<div className="search-wrapper">
						<Search onSearchBoxInput={(query) => { onSearch(query) }} onGoButtonPressed={fetchCourses} />
						<div className="filters" style={{ width: '100%', paddingLeft: '10px' }}>
							<select
								name="quarter"
								id="quarter"
								className="dropdown"
								style={{ width: 'calc(30% - 3px)' }}
								value={term}
								onChange={(e) => {
									setTerm(e.target.value);
									// fetchCourses();
								}}
							>
								<option value="2254">Summer 2025</option>
								<option value="2252">Spring 2025</option>
								<option value="2250">Winter 2024</option>
								<option value="2248">Fall 2024</option>
							</select>
							<select
								name="GE"
								id="GE"
								className="dropdown"
								style={{ width: 'calc(20% - 3px)', marginLeft: '4px' }}
								onChange={(e) => {
									setGE(e.target.value)
								}}
							>
								{["AnyGE", "AH&I", "C", "CC", "ER", "IM", "MF", "PE-E", "PE-H", "PE-T", "PR-C", "PR-E", "PR-S", "SI", "SR", "TA"].map((ge: string, _: number) => {
									return (<option value={ge}>{ge}</option>);
								})}
							</select>
							<select
								name="status"
								id="status"
								className="dropdown"
								style={{ width: 'calc(17% - 3px)', marginLeft: '4px' }}
								onChange={(e) => { setStatus(e.target.value) }}
							>
								<option value="all">All</option>
								<option value="O">Open</option>
							</select>
							<select
								name="times"
								id="times"
								className="dropdown"
								style={{ width: 'calc(33% - 3px)', marginLeft: '4px' }}
								onChange={(e) => { setTimes(e.target.value) }}
							>
								<option value="">All Times</option>
								<option value="Morning">Morning</option>
								<option value="Afternoon">Afternoon</option>
								<option value="Evening">Evening</option>
								<option value="08:00AM09:05AM">08:00AM-09:05AM</option>
								<option value="08:00AM09:35AM">08:00AM-09:35AM</option>
								<option value="09:20AM10:25AM">09:20AM-10:25AM</option>
								<option value="09:50AM11:25AM">09:50AM-11:25AM</option>
								<option value="10:40AM11:45AM">10:40AM-11:45AM</option>
								<option value="11:40AM01:15PM">11:40AM-01:15PM</option>
								<option value="12:00PM01:05PM">12:00PM-01:05PM</option>
								<option value="01:20PM02:25PM">01:20PM-02:25PM</option>
								<option value="01:30PM03:05PM">01:30PM-03:05PM</option>
								<option value="02:40PM03:45PM">02:40PM-03:45PM</option>
								<option value="03:20PM04:55PM">03:20PM-04:55PM</option>
								<option value="04:00PM05:05PM">04:00PM-05:05PM</option>
								<option value="05:20PM06:55PM">05:20PM-06:55PM</option>
								<option value="07:10PM08:45PM">07:10PM-08:45PM</option>
								<option value="08:00PM09:45PM">08:00PM-09:45PM</option>
							</select>
						</div>
					</div>
					<div className="courseList">
						{loading ? <p>Loading courses...</p> :
							courseData.map((course: any, index: number) => (
								<Card
									key={index}
									classStatus={course.status}
									className={course.name}
									instructor={course.instructor}
									location={course.location}
									time={course.time}
									enrollment={course.enrolled}
									term={term} //temp
									classID={course.class_number}
									onCardClick={(classTerm: string, classID: string) => { setSelectedClassModality(course.modality); getDetailedView(classTerm, classID); }}
								/>
							))
						}
					</div>
				</div>
				<div className="contentRight">
					{detailedData && <DetailedView details={detailedData} modality={selectedClassModality} />}
				</div>
			</div>
		</div>
	);
}

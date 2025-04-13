import { useState, useEffect } from "react";
import { TopBar as MobileTopBar } from "../dashboard/mobile/TopBar";
import { TopBar as DesktopTopBar } from "../dashboard/desktop/TopBar";
import Card from "./Card";
import DetailedView from "./DetailedView";
import Search from './Search.tsx';
import './Courses.css';
import { ButtonGroupSection } from "@mantine/core";

// Add useMediaQuery hook
const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(window.matchMedia(query).matches);

	useEffect(() => {
		const media = window.matchMedia(query);
		const listener = () => setMatches(media.matches);
		media.addEventListener("change", listener);
		return () => media.removeEventListener("change", listener);
	}, [query]);

	return matches;
};

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
	const isMobile = useMediaQuery("(max-width: 768px)");
	const [detailedData, setDetailedData] = useState<any>(null);
	const [selectedClassModality, setSelectedClassModality] = useState<string>("");
	const [selectedClassLink, setSelectedClassLink] = useState<string>("");
	const [inputData, setInputData] = useState<{ dept: string; catalogNum: string }>({ dept: "", catalogNum: "" });
	const [showDetails, setShowDetails] = useState(false);

	//filter states
	const [term, setTerm] = useState<string>("2252");
	const [ge, setGE] = useState<string>("");
	const [status, setStatus] = useState<string>("all");
	const [time, setTimes] = useState<string>("");

	// Rest of your existing functions...
	
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

	const getDetailedView = async (courseTerm: string, courseID: string) => {
		console.log("detailed view called with term", courseTerm)
		const response = await fetch(`https://my.ucsc.edu/PSIGW/RESTListeningConnector/PSFT_CSPRD/SCX_CLASS_DETAIL.v1/${courseTerm}/${courseID}`);
		const data = await response.text();

		setDetailedData(data);
		if (isMobile) setShowDetails(true);
	}

	const onSearch = (query: string) => {
		console.log("query is", query);
		let parse = parseInput(query);
		console.log(parse);
		setInputData(parse);
		console.log("parsed", parse)
	}

	useEffect(() => {
		fetchCourses();
	}, [inputData]);

	const spacer = (<div style={{ height: '0px', margin: '30px 0' }}></div>)

	// Back button function for mobile view
	const handleBack = () => {
		setShowDetails(false);
	};

	return (
		<div className="courses-page">
			<div className="topbar-container">
				{isMobile ? <MobileTopBar /> : <DesktopTopBar />}
			</div>
			<div className="parent" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
				<div 
					className="contentLeft" 
					style={{ 
						width: isMobile ? '100%' : '30%', 
						display: isMobile && showDetails ? 'none' : 'flex' 
					}}
				>
					{spacer}

					<div className="search-wrapper" style={{ width: isMobile ? '95%' : '83%' }}>
						<Search onSearchBoxInput={(query) => { onSearch(query) }} onGoButtonPressed={fetchCourses} />
						<div className="filters" style={{ width: '100%', paddingLeft: isMobile ? '0px' : '10px', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '8px' : '0' }}>
							<select
								name="quarter"
								id="quarter"
								className="dropdown"
								style={{ width: isMobile ? '100%' : 'calc(30% - 3px)' }}
								value={term}
								onChange={(e) => { setTerm(e.target.value); }}
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
								style={{ width: isMobile ? '100%' : 'calc(20% - 3px)', marginLeft: isMobile ? '0' : '4px' }}
								onChange={(e) => { setGE(e.target.value) }}
							>
								{["AnyGE", "AH&I", "C", "CC", "ER", "IM", "MF", "PE-E", "PE-H", "PE-T", "PR-C", "PR-E", "PR-S", "SI", "SR", "TA"].map((ge: string, idx: number) => (
									<option key={idx} value={ge}>{ge}</option>
								))}
							</select>
							<select
								name="status"
								id="status"
								className="dropdown"
								style={{ width: isMobile ? '100%' : 'calc(17% - 3px)', marginLeft: isMobile ? '0' : '4px' }}
								onChange={(e) => { setStatus(e.target.value) }}
							>
								<option value="all">All</option>
								<option value="O">Open</option>
							</select>
							<select
								name="times"
								id="times"
								className="dropdown"
								style={{ width: isMobile ? '100%' : 'calc(33% - 3px)', marginLeft: isMobile ? '0' : '4px' }}
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
					<div className="courseList" style={{ marginTop: isMobile ? '20px' : '50px' }}>
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
									term={term}
									classID={course.class_number}
									onCardClick={(classTerm: string, classID: string) => {
										setSelectedClassLink("https://pisa.ucsc.edu/class_search/" + course.link);
										setSelectedClassModality(course.modality);
										getDetailedView(classTerm, classID);
									}}
								/>
							))
						}
					</div>
				</div>
				<div 
					className="contentRight" 
					style={{ 
						display: (isMobile && !showDetails) ? 'none' : 'block',
						height: isMobile ? 'auto' : 'calc(100vh - 60px)',
						minHeight: isMobile ? 'calc(100vh - 60px)' : 'auto'
					}}
				>
					{spacer}
					{detailedData ? <DetailedView details={detailedData} modality={selectedClassModality} link={selectedClassLink} isMobile={isMobile} handleBack={handleBack} /> :
						<div style={{ backgroundColor: '#2a2a2a', width: '100%', height: '100%' }}></div>
					}
				</div>
			</div>
		</div>
	);
}

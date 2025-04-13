interface FilterProps {
    isMobile?: boolean,

    selectedTerm: string,
    setTerm: (term: string) => void,
    setGE: (ge: string) => void,
    setStatus: (status: string) => void,
    setTimes: (times: string) => void,
}


export default function Filters({ isMobile, selectedTerm, setTerm, setGE, setStatus, setTimes }: FilterProps) {


    return (
        <div className="filters" style={{ width: '100%', paddingLeft: isMobile ? '0px' : '10px', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '8px' : '0' }}>
            
            {/* Quarter select */}
            <select
                name="quarter"
                id="quarter"
                className="dropdown"
                style={{ width: isMobile ? '100%' : 'calc(30% - 3px)' }}
                value={selectedTerm}
                onChange={(e) => { setTerm(e.target.value); }}
            >
                <option value="2254">Summer 2025</option>
                <option value="2252">Spring 2025</option>
                <option value="2250">Winter 2024</option>
                <option value="2248">Fall 2024</option>
            </select>



            {/* GE type selection */}
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


            {/* filter by open/all */}
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


            {/* filter by time */}
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

    );
}

interface FilterProps {
    isMobile?: boolean,

    selectedTerm: string,
    setTerm: (term: string) => void,
    setGE: (ge: string) => void,
    setStatus: (status: string) => void,
    setTimes: (times: string) => void,
}


export default function Filters({ selectedTerm, setTerm, setGE, setStatus, setTimes }: FilterProps) {


    return (
        <div className="filters" style={{ width: '100%', paddingLeft: '10px', display: 'flex', flexDirection: 'row', gap: '4px' }}>
                    
            {/* Quarter select */}
            <select
                name="quarter"
                id="quarter"
                className="dropdown"
                style={{ width: 'calc(30% - 3px)' }}
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
                style={{ width: 'calc(20% - 3px)' }}
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
                style={{ width: 'calc(17% - 3px)' }}
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
                style={{ width: 'calc(33% - 3px)' }}
                onChange={(e) => { setTimes(e.target.value) }}
            >
                <option value="">All Times</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
                {/* Time options... */}
                <option value="08:00PM09:45PM">08:00PM-09:45PM</option>
            </select>
        </div>

    );
}

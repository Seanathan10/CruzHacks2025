import './Search.css';
import { use, useState } from 'react';

interface SearchProps {
	onSearchBoxInput: (query: string) => void;
	onGoButtonPressed: () => void;
}

const Search: React.FC<SearchProps> = ({ onSearchBoxInput, onGoButtonPressed }) => {
	const [searchText, setSearchText] = useState<string>("");

	return (
		<div className="searchContainer">
			<div style={{ alignItems: "center", display: "flex", paddingBottom: "5px" }}>
				<svg
					style={{
						position: 'absolute',
						top: '50%',
						left: '22px',
						transform: 'translateY(-50%)',
						color: '#9aa0a6',
					}}
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				>
					<circle cx="11" cy="11" r="8" />
					<line x1="21" y1="21" x2="16.65" y2="16.65" />
				</svg>
				<input
					className="searchBox"
					style={{borderRadius: '8px 0 0 8px'}}
					type="text"
					placeholder="Search..."
					value={searchText}
					onChange={(e) => {
						setSearchText(e.target.value);
					}}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							// console.log("Search submitted:", searchText);
							onSearchBoxInput(searchText)
						}
					}}
				/>
				<button 
					style={{
						padding: '12px 20px 13px 20px', 
						backgroundColor: "#e78182", 
						borderRadius: '0 8px 8px 0'
					}}
					onClick={onGoButtonPressed}
				>
					Go
				</button>
			</div>
		</div>
	);
}

export default Search;
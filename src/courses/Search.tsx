import './Search.css';
import { use, useState } from 'react';

interface SearchProps {
	onSearchBoxInput: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearchBoxInput }) => {
	const [searchText, setSearchText] = useState<string>("");

	return (
		<div className="searchContainer">
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
		</div>
	);
}

export default Search;
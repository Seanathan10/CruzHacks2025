interface SearchProps {
}

const Search: React.FC<SearchProps> = ({ }) => {
	return (
		<div className="search-container" style={{
			position: 'relative',
			width: '100%',
			maxWidth: '100%',
			padding: '0 10px',  // Add padding to prevent touching edges
		}}>
			<svg
				style={{
					position: 'absolute',
					top: '50%',
					left: '22px', // Adjusted to account for container padding
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
				style={{
					width: '100%',
					padding: '12px 20px 12px 40px',
					fontSize: '16px',
					border: '1px solid #dfe1e5',
					borderRadius: '8px',
					boxShadow: '0 1px 6px rgba(32, 33, 36, 0.18)',
					outline: 'none',
					transition: 'all 0.3s',
					boxSizing: 'border-box', // This fixes the width calculation
				}}
			/>
		</div>
	);
}

export default Search;
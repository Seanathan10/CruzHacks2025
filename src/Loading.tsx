
export function Loading() {
    return (
        <div className="loading">
            <div className="loading-spinner"></div>
            <div className="loading-text"></div>
        </div>
    );
}

export function Error() {
    return (
    <div className="loading">
        <div className="loading-text">Error loading menu</div>
    </div>
    )
}

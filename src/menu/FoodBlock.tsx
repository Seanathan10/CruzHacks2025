const style = {
    background: 'gold',
    color: 'black',
    width: '145px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
}

export default function FoodBlock({children}: {children: String}) {
    return (
        <div style={style}>
            {children}
        </div>
    );
}
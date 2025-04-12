export default function FoodBlock({children}: {children: String}) {
    return (
        <div style={{background: 'gold', color: 'black', maxWidth: '200px'}}>
            {children}
        </div>
    );
}
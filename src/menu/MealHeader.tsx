export default function MealHeader({children}: {children: string}) {
    // Dinner
    return (
        <h2 style={{justifyContent: 'center'}}>{children}</h2>
    );
}
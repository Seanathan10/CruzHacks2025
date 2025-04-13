export default function MealHeader({children}: {children: string}) {
    // Dinner
    return (
        <div className="mealName" style={{justifyContent: 'center', marginBottom: 0, marginTop: 0, fontWeight: 'bold', fontSize: 22}}>{children}</div>
    );
}
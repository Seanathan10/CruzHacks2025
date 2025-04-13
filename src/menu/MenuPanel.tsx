
import { Menu } from "./api"
import FoodBlock from "./FoodBlock"
import MealHeader from "./MealHeader"

interface MenuPanelProps {
    menu: Menu
    width?: string
}

export function MenuPanel(props: MenuPanelProps) {
    return (
        <div className={'menuPanel'} style={{width: props.width ?? '100%', marginLeft: '2.5%', maxHeight: '80%', top: '130px',
            padding: 0, borderRadius: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            display: 'flex', flexDirection: 'column', position: 'fixed', overflowY: 'scroll',
            minWidth: '350px'}}>
        {Object.entries(props.menu).map(([mealName, meal]) => (
            <>
            <div>
                <MealHeader key={mealName}>{mealName}</MealHeader>
            </div>
            <div>
                {Object.entries(meal).map(([groupName, foodGroup]) => (
                    <>

                    <h4>{groupName}</h4>
                    <div>
                        {Object.entries(foodGroup).map(([foodName, foodItem]) => (
                            <FoodBlock key={foodName}>{foodItem}</FoodBlock>
                        ))}
                    </div>
                    </>
                ))}
            </div>
            </>
        ))}
        </div>
    )
}
    
    
    
    // export function MenuPanel(props: MenuPanelProps) {
    //     return (
    //         <>
    //         {Object.entries(props.menu).map(([mealName, meal]) => (
    //             <div key={mealName}>
    //             <h2>{mealName}</h2>
    //             {Object.entries(meal).map(([groupName, foodGroup]) => (
    //                 <div key={groupName}>
    //                 <h3>{groupName}</h3>
    //                 <ul>
    //                 {Object.entries(foodGroup).map(([foodName, foodItem]) => (
                        
    //                 ))}
    //                 </ul>
    //                 </div>
                    
    //             ))}
    //             </div>
    //         ))}
    //         </>
    //     )
    // }
    
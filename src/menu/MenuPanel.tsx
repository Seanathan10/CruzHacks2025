
import { Menu } from "./api"
import FoodBlock from "./FoodBlock"
import MealHeader from "./MealHeader"

interface MenuPanelProps {
    menu: Menu
    name: string
    width?: string
}

export function MenuPanel(props: MenuPanelProps) {
    const locationMenus = Object.entries(props.menu)
    return (
        <div className={'menuPanel'} style={{width: props.width ?? '100%', marginLeft: '2.5%', maxHeight: '80%', top: '130px',
            padding: 0, borderRadius: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            display: 'flex', marginTop: 100, flexDirection: 'column', overflowY: 'scroll',
            minWidth: '400px'}}>
        <p style={{fontSize: 30, fontWeight: 'bold'}}>{props.name}</p>
        {locationMenus.length > 0 ? locationMenus.map(([mealName, meal]) => (
            (meal && Object.keys(meal).length > 0) ? <>
                <div>
                    <MealHeader key={mealName}>{mealName}</MealHeader>
                </div>
                <div>
                    {Object.entries(meal).map(([groupName, foodGroup]) => (
                        <>
                        <h4 className="groupName" style={{display: 'flex', marginLeft: 50, justifyContent: 'flex-start'}}>{groupName}</h4>
                        <div>
                            {Object.entries(foodGroup).map(([foodName, foodItem]) => (
                                <FoodBlock key={foodName}>{foodItem}</FoodBlock>
                            ))}
                        </div>
                        </>
                    ))}
                </div>
            </> : null
        )) : null}
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
    
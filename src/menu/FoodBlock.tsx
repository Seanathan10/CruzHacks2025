import {FoodItem} from "./api";

const style = {
    // background: va,
    // color: 'black',
    fontSize: '0.9rem',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'wrap',
    whiteSpace: 'nowrap',
    paddingTop: 0,
    paddingBottom: 0,
    // paddingVertical: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}

export default function FoodBlock({children}: {children: FoodItem}) {
    // console.log('children in the food block', children);
    return (
        <div style={style} className="foodBlock" key={children.name}>
            <div>
                <p style={{justifySelf: 'flex-start', marginLeft: 20}}>{children.name}</p>
            </div>
            
            <div style={{display: 'flex', justifyContent: 'flex-end',
                alignItems: 'center', marginRight: 20}}>
                {children.restrictions.map((restriction: string) => (
                    <span style={{margin: 2.5, fontSize: 20}} key={restriction}>{restriction}</span>
                ))}
            </div>
        </div>
    );
}
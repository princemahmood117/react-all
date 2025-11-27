import { useState } from "react";
import PlaceTree from "./PlaceTree";
import { normalizeData } from "./data/normalizeData";


const TravelPlan = () => {

    const [plan, setPlan] = useState(normalizeData)

    const root = plan[0]

    const planetIds = root.childIds;

    // const handleDelete = (parentId, chilId) => { 
    //     const parent = plan[parentId]

    //     const nextParent = {
    //         ...parent,
    //         childIds : parent.childIds.filter((id) => id !== chilId )
    //     }

    //     setPlan({
    //         ...plan,
    //         [parentId] : nextParent,
    //     })
    // }
    const handleDelete = (parentId, childId) => { 
    console.log('🗑️ Deleting:', { parentId, childId });
    console.log('Parent before:', plan[parentId]);
    
    const parent = plan[parentId];

    const nextParent = {
        ...parent,
        childIds: parent.childIds.filter((id) => id !== childId)
    };
    
    console.log('Parent after:', nextParent);

    setPlan({
        ...plan,
        [parentId]: nextParent,
    });
};

    return (
        <div>
            <h1>Places to visit</h1>


            <ol>
                
                {planetIds.map((placeId) => (
                     <PlaceTree parentId={0} handleDelete={handleDelete} placeId={placeId} id={placeId} placesById={plan} key={placeId}></PlaceTree>
                ))}
            </ol>
        </div>
    );
};

export default TravelPlan;
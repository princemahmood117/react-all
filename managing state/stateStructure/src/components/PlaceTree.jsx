
const PlaceTree = ({id, placesById, handleDelete, parentId}) => {

    const place = placesById[id]

    const childIds = place.childIds
    return (
        <li className="ml-2">
            {place.title}

            <button onClick={()=> handleDelete(parentId , id)}>Delete</button>

            {childIds.length > 0 && (
                <ol>
                    {childIds.map((id) => (
                        <PlaceTree parentId={parentId} handleDelete={handleDelete} id={id} placesById={placesById} key={id}></PlaceTree>
                    ))}
                </ol>
            )}
        </li>
    );
};

export default PlaceTree;
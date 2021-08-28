import React, { useState, useEffect } from 'react'

// const User = ({id, name, ...props}) => {
//     console.log(props);
//     return (
//         <div>
//             <h1>User</h1>
//             <div>{id}</div>
//             <div>{name}</div>
//         </div>
//     );
// }

const User = () => {
    const [id, setId] = useState(1);

    useEffect(() => {
        setId(3)
    }, []);

    const handle = () => {
        setId(id + 2)
    }

    return (
        <div>
            <h1>State</h1>
            <div>id: {id}</div>
            <button onClick={handle}>id set 2</button>
        </div>
    );
}

export default User;

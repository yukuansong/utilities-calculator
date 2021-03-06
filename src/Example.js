import React, {useState}  from "react";

const Example = () => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Your clicked {count} times</p>
            <button type="button" onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    )
}

export default Example;
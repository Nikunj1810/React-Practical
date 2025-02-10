import { useState } from "react";

function StateExamp1() {
    const [name, setName] = useState("Nikunj");
    const [age, setAge] = useState(20);
    const [color, setColor] = useState("red");

    const handleAgeChange = (e) => {
        const newAge = Number(e.target.value);
        if (newAge !== 0) {
            setAge(newAge);
        }
    };

    return (
        <div>
            <h2>Candidate Information</h2>

            {/* Name Input */}
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <p>Name of candidate is: {name}</p>

            {/* Age Input */}
            <label>
                Age:
                <input
                    type="number"
                    value={age}
                    onChange={handleAgeChange}
                    min="1"
                />
            </label>
            <p>Age of candidate is: {age}</p>

            {/* Color Selection */}
            <div>
                <p>Choose a background color:</p>
                <label>
                    <input
                        type="radio"
                        name="color"
                        onChange={() => setColor("blue")}
                    />
                    Blue
                </label>
                <label>
                    <input
                        type="radio"
                        name="color"
                        onChange={() => setColor("yellow")}
                    />
                    Yellow
                </label>
                <label>
                    <input
                        type="radio"
                        name="color"
                        onChange={() => setColor("green")}
                    />
                    Green
                </label>
            </div>
            <p style={{ background: color, height: "50px", textAlign: "center" }}>
                Background color is: {color}
            </p>

            {/* Name with Font Size as Age */}
            <div>
                <p style={{ fontSize: `${age}px`, color }}>
                    Name with dynamic font size: {name}
                </p>
            </div>

            {/* Final Display */}
            <h1>Summary</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
}

export default StateExamp1;

import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input
                id="title"
                type="text"
                placeholder="title"
                onChange={(e) => {
                    const value = e.target.value;
                    setTitle(value);
                }}
            />
            <br />
            <input
                id="description"
                type="text"
                placeholder="description"
                onChange={(e) => {
                    const value = e.target.value;
                    setDescription(value);
                }}
            />
            <br />
            <button
                onClick={() => {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description,
                        }),
                        headers: {//fetch does not tell ur backend that this is json data.
                            "Content-Type": "application/json", // Fix header name
                        },
                    }
                )
                        .then(async function (res) {
                            if (res.ok) {
                                alert("Todo added");
                            } else {
                                alert("Failed to add todo");
                            }
                        })
                        .catch((error) => {
                            console.error("Error:", error);
                            alert("Error adding todo");
                        });
                }}
                >
                Add a todo
            </button>
        </div>
    );
}

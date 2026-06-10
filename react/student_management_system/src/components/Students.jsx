import React, { useState } from 'react';

function Students() {

    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [branch, setBranch] = useState("");
    const [editId, setEditId] = useState(null);

    const addStudent = () => {

        if (name === "" || branch === "") {
            alert("Please fill all fields");
            return;
        }

        const newStudent = {
            id: Date.now(),
            name: name,
            branch: branch
        };

        setStudents([...students, newStudent]);

        setName("");
        setBranch("");
    };

    const deleteStudent = (id) => {

        const updatedStudents = students.filter(
            (student) => student.id !== id
        );

        setStudents(updatedStudents);
    };

    const updateStudent = () => {

        const updatedStudents = students.map((student) => {

            if (student.id === editId) {
                return {
                    ...student,
                    name: name,
                    branch: branch
                };
            }

            return student;
        });

        setStudents(updatedStudents);

        setEditId(null);
        setName("");
        setBranch("");
    };

    return (
        <>
            <h2>Student Information</h2>

            <input
                type="text"
                placeholder="Enter Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br />

            <input
                type="text"
                placeholder="Enter Branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
            />

            {
                editId === null ? (
                    <button onClick={addStudent}>
                        Add Student
                    </button>
                ) : (
                    <button onClick={updateStudent}>
                        Update Student
                    </button>
                )
            }

            {students.map((student) => (
                <div key={student.id}>
                    <h3>{student.name}</h3>
                    <p>{student.branch}</p>

                    <button
                        onClick={() => {
                            setEditId(student.id);
                            setName(student.name);
                            setBranch(student.branch);
                        }}
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => deleteStudent(student.id)}
                    >
                        Delete
                    </button>

                </div>
            ))}
        </>
    );
}

export default Students;
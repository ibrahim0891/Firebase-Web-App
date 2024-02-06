/* eslint-disable no-unused-vars */
import { useState } from "react"
import { db } from "../firebase";

function Writedata() {
    const [userData, setUserData] = useState({
        name: '',
        roll: ''
    })

    const updateData = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        setUserData({ ...userData, [fieldName]: fieldValue })
    }
    const submitData = (e) => {
        console.log(userData);
        const { name, roll } = userData;
        e.preventDefault()
        fetch(
            "https://reactlab-5741c-default-rtdb.firebaseio.com/Username.json",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    { name, roll }
                )
            }
        )
    }
    return (
        <>
            <h1 className="bg-blue-600 text-white p-4">{'{App Header}'}</h1>

            <form action="" className="p-12 m-12 border flex flex-col space-y-6 w-[360px] mx-auto">
                <h1 className="text-center text-3xl font-light">Enter Your Name:</h1>

                <input className="border p-4 " type="text" name="name" onChange={updateData} />
                <input className="border p-4 " type="number" name="roll" onChange={updateData} />
                <button className="bg-amber-500 text-white p-4" onClick={submitData}>Submit</button>
            </form>
        </>
    )
}

export default Writedata;

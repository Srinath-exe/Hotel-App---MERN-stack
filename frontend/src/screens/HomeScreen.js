import React, { useState, useEffect } from 'react'
import axios from "axios";

function HomeScreen() {
    const[rooms,setrooms] = useState([])

    useEffect(async () => {
        try {
            const data = await (await (axios.get('/api/rooms/getallrooms'))).data
            setrooms(data)
            
        } catch (error) {
            console.log(error)
        }

    }, [])


    return (
        <div>
                <h1>
                    There are total {rooms.length}
                </h1>


        </div>
    )
}

export default HomeScreen 
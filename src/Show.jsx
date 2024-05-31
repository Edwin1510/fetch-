import { useState } from "react"

const Show = ({ name, email, Handledelete, id, handleSubmit }) => {

    const [formdata, setformdata] = useState({
        name: "",
        email: ""
    })

    const [isEditing, setEditing] = useState(false)


    const handleEdit = () => {
        setformdata({
            name: name,
            email: email
        })
        setEditing(true)
    }

    const handleChange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const HandleClick = () => {
        handleSubmit(id, formdata.name, formdata.email)
        setEditing(false);
    }

    return (


        <>
            {isEditing ? (<>
                <input type="text" name="name" value={formdata.name} onChange={handleChange} /><br />
                <input type="text" name="email" value={formdata.email} onChange={handleChange} />
                <button onClick={HandleClick}>Submit</button>
            </>)
                : (<>
                    <h1>{name}</h1>
                    <h1>{email}</h1>
                    <button onClick={() => Handledelete(id)}>Delete</button>
                    <button onClick={handleEdit}>Edit</button>
                </>)
            }
        </>
    )
}

export default Show

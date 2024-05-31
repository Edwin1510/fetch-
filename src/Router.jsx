const Backenturl = "https://jsonplaceholder.typicode.com/users"

const Getapi = async () => {
    try {
        const response = await fetch(`${Backenturl}`)
        const data = await response.json()
        return data
    } catch (e) {
        console.log(e)
    }
}


const Deleteapi = async (id) => {
    try {
        const response = await fetch(`${Backenturl}/${id}`, {
            method: "DELETE"
        })
        const data = await response.json()
        return data
    } catch (e) {
        console.log(e)
    }
}

const UpdateApi = async (id, Data) => {
    const response = await fetch(`${Backenturl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Data }),
    });

    if (!response.ok) {
        throw new Error('Failed to update');
    }

    return await response.json();
};

export { Getapi, Deleteapi, UpdateApi }


import { useEffect, useState } from "react";
import "./App.css";
import { Deleteapi, Getapi, UpdateApi } from "./Router";
import Show from "./Show";

function App() {

  const [Apidata, setApidata] = useState([])

  const Getdata = async () => {
    const data = await Getapi()
    setApidata(data)
  }

  useEffect(() => {
    Getdata()
  }, [])

  const Handledelete = async (id) => {
    await Deleteapi(id)
    setApidata(Apidata.filter((p) => p.id !== id))
  }

  const handleSubmit = async (id, newName, newEmail) => {
    await UpdateApi(id, newName, newEmail);
    setApidata(
      Apidata.map((p) =>
        p.id === id ? { ...p, name: newName, email: newEmail } : p
      )
    );
  };

  return (
    <>
      {console.log(Apidata)}
      <div className="container">
      {Apidata.map((p) => {
        return (
          
          <Show {...p} key={p.id} Handledelete={Handledelete}
            handleSubmit={handleSubmit} />
        )
      })}
    </div>
    </>
  );
}

export default App;

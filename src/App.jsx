import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      setErrorName("Insert this field");
    } else if (email === "") {
      setErrorEmail("Insert this field");
    } else if (password === "") {
      setErrorPassword("Insert this field");
    } else {
      setName("");
      setEmail("");
      setPassword("");
      setErrorName("");
      setErrorEmail("");
      setErrorPassword("");
      console.log(name, email, password);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    }
  };

  return (
    <frameElement>
      <div className="flex flex-col items-center justify-center bg-blue-200 h-screen">
        <h1 className="text-3xl  p-2 font-bold">Hello {name}</h1>
        <p className=" w-[60%] py-4 px-10 rounded-[1rem] text-center ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur,
          hic explicabo officia harum cumque, recusandae iure unde enim ducimus
          voluptatibus reiciendis dolorum vitae, consequuntur doloremque
          asperiores doloribus. Necessitatibus, quam temporibus!
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[40%] gap-4 mt-4 border-[2px] rounded-xl py-6 px-4 border-gray-200"
        >
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              className="py-2 px-4 rounded-[5px]"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
            {!name && <p className="text-red-500">{errorName}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="py-2 px-4 rounded-[5px]"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            {!email && <p className="text-red-500">{errorEmail}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="py-2 px-4 rounded-[5px]"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            {!password && <p className="text-red-500">{errorPassword}</p>}
          </div>
          <button className="bg-blue-300 w-fit self-center py-2 px-4 rounded-[5px] hover:bg-opacity-70 transition duration-500 ease-in-out hover:text-white">
            Sumbit
          </button>
          {success && (
            <p className="text-2xl text-green-100">Submitted successfully</p>
          )}
        </form>
      </div>
    </frameElement>
  );
}

export default App;

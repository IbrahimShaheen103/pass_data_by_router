import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigation = useNavigate();
  const [data, setData] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigation("/formResult", { state: data });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter your age"
        value={data.age}
        onChange={(e) => setData({ ...data, age: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Home;

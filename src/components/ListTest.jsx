import { useState } from "react";

const ListTest = ({ item }) => {
  const [ec, setEc] = useState("");

  return (
    <div>
      {item}:
      <input
        value={ec}
        onChange={(e) => {
          setEc(e.target.value);
        }}
      />
    </div>
  );
};

export default ListTest;

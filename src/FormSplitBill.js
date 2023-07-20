import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser || !paidByFriend) return; /* bug spotted fixed*/
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
    //if paid by me then that much added and if paid by him then my value subtracted
  }
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>Your expense</label>
      <input
        type="number"
        value={paidByUser}
        onChange={(e) => setPaidByUser(Number(e.target.value))}
      />
      {/* here a bug is posisble do it, if the value set is more than bill then friend bill becomes negative */}
      <label>{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label>Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(Number(e.target.value))}
      >
        <option value="user">You</option>
        <option value="friend">Friend</option>
      </select>
      <Button onClick={handleSubmit}>Split Bill!</Button>
    </form>
  );
}

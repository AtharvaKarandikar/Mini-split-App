import { useState } from "react";
import { Button } from "./Button";

export function FormAddFriend({ friendsList, addFriend }) {
  const [friendName, setFriendName] = useState("");
  const [url, setUrl] = useState("");
  function handleFriendNameChange(e) {
    setFriendName(e.target.value);
  }
  function handleUrlChange(e) {
    setUrl(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (friendName === "" || url === "") {
      window.alert("Write proper name and url");
      return;
    }
    addFriend({ id: Date.now(), name: friendName, url: url, balance: 0 });
  }
  return (
    <form className="form-add-friend">
      <label>Friend name</label>
      <input type="text" value={friendName} onChange={handleFriendNameChange} />
      <label>Image Url</label>
      <input type="text" value={url} onChange={handleUrlChange} />
      <Button onClick={handleSubmit}>Add</Button>
    </form>
  );
}

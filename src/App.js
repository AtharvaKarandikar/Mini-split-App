import { useState } from "react";
import { FormSplitBill } from "./FormSplitBill";
import { FormAddFriend } from "./FormAddFriend";
import { Button } from "./Button";
import { FriendsList } from "./FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  const [showAddfriend, setShowAddFriend] = useState(false);
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSplitBill(value) {
    setFriendsList((friends) =>
      friends.slice().map((friend) => {
        return friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend;
      })
    );
    setSelectedFriend(null);
  }
  function handleFriendSelection(friend) {
    setSelectedFriend(friend);
    setShowAddFriend(false);
  }
  function addFriend(friend) {
    setFriendsList((current) => [...current, friend]);
    setShowAddFriend(false);
  }
  function handleShowAddFriend(e) {
    e.preventDefault();
    setShowAddFriend((show) => !show);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friendsList={friendsList}
          selectedFriend={selectedFriend}
          handleFriendSelection={handleFriendSelection}
        />
        {showAddfriend && (
          <FormAddFriend friendsList={friendsList} addFriend={addFriend} />
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddfriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend !== null && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
export default App;

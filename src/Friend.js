import { Button } from "./Button";

export function Friend({ friend, selectedFriend, handleFriendSelection }) {
  function handleSelect(e) {
    e.preventDefault();
    handleFriendSelection(friend);
  }
  function handleSelectMakeNull(e) {
    e.preventDefault();
    handleFriendSelection(null);
  }
  return (
    <li>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)} Rs
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance} Rs
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even!</p>}

      {selectedFriend !== friend && (
        <Button onClick={handleSelect}>select</Button>
      )}
      {selectedFriend === friend && (
        <Button onClick={handleSelectMakeNull}>close</Button>
      )}
    </li>
  );
}

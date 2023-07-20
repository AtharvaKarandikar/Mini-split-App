import { Friend } from "./Friend";

export function FriendsList({
  friendsList,
  selectedFriend,
  handleFriendSelection,
}) {
  return (
    <ul>
      {friendsList.map((friend) => {
        return (
          <Friend
            friend={friend}
            selectedFriend={selectedFriend}
            handleFriendSelection={handleFriendSelection}
            key={friend.id}
          />
        );
      })}
    </ul>
  );
}

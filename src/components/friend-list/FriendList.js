
import friends from './friends.json';
import FriendListItem from './FriendListItem';

export default function FriendList() {
    return (
       <ul>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline} />) )}
            
        </ul>
           
    )
}




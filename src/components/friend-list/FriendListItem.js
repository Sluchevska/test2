import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export default function FriendListItem(props) {
  const { avatar, name, isOnline } = props
  const friendStatus = [isOnline ? s.online : s.offline]
   return (<li className={s.item}>
  {/* friendStatus.join(" ") */}
    <span className={friendStatus.join(" ")} >{ isOnline}</span>
  <img className={s.avatar} src={avatar} alt={name} width="48" />
    <p className={s.name}>{ name}</p>
</li>)
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
}




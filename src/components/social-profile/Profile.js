
import PropTypes from 'prop-types';
import s from './profile.module.css'


export default function Profile({name, tag, location, avatar, stats}) {
    return (
    <div className={s.profile}>
  <div className="description">
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={s.avatar}
    />
    <p className={s.name}>{name}</p>
    <p className={s.tag}>{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={s.stats}>
    <li className={s.stats_item}>
      <span className="label">Followers </span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li className={s.stats_item}>
      <span className="label">Views </span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li className={s.stats_item}>
      <span className="label">Likes </span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>)
    
}

Profile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object
}
 

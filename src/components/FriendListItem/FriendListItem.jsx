import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendCard}>
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        width="48"
        className={css.friendAvatar}
      />
      <p className={css.friendName}>{name}</p>
      <p
        className={`${css.friendStatus} ${isOnline ? css.online : css.offline}`}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;

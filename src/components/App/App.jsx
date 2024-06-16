import userData from '../../userData.json';
import Profile from '../Profile/Profile';

const App = () => {
  const { username, tag, location, avatar, stats } = userData;

  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
    </>
  );
};

export default App;

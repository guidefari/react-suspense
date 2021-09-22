import { fetchData } from '../Api';
import { Heading, Wrapper } from '../styles';

// instead of just bringing in a promise, look at what fetchData() returns
const resource = fetchData();

const ProfileDetails = () => {
  const user = resource.user.read();

  return (
    <Wrapper>
      <Heading>{user.name}</Heading>
      <ul>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
        <li>City: {user.address.city}</li>
      </ul>
    </Wrapper>
  );
};

export default ProfileDetails;

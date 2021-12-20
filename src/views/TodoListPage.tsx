import Navbar from '../components/Navbar';
import ProfileAvatar from '../components/ProfileAvatar';
import { Container, makeStyles, Typography } from '@material-ui/core';
import CopyrightFooter from '../components/CopyrightFooter';

const MyComponent = () => {
  return (
    <>
      <Navbar current_page={'TodoList'} />
      <ProfileAvatar />
      <CopyrightFooter />
    </>
  );
};

export default MyComponent;

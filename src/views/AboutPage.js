import React from 'react';
import Navbar from '../components/Navbar';
import ProfilePicture from '../components/ProfilePicture';
import Copyright from '../components/Copyright';

const about_me_text_1 =
  'I have been obsessed with computers, and technology in general, for ' +
  'as long as I can remember. I have done a little bit of everything from programming ' +
  'microcontrollers to standing up my own media server with dedicated network attached ' +
  'storage running on Linux. I have always enjoyed taking electronics apart, working on them, ' +
  'fixing whatever I did up to that point, and then putting it back together into something ' +
  'better than how I found it.';

const about_me_text_2 =
  'I enjoy full stack development but if I had to choose between front or back end ' +
  "it's an easy choice for me; back end. I am also passionate about Cybersecurity spend a " +
  'considerable amount of time ensuring my applications are secure. I am an open book, if ' +
  "you have any questions or inquiries for a bid on development work please don't hesitate " +
  'to reach out.';

const AboutPage = () => {
  document.title = 'AboutPage';
  return (
    <>
      <Navbar />
      <ProfilePicture />
      <div className="content_container">
        <p id="section_text">{about_me_text_1}</p>
      </div>
      <div className="content_container">
        <p id="section_text">{about_me_text_2}</p>
      </div>
      <Copyright />
    </>
  );
};

export default AboutPage;

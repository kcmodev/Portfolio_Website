import React from 'react';
import Navbar from '../components/Navbar';
import ProfileAvatar from '../components/ProfileAvatar';
import Copyright from '../components/Copyright';
import SkillAvatars from '../components/SkillAvatars';

const about_me_text_1 =
  'I have been obsessed with computers, and technology in general, for ' +
  'as long as I can remember. I have done a little bit of everything from programming ' +
  'microcontrollers to standing up my own media server with dedicated network attached ' +
  'storage running on Linux. I have always enjoyed taking electronics apart, working on them, ' +
  'fixing whatever I did up to that point, and then putting it back together into something ' +
  'better than how I found it.';

const about_me_text_2 =
  'I enjoy full stack development but if I had to choose between front or back end ' +
  "it's an easy choice for me; back end. I have always enjoyed working on the stuff under the hood (network routing, automation etc) " +
  'so I really enjoy working with things like Node.js and MongoDB as well. I am also passionate about Cybersecurity spend a ' +
  'considerable amount of time ensuring my applications are secure. I am an open book, if ' +
  "you have any questions or inquiries for a bid on development work or a potential job opportunity please don't hesitate " +
  'to reach out. Thanks for coming by.';

const AboutPage = () => {
  document.title = 'AboutPage';
  return (
    <>
      <Navbar />

      <section className={'container flex center-flex'}>
        <ProfileAvatar />
      </section>

      <section className={'container text-center'}>
        <p>{about_me_text_1}</p>
      </section>

      <section className={'container text-center'}>
        <p>{about_me_text_2}</p>
      </section>

      <section>
        <SkillAvatars
          props={{ python: true, java: true, javascript: true, node: true }}
        />
        <SkillAvatars props={{ react: true, html: true, css: true }} />
      </section>

      <Copyright />
    </>
  );
};

export default AboutPage;

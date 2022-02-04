import React from 'react';
import { Badge } from 'react-bootstrap';

const About = () => {
  return <div className='container mt-4'>
    <h1 className='display-3 font-weight-bold'>About <strong className='text-primary'>ToKiDoo</strong></h1>
    <p className='display-6'><Badge>ToKiDoo</Badge> is the best app for storing your todos.<br/> Develpment of this app started in the early 2022.Since then it is known to be the most powerful app with bunch of awesome features and cool looking design. Because of being a single page app it is very fast and responsive. <br /> 👉 You can save as many todos as you want & can mark them complete by clicking the <b>make done</b> button, or you can even delete todos if you no more need to store any task, this can be done by pressing on the <b>Delete</b> button. <br /> 👉 The tasks which are marked done get the badge <Badge bg="info"> ✓ Task Completed</Badge> under their title.</p>
    </div>;
};

export default About;

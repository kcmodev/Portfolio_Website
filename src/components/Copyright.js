import React from 'react';

const Copyright = () => {
  let copy = String.fromCharCode(169); // copyright char

  return (
    <>
      <div className="content_container">
        <p id="copyright_text">{copy} Steven Christensen 2021</p>
      </div>
    </>
  );
};

export default Copyright;

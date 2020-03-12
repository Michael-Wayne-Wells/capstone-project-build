import React, { useState, useRef } from "react";
import Editable from "./Editable";
import PropTypes from "prop-types";

function Contents(props) {
  const [section2, setSection2] = useState(props.section[1]);
  const [section1, setSection1] = useState(props.section[0]);
  const inputRef = useRef();
  return (
    <>
      <Editable
        text={section1}
        style={{ fontSize: "4vw" }}
        placeholder="Write a task name"
        childRef={inputRef}
        type="input"
      >
        <textarea
          rows="4"
          cols="20"
          ref={inputRef}
          type="section"
          name="section"
          placeholder="Write a new section"
          value={section1}
          onChange={e => setSection1(e.target.value)}
        />
      </Editable>
      <Editable
        text={section2}
        style={{ fontSize: "3vw" }}
        placeholder={section2}
        childRef={inputRef}
        type="input"
      >
        <textarea
          rows="4"
          cols="20"
          ref={inputRef}
          type="section"
          name="section"
          placeholder="Write a new section"
          value={section2}
          onChange={e => setSection2(e.target.value)}
        />
      </Editable>
    </>
  );
}
Contents.propTypes = {
  section: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired
};

export default Contents;

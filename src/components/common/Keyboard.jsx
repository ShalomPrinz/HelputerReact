import React, { useState } from "react";
import PropTypes from "prop-types";
import KeyboardEventHandler from "react-keyboard-event-handler";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

import Dropdown from "./Dropdown";

const english = {
  alt: "caps",
  name: "English",
  value: "default",
};
const hebrew = {
  name: "עברית",
  value: "hebrew",
};
const langs = [english, hebrew];

const AppKeyBoard = ({ listen, onListenComplete }) => {
  const [layout, setLayout] = useState(hebrew.value);
  const [previousEvent, setPreviousEvent] = useState("");

  const shiftPressed = (event) => {
    if ((event === "down" || event === "up") && previousEvent !== event)
      toggleCapsMode();

    setPreviousEvent(event);
  };

  const toggleCapsMode = () =>
    setLayout(layout === english.value ? english.alt : english.value);

  return (
    <>
      <KeyboardEventHandler
        handleFocusableElements
        handleKeys={[listen]}
        onKeyEvent={onListenComplete}
      />
      <KeyboardEventHandler
        handleEventType="keydown"
        handleFocusableElements
        handleKeys={["shift", "cap"]}
        onKeyEvent={(key) =>
          key === "shift" ? shiftPressed("down") : toggleCapsMode()
        }
      />
      <KeyboardEventHandler
        handleEventType="keyup"
        handleFocusableElements
        handleKeys={["shift"]}
        onKeyEvent={() => shiftPressed("up")}
      />
      <Dropdown
        className="my-2"
        headline={layout === hebrew.value ? "שפה" : "Language"}
        onSelect={(key) => setLayout(langs[key].value)}
        options={langs}
      />
      <Keyboard {...keyboardOptions} baseClass="keyboard" layoutName={layout} />
    </>
  );
};

AppKeyBoard.defaultProps = {
  listen: "",
  onListenComplete: function () {},
};

AppKeyBoard.propTypes = {
  listen: PropTypes.string,
  onListenComplete: PropTypes.func,
};

const commonOptions = {
  theme: "simple-keyboard hg-theme-default",
  physicalKeyboardHighlight: true,
  syncInstanceInputs: true,
  mergeDisplay: true,
};

const keyboardOptions = {
  ...commonOptions,
  layout: {
    default: [
      "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
      "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
      "{tab} q w e r t y u i o p [ ] \\",
      "{capslock} a s d f g h j k l ; ' {enter}",
      "{shiftleft} z x c v b n m , . / {shiftright}",
      "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}",
    ],
    caps: [
      "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
      "~ ! @ # $ % ^ & * ( ) _ + {backspace}",
      "{tab} Q W E R T Y U I O P { } |",
      '{capslock} A S D F G H J K L : " {enter}',
      "{shiftleft} Z X C V B N M < > ? {shiftright}",
      "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}",
    ],
    hebrew: [
      "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
      "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
      "{tab} / ' ק ר א ט ו ן ם פ [ ] \\",
      "{capslock} ש ד ג כ ע י ח ל ך ף , {enter}",
      "{shiftleft} ז ס ב ה נ מ צ ת ץ . {shiftright}",
      "{controlleft} {altleft} {metaleft} {space} {metaright} {altright}",
    ],
  },
  display: {
    "{escape}": "Esc",
    "{tab}": "Tab",
    "{backspace}": "Backspace ⌫",
    "{enter}": "Enter ↵",
    "{capslock}": "Caps Lock",
    "{shiftleft}": "Shift",
    "{shiftright}": "Shift",
    "{controlleft}": "Ctrl",
    "{controlright}": "Ctrl",
    "{altleft}": "Alt",
    "{altright}": "Alt",
    "{metaleft}": "cmd ⌘",
    "{metaright}": "cmd ⌘",
  },
};

export default AppKeyBoard;

import React, { useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const AppKeyBoard = (props) => {
  const [layout, setLayout] = useState("hebrew");
  const [previousEvent, setPreviousEvent] = useState("");

  const shiftPressed = (event) => {
    if ((event === "down" || event === "up") && previousEvent !== event)
      toggleCapsMode();

    setPreviousEvent(event);
  };

  const toggleCapsMode = () =>
    setLayout(layout === "default" ? "caps" : "default");

  return (
    <>
      <KeyboardEventHandler
        handleEventType="keydown"
        handleKeys={["shift", "cap"]}
        onKeyEvent={(key, e) =>
          key === "shift" ? shiftPressed("down") : toggleCapsMode()
        }
      />
      <KeyboardEventHandler
        handleEventType="keyup"
        handleKeys={["shift"]}
        onKeyEvent={(key, e) => shiftPressed("up")}
      />
      <Keyboard {...keyboardOptions} baseClass="keyboard" layoutName={layout} />
    </>
  );
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

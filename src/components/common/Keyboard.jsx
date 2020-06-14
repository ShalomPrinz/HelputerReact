import React, { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const AppKeyBoard = () => {
  const [layout, setLayout] = useState("default");

  const onKeyPress = (button) => {
    if (capsButtons.includes(button)) toggleCapsMode();
  };

  const onKeyReleased = (button) => {
    if (shiftButtons.includes(button)) setTimeout(toggleCapsMode, 300);
  };

  const toggleCapsMode = () =>
    setLayout(layout === "default" ? "caps" : "default");

  return (
    <Keyboard
      {...keyboardOptions}
      baseClass="keyboard"
      layoutName={layout}
      onKeyReleased={(button) => onKeyReleased(button)}
      onKeyPress={(button) => onKeyPress(button)}
    />
  );
};

const shiftButtons = ["{shift}", "{shiftleft}", "{shiftright}"];
const capsButtons = [...shiftButtons, "{capslock}"];

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

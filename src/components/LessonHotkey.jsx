import React from "react";
import { Link } from "react-router-dom";

import { learnHotkeysUrl } from "../constants";
import { getHotkey } from "../services/lessonsService";
import Icon, { icons } from "./common/Icon";
import Popover from "./common/Popover";

const LessonHotkey = ({ item: lesson, selected }) => {
  const { hotkey, description } = getHotkey(lesson);
  const icon = <Icon color={selected && "white"} icon={icons.faLightbulb} />;

  return (
    <Popover description={description} item={lesson}>
      {hotkey ? (
        <Link to={learnHotkeysUrl + "/" + hotkey.name}>{icon}</Link>
      ) : (
        icon
      )}
    </Popover>
  );
};

export default LessonHotkey;

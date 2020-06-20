import React from "react";
import { Link } from "react-router-dom";

import { learnHotkeysUrl } from "../constants";
import { getHotkey } from "../services/lessonsService";
import Icon, { icons } from "./common/Icon";
import Popover from "./common/Popover";

const LessonHotkey = ({ item: lesson, selected }) => {
  const { hotkey, description } = getHotkey(lesson);
  const color = selected ? "white" : undefined;
  const icon = <Icon color={color} icon={icons.faLightbulb} />;

  return (
    <div className="ml-2">
      <Popover description={description} item={lesson}>
        {hotkey ? (
          <Link
            to={learnHotkeysUrl + "/" + hotkey.name}
            onClick={(e) => e.stopPropagation()}
          >
            {icon}
          </Link>
        ) : (
          icon
        )}
      </Popover>
    </div>
  );
};

export default LessonHotkey;

import { randomProperty } from "../utils/object";
import { shuffle } from "../utils/array";
import hotkeys from "./hotkeysService";

const lessonsLists = require("../data/lessons.json");

const topicDictionary = {
  TextDesign: "עיצוב טקסט",
  PageBasics: "פעולות בסיסיות",
  BasicDesign: "עיצוב בצבע",
  Listing: "רשימה",
  Headline: "כותרת",
  DocumentManagement: "ניהול מסמך",
  AdvancedText: "טקסט מתקדם",
  ParagraphDesign: "עיצוב פסקאות",
  AdvancedEditing: "עריכה מתקדמת",
};

export const randomLesson = () => {
  const list = lessonsLists[randomProperty(topicDictionary)];
  return list[Math.floor(Math.random() * list.length)];
};

export const randomLessons = () => {
  let all = [];
  Object.entries(lessonsLists).forEach(
    ([subject, list]) => (all = all.concat(list))
  );
  return shuffle(all);
};

export const getHotkey = (lesson) => {
  const hotkey = hotkeys.find((h) => h.name === lesson.name) || null;
  const description = hotkey
    ? "לחץ על מנת לעבור לקיצור המקשים"
    : "לא נמצא קיצור מקשים לפעולה זו";

  return { hotkey, description };
};

export const getLesson = (topic, id) =>
  lessonsLists[topicDictionary[topic]].find((l) => l.id === id);

export const lessonFinished = (lesson) => (lesson.finished = true);

export const fieldToSearch = "name";
export default lessonsLists;

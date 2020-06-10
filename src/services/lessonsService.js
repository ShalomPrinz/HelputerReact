import { randomProperty } from "../utils/object";
import { shuffle } from "../utils/array";

const lessonsLists = {
  "עיצוב טקסט": [
    {
      id: 1,
      name: "גודל גופן",
      type: "ComboBox",
    },
    {
      id: 2,
      name: "הגדל גופן",
      type: "Button",
    },
    {
      id: 3,
      name: "כווץ גופן",
      type: "Button",
    },
    {
      id: 4,
      name: "גופן",
      type: "ComboBox",
    },
    {
      id: 5,
      name: "מודגש",
      type: "Button",
    },
    {
      id: 6,
      name: "נטוי",
      type: "Button",
    },
    {
      id: 7,
      name: "קו תחתון",
      type: "SplitButton",
    },
  ],
  "פעולות בסיסיות": [
    {
      id: 1,
      name: "ישר לימין",
      type: "Button",
    },
    {
      id: 2,
      name: "מרכז",
      type: "Button",
    },
    {
      id: 3,
      name: "ישר לשמאל",
      type: "Button",
    },
    {
      id: 4,
      name: "ישר לשני הצדדים",
      type: "Button",
    },
    {
      id: 5,
      name: "העתק",
      type: "Button",
    },
    {
      id: 6,
      name: "הדבק",
      type: "SplitButton",
    },
    {
      id: 7,
      name: "גזור",
      type: "Button",
    },
    {
      id: 8,
      name: "בטל",
      regex: "^בטל|אין אפשרות לבטל",
      type: "SplitButton",
    },
  ],
  "עיצוב בצבע": [
    {
      id: 1,
      name: "צבע גופן",
      type: "SplitButton",
    },
    {
      id: 2,
      name: "צבע סימון טקסט",
      type: "SplitButton",
    },
    {
      id: 3,
      name: "מברשת עיצוב",
      type: "Button",
    },
    {
      id: 4,
      name: "הצללה",
      type: "SplitButton",
    },
    {
      id: 5,
      name: "אפקטי טקסט וטיפוגרפיה",
      type: "MenuItem",
    },
  ],
};

const topicDictionary = {
  TextDesign: "עיצוב טקסט",
  PageBasics: "פעולות בסיסיות",
  BasicDesign: "עיצוב בצבע",
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

export const getLesson = (topic, id) =>
  lessonsLists[topicDictionary[topic]].find((l) => l.id === id);

export const lessonFinished = (lesson) => (lesson.finished = true);

export default lessonsLists;

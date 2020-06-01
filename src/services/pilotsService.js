import { getLesson } from "./lessonsService";

const references = [
  {
    title: "Basic Headline",
    description: "כותרת מודגשת במרכז העמוד בגודל 20",
    lessons: ["TextDesign:1", "TextDesign:5", "PageBasics:2"],
  },
];

const pilots = {};

const convertPilot = (target) => {
  const [topic, id] = target.split(":");
  return getLesson(topic, Number(id));
};

references.forEach((ref) => {
  pilots[ref.title] = ref.lessons.map((l) => convertPilot(l));
});

export default pilots;

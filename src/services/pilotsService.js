import { getLesson, lessonFinished, fieldToSearch } from "./lessonsService";

export const ultimate = {
  title: "הטייס של Helputer",
  description: "טייס הבית - הטייס האולטימטיבי, איתך לאורך כל הדרך",
};

const references = [
  {
    title: "כותרת בסיסית",
    description: "כותרת מודגשת במרכז העמוד בגודל 20",
    lessons: ["TextDesign:1", "TextDesign:5", "PageBasics:2"],
    progress: 0,
  },
];

const pilots = {};

const convertPilot = (target) => {
  const [topic, id] = target.split(":");
  return getLesson(topic, Number(id));
};

references.forEach((ref) => {
  pilots[ref.title] = [
    ref.lessons.map((l) => convertPilot(l)),
    ref.description,
    ref.progress,
  ];
});

export const finished = (topic, lesson) => {
  lessonFinished(lesson);

  const pilot = pilots[topic];
  const step = 100 / pilot[0].length;
  pilot[2] += step;
  return pilot[2];
};

export { fieldToSearch };
export default pilots;

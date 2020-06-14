import { getLesson, lessonFinished, fieldToSearch } from "./lessonsService";

export const ultimate = {
  title: "Helputer Ultimate Pilot",
  description: "טייס הבית - הטייס האולטימטיבי, איתך לאורך כל הדרך",
};

const references = [
  {
    title: "Basic Headline",
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
};

export { fieldToSearch };
export default pilots;

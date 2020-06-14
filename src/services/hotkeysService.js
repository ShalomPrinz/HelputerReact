const sampleHotkeys = [
  "בטל, Ctrl+, Z",
  "הגדל גופן בנקודה אחת, Ctrl+, [",
  "שמור, Ctrl+, S",
  "נטוי, Ctrl+, I",
];

let id = 0;

const hotkeys = sampleHotkeys.map((hotkey) => {
  const [name, combination, key] = hotkey.split(", ");
  return { name, combination, key, id: id++ };
});

export default hotkeys;

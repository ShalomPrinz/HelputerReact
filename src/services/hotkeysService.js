const sampleHotkeys = [
  "בטל, Ctrl+, Z",
  "הגדל גופן בנקודה אחת, Ctrl+, [",
  "שמור, Ctrl+, S",
  "נטוי, Ctrl+, I",
];

const hotkeys = sampleHotkeys.map((hotkey) => {
  const [name, combination, key] = hotkey.split(", ");
  return { name, combination, key };
});

export default hotkeys;

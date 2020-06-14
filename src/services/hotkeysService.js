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

export const fieldToSearch = "name";
export default hotkeys;

export const explanation =
  "לחץ על המקשים המופיעים למעלה לפי הסדר משמאל לימין. השאר את המקשים לחוצים עד ללחיצה על המקש האחרון על מנת להפעיל את קיצור המקשים כראוי.";

export default function truncateStrind(text = "", length = 70) {
  return text.length > length ? `${text.slice(0, length)}...` : text;
}

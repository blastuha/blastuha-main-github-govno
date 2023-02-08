export function paginate(items, pagNumber, pageSize) {
  const startIndex = (pagNumber - 1) * pageSize;
  return [...items].splice(startIndex, pageSize);
}

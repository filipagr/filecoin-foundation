export function normalizeString(str: string) {
  return str
    .normalize('NFD') // Normalize to decomposed form
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritical marks
    .replace(/[‘’´`]/g, "'") // Replace various apostrophes with standard apostrophe
    .replace(/[“”]/g, '"') // Replace curly double quotes with straight double quotes
    .replace(/[\u2018\u2019]/g, "'") // Replace curly single quotes with straight single quotes
    .replace(/[\u2013\u2014]/g, '-') // Replace en dash and em dash with hyphen
    .replace(/[\u2026]/g, '...') // Replace ellipsis character with three periods
    .replace(/\s+/g, ' ') // Normalize all spaces to regular space
    .toLowerCase() // Convert to lowercase
}

/**
 * Security utility functions for input validation and sanitization
 */

/**
 * Validates if a string is a valid hex color code
 * @param color - The color string to validate
 * @returns The validated color or a fallback color
 */
export const validateHexColor = (color: string): string => {
  const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;
  if (hexColorRegex.test(color)) {
    return color;
  }
  // Fallback to a safe default color
  return '#6B7280';
};

/**
 * Validates an email address format
 * @param email - The email string to validate
 * @returns Boolean indicating if email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * Sanitizes search input to prevent potential issues
 * @param input - The search string to sanitize
 * @returns Sanitized string
 */
export const sanitizeSearchInput = (input: string): string => {
  // Trim whitespace and limit length
  return input.trim().slice(0, 100);
};

/**
 * Default placeholder image for failed image loads
 */
export const PLACEHOLDER_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiMxRjI5MzciLz48cGF0aCBkPSJNMTc1IDEyNUgyMjVWMTc1SDE3NVYxMjVaIiBmaWxsPSIjNEI1NTYzIi8+PHBhdGggZD0iTTE1MCAxNTBMMTc1IDEyNUwyMjUgMTc1TDI1MCAxNTBMMjUwIDIwMEgxNTBWMTUwWiIgZmlsbD0iIzRCNTU2MyIvPjxjaXJjbGUgY3g9IjE4NyIgY3k9IjEzNyIgcj0iMTIiIGZpbGw9IiM0QjU1NjMiLz48L3N2Zz4=';

/**
 * Handles image load errors by setting a placeholder
 * @param event - The error event from the img element
 */
export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>): void => {
  event.currentTarget.src = PLACEHOLDER_IMAGE;
  event.currentTarget.onerror = null; // Prevent infinite loop
};

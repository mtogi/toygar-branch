import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines and merges multiple class names using clsx and tailwind-merge
 * @param {string[]} inputs - List of class names or conditional class objects
 * @returns {string} - Merged class string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a price for display
 * @param {number} price - The price to format
 * @param {object} options - Formatting options
 * @returns {string} - Formatted price string
 */
export function formatPrice(price, options = {}) {
  const { locale = 'en-US', currency = 'USD' } = options
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)
}

/**
 * Creates a debounced version of a function
 * @param {Function} func - The function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
} 
// Regular expression to match a protocol part at the beginning of a URL
const PROTOCOL_REGEX = /^[^/:]+:\/*$/

// Regular expression to match the file protocol
const FILE_PROTOCOL_REGEX = /^file:\/\/\//

/**
 * Builds a URL string from an array of segments.
 * @param strArray An array of string segments representing the URL.
 * @returns The constructed URL string.
 */
function buildURLSegments(strArray: (string | string[])[]): string {
  const resultArray: string[] = []

  if (strArray.length === 0) return ''

  // Check if the first element is a string
  if (typeof strArray[0] !== 'string')
    throw new TypeError('Url must be a string. Received ' + strArray[0])

  // Combine the protocol if it's separate from the following segment
  if (strArray[0].match(PROTOCOL_REGEX) && strArray.length > 1) {
    const first = strArray.shift() as string
    strArray[0] = first + strArray[0]
  }

  // Handle file protocol URLs
  if (strArray[0].match(FILE_PROTOCOL_REGEX)) {
    strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1:///')
  } else {
    strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1://')
  }

  for (let i = 0; i < strArray.length; i++) {
    let segment: string | string[] = strArray[i]

    // Ensure segment is a string
    if (typeof segment !== 'string') {
      throw new TypeError('Url must be a string. Received ' + segment)
    }

    // Trim whitespace from the segment
    segment = segment.trim()

    // Skip empty segments
    if (segment === '') continue

    // Remove leading slashes for non-first segments
    if (i > 0) segment = segment.replace(/^\/+/, '')

    // Remove trailing slashes for non-last segments
    if (i < strArray.length - 1) {
      segment = segment.replace(/\/+$/, '')
    } else {
      segment = segment.replace(/\/+$/, '/')
    }

    resultArray.push(segment)
  }

  // Join segments to form the URL
  let str = resultArray.join('/')

  // Remove unnecessary slashes before query parameters or hash
  str = str.replace(/\/(\?|&|#[^!])/g, '$1')

  // Replace ? in parameters with &
  const parts = str.split('?')
  str = parts.shift() + (parts.length > 0 ? '?' : '') + parts.join('&')

  return str
}

/**
 * Builds a URL string from a list of segments.
 * @param args A list of string segments representing the URL.
 * @returns The constructed URL string.
 */
export default function buildURL(...args: (string | string[])[]): string {
  const segment = Array.isArray(args[0]) ? args[0] : args

  return buildURLSegments(segment)
}

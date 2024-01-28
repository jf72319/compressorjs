const { toString } = Object.prototype;

export default function isBlob(value) {
  if (value && value.constructor && (value.constructor.name === 'Blob' || value.constructor.name === 'File')) return true;

  if (typeof Blob === 'undefined') {
    return false;
  }

  return value instanceof Blob || toString.call(value) === '[object Blob]';
}

function binarySearchIterative(arr, targetElement) {
  let left = 0;
  let right = arr.length;

  let mid;

  while (left <= right) {
    mid = Math.round((left + right) / 2);

    if (targetElement === arr[mid]) {
      return true;
    } else if (targetElement < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}

function binarySearchRecursive(arr, targetElement, left = 0, right = arr.length) {
  if (left > right) {
    return false;
  }

  let mid = Math.round((left + right) / 2);

  if (arr[mid] === targetElement) {
    return true;
  } else if (targetElement < arr[mid]) {
    return binarySearchRecursive(arr, targetElement, left, mid - 1);
  } else {
    return binarySearchRecursive(arr, targetElement, mid + 1, right);
  }
}

module.exports = { binarySearchIterative, binarySearchRecursive };

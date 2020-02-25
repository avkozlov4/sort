function functa() { alert(2); }

function generateRandomInt(min = 0, max = 9) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);

  return rand;
}

new text

function getRandomArray(len) {
  var newArr = [];

  for (var i = 0; i < len; i++) {
    newArr.push(generateRandomInt());
  }

  return newArr;
}

// BUBBLE
function bubble(arr) {
  var swaped;

  if (arr.length === 1) {
    return arr;
  }

  do {
    swaped = false;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swaped = true;
      }
    }

  } while (swaped);

  return arr;
}

// MERGE SORT 
function merge(left, right){
  let result = [];
  let il = 0;
  let ir = 0;

  while (il < left.length && ir < right.length){
    if (left[il] < right[ir]){
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }

  return result.concat(left.slice(il)).concat(right.slice(ir));
}

function mergeSort(arr){
  if (arr.length <= 1) {
    return arr;
  }

  let mid = arr.length / 2;
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}


//INSERTION
function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var selected = arr[i];

    for (var j = i - 1; j >= 0 && (arr[j] > selected); j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = selected;
  }

  return arr;
}


let bubbleResult = bubble(getRandomArray(20));
let mergeResult = mergeSort(getRandomArray(7));
let insertionResult = insertionSort(getRandomArray(8));

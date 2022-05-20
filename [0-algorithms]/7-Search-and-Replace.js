function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before)
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1)
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1)
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after)

  return str
}

// test here
myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')
// *************************************************************************************
function myReplace(str, before, after) {
  // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }

  // return string with argument "before" replaced by argument "after" (with correct case)
  return str.replace(before, after)
}

// test here
myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')

// *************************************************************************************
function myReplace(str, before, after) {
  // create a function that will change the casing of any number of letter in parameter "target"
  // matching parameter "source"
  function applyCasing(source, target) {
    // split the source and target strings to array of letters
    var targetArr = target.split('')
    var sourceArr = source.split('')
    // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
    for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
      // find out the casing of every letter from sourceArr using regular expression
      // if sourceArr[i] is upper case then convert targetArr[i] to upper case
      if (/[A-Z]/.test(sourceArr[i])) {
        targetArr[i] = targetArr[i].toUpperCase()
      }
      // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
      else targetArr[i] = targetArr[i].toLowerCase()
    }
    // join modified targetArr to string and return
    return targetArr.join('')
  }

  // replace "before" with "after" with "before"-casing
  return str.replace(before, applyCasing(before, after))
}

// test here
myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')

// *************************************************************************************
String.prototype.capitalize =
  String.prototype.capitalize ||
  function () {
    return this[0].toUpperCase() + this.slice(1)
  }

const Util = (function () {
  // Create utility module to hold helper functions
  function textCase(str, tCase) {
    // Depending if the tCase argument is passed we either set the case of the
    // given string or we get it.
    // Those functions can be expanded for other text cases.

    if (tCase) {
      return setCase(str, tCase)
    } else {
      return getCase(str)
    }

    function setCase(str, tCase) {
      switch (tCase) {
        case 'uppercase':
          return str.toUpperCase()
        case 'lowercase':
          return str.toLowerCase()
        case 'capitalized':
          return str.capitalize()
        default:
          return str
      }
    }

    function getCase(str) {
      if (str === str.toUpperCase()) {
        return 'uppercase'
      }
      if (str === str.toLowerCase()) {
        return 'lowercase'
      }
      if (str === str.capitalize()) {
        return 'capitalized'
      }
      return 'normal'
    }
  }

  return {
    textCase
  }
})()

function myReplace(str, before, after) {
  const { textCase } = Util
  const regex = new RegExp(before, 'gi')
  const replacingStr = textCase(after, textCase(before))

  return str.replace(regex, replacingStr)
}

// *************************************************************************************

function myReplace(str, before, after) {
  const strArr = str.split(' ')
  const [wordToReplace] = strArr.filter(item => item === before)
  const replacement =
    wordToReplace[0] === wordToReplace[0].toUpperCase()
      ? after[0].toUpperCase() + after.slice(1)
      : after[0].toLowerCase() + after.slice(1)
  return strArr.map(item => (item === before ? replacement : item)).join(' ')
}

// test:
myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')

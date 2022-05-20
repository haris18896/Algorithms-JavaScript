function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i)

    /* if code of current character is not equal to first character + no of iteration
          hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1)
    }
  }
  return undefined
}

// test here
fearNotLetter('abce')
// *************************************************************************************
function fearNotLetter(str) {
  let currCharCode = str.charCodeAt(0)
  let missing = undefined

  str.split('').forEach(letter => {
    if (letter.charCodeAt(0) === currCharCode) {
      currCharCode++
    } else {
      missing = String.fromCharCode(currCharCode)
    }
  })

  return missing
}

// test here
fearNotLetter('abce')
// *************************************************************************************
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1)
    }
  }
}

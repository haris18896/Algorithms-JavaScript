function longestString(str) {
  let longest = ''
  for (let i = 0; i < str.length; i++) {
    let tempStr = ''
    for (let j = i; j < str.length; j++) {
      console.log('i : ', str[i], 'j : ', str[j])
    }
  }
  return console.log('longest string: ', longest)
}

longestString('abbaabbbabbab')

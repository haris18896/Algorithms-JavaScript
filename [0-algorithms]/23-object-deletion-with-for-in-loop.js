function objPractice(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === 'N/A' || obj[key] === '') {
        delete obj[key]
      }
      if (typeof obj[key] === 'object') {
        obj[key] = obj[key].filter(item => item != '' && item != 'N/A')
      }
    }
  }
  return obj
}

console.log(
  objPractice({
    a: 'N/A',
    b: '',
    c: 12,
    d: 'abc',
    e: [12, '', 456, 'N/A'],
    f: 'N/A'
  })
)

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

// *************************************************************************************
// solving recursively
function objPractice(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === 'N/A' || obj[key] === '' || obj[key] === '-') {
        delete obj[key]
      } else if (Array.isArray(obj[key])) {
        obj[key] = obj[key].filter(item => item != '' && item != 'N/A' && item != '-')
      }
      if (typeof obj[key] === 'object') {
        objPractice(obj[key])
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
    t: '-',
    e: {
      ea: 12,
      eb: '-',
      et: ['N/A', '', '-', 32, 'avs'],
      ec: 456,
      ed: 'N/A',
      ee: {
        eea: 124,
        eeb: '',
        eec: 098,
        eed: 'N/A'
      }
    },
    f: 'N/A',
    g: '-',
    h: {
      ha: 'N/A',
      hb: '',
      hc: '-',
      hd: '789',
      he: 'ads',
      hf: {
        hfa: 'N/A',
        hfb: '',
        hfc: '-',
        hfd: '123',
        hfe: 'N/A',
        hff: 'oop'
      },
      hg: ['N/A', '', '-', 32, 'avs']
    }
  })
)

// *************************************************************************************

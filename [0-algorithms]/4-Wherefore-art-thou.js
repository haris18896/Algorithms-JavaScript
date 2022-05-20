function whatIsInAName(collection, source) {
  const souceKeys = Object.keys(source)

  // filter the collection
  return collection.filter(obj => {
    for (let i = 0; i < souceKeys.length; i++) {
      if (!obj.hasOwnProperty(souceKeys[i]) || obj[souceKeys[i]] !== source[souceKeys[i]]) {
        return false
      }
    }
    return true
  })
}

// test here
whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' }
  ],
  { last: 'Capulet' }
)
// *************************************************************************************

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source)

  return collection.filter(obj => sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]))
}

// test here
whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' }
  ],
  { last: 'Capulet' }
)

// *************************************************************************************

function whatIsInAName(collection, source) {
  const souceKeys = Object.keys(source)

  // filter the collection
  return collection.filter(obj =>
    souceKeys.map(key => obj.hasOwnProperty(key) && obj[key] === source[key]).reduce((a, b) => a && b)
  )
}

// test here
whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' }
  ],
  { last: 'Capulet' }
)

// *************************************************************************************

// Just kidding there is still one more -> Just gniddik ereht is llits one more

function spinWords(string){
  const arr = string.split(' ');

  return arr.map(item => {
    if (item.length > 4){
      return item.split('').reverse().join('')
    }
    return item
  }).join(' ')
}


console.log("spinWords", spinWords('Just kidding there is still one more'))

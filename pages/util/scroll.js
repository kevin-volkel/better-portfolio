
export const scrollToElement = (id) => {
  // const elem = document.getElementById(id)
  // if(!elem) return console.error('no element found')

  const elems = document.getElementsByClassName('container')

  let y = 0;
  for(let i = 0; i < elems.length; i++) {
    console.log(i)
    if(elems[i].id !== id) y += elems[i].scrollHeight;
    if(elems[i].id == id) break;
  }
  console.log(y)

  return window.scrollTo({
    top: y,
    behavior: 'smooth'
  })
}
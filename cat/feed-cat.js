const img = Object.assign(document.createElement('button'), {
  className: 'cat',
  title: 'feed. me.'
})
document.body.append(img)

let ahh = 0
img.addEventListener('click', () => {
  const p = Object.assign(document.createElement('p'), {
    className: 'nommy',
    textContent: 'nom'
  })
  document.body.append(p)
  img.classList.add('nom')
  ahh++
  let start = Date.now()
  const TIME = 1000
  function paint () {
    const elapsed = Date.now() - start
    if (elapsed > TIME * 1.2) {
      p.remove()
      ahh--
      if (ahh <= 0) {
        img.classList.remove('nom')
      }
      return
    }
    p.style.transform = `translateY(${(elapsed / TIME) * -50}px)`
    p.style.opacity = 1 - elapsed / TIME
    window.requestAnimationFrame(paint)
  }
  paint()
})

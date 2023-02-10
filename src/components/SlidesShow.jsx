import { useEffect, useRef } from 'react'

const SlidesShow = () => {
  const slideshow = useRef(null)
  const slideInterval = useRef(null)

  const next = () => {
    if (slideshow.current.children.length > 0) {
      const firstElement = slideshow.current.children[0]

      slideshow.current.style.transition = '500ms all ease-out'

      const sizeSlide = slideshow.current.children[0].offsetWidth
      slideshow.current.style.transform = `translateX(-${sizeSlide}px)`
      const transition = () => {
        slideshow.current.style.transition = 'none'
        slideshow.current.style.transform = 'translateX(0)'

        slideshow.current.appendChild(firstElement)

        slideshow.current.removeEventListener('transitionend', transition)
      }

      slideshow.current.addEventListener('transitionend', transition)
    }
  }

  const previous = () => {
    if (slideshow.current.children.length > 0) {
      const index = slideshow.current.children.length - 1
      const lastElement = slideshow.current.children[index]

      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild)

      slideshow.current.style.transition = 'none'

      const sizeSlide = slideshow.current.children[0].offsetWidth
      slideshow.current.style.transform = `translateX(-${sizeSlide}px)`

      setTimeout(() => {
        slideshow.current.style.transition = '500ms all ease-out'
        slideshow.current.style.transform = 'translateX(0)'
      }, 50)
    }
  }

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      next()
    }, 5000)

    return () => {
      clearInterval(slideInterval.current)
    }
  }, [])

  return (
    <div className='slides-container'>
      <div className='slides-show' ref={slideshow}>
        <div className='slide'>
          <a href='https://www.mohanaindumentaria.com.ar'>
            <img src='./mohana-banner.jpg' alt='Mohana Banner' />
          </a>
        </div>
        <div className='slide'>
          <a href='https://www.mohanaindumentaria.com.ar'>
            <img src='./mohana-banner.jpg' alt='Mohana Banner' />
          </a>
        </div>
      </div>
      <div className='controls'>
        <button onClick={previous} className='left'>
          <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 24 24'><path fill='currentColor' d='M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12Z' />
          </svg>
        </button>
        <button onClick={next} className='right'>
          <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 24 24'><path fill='currentColor' d='M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4Z' />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SlidesShow

(function () {
  const doc = document.documentElement

  doc.classList.remove('no-js')
  doc.classList.add('js')

  // Reveal animations
  if (document.body.classList.contains('has-animations') && typeof ScrollReveal !== 'undefined') {
    /* global ScrollReveal */
    const sr = window.sr = ScrollReveal()

    sr.reveal('.feature, .testimonial', {
      duration: 600,
      distance: '50px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'bottom',
      interval: 100
    })

    /* global anime */
    const strokedElement = document.querySelector('.stroke-animation')

    if (strokedElement && typeof anime !== 'undefined') {
      const heroAnimation = anime.timeline({ autoplay: false })

      strokedElement.setAttribute('stroke-dashoffset', anime.setDashoffset(strokedElement))

      heroAnimation.add({
        targets: '.stroke-animation',
        strokeDashoffset: { value: 0, duration: 2000, easing: 'easeInOutQuart' },
        strokeWidth: { value: [0, 2], duration: 2000, easing: 'easeOutCubic' },
        strokeOpacity: { value: [1, 0], duration: 1000, easing: 'easeOutCubic', delay: 1000 },
        fillOpacity: { value: [0, 1], duration: 500, easing: 'easeOutCubic', delay: 1300 }
      })

      doc.classList.add('anime-ready')
      heroAnimation.play()
    }
  }
}())

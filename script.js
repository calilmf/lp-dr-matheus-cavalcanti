const attributionKeys = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'gbraid',
  'wbraid',
]

const pageParams = new URLSearchParams(window.location.search)
const attribution = Object.fromEntries(
  attributionKeys
    .map((key) => [key, pageParams.get(key)])
    .filter(([, value]) => Boolean(value)),
)

window.dataLayer = window.dataLayer || []

function track(event, payload = {}) {
  window.dataLayer.push({
    event,
    ...payload,
    ...attribution,
    page_location: window.location.href,
  })
}

function decorateWhatsappLinks() {
  document.querySelectorAll('a[data-cta]').forEach((link) => {
    try {
      const destination = new URL(link.href)

      Object.entries(attribution).forEach(([key, value]) => {
        if (!destination.searchParams.has(key)) {
          destination.searchParams.set(key, value)
        }
      })

      destination.searchParams.set('cta_position', link.dataset.cta)
      link.href = destination.toString()
    } catch {
      // Mantém o destino original caso o navegador não consiga interpretar a URL.
    }

    link.addEventListener('click', () => {
      track('click_whatsapp', {
        cta_location: link.dataset.cta,
        link_url: link.href,
      })
    })
  })
}

function bindSecondaryActions() {
  document.querySelectorAll('[data-action="phone"]').forEach((link) => {
    link.addEventListener('click', () => {
      track('click_phone', { link_url: link.href })
    })
  })

  document.querySelectorAll('[data-action="map"]').forEach((link) => {
    link.addEventListener('click', () => {
      track('click_map', { link_url: link.href })
    })
  })

  document.querySelectorAll('details[data-faq]').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        track('faq_open', { faq_id: item.dataset.faq })
      }
    })
  })
}

function bindHeaderState() {
  const header = document.querySelector('.site-header')
  if (!header) return

  const updateHeader = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10)
  }

  updateHeader()
  window.addEventListener('scroll', updateHeader, { passive: true })
}

function enableProgressiveReveal() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const elements = document.querySelectorAll(
    '.section-intro, .region-list article, .clinical-context-heading, .clinical-context-group, .care-path-heading, .steps li, .treatments-heading, .treatment-list article, .doctor-copy, .insurance-heading, .insurance-panel, .practical-heading, .location, .faq, .closing-copy',
  )

  if (reduceMotion || !('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'))
    return
  }

  elements.forEach((element) => element.classList.add('reveal-ready'))

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  )

  elements.forEach((element) => observer.observe(element))
}

function boot() {
  decorateWhatsappLinks()
  bindSecondaryActions()
  bindHeaderState()
  enableProgressiveReveal()

  if (window.lucide) {
    window.lucide.createIcons({ 'stroke-width': 1.6 })
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true })
} else {
  boot()
}

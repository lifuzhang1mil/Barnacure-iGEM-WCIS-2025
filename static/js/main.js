// Main JavaScript for Barnacure iGEM Wiki

document.addEventListener("DOMContentLoaded", () => {
  // Navbar background opacity on scroll
  const navbar = document.querySelector(".navbar")
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(15, 23, 42, 0.95)"
        navbar.style.backdropFilter = "blur(10px)"
      } else {
        navbar.style.backgroundColor = "rgba(15, 23, 42, 0.9)"
        navbar.style.backdropFilter = "blur(5px)"
      }
    })
  }

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe cards and sections for animation
  const animatedElements = document.querySelectorAll(".card, .row > div")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    observer.observe(el)
  })

  // Form validation and submission
  const contactForm = document.querySelector("form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Basic form validation
      const requiredFields = this.querySelectorAll("input[required], textarea[required]")
      let isValid = true

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          field.classList.add("is-invalid")
          isValid = false
        } else {
          field.classList.remove("is-invalid")
        }
      })

      if (isValid) {
        // Show success message (in a real implementation, this would submit to a server)
        showNotification("Message sent successfully! We'll get back to you soon.", "success")
        this.reset()
      } else {
        showNotification("Please fill in all required fields.", "error")
      }
    })
  }

  // Notification system
  function showNotification(message, type = "info") {
    const notification = document.createElement("div")
    notification.className = `alert alert-${type === "success" ? "success" : "danger"} position-fixed`
    notification.style.cssText = `
            top: 100px;
            right: 20px;
            z-index: 9999;
            min-width: 300px;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease-out;
        `
    notification.innerHTML = `
            <div class="d-flex align-items-center">
                <i class="fas fa-${type === "success" ? "check-circle" : "exclamation-circle"} me-2"></i>
                ${message}
                <button type="button" class="btn-close ms-auto" onclick="this.parentElement.parentElement.remove()"></button>
            </div>
        `

    document.body.appendChild(notification)

    // Animate in
    setTimeout(() => {
      notification.style.opacity = "1"
      notification.style.transform = "translateX(0)"
    }, 100)

    // Auto remove after 5 seconds
    setTimeout(() => {
      notification.style.opacity = "0"
      notification.style.transform = "translateX(100%)"
      setTimeout(() => notification.remove(), 300)
    }, 5000)
  }

  // Progress bar animations
  const progressBars = document.querySelectorAll(".progress-bar")
  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target
          const width = progressBar.style.width
          progressBar.style.width = "0%"
          setTimeout(() => {
            progressBar.style.width = width
            progressBar.style.transition = "width 1.5s ease-out"
          }, 200)
        }
      })
    },
    { threshold: 0.5 },
  )

  progressBars.forEach((bar) => {
    progressObserver.observe(bar)
  })

  // Counter animations for statistics
  const counters = document.querySelectorAll(".display-3, .display-4")
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target
          const text = counter.textContent
          const number = Number.parseInt(text.replace(/\D/g, ""))

          if (number && !counter.dataset.animated) {
            counter.dataset.animated = "true"
            animateCounter(counter, 0, number, 2000, text)
          }
        }
      })
    },
    { threshold: 0.5 },
  )

  counters.forEach((counter) => {
    counterObserver.observe(counter)
  })

  function animateCounter(element, start, end, duration, originalText) {
    const startTime = performance.now()
    const suffix = originalText.replace(/[\d]/g, "")

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(start + (end - start) * easeOutQuart(progress))

      element.textContent = current + suffix

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      }
    }

    requestAnimationFrame(updateCounter)
  }

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4)
  }

  // Mobile menu improvements
  const navbarToggler = document.querySelector(".navbar-toggler")
  const navbarCollapse = document.querySelector(".navbar-collapse")

  if (navbarToggler && navbarCollapse) {
    // Close mobile menu when clicking on a link
    const mobileNavLinks = navbarCollapse.querySelectorAll(".nav-link")
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
          navbarToggler.click()
        }
      })
    })
  }

  // Copy to clipboard functionality
  const copyButtons = document.querySelectorAll('button:contains("Copy")')
  copyButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const codeBlock = this.parentElement.querySelector("code")
      if (codeBlock) {
        navigator.clipboard.writeText(codeBlock.textContent).then(() => {
          showNotification("Copied to clipboard!", "success")
        })
      }
    })
  })

  // Download button functionality (placeholder)
  const downloadButtons = document.querySelectorAll("button .fa-download")
  downloadButtons.forEach((button) => {
    button.parentElement.addEventListener("click", (e) => {
      e.preventDefault()
      showNotification("Download functionality will be implemented with actual files.", "info")
    })
  })

  // Page load animation
  document.body.style.opacity = "0"
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease-in"
    document.body.style.opacity = "1"
  }, 100)
})

// Utility functions
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Add scroll to top button
document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.createElement("button")
  scrollTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>'
  scrollTopBtn.className = "btn btn-emerald position-fixed"
  scrollTopBtn.style.cssText = `
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    `
  scrollTopBtn.onclick = scrollToTop

  document.body.appendChild(scrollTopBtn)

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.opacity = "1"
      scrollTopBtn.style.visibility = "visible"
    } else {
      scrollTopBtn.style.opacity = "0"
      scrollTopBtn.style.visibility = "hidden"
    }
  })
})

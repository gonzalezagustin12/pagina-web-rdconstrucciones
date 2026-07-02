// Gallery Photos Data Array (57 photos)
const PROJECT_PHOTOS = [
  {
    src: "img/img_34.jpeg",
    title: "Pintura de Fachadas con Plataforma Elevadora",
    category: "mantenimiento"
  },
  {
    src: "img/img_35.jpeg",
    title: "Instalación de Columnas con Camión Grúa",
    category: "montajes"
  },
  {
    src: "img/img_36.jpeg",
    title: "Mantenimiento Preventivo de Altura",
    category: "mantenimiento"
  },
  {
    src: "img/img_37.jpeg",
    title: "Preparación de Mezcla de Hormigón",
    category: "obras"
  },
  {
    src: "img/img_38.jpeg",
    title: "Hincado y Montaje de Columnas",
    category: "montajes"
  },
  {
    src: "img/img_39.jpeg",
    title: "Montaje de Perfiles Estructurales",
    category: "montajes"
  },
  {
    src: "img/img_40.jpeg",
    title: "Fijación y Anclajes de Columnas",
    category: "montajes"
  },
  {
    src: "img/img_41.jpeg",
    title: "Estructuras Viales de Soporte",
    category: "montajes"
  },
  {
    src: "img/img_42.jpeg",
    title: "Excavaciones y Zanjas para Cableado",
    category: "obras"
  },
  {
    src: "img/img_43.jpeg",
    title: "Trabajos en Altura sobre Andamios",
    category: "mantenimiento"
  },
  {
    src: "img/img_44.jpeg",
    title: "Pintura de Silos e Infraestructura Industrial",
    category: "mantenimiento"
  },
  {
    src: "img/img_45.jpeg",
    title: "Inspección de Mampostería Fachada Externa",
    category: "mantenimiento"
  },
  {
    src: "img/img_46.jpeg",
    title: "Encofrado de Bases de Columnas",
    category: "obras"
  },
  {
    src: "img/img_47.jpeg",
    title: "Trabajos de Elevación y Montajes",
    category: "montajes"
  },
  {
    src: "img/img_48.jpeg",
    title: "Montaje Eléctrico Aéreo",
    category: "montajes"
  },
  {
    src: "img/img_49.jpeg",
    title: "Reparación de Paredes Exteriores",
    category: "mantenimiento"
  },
  {
    src: "img/img_50.jpeg",
    title: "Hormigonado de Vigas de Fundación",
    category: "obras"
  },
  {
    src: "img/img_51.jpeg",
    title: "Trabajos con Grúa y Elevador",
    category: "montajes"
  },
  {
    src: "img/img_52.jpeg",
    title: "Herramientas de Corte y Nivelación",
    category: "montajes"
  },
  {
    src: "img/img_53.jpeg",
    title: "Mantenimiento Técnico Industrial",
    category: "mantenimiento"
  },
  {
    src: "img/img_1.JPG",
    title: "Mantenimiento Estructural Exterior",
    category: "mantenimiento"
  },
  {
    src: "img/img_2.JPG",
    title: "Inspección de Fachadas Elevadas",
    category: "mantenimiento"
  },
  {
    src: "img/img_3.JPG",
    title: "Reparaciones de Revestimientos Exteriores",
    category: "mantenimiento"
  },
  {
    src: "img/img_4.jpg",
    title: "Excavación de Base de Fundación",
    category: "obras"
  },
  {
    src: "img/img_5.jpg",
    title: "Nivelación de Terreno Vial",
    category: "obras"
  },
  {
    src: "img/img_6.jpg",
    title: "Pilotaje Estructural",
    category: "obras"
  },
  {
    src: "img/img_7.jpg",
    title: "Cimentación Profunda",
    category: "obras"
  },
  {
    src: "img/img_14.JPG",
    title: "Detalle de Armadura de Hierro para Columnas",
    category: "obras"
  },
  {
    src: "img/img_15.JPG",
    title: "Colado de Hormigón en Cimientos",
    category: "obras"
  },
  {
    src: "img/img_16.JPG",
    title: "Estructuras de Hormigón Armado",
    category: "obras"
  },
  {
    src: "img/img_17.JPG",
    title: "Encofrado Metálico de Vigas",
    category: "obras"
  },
  {
    src: "img/img_18.JPG",
    title: "Obra Industrial Pesada",
    category: "obras"
  },
  {
    src: "img/img_19.JPG",
    title: "Hormigonado de Grandes Fundaciones",
    category: "obras"
  },
  {
    src: "img/img_8.JPG",
    title: "Montaje de Viga de Luces Largas",
    category: "montajes"
  },
  {
    src: "img/img_9.JPG",
    title: "Montaje Metálico Aéreo",
    category: "montajes"
  },
  {
    src: "img/img_10.JPG",
    title: "Montaje de Cubiertas Industriales",
    category: "montajes"
  },
  {
    src: "img/img_11.JPG",
    title: "Construcción de Nave Industrial",
    category: "obras"
  },
  {
    src: "img/img_12.JPG",
    title: "Fachada de Planta Comercial",
    category: "obras"
  },
  {
    src: "img/img_13.JPG",
    title: "Estructura Portante Metálica",
    category: "montajes"
  },
  {
    src: "img/img_20.jpg",
    title: "Obra Civil de Red Vial",
    category: "obras"
  },
  {
    src: "img/img_21.jpg",
    title: "Cordón Cuneta y Accesos",
    category: "obras"
  },
  {
    src: "img/img_22.jpg",
    title: "Movimientos de Suelo y Caminos",
    category: "obras"
  },
  {
    src: "img/img_23.jpg",
    title: "Pintura y Demarcación de Seguridad",
    category: "mantenimiento"
  },
  {
    src: "img/img_24.jpg",
    title: "Revestimiento Impermeable en Fachadas",
    category: "mantenimiento"
  },
  {
    src: "img/img_25.jpg",
    title: "Mantenimiento General Industrial",
    category: "mantenimiento"
  },
  {
    src: "img/img_26.jpg",
    title: "Pintura Externa de Edificios",
    category: "mantenimiento"
  },
  {
    src: "img/img_27.jpg",
    title: "Pintura Exterior de Silos",
    category: "mantenimiento"
  },
  {
    src: "img/img_28.jpg",
    title: "Sellado de Juntas Hidrófugas",
    category: "mantenimiento"
  },
  {
    src: "img/img_33.jpg",
    title: "Trabajos de Mantenimiento Menor",
    category: "mantenimiento"
  },
  {
    src: "img/img_29.jpg",
    title: "Replanteo de Obra Civil",
    category: "obras"
  },
  {
    src: "img/img_30.jpg",
    title: "Montaje de Equipamiento Estructural",
    category: "montajes"
  },
  {
    src: "img/img_31.jpg",
    title: "Montaje con Grúa Hidráulica",
    category: "montajes"
  },
  {
    src: "img/img_32.jpg",
    title: "Obras Civiles Viales de Conexión",
    category: "obras"
  },
  {
    src: "img/img_54.jpg",
    title: "Pavimentación Industrial",
    category: "obras"
  },
  {
    src: "img/img_55.jpg",
    title: "Hormigonado de Playas de Carga",
    category: "obras"
  },
  {
    src: "img/img_56.jpg",
    title: "Estructura Metálica Aérea",
    category: "montajes"
  },
  {
    src: "img/img_57.jpg",
    title: "Cerramientos Metálicos e Industriales",
    category: "montajes"
  }
];

// Document Ready and State Management
document.addEventListener("DOMContentLoaded", () => {
  // Constants and Elements
  const header = document.getElementById("header");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  
  // Mobile Nav Toggle
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    navMenu.classList.toggle("open");
  });

  // Close mobile nav on link click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("open");
      navMenu.classList.remove("open");
    });
  });

  // Scroll Header Transition
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    
    highlightActiveLink();
  });

  // Highlight Active Link on Scroll
  const sections = document.querySelectorAll("section");
  function highlightActiveLink() {
    let scrollPosition = window.scrollY + 120; // offset

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Hero Image Slider
  const slides = document.querySelectorAll(".hero-slide");
  let currentSlide = 0;
  
  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }
  
  // Rotate slider every 6 seconds
  setInterval(nextSlide, 6000);

  // Intersection Observer for scroll reveal animations
  const revealElements = document.querySelectorAll(".scroll-reveal");
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
        observer.unobserve(entry.target); // trigger animation only once
      }
    });
  }, observerOptions);

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  // Gallery Functionality
  const galleryGrid = document.getElementById("gallery-grid");
  const loadMoreBtn = document.getElementById("load-more-btn");
  
  let itemsToShow = 12;
  const filteredPhotos = PROJECT_PHOTOS;

  // Initialize Gallery
  function renderGallery() {
    // Clear Grid
    galleryGrid.innerHTML = "";
    
    // Slice data to render limited items
    const photosToRender = filteredPhotos.slice(0, itemsToShow);
    
    if (photosToRender.length === 0) {
      galleryGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--color-taupe); padding: 4rem 0;">No se encontraron proyectos en esta categoría.</div>`;
      loadMoreBtn.style.display = "none";
      return;
    }

    photosToRender.forEach((photo, index) => {
      const item = document.createElement("div");
      item.className = "gallery-item";
      item.dataset.index = index;
      // Staggered fade in animation delay
      item.style.animationDelay = `${(index % 4) * 0.1}s`;
      
        item.innerHTML = `
          <img src="${photo.src}" alt="${photo.title}" loading="lazy">
        `;

      item.addEventListener("click", () => {
        openLightbox(index);
      });

      galleryGrid.appendChild(item);
    });

    // Handle Pagination Button Visibility
    if (itemsToShow >= filteredPhotos.length) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "inline-flex";
    }
  }

  // Load More Event Listener
  loadMoreBtn.addEventListener("click", () => {
    itemsToShow += 12;
    renderGallery();
  });

  // Initial gallery draw
  renderGallery();

  // Lightbox Functionality
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");
  
  let lightboxIndex = 0;

  function openLightbox(index) {
    if (!lightbox) return;
    lightboxIndex = index;
    updateLightboxContent();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden"; // disable body scrolling
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("active");
    document.body.style.overflow = ""; // restore body scrolling
  }

  function navigateLightbox(dir) {
    lightboxIndex = (lightboxIndex + dir + filteredPhotos.length) % filteredPhotos.length;
    updateLightboxContent();
  }

  function updateLightboxContent() {
    const photo = filteredPhotos[lightboxIndex];
    if (!photo) return;
    
    if (lightboxImg) {
      lightboxImg.src = photo.src;
      lightboxImg.alt = photo.title;
    }
  }

  // Lightbox Event Listeners
  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener("click", () => navigateLightbox(-1));
  if (lightboxNext) lightboxNext.addEventListener("click", () => navigateLightbox(1));
  
  // Close lightbox on click outside the image
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      // If the user clicked the backdrop itself, close it
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Touch swipe support for mobile navigation
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeThreshold = 50; // pixels
      if (touchEndX < touchStartX - swipeThreshold) {
        navigateLightbox(1); // Swipe left -> Next
      } else if (touchEndX > touchStartX + swipeThreshold) {
        navigateLightbox(-1); // Swipe right -> Prev
      }
    }, { passive: true });
  }

  // Keyboard navigation for Lightbox
  document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("active")) return;
    
    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowLeft") {
      navigateLightbox(-1);
    } else if (e.key === "ArrowRight") {
      navigateLightbox(1);
    }
  });

  // Contact Form Submission Handling
  const contactForm = document.getElementById("contact-form");
  const successModal = document.getElementById("success-modal");
  const successModalClose = document.getElementById("success-modal-close");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const company = document.getElementById("company").value;
      const message = document.getElementById("message").value;

      console.log("Formulario de Contacto Enviado:", { name, email, phone, company, message });

      if (successModal) {
        successModal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
      
      contactForm.reset();
    });
  }

  // Close Success Modal
  if (successModalClose) {
    successModalClose.addEventListener("click", () => {
      if (successModal) {
        successModal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  if (successModal) {
    successModal.addEventListener("click", (e) => {
      if (e.target === successModal) {
        successModal.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }
});



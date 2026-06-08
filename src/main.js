document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  const toggleMobileMenu = () => {
    const isOpen = !mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden");
    menuIcon.classList.toggle("hidden", !isOpen);
    closeIcon.classList.toggle("hidden", isOpen);
  };

  mobileMenuBtn?.addEventListener("click", toggleMobileMenu);

  document.querySelectorAll("[data-scroll]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target?.scrollIntoView({ behavior: "smooth" });
      mobileMenu?.classList.add("hidden");
      menuIcon?.classList.remove("hidden");
      closeIcon?.classList.add("hidden");
    });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar?.classList.add("nav-scrolled");
      navbar?.classList.remove("bg-transparent");
    } else {
      navbar?.classList.remove("nav-scrolled");
      navbar?.classList.add("bg-transparent");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

  const contactForm = document.getElementById("contact-form");
  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector("button[type=submit]");
    const originalText = btn.textContent;
    btn.textContent = "Message Sent!";
    btn.classList.add("bg-green-600");
    contactForm.reset();
    setTimeout(() => {
      btn.textContent = originalText;
      btn.classList.remove("bg-green-600");
    }, 3000);
  });
});

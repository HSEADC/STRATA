const form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();

  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data.errors
              .map((error) => error.message)
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch(() => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}

if (form) {
  form.addEventListener("submit", handleSubmit);
}

document.addEventListener("DOMContentLoaded", () => {
  const lazyItems = document.querySelectorAll(
    ".M_Articles-CardMedia, .O_HeroTest",
  );

  if (!lazyItems.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  lazyItems.forEach((el) => observer.observe(el));
});

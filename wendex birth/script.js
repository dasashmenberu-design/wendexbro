const starfield = document.querySelector("#starfield");
const wishButton = document.querySelector("#wish-button");
const wishStatus = document.querySelector("#wish-status");
const shootingStar = document.querySelector("#shooting-star");

if (starfield) {
  const fragment = document.createDocumentFragment();
  const starCount = Math.min(150, Math.floor((window.innerWidth * window.innerHeight) / 6500));

  for (let index = 0; index < starCount; index += 1) {
    const star = document.createElement("span");
    const size = Math.random() < 0.12 ? 2 : 1;

    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty("--size", `${size}px`);
    star.style.setProperty("--opacity", `${0.3 + Math.random() * 0.65}`);
    star.style.setProperty("--duration", `${2 + Math.random() * 4}s`);
    star.style.setProperty("--delay", `${Math.random() * -5}s`);
    fragment.append(star);
  }

  starfield.append(fragment);
}

if (wishButton && wishStatus && shootingStar) {
  wishButton.addEventListener("click", () => {
    wishStatus.textContent = "Wish sent into the universe. Make this year extraordinary!";
    shootingStar.classList.remove("is-shooting");
    void shootingStar.offsetWidth;
    shootingStar.classList.add("is-shooting");
  });
}
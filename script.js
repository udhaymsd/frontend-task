document.addEventListener("DOMContentLoaded", () => {
  const speakersSlider = document.getElementById("speakersSlider");

  const openModal = (modalId) => {
      const modal = document.getElementById(`${modalId}-modal`);
      modal.classList.add("active");
      speakersSlider.classList.add("shifted"); // Shift slider down
  };

  const closeModal = (modalId) => {
      const modal = document.getElementById(`${modalId}-modal`);
      modal.classList.remove("active");
      speakersSlider.classList.remove("shifted"); // Reset slider position
  };

  window.openModal = openModal;
  window.closeModal = closeModal;
});


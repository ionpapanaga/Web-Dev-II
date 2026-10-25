document.addEventListener("DOMContentLoaded", () => {
  // 1. FAQ Accordion Interaction
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const answer = btn.nextElementSibling;

      if (answer) {
        answer.classList.toggle("show");
      }
    });
  });

  // 2. Form Feedback Interaction
  const regForm = document.getElementById("regForm");
  const feedback = document.getElementById("formFeedback");

  if (regForm && feedback) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Stop page reload

      const gamerTag = document.getElementById("gamertag").value.trim();
      const gameSelected = document.getElementById("gameSelect").value;

      feedback.className = "feedback-banner success";
      feedback.textContent = `Entry Confirmed! Player "${gamerTag}" is locked in for ${gameSelected}. Check your inbox for confirmation.`;

      regForm.reset();
    });
  }
});
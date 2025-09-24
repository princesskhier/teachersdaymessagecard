document.addEventListener('DOMContentLoaded', () => {
  const flipCard = document.getElementById('flipCard');

  // Flip on click
  flipCard.addEventListener('click', () => {
    flipCard.classList.toggle('flipped');
  });

  // Flip on Enter or Space
  flipCard.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      flipCard.classList.toggle('flipped');
      e.preventDefault();
    }
  });

  // Custom heartfelt message
  const customMessage =
    "Sir Randy, first of all thank you for your guidance, your support means a lot — not just academically, but also on how you encourage us to grow as individuals. I truly appreciate your patience and the way you make learning inspiring. Thank you for always being approachable and understanding. Sana ikaw gihapon an adviser namon pero thank you po gihapon kay miskan dili kana namon adviser ada ka gihapon para sa amon.";
  
  document.getElementById('messageText').textContent = customMessage;
});

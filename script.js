// Change confetti count (line ~20)
for (let i = 0; i < 80; i++) {  // Change 80 to any number

// Change fireworks burst frequency (line ~101)
if (Math.random() < 0.03) {  // Lower = less frequent, higher = more

// Change gallery slide interval (line ~190)
setInterval(nextSlide, 3500);  // Change 3500 to milliseconds

// Auto-open gift box after delay (line ~209)
setTimeout(() => { openGift(); }, 10000);  // 10000ms = 10 seconds

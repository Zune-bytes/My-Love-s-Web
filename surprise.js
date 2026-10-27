document.addEventListener("DOMContentLoaded", () => {
    console.log("Digital garden script successfully initialized! 🌸");

    const introOverlay = document.getElementById("intro-overlay");
    const confettiColors = ["#ff6f91", "#ffccd5", "#ffb6c1", "#fca3b7", "#fff0f2", "#ffd1dc"];

    const launchOpeningConfetti = () => {
        console.log("Opening Confetti Burst Initiated! 🎉");
        for (let i = 0; i < 75; i++) {
            const confetti = document.createElement("div");
            confetti.classList.add("confetti-piece");
            
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            
            const size = Math.random() * 8 + 6 + "px";
            confetti.style.width = size;
            confetti.style.height = size;
            
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = "50%"; 
            }

            confetti.style.animationDuration = Math.random() * 2.5 + 2 + "s";
            confetti.style.animationDelay = Math.random() * 0.4 + "s";

            document.body.appendChild(confetti);

            setTimeout(() => { confetti.remove(); }, 4500);
        }
    };

    setTimeout(() => {
        if (introOverlay) {
            introOverlay.style.opacity = "0";
            introOverlay.style.transform = "scale(1.05)";
            setTimeout(() => {
                introOverlay.remove();
                launchOpeningConfetti(); 
            }, 1000); 
        }
    }, 2500);

    const burgerToggle = document.getElementById("burgerToggle");
    const navigationMenu = document.getElementById("navigation");
    const scrollButtons = document.querySelectorAll(".scrollButton");

    if (burgerToggle && navigationMenu) {
        burgerToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            burgerToggle.classList.toggle("active");
            navigationMenu.classList.toggle("open");
        });
    }

    scrollButtons.forEach(button => {
        button.addEventListener('click', (e) => {
        const targetId = button.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });   
        }
        
    });
    });    
   
    const finalLetter = document.getElementById("final-letter");
    const container = document.getElementById("flower-shower-container");
    let hasTriggered = false;

    const flowers = ["💮", "🌷", "🌺", "🌼", "🪷", "✨", "💝", "💖"];

    const triggerFlowerShower = () => {
        if (hasTriggered) return;
        hasTriggered = true;
        console.log("Surprise triggered! Dropping flowers for Alyssa... 🥰");

        for (let i = 0; i < 60; i++) {
            setTimeout(() => {
                const flowerItem = document.createElement("div");
                flowerItem.classList.add("shower-petal");
                
                flowerItem.innerText = flowers[Math.floor(Math.random() * flowers.length)];
                flowerItem.style.left = Math.random() * 100 + "vw";
                flowerItem.style.fontSize = Math.random() * 20 + 20 + "px"; 
                flowerItem.style.animationDuration = Math.random() * 3 + 3 + "s"; 
                flowerItem.style.animationDelay = Math.random() * 2 + "s";

                if (container) container.appendChild(flowerItem);

                setTimeout(() => {
                    flowerItem.remove();
                }, 8000);
            }, i * 80); 
        }
    };

    if (finalLetter && container) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    triggerFlowerShower();
                }
            });
        }, { threshold: 0.4 }); 

        observer.observe(finalLetter);
    } else {
        console.warn("Letter box tracker paused: elements not ready.");
    }


    
    const fieldButton = document.getElementById("flower-field-btn");
    
    if (fieldButton) {
        fieldButton.addEventListener("click", () => {
            console.log("Lyel clicked the final door! Preparing transition... 🌾✨");
            
            const targetUrl = "flowerfield.html"; 

            
            document.body.style.opacity = "0";

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 1200); 
        });
    }
});
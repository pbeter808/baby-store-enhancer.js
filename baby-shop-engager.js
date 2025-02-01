(function() {
    // Check if script already loaded
    if (window.babyStoreScriptLoaded) return;
    window.babyStoreScriptLoaded = true;

    console.log("Baby Clothes Store Script Loaded");

    // Smooth Fade-in Animation for Featured Products
    document.addEventListener("DOMContentLoaded", function() {
        let featuredItems = document.querySelectorAll(".productGrid .card");
        featuredItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
            }, index * 150);
        });
    });

    // Exit Intent Popup - Offer Discount
    let exitIntentTriggered = false;
    document.addEventListener("mouseleave", function(e) {
        if (e.clientY < 10 && !exitIntentTriggered) {
            exitIntentTriggered = true;
            showExitPopup();
        }
    });

    function showExitPopup() {
        let popup = document.createElement("div");
        popup.innerHTML = `
            <div style="
                position:fixed;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                background:white;
                padding:20px;
                border-radius:10px;
                box-shadow:0 4px 10px rgba(0,0,0,0.2);
                text-align:center;
                z-index:1000;
            ">
                <h2>Wait! Get 10% Off!</h2>
                <p>Use code <strong>BABY10</strong> at checkout for an exclusive discount!</p>
                <button id="closePopup" style="
                    background:#ff8c00;
                    color:white;
                    padding:10px 20px;
                    border:none;
                    border-radius:5px;
                    cursor:pointer;
                    font-size:16px;
                ">Claim Discount</button>
            </div>
        `;
        document.body.appendChild(popup);
        document.getElementById("closePopup").addEventListener("click", function() {
            popup.remove();
        });
    }

    // Countdown Timer for Urgency
    function startCountdown() {
        let countdown = document.createElement("div");
        countdown.innerHTML = `
            <div style="
                position: fixed;
                bottom: 10px;
                left: 10px;
                background: #ff8c00;
                color: white;
                padding: 10px 20px;
                font-size: 16px;
                font-weight: bold;
                border-radius: 5px;
            ">
                ⏳ Hurry! Sale Ends In: <span id="countdown-timer">10:00</span>
            </div>
        `;
        document.body.appendChild(countdown);
        let timeLeft = 600; // 10 minutes
        let timer = setInterval(() => {
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            document.getElementById("countdown-timer").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            timeLeft--;
            if (timeLeft < 0) {
                clearInterval(timer);
                countdown.remove();
            }
        }, 1000);
    }
    startCountdown();

})();

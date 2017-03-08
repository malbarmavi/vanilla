 
 document.addEventListener("keydown", function (e) {
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

            if (key) {
                const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
                audio.currentTime = 0;  // Replay the audio from the beginning
                audio.play();
                key.classList.add("playing");
            }
        })

        const keys = document.querySelectorAll(".key");

        // Remove playing class when transition end
        keys.forEach(k => k.addEventListener("transitionend", function (e) {
            if (e.propertyName === "transform") {
                k.classList.remove("playing"); 
            }
        })
        );
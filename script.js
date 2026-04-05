window.onload = function() {
    // Show greeting
    let savedName = localStorage.getItem("username");
    if (savedName) {
        document.getElementById("greeting").innerHTML = "Welcome, " + savedName + "!";
    }

    let score = 0;

    let riddles = {
        easy: [
            { q: "What has a face and two hands but no arms or legs?", a: "clock" },
            { q: "What has keys but cannot open locks?", a: "piano" },
            { q: "What has one eye but cannot see?", a: "needle" }
        ],
        medium: [
            { q: "What has many teeth but cannot bite?", a: "comb" },
            { q: "What gets wetter the more it dries?", a: "towel" },
            { q: "What has a neck but no head?", a: "bottle" }
        ],
        hard: [
            { q: "I shave every day but my beard stays the same?", a: "barber" },
            { q: "The more you take, the more you leave behind. What am I?", a: "footsteps" },
            { q: "What comes once in a minute, twice in a moment, but never in a thousand years?", a: "m" }
        ],
        extreme: [
            { q: "Bumagsak and lumagapak, What am I?", a: "mommy oni" },
            { q: "What can travel around the world while staying in one corner?", a: "stamp" },
            { q: "What disappears as soon as you say its name?", a: "silence" }
        ]
    };

    // Start a level
    window.startLevel = function(level) {
        let game = document.getElementById("game");
        game.innerHTML = "<h2>" + level.toUpperCase() + " LEVEL</h2>";

        riddles[level].forEach((riddle, i) => {
            game.innerHTML += `
                <div class="game-card">
                    <p>${riddle.q}</p>
                    <input type="text" id="answer${i}">
                    <button onclick="checkAnswer('${level}', ${i})">Submit</button>
                    <p id="result${i}" class="result"></p>
                </div>
            `;
        });
    };

    // Check the answer
    window.checkAnswer = function(level, index) {
        let user = document.getElementById("answer" + index).value.toLowerCase();
        let correct = riddles[level][index].a.toLowerCase();

        if (user === correct) {
            document.getElementById("result" + index).innerHTML = "✅ Correct!";
            score++;
        } else {
            document.getElementById("result" + index).innerHTML = "❌ Wrong! Answer: " + correct;
        }
    };
}
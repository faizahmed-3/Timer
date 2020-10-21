class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
    }

    start = () => {
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.interval);
    }


    tick = () =>{
        const timeLeft = parseFloat(this.durationInput.value);
        this.durationInput.value = timeLeft -1;
    }

}



const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");


//create an instance of our timer and pass in the documents that we have selected
const timer = new Timer(durationInput, startButton, pauseButton);
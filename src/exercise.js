// Desgn a stopwatch object
function Stopwatch() {
    let startTime,
        duration = 0;
    let isStarted = false;
    console.log(startTime);

    this.start = function () {
        if (!isStarted) {
            isStarted = true;
            startTime = new Date().getTime();
        } else throw new Error("Stopwatch has already started!");
    };

    this.stop = function () {
        if (isStarted) {
            isStarted = false;
            const endTime = new Date().getTime();
            duration += (endTime - startTime) / 1000;
        } else throw new Error("Stopwatch is not started!");
    };

    this.reset = function () {
        startTime = null;
        duration = 0;
        isStarted = false;
    };

    Object.defineProperty(this, "duration", {
        get: function () {
            if (isStarted) {
                return duration + (new Date().getTime() - startTime) / 1000;
            }
            return duration;
        },
    });
}

// Usage:
const sw = new Stopwatch();

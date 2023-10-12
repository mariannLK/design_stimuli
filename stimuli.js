//all stimuli
var video_train = ["video/17s_large_1.mp4", "video/17s_large_2.mp4", "video/17s_small_1.mp4", "video/17s_small_4.mp4", "video/19s_large_2.mp4", "video/19s_large_3.mp4", "video/19s_small_1.mp4", "video/19s_small_4.mp4", "video/20s_large_1.mp4", "video/20s_large_2.mp4", "video/20s_small_1.mp4", "video/20s_small_2.mp4", "video/21s_large_1.mp4", "video/21s_large_2.mp4", "video/21s_small_1.mp4", "video/21s_small_4.mp4", "video/23s_large_3.mp4", "video/23s_large_4.mp4", "video/23s_small_2.mp4", "video/23s_small_3.mp4"];

var video_notrain = ["video/17s_large_3.mp4", "video/17s_large_4.mp4", "video/17s_small_3.mp4", "video/17s_small_2.mp4", "video/19s_large_1.mp4", "video/19s_large_4.mp4", "video/19s_small_2.mp4", "video/19s_small_3.mp4", "video/20s_large_3.mp4", "video/20s_large_4.mp4", "video/20s_small_3.mp4", "video/20s_small_4.mp4", "video/21s_large_3.mp4", "video/21s_large_4.mp4", "video/21s_small_2.mp4", "video/21s_small_3.mp4", "video/23s_large_1.mp4", "video/23s_large_2.mp4", "video/23s_small_1.mp4", "video/23s_small_4.mp4"];



//all stimuli x2 - 2 trials passage of time
var trial_train = [
    {
        video: ["video/17s_large_1.mp4"],
        name: "TL17s"
    },
    {
        video: ["video/17s_large_2.mp4"],
        name: "TL17s"
    },
    {
        video: ["video/17s_small_1.mp4"],
        name: "TS17s"
    },
    {
        video: ["video/17s_small_4.mp4"],
        name: "TS17s"
    },
    {
        video: ["video/19s_large_2.mp4"],
        name: "TL19s"
    },
    {
        video: ["video/19s_large_3.mp4"],
        name: "TL19s"
    },
    {
        video: ["video/19s_small_1.mp4"],
        name: "TS19s"
    },
    {
        video: ["video/19s_small_4.mp4"],
        name: "TS19s"
    },
    {
        video: ["video/20s_large_1.mp4"],
        name: "TL20s"
    },
    {
        video: ["video/20s_large_2.mp4"],
        name: "TL20s"
    },
    {
        video: ["video/20s_small_1.mp4"],
        name: "TS20s"
    },
    {
        video: ["video/20s_small_2.mp4"],
        name: "TS20s"
    },
    {
        video: ["video/21s_large_1.mp4"],
        name: "TL21s"
    },
    {
        video: ["video/21s_large_2.mp4"],
        name: "TL21s"
    },
    {
        video: ["video/21s_small_1.mp4"],
        name: "TS21s"
    },
    {
        video: ["video/21s_small_4.mp4"],
        name: "TS21s"
    },
    {
        video: ["video/23s_large_3.mp4"],
        name: "TL23s"
    },
    {
        video: ["video/23s_large_4.mp4"],
        name: "TL23s"
    },
    {
        video: ["video/23s_small_2.mp4"],
        name: "TS23s"
    },
    {
        video: ["video/23s_small_3.mp4"],
        name: "TS23s"
    },
    {
        video: ["video/17s_large_1.mp4"],
        name: "TL17s"
    },
    {
        video: ["video/17s_large_2.mp4"],
        name: "TL17s"
    },
    {
        video: ["video/17s_small_1.mp4"],
        name: "TS17s"
    },
    {
        video: ["video/17s_small_4.mp4"],
        name: "TS17s"
    },
    {
        video: ["video/19s_large_2.mp4"],
        name: "TL19s"
    },
    {
        video: ["video/19s_large_3.mp4"],
        name: "TL19s"
    },
    {
        video: ["video/19s_small_1.mp4"],
        name: "TS19s"
    },
    {
        video: ["video/19s_small_4.mp4"],
        name: "TS19s"
    },
    {
        video: ["video/20s_large_1.mp4"],
        name: "TL20s"
    },
    {
        video: ["video/20s_large_2.mp4"],
        name: "TL20s"
    },
    {
        video: ["video/20s_small_1.mp4"],
        name: "TS20s"
    },
    {
        video: ["video/20s_small_2.mp4"],
        name: "TS20s"
    },
    {
        video: ["video/21s_large_1.mp4"],
        name: "TL21s"
    },
    {
        video: ["video/21s_large_2.mp4"],
        name: "TL21s"
    },
    {
        video: ["video/21s_small_1.mp4"],
        name: "TS21s"
    },
    {
        video: ["video/21s_small_4.mp4"],
        name: "TS21s"
    },
    {
        video: ["video/23s_large_3.mp4"],
        name: "TL23s"
    },
    {
        video: ["video/23s_large_4.mp4"],
        name: "TL23s"
    },
    {
        video: ["video/23s_small_2.mp4"],
        name: "TS23s"
    },
    {
        video: ["video/23s_small_3.mp4"],
        name: "TS23s"
    }
];

var trial_notrain = [
    {
        video: ["video/17s_large_3.mp4"],
        name: "NL17s"
    },
    {
        video: ["video/17s_large_4.mp4"],
        name: "NL17s"
    },
    {
        video: ["video/17s_small_2.mp4"],
        name: "NS17s"
    },
    {
        video: ["video/17s_small_3.mp4"],
        name: "NS17s"
    },
    {
        video: ["video/19s_large_1.mp4"],
        name: "NL19s"
    },
    {
        video: ["video/19s_large_4.mp4"],
        name: "NL19s"
    },
    {
        video: ["video/19s_small_2.mp4"],
        name: "NS19s"
    },
    {
        video: ["video/19s_small_3.mp4"],
        name: "NS19s"
    },
    {
        video: ["video/20s_large_3.mp4"],
        name: "NL20s"
    },
    {
        video: ["video/20s_large_4.mp4"],
        name: "NL20s"
    },
    {
        video: ["video/20s_small_3.mp4"],
        name: "NS20s"
    },
    {
        video: ["video/20s_small_4.mp4"],
        name: "NS20s"
    },
    {
        video: ["video/21s_large_3.mp4"],
        name: "NL21s"
    },
    {
        video: ["video/21s_large_4.mp4"],
        name: "NL21s"
    },
    {
        video: ["video/21s_small_2.mp4"],
        name: "NS21s"
    },
    {
        video: ["video/21s_small_3.mp4"],
        name: "NS21s"
    },
    {
        video: ["video/23s_large_1.mp4"],
        name: "NL23s"
    },
    {
        video: ["video/23s_large_2.mp4"],
        name: "NL23s"
    },
    {
        video: ["video/23s_small_1.mp4"],
        name: "NS23s"
    },
    {
        video: ["video/23s_small_4.mp4"],
        name: "NS23s"
    },
    {
        video: ["video/17s_large_3.mp4"],
        name: "NL17s"
    },
    {
        video: ["video/17s_large_4.mp4"],
        name: "NL17s"
    },
    {
        video: ["video/17s_small_2.mp4"],
        name: "NS17s"
    },
    {
        video: ["video/17s_small_3.mp4"],
        name: "NS17s"
    },
    {
        video: ["video/19s_large_1.mp4"],
        name: "NL19s"
    },
    {
        video: ["video/19s_large_4.mp4"],
        name: "NL19s"
    },
    {
        video: ["video/19s_small_2.mp4"],
        name: "NS19s"
    },
    {
        video: ["video/19s_small_3.mp4"],
        name: "NS19s"
    },
    {
        video: ["video/20s_large_3.mp4"],
        name: "NL20s"
    },
    {
        video: ["video/20s_large_4.mp4"],
        name: "NL20s"
    },
    {
        video: ["video/20s_small_3.mp4"],
        name: "NS20s"
    },
    {
        video: ["video/20s_small_4.mp4"],
        name: "NS20s"
    },
    {
        video: ["video/21s_large_3.mp4"],
        name: "NL21s"
    },
    {
        video: ["video/21s_large_4.mp4"],
        name: "NL21s"
    },
    {
        video: ["video/21s_small_2.mp4"],
        name: "NS21s"
    },
    {
        video: ["video/21s_small_3.mp4"],
        name: "NS21s"
    },
    {
        video: ["video/23s_large_1.mp4"],
        name: "NL23s"
    },
    {
        video: ["video/23s_large_2.mp4"],
        name: "NL23s"
    },
    {
        video: ["video/23s_small_1.mp4"],
        name: "NS23s"
    },
    {
        video: ["video/23s_small_4.mp4"],
        name: "NS23s"
    }
];


//all stimuli x2 - 2 trials - duration
var trial_train_dur = [
    {
        video: ["video/17s_large_1.mp4"],
        name: "TL17s"
    },
    {
        video: ["video/17s_large_2.mp4"],
        name: "TL17s"
    },
    {
        video: ["video/17s_small_1.mp4"],
        name: "TS17s"
    },
    {
        video: ["video/17s_small_4.mp4"],
        name: "TS17s"
    },
    {
        video: ["video/19s_large_2.mp4"],
        name: "TL19s"
    },
    {
        video: ["video/19s_large_3.mp4"],
        name: "TL19s"
    },
    {
        video: ["video/19s_small_1.mp4"],
        name: "TS19s"
    },
    {
        video: ["video/19s_small_4.mp4"],
        name: "TS19s"
    },
    {
        video: ["video/20s_large_1.mp4"],
        name: "TL20s"
    },
    {
        video: ["video/20s_large_2.mp4"],
        name: "TL20s"
    },
    {
        video: ["video/20s_small_1.mp4"],
        name: "TS20s"
    },
    {
        video: ["video/20s_small_2.mp4"],
        name: "TS20s"
    },
    {
        video: ["video/21s_large_1.mp4"],
        name: "TL21s"
    },
    {
        video: ["video/21s_large_2.mp4"],
        name: "TL21s"
    },
    {
        video: ["video/21s_small_1.mp4"],
        name: "TS21s"
    },
    {
        video: ["video/21s_small_4.mp4"],
        name: "TS21s"
    },
    {
        video: ["video/23s_large_3.mp4"],
        name: "TL23s"
    },
    {
        video: ["video/23s_large_4.mp4"],
        name: "TL23s"
    },
    {
        video: ["video/23s_small_2.mp4"],
        name: "TS23s"
    },
    {
        video: ["video/23s_small_3.mp4"],
        name: "TS23s"
    },
    {
        video: ["video/17s_large_1.mp4"],
        name: "TL17s"
    },
    {
        video: ["video/17s_large_2.mp4"],
        name: "TL17s"
    },
    {
        video: ["video/17s_small_1.mp4"],
        name: "TS17s"
    },
    {
        video: ["video/17s_small_4.mp4"],
        name: "TS17s"
    },
    {
        video: ["video/19s_large_2.mp4"],
        name: "TL19s"
    },
    {
        video: ["video/19s_large_3.mp4"],
        name: "TL19s"
    },
    {
        video: ["video/19s_small_1.mp4"],
        name: "TS19s"
    },
    {
        video: ["video/19s_small_4.mp4"],
        name: "TS19s"
    },
    {
        video: ["video/20s_large_1.mp4"],
        name: "TL20s"
    },
    {
        video: ["video/20s_large_2.mp4"],
        name: "TL20s"
    },
    {
        video: ["video/20s_small_1.mp4"],
        name: "TS20s"
    },
    {
        video: ["video/20s_small_2.mp4"],
        name: "TS20s"
    },
    {
        video: ["video/21s_large_1.mp4"],
        name: "TL21s"
    },
    {
        video: ["video/21s_large_2.mp4"],
        name: "TL21s"
    },
    {
        video: ["video/21s_small_1.mp4"],
        name: "TS21s"
    },
    {
        video: ["video/21s_small_4.mp4"],
        name: "TS21s"
    },
    {
        video: ["video/23s_large_3.mp4"],
        name: "TL23s"
    },
    {
        video: ["video/23s_large_4.mp4"],
        name: "TL23s"
    },
    {
        video: ["video/23s_small_2.mp4"],
        name: "TS23s"
    },
    {
        video: ["video/23s_small_3.mp4"],
        name: "TS23s"
    }
];

var trial_notrain_dur = [
    {
        video: ["video/17s_large_3.mp4"],
        name: "NL17s"
    },
    {
        video: ["video/17s_large_4.mp4"],
        name: "NL17s"
    },
    {
        video: ["video/17s_small_2.mp4"],
        name: "NS17s"
    },
    {
        video: ["video/17s_small_3.mp4"],
        name: "NS17s"
    },
    {
        video: ["video/19s_large_1.mp4"],
        name: "NL19s"
    },
    {
        video: ["video/19s_large_4.mp4"],
        name: "NL19s"
    },
    {
        video: ["video/19s_small_2.mp4"],
        name: "NS19s"
    },
    {
        video: ["video/19s_small_3.mp4"],
        name: "NS19s"
    },
    {
        video: ["video/20s_large_3.mp4"],
        name: "NL20s"
    },
    {
        video: ["video/20s_large_4.mp4"],
        name: "NL20s"
    },
    {
        video: ["video/20s_small_3.mp4"],
        name: "NS20s"
    },
    {
        video: ["video/20s_small_4.mp4"],
        name: "NS20s"
    },
    {
        video: ["video/21s_large_3.mp4"],
        name: "NL21s"
    },
    {
        video: ["video/21s_large_4.mp4"],
        name: "NL21s"
    },
    {
        video: ["video/21s_small_2.mp4"],
        name: "NS21s"
    },
    {
        video: ["video/21s_small_3.mp4"],
        name: "NS21s"
    },
    {
        video: ["video/23s_large_1.mp4"],
        name: "NL23s"
    },
    {
        video: ["video/23s_large_2.mp4"],
        name: "NL23s"
    },
    {
        video: ["video/23s_small_1.mp4"],
        name: "NS23s"
    },
    {
        video: ["video/23s_small_4.mp4"],
        name: "NS23s"
    },
    {
        video: ["video/17s_large_3.mp4"],
        name: "NL17s"
    },
    {
        video: ["video/17s_large_4.mp4"],
        name: "NL17s"
    },
    {
        video: ["video/17s_small_2.mp4"],
        name: "NS17s"
    },
    {
        video: ["video/17s_small_3.mp4"],
        name: "NS17s"
    },
    {
        video: ["video/19s_large_1.mp4"],
        name: "NL19s"
    },
    {
        video: ["video/19s_large_4.mp4"],
        name: "NL19s"
    },
    {
        video: ["video/19s_small_2.mp4"],
        name: "NS19s"
    },
    {
        video: ["video/19s_small_3.mp4"],
        name: "NS19s"
    },
    {
        video: ["video/20s_large_3.mp4"],
        name: "NL20s"
    },
    {
        video: ["video/20s_large_4.mp4"],
        name: "NL20s"
    },
    {
        video: ["video/20s_small_3.mp4"],
        name: "NS20s"
    },
    {
        video: ["video/20s_small_4.mp4"],
        name: "NS20s"
    },
    {
        video: ["video/21s_large_3.mp4"],
        name: "NL21s"
    },
    {
        video: ["video/21s_large_4.mp4"],
        name: "NL21s"
    },
    {
        video: ["video/21s_small_2.mp4"],
        name: "NS21s"
    },
    {
        video: ["video/21s_small_3.mp4"],
        name: "NS21s"
    },
    {
        video: ["video/23s_large_1.mp4"],
        name: "NL23s"
    },
    {
        video: ["video/23s_large_2.mp4"],
        name: "NL23s"
    },
    {
        video: ["video/23s_small_1.mp4"],
        name: "NS23s"
    },
    {
        video: ["video/23s_small_4.mp4"],
        name: "NS23s"
    }
];




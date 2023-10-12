// Generate a random subject ID and add it to jsPsych's data to be saved
var subjectID = jsPsych.randomization.randomID(5);
jsPsych.data.addProperties({'ID': subjectID});
console.log(subjectID);

//General timelines
var timeline_pot_notrain = [];
var timeline_dur_train = [];
var timeline_pot_train = [];
var timeline_dur_notrain = [];

//Create individualized links for each participant that chooses to participate in the other task as well
var link_dur = ".../dur/" 
var link_pot = ".../pot/"
var url_id = "?ID=" + String(subjectID)
link_dur = link_dur + url_id
link_pot = link_pot + url_id

console.log(link_dur);

//Code for assigning a condition at random 
var condition = jsPsych.randomization.sampleWithoutReplacement(['pot_train', 'pot_notrain', 'dur_train', 'dur_notrain'], 1)[0];
console.log(condition);

if (condition == 'pot_train') {
    timeline = timeline_pot_train;
} else if (condition == 'pot_notrain') {
    timeline = timeline_pot_notrain;
} else if (condition == "dur_train") {
    timeline = timeline_dur_train;
} else if (condition == 'dur_notrain') {
    timeline = timeline_dur_notrain;
}

// This forces jsPsych to wait for resources to be loaded before starting the
// experiment. Otherwise unpredictable behaviour ensue.
document.addEventListener("DOMContentLoaded", function(event) {
    // This detects touch events and register them
    window.USER_IS_TOUCHING = false;
    window.addEventListener('touchstart', function registerTouch() {
        window.USER_IS_TOUCHING = true;
        window.removeEventListener('touchstart', registerTouch, false);
    }, false);

   jsPsych.init({
    timeline: timeline,
    on_finish:
        function() {
        final_data = jsPsych.data.get().csv();
        sendData(subjectID + condition, "...", final_data); //save data on the server - a ping might need to be send before this takes place
        document.getElementById("jspsych-content").innerHTML = "Merci de votre participation !";
    }
});
});
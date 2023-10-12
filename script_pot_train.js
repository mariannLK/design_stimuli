//CONDITION: Passage of Time with the train block FIRST

//timeline for the main task - only in case pretraining is successful
var main_task_pot_train = [];

// The consent block, which points to the consent PAGE
var consent = {
    type:'external-html',
    url: "external-consent.html",
    cont_btn: "start"
};
timeline_pot_train.push(consent);

//stimuli (variable with all stimuli for preloading - loaded in the js file "stimuli")
var all_video =[];
all_video.push(video_notrain);
all_video.push(video_train);

//preload video files 
var preload_train = {
    type: "preload",
    video: video_train,
    continue_after_error: true,
    show_detailed_errors: true,
    message: "Veuillez patienter pendant le chargement de l'expérience. Cela peut prendre 2 - 3 minutes.<p>Vous le saviez ?</p><p>Un train à vapeur circule pour la première fois au monde le 21 février 1804. Ce train n’était pas très efficace car il pouvait seulement tirer 20 tonnes de wagons et avait une vitesse de 8 km/h. Par comparaison, hors de Paris, le RER B peut parcourir jusqu'à 110 km/h en direction de l'aéroport Charles-de-Gaulle (50 km/h à Paris) !</p>"
};
timeline_pot_train.push(preload_train);

//Randomize stimuli per block (original variables and stimuli to be found in the stimuli.js file)
var trial_train = jsPsych.randomization.shuffle(trial_train);
var trial_notrain = jsPsych.randomization.shuffle(trial_notrain);

//opening scene, welcome
var welcome = {
    type: "html-keyboard-response",
    stimulus: "<p>Bienvenue!</p> <p>Appuyez sur n'importe quelle touche pour commencer.</p>"
};
timeline_pot_train.push(welcome);

// General questions survey
//Age - fill in text
var survey_age = {
    type: "survey-text",
    preamble: "Veuillez prendre le temps de remplir ce formulaire avec quelques informations personnelles avant le début de l'expérience:",
    questions: [
        {prompt: "Age:",
        required: true,
        name: "age"
    }]
};
timeline_pot_train.push(survey_age);

//Rest of questions (sex, hand) in a multiple survey 
var survey = {
    type: "survey-multi-choice",
    questions: [
        {prompt: "Sexe:",
        options: ["Mâle", "Femelle"],
        required: true,
        name: "sex"
        },
        {prompt: "Vous êtes",
        options: ["droitier", "gaucher", "ambidextre"],
        required: true,
        name: "hand"
        }] 
};
timeline_pot_train.push(survey);

// General instructions (text in the js file) 
var instructions_general ={
    type: "instructions",
    pages: [instructions_general_page1, instructions_general_page2],
    show_clickable_nav: true,
    button_label_next: "Suite",
    button_label_previous: "Précédent",
    post_trial_gap: 500
};
timeline_pot_train.push(instructions_general);

//Fixation Cross
var fixation ={
    type: "html-keyboard-response",
    stimulus: '<span style="font-size:40px">+</span>',
    choices: jsPsych.NO_KEYS,
    trial_duration: 1000
};


//MAX and MIN possible stimuli (2 videos for each)
var stimulus_max = ["video/17s_large_1.mp4", "video/17s_large_2.mp4"];
var stimulus_min = ["video/23s_small_2.mp4", "video/23s_small_3.mp4"];

//stimulus presentation
var max_presentation = {
    type: "video-keyboard-response",
    stimulus: jsPsych.randomization.sampleWithoutReplacement(stimulus_max, 1),
    width: 1200,
    response_allowed_while_playing: false,
    choices: jsPsych.NO_KEYS,
    trial_ends_after_video: true
};
timeline_pot_train.push(max_presentation);

var max_message = {
    type: "html-keyboard-response",
    stimulus: "Cette vidéo était <b>RAPIDE</b>, appuyez sur la «flèche pointant vers la gauche»",
    choices: ['ArrowLeft']
};
timeline_pot_train.push(max_message)

var min_presentation = {
    type: "video-keyboard-response",
    stimulus: jsPsych.randomization.sampleWithoutReplacement(stimulus_min, 1),
    width: 1200,
    response_allowed_while_playing: false,
    choices: jsPsych.NO_KEYS,
    trial_ends_after_video: true
};
timeline_pot_train.push(min_presentation);

var min_message = {
    type: "html-keyboard-response",
    stimulus: "Cette vidéo était <b>LENTE</b>, appuyez sur la «flèche pointant vers la droite»",
    choices: ['ArrowRight']
};
timeline_pot_train.push(min_message)

//Instructions for the pretraining phase
var instructions_pre ={
    type: "instructions",
    pages: [instructions_pretraining],
    show_clickable_nav: true,
    button_label_next: "Suite",
    button_label_previous: "Précédent",
    post_trial_gap: 500
};
timeline_pot_train.push(instructions_pre)

//Pretraining response
var response_max ={
    type: "categorize-html",
    stimulus: "rapide (flèche gauche) ou plutôt lente (flèche droite)",
    choices: ['ArrowLeft', 'ArrowRight'],
    key_answer: "ArrowLeft",
    correct_text: "<span style='color:green;font-size:30px;'>Réponse correcte !</span>",
    incorrect_text: "<span style='color:red;font-size:30px;'>Réponse incorrecte !</span>"
};

var response_min ={
    type: "categorize-html",
    stimulus: "rapide (flèche gauche) ou plutôt lente (flèche droite)",
    choices: ['ArrowLeft', 'ArrowRight'],
    key_answer: "ArrowRight",
    correct_text: "<span style='color:green;font-size:30px;'>Réponse correcte !</span>",
    incorrect_text: "<span style='color:red;font-size:30px;'>Réponse incorrecte !</span>",
};

//Pretraining timeline
var pre_training = {
    timeline: [max_presentation, response_max, min_presentation, response_min],
};
timeline_pot_train.push(pre_training);

//Pretraining Repeat (in case at least one of the answers is wrong)
var repeat = {
    timeline: [pre_training],
    conditional_function: function(){ 
        var n_correct = jsPsych.data.get().filter({correct: true}).count();     
        if (n_correct == 2){
            return false;
        } else {
            return true;
        }       
    }
};

var repeat2 = {
    timeline: [pre_training],
    conditional_function: function(data){
        var n_correct = jsPsych.data.get().filter({correct: true}).count();     
        if (n_correct >= 2){
            return false;
        } else {
            return true;
        } 
    } 
};

//In case pretraining fails - failure message
var fail_message = {
    type: "html-keyboard-response",
    stimulus: [pre_fail]
};

//Fail timeline - cannot continue to main timeline - experiment ends
var fail ={
    timeline : [fail_message],
    conditional_function: function(){
        var n_correct = jsPsych.data.get().filter({correct: true}).count();
        if (n_correct >= 2){
            return false;
        } else {
            return true;
        }
    }
};

//In case pretraining is successful - it contains success message as well as instructions ofr the main task
var instructions_main = {
    type: "instructions",
    pages: [instructions_main_page1, instructions_main_page2, instructions_main_page3],
    show_clickable_nav: true,
    button_label_next: "Suite",
    button_label_previous: "Précédent",
    post_trial_gap: 500
};
main_task_pot_train.push(instructions_main);

//Success timeline the timeline for the main task is added here
var success = {
    timeline: main_task_pot_train,
    conditional_function: function(){
        var n_correct = jsPsych.data.get().filter({correct: true}).count();
        if (n_correct >= 2){
            return true;
        } else {
            return false;
        }
    }
};

//timeline with the repeat
var pre_repeat = {
    timeline: [repeat, repeat2, fail, success]
};
timeline_pot_train.push(pre_repeat);

//Message for when they miss a trial
var missed_message ={
    type: "html-keyboard-response",
    stimulus: "Vous avez manqué cette réponse ! Essayez d'être plus rapide la prochaine fois !",
    choices: jsPsych.NO_KEYS,
    trial_duration: 2000
};

var missed_trial ={
    timeline: [missed_message],
    conditional_function: function(){
        var res = jsPsych.data.get().last(1).select('response').values[0];
        console.log(res);
        if (res == null){
            return true;
        } else {
            return false;
        }
    }
};

//Main task 
//stimuli for the train block. The function will take the first ([0]) of the already randomized stimuli 
var stimuli_train ={
type: "video-keyboard-response",
stimulus: function() {return trial_train[0].video},
width: 1200,
response_allowed_while_playing: false, 
choices: jsPsych.NO_KEYS,
trial_ends_after_video: true
};

//Response 
var response_train ={
type: "html-keyboard-response",
stimulus: "<b><span style='font-size:50px''>rapide (flèche gauche)       lente (flèche droite)</span></b>",
choices: ['ArrowLeft', 'ArrowRight'],
trial_duration: 4000,
on_finish: function(data) {
   trial_train.splice(0, 1); //remove the first stimulus from the array 
   previous = jsPsych.data.get().last(2).select('stimulus').values[0] //ge the stimuli from previous trial
   previous_trial = previous[0]; //because the above returns an array 
   if (data.response == null) { //In case participant fails to respond - stimulus will not be removed but pushed to the end
           trial_train.push({video: [previous_trial]});
       }
}
};

//Train block procedure 
//original timeline
var train_original={
timeline: [fixation, stimuli_train, response_train, missed_trial],
};

//timeline for missed trials
var train_loop_node = {
timeline: [train_original],
loop_function: function(data) {
if (trial_train.length == 0) {
   return false;}
else {
   return true;
   }}
};
//all of train procedure
var train_block ={
timeline: [train_original, train_loop_node]
};
main_task_pot_train.push(train_block);

//Message after first block  
var message = {
    type: "html-keyboard-response",
    stimulus: "<p>Vous avez fini la première partie !</p><p> Pour cette deuxième partie, la procédure reste la même.</p> <p>Appuyez sur n'importe quelle touche pour continuer.</p>"
};
main_task_pot_train.push(message);

//preload video files 
var preload_notrain = {
    type: "preload",
    video: video_notrain,
    continue_after_error: true,
    show_detailed_errors: true,
    message: "<p>Veuillez prendre une pause de 1 - 2 minutes pendant le chargement des nouvelles vidéos.</p><p>Vous le saviez ?</p><p>Le record du monde de vitesse actuel pour un train commercial sur roues en acier est détenu par le TGV français à 574,8 km / h, atteint le 3 avril 2007 sur la nouvelle LGV Est, mais le train le plus rapide du monde est le SCMaglev (Japon) avec une vitesse maximale de 603 km/h.  Comme son nom l’indique, le « maglev » a la particularité de léviter au-dessus des rails, grâce à des aimants supraconducteurs fixés sur le véhicule et des bandes conductrices insérées dans les voies ferrées.</p>"
};
main_task_pot_train.push(preload_notrain);

var message_after_preload = {
    type: "html-keyboard-response",
    stimulus: "<p>Vous le saviez ?</p><p>Le premier train à grande vitesse en France avait un nom: Patrick! Après 41 ans de service, il a été retiré de la circulation en 2020.</p><p>Appuyez sur n'importe quelle touche pour continuer.</p>"
};
main_task_pot_train.push(message_after_preload);

//stimuli for the no train block (same as with train)
var stimuli_notrain ={
type: "video-keyboard-response",
stimulus: function() {return trial_notrain[0].video},
width: 1200,
response_allowed_while_playing: false, 
choices: jsPsych.NO_KEYS,
trial_ends_after_video: true
};

//response no train
var response_notrain ={
type: "html-keyboard-response",
stimulus: "<b><span style='font-size:50px''>rapide (flèche gauche)       lente (flèche droite)</span></b>",
choices: ['ArrowLeft', 'ArrowRight'],
trial_duration: 4000,
on_finish: function(data) {
   trial_notrain.splice(0, 1); 
   previous = jsPsych.data.get().last(2).select('stimulus').values[0] 
   previous_trial = previous[0]; 
   if (data.response == null) { 
           trial_notrain.push({video: [previous_trial]});
       }
}
};

//No train block procedure
//original timeline
var notrain_original={
timeline: [fixation, stimuli_notrain, response_notrain, missed_trial],
};

//timeline for missed trials
var notrain_loop_node = {
timeline: [notrain_original],
loop_function: function(data) {
if (trial_notrain.length == 0) {
   return false;}
else {
   return true;
   }}
};

//all of the no train procedure
var notrain_block ={
timeline: [notrain_original, notrain_loop_node]
};
main_task_pot_train.push(notrain_block);

//Debrief with emotional likert
var debrief_1 ={
   type:"survey-likert",
   preamble: "Vous avez terminé la deuxième partie ! Veuillez prendre le temps de répondre à quelques questions avant de terminer.",
   questions: [
     {prompt: "Pendant l'expérience, vous vous sentiez:", name: "sadness", labels: ["Pas triste du tout", " ", " ", "Très triste"]},
     {prompt: " ", name: "hapiness", labels: ["Pas joyeux du tout", " ", " ", "Très joyeux"]},
     {prompt: "...vous vous êtes ennuyé(e):", name: "boredom", labels: ["Pas du tout", " ", " ", "Tout à fait"]},
     {prompt: "Vous avez trouvé la tâche:", name: "difficulty", labels:["Pas du tout difficile", " "," ", "Très difficile"]}]
 };
 main_task_pot_train.push(debrief_1);
 
 //Debrief with comments
 var debrief_2 = {
   type: "survey-text",
   questions: [
     {prompt: "Avez-vous utilisé une stratégie spécifique pour caractériser les vidéos ?"},
     {prompt: "Autres commentaires libres:"}]
    };
main_task_pot_train.push(debrief_2); 

//Debrief - Do they want to participate to another condition? 
var debrief_3 = {
    type:"html-keyboard-response",
    stimulus: "<p>Souhaitez-vous participez au suivi de cette étude en ligne pour un supplément de 7,5 € ?</p> <p>Si c'est le cas, veuillez sauvegarder ce lien:</p>" + link_dur + "<p>Merci de l'effectuer le plus tard dans 3 jours ou le lien s'expirera.</p><p>Appuyez sur la touche ENTER lorsque vous êtes prêt.</p>",
    choices: ['Enter']
};
main_task_pot_train.push(debrief_3);





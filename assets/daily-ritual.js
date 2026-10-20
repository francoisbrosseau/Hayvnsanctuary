/* Private in-session reflection; no server requests or saved personal text. */
(()=>{'use strict';
const button=document.getElementById('ritualComplete'),step=document.getElementById('ritualStep'),instruction=document.getElementById('ritualInstruction'),input=document.getElementById('ritualIntention'),label=document.getElementById('ritualIntentionLabel'),status=document.getElementById('ritualStatus');let stage=0;
status.setAttribute('role','status');status.setAttribute('aria-live','polite');
button.addEventListener('click',()=>{stage=(stage+1)%5;status.textContent='';input.classList.toggle('hidden',stage!==3);label.classList.toggle('hidden',stage!==3);
if(stage===1){step.textContent='01 / 03 · ARRIVE';instruction.textContent='Sit comfortably. Let your breathing stay natural. Notice the support beneath you and give yourself a few unhurried breaths.';button.textContent='I’M HERE · CONTINUE →'}
else if(stage===2){step.textContent='02 / 03 · NOTICE';instruction.textContent=document.getElementById('ritualPractice').textContent+' There is no need to force an answer. Notice one thing you would like to carry into the rest of your day.';button.textContent='CHOOSE MY INTENTION →'}
else if(stage===3){step.textContent='03 / 03 · CHOOSE';instruction.textContent='Choose one small, kind action for today. Write it below if you like, or keep it to yourself. Your words stay only on this open page.';button.textContent='COMPLETE MY RITUAL';input.focus()}
else if(stage===4){step.textContent='YOUR RITUAL · COMPLETE';instruction.textContent='You have paused, noticed, and chosen a direction. Let that be enough for this moment.';status.textContent=input.value.trim()?'Your intention: '+input.value.trim():'Take this quiet moment with you.';button.textContent='BEGIN AGAIN'}
else{stage=1;input.value='';step.textContent='01 / 03 · ARRIVE';instruction.textContent='Return to a comfortable position and take a few natural breaths. There is no perfect way to begin again.';button.textContent='I’M HERE · CONTINUE →'}
});
// Keep direct links, back/forward navigation and room cards in agreement.
window.addEventListener('hashchange',()=>{const id=location.hash.slice(1);if(['stillness','atmosphere','reflection','journey','daily'].includes(id))openRoom(id)});
})();

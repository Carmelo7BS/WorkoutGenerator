//Button variables
const generateEl = document.getElementById('Generate')
const generateCsb = document.getElementById('generate-csb')
const generateTdg = document.getElementById('generate-tdg')
const generateSdc = document.getElementById('generate-sdc')
const generateLbt = document.getElementById('generate-lbt')
const central = document.getElementById('central-button')

const genReps = document.getElementById('gen-reps')
const genTimer = document.getElementById('gen-timer')
//Elements variables
const ulEl = document.getElementById('list')
//Exercise variable
const shoulder = ['Military-press', 'Alzate laterali', 'Alzate in alto', 'Alzate Frontali', 'Tirate al mento', '6 ways', 'Affondi indietro + spinte in alto', 'Alzate laterali da terra', 'Alzate frontali a 90', 'Alzate frontali in quadrupedia', 'Alzata laterale in quadrupedia']
const chest = ['Push Ups', 'Croci a terra', 'Croci ai cavi', 'Spinte da terra', 'Pull over petto']
const bicepts = ['Curl Hummer alternato', 'Curl manubri', 'Curl presa inversa', 'Hummer ai cavi', 'Bicipiti in affondo fisso']
const tricepts = ['Estensione tricipite manubrio', 'French press', 'Tricipite pull over', 'Push down ai cavi', 'Kick-back']
const dorsali = ['Volare prona', 'Rematore', 'Rematore presa inversa', 'Pulley basso', 'Scrollate spalle', 'Pull over dorsali', 'Rematore + volare prona']
const gambe = ['Squat', 'Squat bulgari', 'Calf', 'Sumo squat', 'Stacchi rumeni', 'Gluteus bridge', 'Affondi', 'Good morning', 'Squat su sedia', 'Stacco sumo', 'Squato piedi pari', 'Affondi laterali Goku']
const addominali =  ['Crunch', 'Leg Raise', 'Bicicletta', 'L-toe touch', 'Isometria barchetta', 'Russian twist', 'Crunch incrociato', 'Crunch con gambe sollevate']
const fullbody = ['Plank', 'Plank basso', 'Plank inverso', 'Plank tocco spalla', 'Plank pugno', 'Plank gambe aperte + rematore alt', 'Plank gambe aperte + tocco piede', 'Stacco + tirate + spinte in alto', 'Plank + spinte indietro', 'Camminata Plank + piegamenti', 'Plank basso + spost. peso']
//Reps variables
const reps = ['Reps: 3 x 10', 'Reps: 4 x 8', 'Reps: 3 x 12', 'Reps: 4 x 6']

let numbExercise = 1


//Functions
//GenerateReps
genReps.addEventListener('click', function(){
  genReps.value = ''
  let randomRep = Math.floor(Math.random()*reps.length)
  genReps.value += reps[randomRep]
})

//GenerateTimer
let start = genTimer.addEventListener('click', function start(){
  let time = 40
  let countdown = setInterval(function(){
    if (time <= 0){
      clearInterval(countdown)
      genTimer.value = 'Timer'
    }
    genTimer.value = time
    time--
  }, 1000)
})


//1-Full body
generateEl.addEventListener('click', function (){
  let warmUp = `<li class="liFissi">Warm up</li>`
  let stretching = `<li class="liFissi">Stretching</li>`
  let listItems = ""
  for(let i = 0; i < numbExercise; i++){
    let randomShoulder = Math.floor(Math.random()*shoulder.length)
    let randomChest = Math.floor(Math.random()*chest.length)
    let randomBicepts = Math.floor(Math.random()*bicepts.length)
    let randomTricepts = Math.floor(Math.random()*tricepts.length)
    let randomDorsali = Math.floor(Math.random()*dorsali.length)
    let randomGambe = Math.floor(Math.random()*gambe.length)
    let randomAddominali = Math.floor(Math.random()*addominali.length)
    let randomFullbody = Math.floor(Math.random()*fullbody.length)
    listItems += `<li>${shoulder[randomShoulder]}</li>` +
                  `<li>${chest[randomChest]}</li>` +
                  `<li>${bicepts[randomBicepts]}</li>` +
                  `<li>${tricepts[randomTricepts]}</li>` +
                  `<li>${dorsali[randomDorsali]}</li>` +
                  `<li>${gambe[randomGambe]}</li>` +
                  `<li>${addominali[randomAddominali]}</li>` +
                  `<li>${fullbody[randomFullbody]}</li>`
  }
  let workout = warmUp + listItems + stretching
  ulEl.innerHTML = workout
  central.style.display = 'inline'
  central.textContent = 'Full Body'
  central.addEventListener('click', function (){
    let warmUp = `<li class="liFissi">Warm up</li>`
    let stretching = `<li class="liFissi">Stretching</li>`
    let listItems = ""
    for(let i = 0; i < numbExercise; i++){
      let randomShoulder = Math.floor(Math.random()*shoulder.length)
      let randomChest = Math.floor(Math.random()*chest.length)
      let randomBicepts = Math.floor(Math.random()*bicepts.length)
      let randomTricepts = Math.floor(Math.random()*tricepts.length)
      let randomDorsali = Math.floor(Math.random()*dorsali.length)
      let randomGambe = Math.floor(Math.random()*gambe.length)
      let randomAddominali = Math.floor(Math.random()*addominali.length)
      let randomFullbody = Math.floor(Math.random()*fullbody.length)
      listItems += `<li>${shoulder[randomShoulder]}</li>` +
                    `<li>${chest[randomChest]}</li>` +
                    `<li>${bicepts[randomBicepts]}</li>` +
                    `<li>${tricepts[randomTricepts]}</li>` +
                    `<li>${dorsali[randomDorsali]}</li>` +
                    `<li>${gambe[randomGambe]}</li>` +
                    `<li>${addominali[randomAddominali]}</li>` +
                    `<li>${fullbody[randomFullbody]}</li>`
    }
    let workout = warmUp + listItems + stretching
    ulEl.innerHTML = workout
  })
})

//2-Chest-Shoulder-bicepts
generateCsb.addEventListener('click', function(){
  let warmUp = `<li class="liFissi">Warm up</li>`
  let stretching = `<li class="liFissi">Stretching</li>`
  let listItems = ""
  let numbEx = numbExercise + 1
  for(let i = 0; i < numbEx; i++){
    let randomShoulder = Math.floor(Math.random()*shoulder.length)
    let randomChest = Math.floor(Math.random()*chest.length)
    let randomBicepts = Math.floor(Math.random()*bicepts.length)
    let randomAddominali = Math.floor(Math.random()*addominali.length)
    listItems += `<li>${shoulder[randomShoulder]}</li>` +
                  `<li>${chest[randomChest]}</li>` +
                  `<li>${bicepts[randomBicepts]}</li>` +
                  `<li>${addominali[randomAddominali]}</li>`
  }
  let workout = warmUp + listItems + stretching
  ulEl.innerHTML = workout
  central.style.display = 'inline'
  central.textContent = 'Petto/Spalle/Bicipiti'
  central.addEventListener('click', function(){
    let warmUp = `<li class="liFissi">Warm up</li>`
    let stretching = `<li class="liFissi">Stretching</li>`
    let listItems = ""
    let numbEx = numbExercise + 1
    for(let i = 0; i < numbEx; i++){
      let randomShoulder = Math.floor(Math.random()*shoulder.length)
      let randomChest = Math.floor(Math.random()*chest.length)
      let randomBicepts = Math.floor(Math.random()*bicepts.length)
      let randomAddominali = Math.floor(Math.random()*addominali.length)
      listItems += `<li>${shoulder[randomShoulder]}</li>` +
                    `<li>${chest[randomChest]}</li>` +
                    `<li>${bicepts[randomBicepts]}</li>` +
                    `<li>${addominali[randomAddominali]}</li>`
    }
    let workout = warmUp + listItems + stretching
    ulEl.innerHTML = workout
  })
})

//3-Tricepts-Dorsali-gambe
generateTdg.addEventListener('click', function(){
  let warmUp = `<li class="liFissi">Warm up</li>`
  let stretching = `<li class="liFissi">Stretching</li>`
  let listItems = ""
  let numbEx = numbExercise + 1
  for(let i = 0; i < numbEx; i++){
    let randomTricepts = Math.floor(Math.random()*tricepts.length)
    let randomDorsali = Math.floor(Math.random()*dorsali.length)
    let randomGambe = Math.floor(Math.random()*gambe.length)
    listItems += `<li>${tricepts[randomTricepts]}</li>` +
                 `<li>${dorsali[randomDorsali]}</li>` +
                 `<li>${gambe[randomGambe]}</li>`
  }
  let randomAddominali = Math.floor(Math.random()*addominali.length)
  let randomFullbody = Math.floor(Math.random()*fullbody.length)
  listItems += `<li>${addominali[randomAddominali]}</li>` +
               `<li>${fullbody[randomFullbody]}</li>`
  let workout = warmUp + listItems + stretching
  ulEl.innerHTML = workout
  central.style.display = 'inline'
  central.textContent = 'Tricipiti/Dorsali/Gambe'
  central.addEventListener('click', function(){
    let warmUp = `<li class="liFissi">Warm up</li>`
    let stretching = `<li class="liFissi">Stretching</li>`
    let listItems = ""
    let numbEx = numbExercise + 1
    for(let i = 0; i < numbEx; i++){
      let randomTricepts = Math.floor(Math.random()*tricepts.length)
      let randomDorsali = Math.floor(Math.random()*dorsali.length)
      let randomGambe = Math.floor(Math.random()*gambe.length)
      listItems += `<li>${tricepts[randomTricepts]}</li>` +
                   `<li>${dorsali[randomDorsali]}</li>` +
                   `<li>${gambe[randomGambe]}</li>`
    }
    let randomAddominali = Math.floor(Math.random()*addominali.length)
    let randomFullbody = Math.floor(Math.random()*fullbody.length)
    listItems += `<li>${addominali[randomAddominali]}</li>` +
                 `<li>${fullbody[randomFullbody]}</li>`
    let workout = warmUp + listItems + stretching
    ulEl.innerHTML = workout
  })
})

//4-Shoulder-Dorsali-chest
generateSdc.addEventListener('click', function(){
  let warmUp = `<li class="liFissi">Warm up</li>`
  let stretching = `<li class="liFissi">Stretching</li>`
  let listItems = ""
  let numbEx = numbExercise + 1
  for(let i = 0; i < numbEx; i++){
    let randomShoulder = Math.floor(Math.random()*shoulder.length)
    let randomDorsali = Math.floor(Math.random()*dorsali.length)
    let randomChest = Math.floor(Math.random()*chest.length)
    let randomFullbody = Math.floor(Math.random()*fullbody.length)
    listItems += `<li>${shoulder[randomShoulder]}</li>` +
                 `<li>${dorsali[randomDorsali]}</li>` +
                 `<li>${chest[randomChest]}</li>` +
                 `<li>${fullbody[randomFullbody]}</li>`
  }
  let randomAddominali = Math.floor(Math.random()*addominali.length)
  listItems += `<li>${addominali[randomAddominali]}</li>`
  let workout = warmUp + listItems + stretching
  ulEl.innerHTML = workout
  central.style.display = 'inline'
  central.textContent = 'Spalle/Dorsali/Petto'
  central.addEventListener('click', function(){
    let warmUp = `<li class="liFissi">Warm up</li>`
    let stretching = `<li class="liFissi">Stretching</li>`
    let listItems = ""
    let numbEx = numbExercise + 1
    for(let i = 0; i < numbEx; i++){
      let randomShoulder = Math.floor(Math.random()*shoulder.length)
      let randomDorsali = Math.floor(Math.random()*dorsali.length)
      let randomChest = Math.floor(Math.random()*chest.length)
      let randomFullbody = Math.floor(Math.random()*fullbody.length)
      listItems += `<li>${shoulder[randomShoulder]}</li>` +
                   `<li>${dorsali[randomDorsali]}</li>` +
                   `<li>${chest[randomChest]}</li>` +
                   `<li>${fullbody[randomFullbody]}</li>`
    }
    let randomAddominali = Math.floor(Math.random()*addominali.length)
    listItems += `<li>${addominali[randomAddominali]}</li>`
    let workout = warmUp + listItems + stretching
    ulEl.innerHTML = workout
  })
})

//5-Legs-Bicepts-tricepts
generateLbt.addEventListener('click', function(){
  let warmUp = `<li class="liFissi">Warm up</li>`
  let stretching = `<li class="liFissi">Stretching</li>`
  let listItems = ""
  let numbEx = numbExercise + 1
  for(let i = 0; i < numbEx; i++){
    let randomGambe = Math.floor(Math.random()*gambe.length)
    let randomBicepts = Math.floor(Math.random()*bicepts.length)
    let randomTricepts = Math.floor(Math.random()*tricepts.length)
    let randomAddominali = Math.floor(Math.random()*addominali.length)
    listItems += `<li>${gambe[randomGambe]}</li>` +
                 `<li>${bicepts[randomBicepts]}</li>` +
                 `<li>${tricepts[randomTricepts]}</li>` +
                 `<li>${addominali[randomAddominali]}</li>`
  }
  let randomFullbody = Math.floor(Math.random()*fullbody.length)
  listItems += `<li>${fullbody[randomFullbody]}</li>`
  let workout = warmUp + listItems + stretching
  ulEl.innerHTML = workout
  central.style.display = 'inline'
  central.textContent = 'Gambe/Bicipiti/Tricipiti'
  central.addEventListener('click', function(){
    let warmUp = `<li class="liFissi">Warm up</li>`
    let stretching = `<li class="liFissi">Stretching</li>`
    let listItems = ""
    let numbEx = numbExercise + 1
    for(let i = 0; i < numbEx; i++){
      let randomGambe = Math.floor(Math.random()*gambe.length)
      let randomBicepts = Math.floor(Math.random()*bicepts.length)
      let randomTricepts = Math.floor(Math.random()*tricepts.length)
      let randomAddominali = Math.floor(Math.random()*addominali.length)
      listItems += `<li>${gambe[randomGambe]}</li>` +
                   `<li>${bicepts[randomBicepts]}</li>` +
                   `<li>${tricepts[randomTricepts]}</li>` +
                   `<li>${addominali[randomAddominali]}</li>`
    }
    let randomFullbody = Math.floor(Math.random()*fullbody.length)
    listItems += `<li>${fullbody[randomFullbody]}</li>`
    let workout = warmUp + listItems + stretching
    ulEl.innerHTML = workout
  })
})

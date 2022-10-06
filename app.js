
// Buttons
const rhaenyraBioBtn = document.getElementById('rhaenyra-bio')
const rhaenyraStatusBtn = document.getElementById('rhaenyra-status')
const alicentBioBtn = document.getElementById('alicent-bio')
const alicentStatusBtn = document.getElementById('alicent-status')
const kingBioBtn = document.getElementById('king-bio')
const kingStatusBtn = document.getElementById('king-status')
const daemonBioBtn = document.getElementById('daemon-bio')
const daemonStatusBtn = document.getElementById('daemon-status')
const laenorBioBtn = document.getElementById('laenor-bio')
const laenorStatusBtn = document.getElementById('laenor-status')
const laenaBioBtn = document.getElementById('laena-bio')
const laenaStatusBioBtn = document.getElementById('laena-statusgit')

// Text divs
const rhaenyraBioTxt = document.getElementById('rhaenyra-bio-t')
const rhaenyraStatusTxt = document.getElementById('rhaenyra-status-t')
const alicentBioTxt = document.getElementById('alicent-bio-t')
const alicentStatusTxt = document.getElementById('alicent-status-t')
const kingBioTxt = document.getElementById('king-bio-t')
const kingStatusTxt = document.getElementById('king-status-t')
const daemonBioTxt = document.getElementById('daemon-bio-t')
const daemonStatusTxt = document.getElementById('daemon-status-t')
const laenorBioTxt = document.getElementById('laenor-bio-t')
const laenorStatusTxt = document.getElementById('laenor-status-t')
const laenaBioTxt = document.getElementById('laena-bio-t')
const laenaStatusTxt = document.getElementById('laena-status-t')



// const showBio = (character) => {
//     if(`${character}BioTxt`.className) {
//         `${character}BioTxt`.classList.remove('hide')
//     } else {
//         `${character}BioTxt`.classList.add('hide')
//     }
// }


// Event Listeners
rhaenyraBioBtn.addEventListener('click', () => {
    if (rhaenyraBioTxt.className) {
        rhaenyraBioTxt.classList.remove('hide')
    } else {
        rhaenyraBioTxt.classList.add('hide')
    }
})
rhaenyraStatusBtn.addEventListener('click', () => {

})

alicentBioBtn.addEventListener('click', () => {
    if (alicentBioTxt.className) {
        alicentBioTxt.classList.remove('hide')
    } else {
        alicentBioTxt.classList.add('hide')
    }

})
kingBioBtn.addEventListener('click', () => {
    if (kingBioTxt.className) {
        kingBioTxt.classList.remove('hide')
    } else {
        kingBioTxt.classList.add('hide')
    }
})
daemonBioBtn.addEventListener('click', () => {
    if (daemonBioTxt.className) {
        daemonBioTxt.classList.remove('hide')
    } else {
        daemonBioTxt.classList.add('hide')
    }
})
laenorBioBtn.addEventListener('click', () => {
    if (laenorBioTxt.className) {
        laenorBioTxt.classList.remove('hide')
    } else {
        laenorBioTxt.classList.add('hide')
    }
})
laenaBioBtn.addEventListener('click', () => {
    if (laenaBioTxt.className) {
        laenaBioTxt.classList.remove('hide')
    } else {
        laenaBioTxt.classList.add('hide')
    }
})

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
const laenaStatusBtn = document.getElementById('laena-status')

// Text 
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

// Search
const searchInput = document.getElementById('search')
const submitBtn = document.getElementById('submit')

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
        rhaenyraStatusBtn.disabled = true
    } else {
        rhaenyraBioTxt.classList.add('hide')
        rhaenyraStatusBtn.disabled = false
    }
})
rhaenyraStatusBtn.addEventListener('click', () => {
    if (rhaenyraStatusTxt.className) {
        rhaenyraStatusTxt.classList.remove('hide')
        rhaenyraBioBtn.disabled = true
    } else {
        rhaenyraStatusTxt.classList.add('hide')
        rhaenyraBioBtn.disabled = false
    }
})

alicentBioBtn.addEventListener('click', () => {
    if (alicentBioTxt.className) {
        alicentBioTxt.classList.remove('hide')
        alicentStatusBtn.disabled = true
    } else {
        alicentBioTxt.classList.add('hide')
        alicentStatusBtn.disabled = false
    }
})
alicentStatusBtn.addEventListener('click', () => {
    if (alicentStatusTxt.className) {
        alicentStatusTxt.classList.remove('hide')
        alicentBioBtn.disabled = true
    } else {
        alicentStatusTxt.classList.add('hide')
        alicentBioBtn.disabled = false
    }
})

kingBioBtn.addEventListener('click', () => {
    if (kingBioTxt.className) {
        kingBioTxt.classList.remove('hide')
        kingStatusBtn.disabled = true
    } else {
        kingBioTxt.classList.add('hide')
        kingStatusBtn.disabled = false
    }
})
kingStatusBtn.addEventListener('click', () => {
    if (kingStatusTxt.className) {
        kingStatusTxt.classList.remove('hide')
        kingBioBtn.disabled = true
    } else {
        kingStatusTxt.classList.add('hide')
        kingBioBtn.disabled = false
    }
})

daemonBioBtn.addEventListener('click', () => {
    if (daemonBioTxt.className) {
        daemonBioTxt.classList.remove('hide')
        daemonStatusBtn.disabled = true
    } else {
        daemonBioTxt.classList.add('hide')
        daemonStatusBtn.disabled = false
    }
})
daemonStatusBtn.addEventListener('click', () => {
    if (daemonStatusTxt.className) {
        daemonStatusTxt.classList.remove('hide')
        daemonBioBtn.disabled = true
    } else {
        daemonStatusTxt.classList.add('hide')
        daemonBioBtn.disabled = false
    }
})

laenorBioBtn.addEventListener('click', () => {
    if (laenorBioTxt.className) {
        laenorBioTxt.classList.remove('hide')
        laenorStatusBtn.disabled = true
    } else {
        laenorBioTxt.classList.add('hide')
        laenorStatusBtn.disabled = false
    }
})
laenorStatusBtn.addEventListener('click', () => {
    if (laenorStatusTxt.className) {
        laenorStatusTxt.classList.remove('hide')
        laenorBioBtn.disabled = true
    } else {
        laenorStatusTxt.classList.add('hide')
        laenorBioBtn.disabled = false
    }
})

laenaBioBtn.addEventListener('click', () => {
    if (laenaBioTxt.className) {
        laenaBioTxt.classList.remove('hide')
        laenaStatusBtn.disabled = true
    } else {
        laenaBioTxt.classList.add('hide')
        laenaStatusBtn.disabled = false
    }
})
laenaStatusBtn.addEventListener('click', () => {
    if (laenaStatusTxt.className) {
        laenaStatusTxt.classList.remove('hide')
        laenaBioBtn.disabled = true
    } else {
        laenaStatusTxt.classList.add('hide')
        laenaBioBtn.disabled = false
    }
})
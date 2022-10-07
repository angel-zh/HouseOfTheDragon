
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

// Text-related
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

// Search-related
const searchInput = document.getElementById('searchInput')
const submitBtn = document.getElementById('submit')

// Function to search by character
const search = () => {
    // grab all character cards
    const charactersArr = document.querySelectorAll('.character')
    // change user's search input to lower case
    const charSearch = searchInput.value.toLowerCase()
    charactersArr.forEach(character => {
        // grab each character card's h2 text in lower case
        const h2 = character.firstElementChild.innerText.toLowerCase()
        // if h2 does not include user's search term(s), hide the character
        if (!h2.includes(charSearch)) {
            character.classList.add('hide')
        // if it does include, show the character
        } else {
            character.classList.remove('hide')
        }
    })
}

// Event Listeners
submitBtn.addEventListener('click', search)


rhaenyraBioBtn.addEventListener('click', () => {
    // if text div has a classname, then remove it
    if (rhaenyraBioTxt.className) {
        rhaenyraBioTxt.classList.remove('hide')
        // disable the other button when text is being shown
        rhaenyraStatusBtn.disabled = true
    // if text div has no classname, add one
    } else {
        rhaenyraBioTxt.classList.add('hide')
        // enable the other button when text is hidden
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
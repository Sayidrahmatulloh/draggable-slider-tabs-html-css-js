const tabsBox = document.querySelector('.tabs-box')
const arrowIcons = document.querySelectorAll('.icon i')
const allTabs = document.querySelectorAll('.tab')

let isDragging = false

const handleIcons = () => {
    let scrollValue = Math.round(tabsBox.scrollLeft)
    let maxScrollableWith = tabsBox.scrollWidth - tabsBox.clientWidth
    arrowIcons[0].parentElement.style.display = scrollValue > 0 ? 'flex' : 'none'
    arrowIcons[1].parentElement.style.display = maxScrollableWith > scrollValue ? 'flex' : 'none'
}

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        tabsBox.scrollLeft += icon.id === 'left' ? -350 : 350
        setTimeout(() => {
            handleIcons()
        }, 50)
    })
})

allTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabsBox.querySelector('.active').classList.remove('active')
        tab.classList.add('active')
    })
})

const dragging = (e) => {
    if (!isDragging) return
    tabsBox.scrollLeft -= e.movementX
    tabsBox.classList.add('dragging')
    setTimeout(() => {
        handleIcons()
    }, 50)
}

tabsBox.addEventListener('mousedown', () => isDragging = true)
tabsBox.addEventListener('mousemove', dragging)
document.addEventListener('mouseup', () => {
    isDragging = false
    tabsBox.classList.remove('dragging')
})

const main = document.querySelector('main')!
const sections = Array.from( main.children ) as HTMLElement[]
const [ previousBtn, nextBtn ] = document.querySelectorAll('button') as unknown as HTMLButtonElement[]

let shown = 0

const update = (delta: number) => {
    if (!(0 <= shown + delta && shown + delta < sections.length)) return

    const nextShown = shown + delta

    previousBtn.classList.toggle('disabled', nextShown === 0)
        nextBtn.classList.toggle('disabled', nextShown === sections.length - 1)

    if (delta === 0)
        sections.slice(1).forEach(section => section.style.display = 'none')
    else {
        const toHide = sections[shown]
        const toShow = sections[nextShown]

        toHide.style.opacity = '0'
        toShow.style.opacity = '0'
        
        setTimeout(() => {
            toHide.style.display = 'none'

            toShow.style.display = ''

            setTimeout(() => {
                toShow.style.opacity = '1'
            }, 500);
        }, 500);
    }

    shown = nextShown
}

previousBtn.onclick = () => update(-1)
    nextBtn.onclick = () => update(+1)

update(0)

window.addEventListener('keyup', ({ key }) => {
    if ([ 'q', 'ArrowLeft',  'ArrowUp',   'Backspace'  ].includes(key)) update(-1)
    if ([ 'd', 'ArrowRight', 'ArrowDown', 'Enter', ' ' ].includes(key)) update(+1)
})
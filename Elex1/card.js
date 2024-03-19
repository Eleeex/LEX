const cardfunc = (img, desc, button1) => {
    let div = document.createElement('div')
    div.className = "cardsec2"
    div.innerHTML = `
        <img class = "hop" src="./assets/${img}" alt="elex">
        <p class="hud">${desc}</p>
        <button class="but">${button1}</button>
    `
    return div;
}

export { cardfunc }
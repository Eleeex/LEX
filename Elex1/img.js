let imgfun = (img) => {
    let div = document.createElement("div")
    div.className = "secimg1"
    div.innerHTML = `
        <img src="./assets/${img}" alt="elex">
    `
    return div;
}

export { imgfun }
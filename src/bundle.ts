window.onload = () => {
    document.querySelectorAll(`button`).forEach(element => {
        element.onclick = () => {
            console.log(true)
        }
    });
}
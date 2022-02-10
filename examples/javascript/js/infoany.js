function getInfoAboutParagraph() {
    let p = document.getElementById('theParagraph')
    let info = p.outerHTML  // whole HTML code, including element's tag(s)
    let where = document.getElementById('outer')
    where.innerText = info
    document.getElementById('innerHTML').innerText = p.innerHTML  // internal HTML code, excluding element's tag(s)
    document.getElementById('innerText').innerText = p.innerText  // internal text representation
    document.getElementById('classList').innerText = p.classList  // list of elements classes
    // con Firefox, potete scoprire altre proprietà dalla console ...
    console.log(p)
    // con qualunque browser, potete farlo usando il debugger ...
}
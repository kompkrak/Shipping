
function shipping(){
    let niceships = ['giyushino', 'sanekana', 'obamitsu', 'shinogiyu', 'giyuushino', 'shinogiyuu', 'kanasane', 'mitsuoba']
    let badships = ['sanegiyu', 'giyusane', 'sanegiyuu', 'giyuusane', 'doushino', 'shinodou']
    let ship = document.getElementById('ship').value.trim().toLowerCase()
    let img = document.getElementById('imagem')
    let header = document.getElementById('header')
    let sesao = document.getElementById('sesao')
    let footer = document.getElementById('footer')
    let res = document.getElementById('res')
    sesao.style.backgroundColor = '#f0f8ff'
    res.style.color = 'black'
    document.body.style.backgroundColor = '#262b5a'
    img.src = ''
    if (ship.length == 0) {
        window.alert('[ERROR] No text detected, please try again!')
    } else if (niceships.includes(ship)) {
        if (ship == niceships[0] || ship == niceships[3] || ship == niceships[4] || ship == niceships[5]){
            res.innerHTML = `${ship.toUpperCase()}!!!!!! COUPLE!!!!!!!!!!!!!!!`
            res.style.color = 'white'
            img.src = 'giyushino.jpg'
            sesao.style.backgroundColor = '#1039A0'
            document.body.style.backgroundColor = '#6E3FB0'
        } else if (ship == niceships[1] || ship == niceships[6]) {
            img.src = 'sanekana.jpg'
            res.style.color = 'white'
            res.innerHTML = `${ship}!! Good ship!!!!!!!`
            sesao.style.backgroundColor = '#f5c4ed'
            document.body.style.backgroundColor = '#2c6137'
        } else {
            img.src = 'obamitsu.jpg'
            res.style.color = 'white'
            res.innerHTML = `${ship}!! Good ship!!!!!!!`
            sesao.style.backgroundColor = '#DF6ED0'
            document.body.style.backgroundColor = '#2d2c4d'
        }
    } else if (badships.includes(ship)){
        window.alert('Bad choice.')
        footer.innerHTML = ''
        header.innerHTML = "YOUR SHIP IS HORRIBLE."
        header.style.fontSize = '50px'
        header.style.fontFamily = "'Creepster', cursive"
        footer.style.fontSize = '25px'
        footer.style.fontFamily = "'Butcherman', cursive";
        sesao.style.backgroundColor = '#000000'
        document.body.style.backgroundColor = '#000000'
        img.src = 'sanegiyu.jpg'
        const texto = "Kill yourself"
        let i = 0
        function digitar() {
            if (i < texto.length) {
                footer.innerHTML += texto.charAt(i);
                i++;
                setTimeout(digitar, 150);
            } else {
                setTimeout(() => {
                    window.alert("CRASHING... YOUR SHIP IS TOO BAD TO HANDLE.")
                    while (true) {
                        console.log("CRASHING... YOUR SHIP IS TOO BAD TO HANDLE.")
                    }
                }, 1000);
            }
        }
        digitar()
    } else {
        let numr = Math.floor(Math.random() * 101)  
        if (numr < 40) {
            res.innerHTML = `I dont really like this, i rate this as a ${numr}`
            img.src = 'hate.png'
        } else if (numr > 60){
            res.innerHTML = `I like this, i rate this as a ${numr}`
            img.src = 'like.png'
        } else {
            res.innerHTML = `I dont like but also dont hate, i would say maybe a ${numr}`
            img.src = 'nah.png'
        }
    }
}
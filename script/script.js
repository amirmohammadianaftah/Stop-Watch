const btn = document.querySelectorAll('.main>.butt>button')
// console.log(btn);
const ul = document.querySelector('ul')
let ms = 0
let s = 0
let m = 0
let h = 0
let superVal = 0

btn[0].addEventListener('click', (e) => {
    // console.log('hi');
    if (e.target.getAttribute('data-status') == 'off') {
        superVal = setInterval(myCounter, 10)
        e.target.setAttribute('data-status', 'on')
    }
})

btn[1].addEventListener('click', (e) => {
    btn[0].setAttribute('data-status', 'off')
    clearInterval(superVal)
})

btn[2].addEventListener('click', (e) => {
    ms = "00"
    s = "00"
    m = "00"
    h = '00'
    btn[1].click()
    document.getElementById('ms').innerHTML = ms
    document.getElementById('s').innerHTML = s
    document.getElementById('m').innerHTML = m
    document.getElementById('h').innerHTML = h
    ul.innerHTML = ''
    flag = 1
})
let flag = 1
// let btnLi = 0
btn[3].addEventListener('click', () => {
    if (btn[0].getAttribute('data-status') == 'on') {
        let li = document.createElement('li')
        // laps.style.opacity = '1'

        li.innerHTML = `
            <span>${flag + '.'}</span>
            ${document.getElementById('h').innerHTML}:${document.getElementById('m').innerHTML}:${document.getElementById('s').innerHTML}:${document.getElementById('ms').innerHTML}
        `
        // btLi.style.marginTop = mT + '15px'
        ul.appendChild(li)
        flag++
        let btLi = document.querySelector('ul>li>button')
        console.log(btLi);

        // console.log(step);
        // console.log(li);
        //     li = (flag++) + '     ' + li

        // let butn = document.createElement('button')
        // butn.innerHTML = `
        //     clear laps
        // `
        //         butn.style.marginTop = '15px'
        //         ul.appendChild(butn)
        //     }
        //     ul = document.querySelector('ul')
    }
})


function myCounter() {
    if (ms < 99) {
        if (ms < 10) {
            document.getElementById('ms').innerHTML = '0' + ms
        } else {
            document.getElementById('ms').innerHTML = ms
        }
        ms++
    } else {
        ms = 0
        if (s < 59) {
            s++
            if (s < 10) {
                document.getElementById('s').innerHTML = '0' + s
            } else {
                document.getElementById('s').innerHTML = s
            }
        } else {
            s = 0
            if (m < 59) {
                m++
                if (m < 10) {
                    document.getElementById('m').innerHTML = '0' + m
                } else {
                    document.getElementById('m').innerHTML = m
                }
            } else {
                m = 0
                h++
                if (h < 10) {
                    document.getElementById('h').innerHTML = '0' + h
                } else {
                    document.getElementById('h').innerHTML = h
                }
            }
        }
    }
}
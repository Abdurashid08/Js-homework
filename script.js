let a = +prompt('Birinchi sonni kiriting')

let b = +prompt('Ikkinchi sonni kiriting')

let c = +prompt('Uchinchi sonni kiriting')

if (a > b && a > c) {
    if (b > c) {
        document.getElementById('number').textContent = b
    } else {
        document.getElementById('number').textContent = c
    }
} else if (b > a && b > c) {
    if (a > c) {
        document.getElementById('number').textContent = a
    } else {
        document.getElementById('number').textContent = c
    }
} else if (c > a && c > b) {
    if (a > b) {
        document.getElementById('number').textContent = a
    } else {
        document.getElementById('number').textContent = b
    }
} else {
    document.getElementById('number').textContent = "Xatolik bo'ldi"
}
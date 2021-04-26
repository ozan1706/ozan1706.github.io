const navbar = document.getElementsByTagName("nav")[0]
const memberProfile = document.getElementsByClassName("member-profile")[0]
const myBio = document.getElementsByTagName("aside")[1]

// navbar menu
navbar.lastElementChild.addEventListener("click", function (e) {
    navbar.firstElementChild.nextElementSibling.classList.toggle("dropdown-navbar")
})

// When use the wheel mouse or trackpad
document.addEventListener("wheel", function () {
    // Smooth Nav
    if (scrollY >= 50) {
        navbar.style.backgroundColor = "#448bfd"
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0)"
    }

    if (screen.availWidth <= 768) {
        memberProfile.style.position = "static"

    } else {
        // Memberhentikan sticky secara manual
        if (scrollY >= myBio.offsetTop - 505) {
            memberProfile.style.position = "relative"
            memberProfile.style.top = 0

        } else {
            memberProfile.style.position = "sticky"
            memberProfile.style.top = ""
        }
    }
})

// When use the Scroll Bar browser or scroll on mobile device
document.addEventListener("scroll", function () {
    // Smooth Nav
    if (scrollY >= 50) {
        navbar.style.backgroundColor = "#448bfd"
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0)"
    }

    if (screen.availWidth <= 768) {
        memberProfile.style.position = "static"

    } else {
        // Memberhentikan sticky secara manual
        if (scrollY >= myBio.offsetTop - 505) {
            memberProfile.style.position = "relative"
            memberProfile.style.top = 0

        } else {
            memberProfile.style.position = "sticky"
            memberProfile.style.top = ""
        }
    }
})

const listBtsMember = document.querySelectorAll(".member-profile ul li")
const tableBtsData = document.querySelectorAll(".member-profile td")
const btsMemberImage = document.querySelector(".member-profile img")
const btsStageName = document.querySelector(".member-profile h3")

// Ada menu dropdown untuk melihat masing-masing data profil member BTS
for (const member of listBtsMember) {
    member.addEventListener("click", function (e) {
        btsStageName.innerText = `${bts[e.target.innerText].stageName}`
        btsMemberImage.setAttribute("src", `${bts[e.target.innerText].photo}`)
        tableBtsData[0].innerText = `${bts[e.target.innerText].realName}`
        tableBtsData[1].innerText = `${bts[e.target.innerText].hangul}`
        tableBtsData[2].innerText = `${bts[e.target.innerText].stageName}`
        tableBtsData[3].innerText = `${bts[e.target.innerText].birthDate}`
        btsStageName.innerText = `${bts[e.target.innerText].stageName}`
    })
}

// check device
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // for mobile device
    memberProfile.firstElementChild.addEventListener("click", function (e) {
        memberProfile.firstElementChild.classList.toggle("dropdown")
        btsStageName.classList.toggle("icon-dropdown-rotate")
    })
} else {
    // for not mobile device
    memberProfile.firstElementChild.addEventListener("mouseenter", function (e) {
        memberProfile.firstElementChild.classList.add("dropdown")
        btsStageName.classList.add("icon-dropdown-rotate")
        memberProfile.firstElementChild.style.backgroundColor = "#2e456b99";
    })

    memberProfile.firstElementChild.addEventListener("mouseleave", function (e) {
        memberProfile.firstElementChild.classList.remove("dropdown")
        btsStageName.classList.remove("icon-dropdown-rotate")
        memberProfile.firstElementChild.style.backgroundColor = "#2e456b";
    })

    for (const member of listBtsMember) {
        member.addEventListener("click", function (e) {
            btsStageName.classList.remove("icon-dropdown-rotate")
            memberProfile.firstElementChild.classList.remove("dropdown")
        })
    }
}
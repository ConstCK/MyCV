let today = new Date();
let birth = new Date(1975, 10, 9)
let age = today.getFullYear() - birth.getFullYear()
if (today.getMonth() < birth.getMonth()) {
    age = age - 1
} else if (today.getMonth() == birth.getMonth() && today.getDate() < birth.getDate()) {
    age = age - 1
    console.log('wow')
}

const getAge = function (birthdate = new Date(1975, 10, 11)) {
    let today = new Date();
    let birth = birthdate;
    let age = today.getFullYear() - birth.getFullYear()
    if (today.getMonth() < birth.getMonth()) {
        age = age - 1
    } else if (today.getMonth() == birth.getMonth() && today.getDate() < birth.getDate()) {
        age = age - 1
    }
    console.log(today.getDate())
    console.log(birth.getDate())
    return age
}

export { getAge };
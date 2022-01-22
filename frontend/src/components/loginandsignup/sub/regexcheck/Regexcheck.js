export const Regexcheck = (password) => {

    const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64}/g;
    let result = pattern.test(password);

    if (result) {
        //console.log('The password is valid.');
        return true;
    }
    else {
        //console.log("The password is not valid.")
        return false;
    }
}

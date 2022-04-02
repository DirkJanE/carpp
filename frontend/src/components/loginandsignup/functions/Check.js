export const CheckSignup = (username, password, repeatPassword, selection, props) => {
    props.setnotclicked(false);

    if (username.length === 0) {
        props.setnousername(true);

    } else if (username.length > 0 && username.length < 4) {
        props.settooshort(true);

    } else {
        props.settooshort(false);
        props.setnousername(false);
    }

    if (password.length === 0) {
        props.setnopassword(true);

    } else if (password.length > 0) {
        props.setnopassword(false);
        const validpassword = Regexcheck(password);

        if (validpassword === true) {
            props.setminreq(true);

        } else {
            props.setminreq(false);
        }

    } else {
        props.setnopassword(true);
        props.setminreq(false);
    }

    if (password !== repeatPassword) {
        props.setnomatch(true);
    } else {
        props.setnomatch(false);
    }

    if (selection.length === 0) {
        props.setnoselection(true);
    } else {
        props.setnoselection(false);
    }
}

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

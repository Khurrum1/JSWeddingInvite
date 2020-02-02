const users = (user) => {
    return {
        type: "USERS",
        user
    }
}

const currrentUser = (user) => {
    return {
        type: "CURRENT_USER",
        user
    }
}

const invitation = (guestNum, attendEvent= "cermony") => {
    return {
        type: "INVITATION",
        attendEvent,
        guestNum
    }
}

const requirements = (req) => {
    return {
        type: "REQUIREMENT",
        req
    }
}


export {
    users,
    currrentUser,
    invitation,
    requirements
}
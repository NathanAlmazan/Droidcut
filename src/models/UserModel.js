
class UserModel {

    constructor(email, username) {
        this.email = email;
        this.username = username;
    }

    setUID(uid) {
        this.uid = uid;
    }

    getUser() {
        return {
            uid: this.uid,
            email: this.email,
            username: this.username
        }
    }
}

export function getCurrentUser(uid, adminUsers) {
    let userList = [];
    Object.keys(adminUsers).forEach(obj => {
        const currUser = adminUsers[obj];
        currUser.uid = obj;
        userList.push(currUser);
    })

    return userList.find(user => user.uid = uid);
}

export default UserModel;
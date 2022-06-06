class UserDto {
    email;
    id;
    username;

    constructor(user) {
        this.email = user.email;
        this.id = user.id;
        this.username = user.username;
    }
}

module.exports = UserDto;
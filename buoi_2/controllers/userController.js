
const users = require('../database/users');
class UserController {
    get(req, res) {
        res.json(users);
    };

    getID(req, res) {
        let { id } = req.params;
        res.json(users[id]);
    };

    post(req, res) {
        let user = req.body;
        users.push(user);
        res.send('Push User success')
    };

    put(req, res) {
        let user = req.body;
        let { id } = req.params;
        // let id = req.params.id;
        res.json(users);
        let index = users.findIndex((user) => id == user.id);
        if (index === -1) return res.send("User not exist");
        users[index].name = user.name;
        users[index].age = user.age;
        res.send("Update User Success");
    };

    delete(req, res) {
        let { id } = req.params;

        let index = users.find(function (user) {
            return user.id === id;
        });

        if (index === -1) return res.send("User not exist");

        users.splice(index, 1);

        res.send("Delete User Success");
    }
}

module.exports = new UserController();
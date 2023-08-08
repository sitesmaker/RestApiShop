const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

module.exports = (roles) => {
    return (req, res, next) => {
        if(req.method === "OPTIONS") {
            next();
        }

        try {
            const token = req.headers.authorization.split(' ')[1];

            if(!token) {
                return res.status(403).json({ message: "Пользователь не авторизован" })
            }

            const { role } = jwt.verify(token, secret);
            let hasRole = false;

            roles.forEach((rolesItem) => {
                if(rolesItem.includes(role)) {
                    hasRole = true;
                }
            })

            if(!hasRole) {
                return res.status(403).json({ message: "У вас нет доступа" })
            }

            next();

        } catch (err) {
            return res.status(403).json({ message: "Пользователь не авторизован" })
        }
    }
}
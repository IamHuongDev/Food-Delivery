import jwt from 'jsonwebtoken';

const auttMiddleware = async (req, res, next) => {
    const {token } = req.headers;
    if (!token) {
        return res.json({ success: false ,message: "Not authorized login to continue"});
    }

    try {
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decoded.id;
        next();
    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: "Invalid token" });
    }
};

export default auttMiddleware;
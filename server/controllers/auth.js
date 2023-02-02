import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

/* REGISTER USER */

export const register = async (req, res) => {
    try {
        const {
            username,
            email,
            password,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            email,
            password: passwordHash,
            username,
            level: 0,
            xp: 0,
            xpToNextLevel: 100,
            accountBalance: 0,
            miner1: {
                name:'Minerador 1',
                level: 1,
                time: 10000,
                reward: 1,
                upgradeCost: 300,
                blocked: true
            },
            miner2: {
                name:'Minerador 2',
                level: 1,
                time: 10000,
                reward: 1,
                upgradeCost: 300,
                blocked: true
            },
            miner3: {
                name:'Minerador 3',
                level: 1,
                time: 10000,
                reward: 1,
                upgradeCost: 300,
                blocked: true
            },
            profile: {
                profileImage: 0,
                posts: [],
                CoinsLiked: []
            },
            contentsCompleted: {
                discover:[],
                glossary:[],
                expedition: [],
                guide:[]
            },
            viewedProfile: 0,
            impressions: 0

        });
        const savedUser = await  newUser.save();
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
}

/* LOGGING IN*/
export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({email: email});
        if(!user) return res.status(400).json({ msg: 'User does not exist.'})

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({ msg: 'Invalid Credentials.'})

        const token = jwt.sign({ id: user.__id}, process.env.JWT_SECRET)
        delete user.password;
        res.status(200).json({user, token })
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
}
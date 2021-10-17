import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js"


export const signIn = async (req, res) => {
    const {email, password} = req.body

    try {
        const oldUser = await User.findOne({email})

        if(!oldUser) return res.status(404).json({ message: 'user does not exist'})

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)

        if(!isPasswordCorrect) return res.status(404).json({ message: 'password incorrect'})

        const token = jwt.sign({ email: oldUser.email, id: oldUser._id}, 'test', {expiresIn: '1h' })

        res.status(200).json({result: oldUser, token})

    } catch (error) {
        res.status(500).json({ message: 'something went wrong' })
    }
}
export const signUp = async (req, res) => {
    const {email, password, firstName, lastName, confirmPassword} = req.body

    try {
        const oldUser = await User.findOne({email})

        if(oldUser) return res.status(400).json({ message: 'user already  exist'})

        if(password !== confirmPassword) return res.status(400).json({ message: 'password does not match'})

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`})

        const token = jwt.sign({ email: result, id: result._id}, 'test', {expiresIn: '1h' })

        res.status(200).json({result, token})


    } catch (error) {
        res.status(500).json({ message: 'something went wrong' })
    }

}
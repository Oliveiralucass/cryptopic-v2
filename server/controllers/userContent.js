
/* POST */

import Coin from "../models/Coin.js";
import User from "../models/User.js";

export const addGlossaryContent = async (req, res ) => {
    try {   
        const { id, glossaryId } = req.params;
        const { xp, safyr } = req.body;
        const user = await User.findById(id)

        if(!user.contentsCompleted.glossary.includes(glossaryId)){
            user.contentsCompleted.glossary.push(glossaryId)
            user.xp = user.xp + xp
            user.accountBalance = user.accountBalance + safyr 

            const updatedUser = await User.findByIdAndUpdate(
                id,
                { 
                    xp: user.xp,
                    accountBalance: user.accountBalance,
                    contentsCompleted: user.contentsCompleted
                },
                { new: true}
            );
    
            res.status(200).json(updatedUser)
        } else {
            res.status(500).send('Conteúdo já concluído')
        } 
        
    } catch (error){
        res.status(404).json({ message: error.message })
    }
}

export const addDiscoverContent = async (req, res ) => {
    try {   
        const { id, discoverId } = req.params;
        const { xp, safyr } = req.body;
        const user = await User.findById(id)

        if(!user.contentsCompleted.discover.includes(discoverId)){
            user.contentsCompleted.discover.push(discoverId)
            user.xp = user.xp + xp
            user.accountBalance = user.accountBalance + safyr 

            const updatedUser = await User.findByIdAndUpdate(
                id,
                { 
                    xp: user.xp,
                    accountBalance: user.accountBalance,
                    contentsCompleted: user.contentsCompleted
                },
                { new: true}
            );
    
            res.status(200).json(updatedUser)
        } else {
            res.status(500).send('Conteúdo já concluído')
        } 
        
    } catch (error){
        res.status(404).json({ message: error.message })
    }
}

export const addExpeditionContent = async (req, res ) => {
    try {   
        const { id, expeditionId } = req.params;
        const { xp, safyr } = req.body;
        const user = await User.findById(id)

        if(!user.contentsCompleted.expedition.includes(expeditionId)){
            user.contentsCompleted.expedition.push(expeditionId)
            user.xp = user.xp + xp
            user.accountBalance = user.accountBalance + safyr 

            const updatedUser = await User.findByIdAndUpdate(
                id,
                { 
                    xp: user.xp,
                    accountBalance: user.accountBalance,
                    contentsCompleted: user.contentsCompleted
                },
                { new: true}
            );
    
            res.status(200).json(updatedUser)
        } else {
            res.status(500).send('Conteúdo já concluído')
        } 
        
    } catch (error){
        res.status(404).json({ message: error.message })
    }
}

export const likeCoin = async (req, res) => {
    try {
        const { id, coinId } = req.params;

        const user = await User.findById(id)
        const coin = await Coin.findById(coinId)

        if(user.profile.coinsLiked.some(e => e._id === coinId)) {
            user.profile.coinsLiked = user.profile.coinsLiked.filter(e => e._id !== coinId)
            coin.likes = coin.likes.filter(e => e._id !== id)

            return res.send(true)

        } else {    
            user.profile.coinsLiked.push(coin)
                   coin.likes.push(user)

            return res.send(false)
        }

    } catch (error){
        res.status(404).json({ message: error.message })
    }
}
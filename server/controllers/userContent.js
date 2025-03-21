
/* POST */

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

            if(user.xp >= user.xpToNextLevel) {
                user.level++
                user.xpToNextLevel = Math.floor( 100 + (user.xpToNextLevel * 1.15)).toFixed(0)
            } else{
                console.log('naaaaaa')
            }

            const updatedUser = await User.findByIdAndUpdate(
                id,
                { 
                    level: user.level,
                    xpToNextLevel: user.xpToNextLevel,
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
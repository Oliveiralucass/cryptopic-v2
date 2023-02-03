
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
import Coin from "../models/Coin.js";
import User from "../models/User.js";

/* READ */

export const getCoinById = async(req, res) => {
    
    const { coinId } = req.params;

    try {
        const selectedCoin =  await Coin.findById(coinId);

        console.log(selectedCoin);

        res.status(200).json(selectedCoin)
    } catch (error) {
        res.status(400).json({message: error.message });
    }       
}

export const getCoinsList = async (req, res) => {
    try {
        const coinsList = await Coin.find();

        console.log(coinsList);

        res.status(200).json(coinsList)
    } catch (error) {
        res.status(400).json({message: error.message });
    }
}

export const createCoin = async (req, res) => {
    const newCoin = new Coin(req.body)

    try{
        await newCoin.save()
        res.status(201).json(newCoin)
    } catch (error) {
        res.status(400).json({message: error.message });
    }
}

export const likeCoin = async (req, res) => {
    try {
        const { id, coinId } = req.params;

        const user = await User.findById(id)
        const coin = await Coin.findById(coinId)

        if(user.profile.coinsLiked.some(e => e._id == coinId)) {
            user.profile.coinsLiked = user.profile.coinsLiked.filter(e => e._id != coinId)
            coin.likes = coin.likes.delete(id)

            const updatedUser = await User.findByIdAndUpdate(
                id,
                { profile: user.profile},
                { new: true}
            );
            const updatedCoin = await Coin.findByIdAndUpdate(
                coinId,
                { likes: coin.likes},
                { new: true}
            );

            await user.save()


            return res.send(false)

        } else {    
          
            
            user.profile.coinsLiked.push(coin)
            coin.likes.set(id, true)

            await user.save()
            

            const updatedUser = await User.findByIdAndUpdate(
                id,
                { profile: user.profile},
                { new: true}
            );
            const updatedCoin = await Coin.findByIdAndUpdate(
                coinId,
                { likes: coin.likes},
                { new: true}
            );

            await user.save()
         
            console.log(coin)
            return res.send(true)
        }

        

    } catch (error){
        res.status(404).json({ message: error.message })
    }
}
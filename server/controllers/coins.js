import Coin from "../models/Coin.js";

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
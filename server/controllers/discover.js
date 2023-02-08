import DiscoverContent from '../models/discoverContent.js';

export const getDiscoverContents = async (req, res) => {
    try {
        const discoverContents = await DiscoverContent.find();

        console.log(discoverContents);

        res.status(200).json(discoverContents)
    } catch (error) {
        res.status(400).json({message: error.message });
    }
}

export const createDiscoverContent = async (req, res) => {
    const content = req.body;

    const newContent = new DiscoverContent(content)

    try {
        await newContent.save()
        res.status(201).json(newContent)
    } catch (error) {
        res.status(400).json({message: error.message });
    }
}
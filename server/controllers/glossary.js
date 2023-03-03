import express from 'express'
import GlossaryContent from '../models/glossaryContent.js';

export const getGlossaryContents = async (req, res) => {
    try {
        const glossaryContents = await GlossaryContent.find();

        console.log(glossaryContents);

        res.status(200).json(glossaryContents.sort((a, b) => (a.title.toLowerCase().localeCompare(b.title.toLowerCase()))))
    } catch (error) {
        res.status(400).json({message: error.message });
    }
}

export const createGlossaryContent = async (req, res) => {
    const content = req.body;

    const newContent = new GlossaryContent(content)

    try {
        await newContent.save()
        res.status(201).json(newContent)
    } catch (error) {
        res.status(400).json({message: error.message });
    }
}
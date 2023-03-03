import express from 'express'
import ExpeditionContent from '../models/expeditionContent.js';

export const getExpeditionContents = async (req, res) => {
    try {
        const expeditionContents = await ExpeditionContent.find();

        console.log(expeditionContents);

        res.status(200).json(expeditionContents.sort((a, b) => (a.title.toLowerCase().localeCompare(b.title.toLowerCase()))))
    } catch (error) {
        res.status(400).json({message: error.message });
    }
}

export const createExpeditionContent = async (req, res) => {
    const content = req.body;

    const newContent = new ExpeditionContent(content)

    try {
        await newContent.save()
        res.status(201).json(newContent)
    } catch (error) {
        res.status(400).json({message: error.message });
    }
}
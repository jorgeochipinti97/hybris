import type { NextApiRequest, NextApiResponse } from 'next'
import { isValidObjectId } from 'mongoose';

import { v2 as cloudinary } from 'cloudinary';
import { db } from '@/database';
import { Modelos } from '@/Models';
cloudinary.config(process.env.CLOUDINARY_URL || '');

interface IModel{
    _id?:string
    name:string
    tiktokUrl:string
    instagramUrl:string
    onlyFansUrl:string
    twitterUrl:string
    youtubeUrl:string
    imageUrl:string
    colorBotones:string
    colorDeFondo:string
    colorDeNombre:string
    colorDeFuente:string
    posicionDeImagen:string

}

type Data =
    | { message: string }
    | IModel
    | IModel[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getModelos(req, res);

        case 'PUT':
            return updatModelo(req, res);

        case 'POST':
            return createtModelo(req, res)

        case 'DELETE':
            return deleteModelo(req, res)

        default:
            return res.status(400).json({ message: 'Bad request' });
    }


}

const getModelos = async (req: NextApiRequest, res: NextApiResponse<Data>) => {


    await db.connect();

    const modelos = await Modelos.find()
        .sort({ title: 'asc' })
        .lean();

    await db.disconnect();




    res.status(200).json(modelos);

}

const updatModelo = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { _id = '' } = req.body as IModel;

        if (!isValidObjectId(_id)) {
            return res.status(400).json({ message: 'El id del producto no es válido' });
        }

        await db.connect();
        const product = await Modelos.findById(_id);

        if (!product) {
            await db.disconnect();
            return res.status(400).json({ message: 'No existe un producto con ese ID' });
        }

        await Modelos.updateOne({ _id }, req.body);
        await db.disconnect();

        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        await db.disconnect();
        return res.status(400).json({ message: 'Revisar la consola del servidor' });
    }
};

const deleteModelo = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { _id = '' } = req.body as IModel;

        if (!isValidObjectId(_id)) {
            return res.status(400).json({ message: 'El id del producto no es válido' });
        }

        await db.connect();
        const product = await Modelos.findByIdAndDelete(_id);
        
        if (!product) {
            await db.disconnect();
            return res.status(400).json({ message: 'No existe un producto con ese ID' });
        }

        await db.disconnect();

        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        await db.disconnect();
        return res.status(400).json({ message: 'Revisar la consola del servidor' });
    }
};




const createtModelo = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        await db.connect();
        const productInDB = await Modelos.findOne({ name: req.body.name });
        if (productInDB) {
            await db.disconnect();
        }

        const modelo = new Modelos(req.body);
        const savedModelo = await modelo.save();
        const plainObject = savedModelo.toObject();
        await db.disconnect();

        const product:IModel = {
            _id: plainObject._id,
            name:plainObject.name,
            tiktokUrl:plainObject.tiktokUrl,
            instagramUrl:plainObject.instagramUrl,
            onlyFansUrl:plainObject.onlyFansUrl,
            twitterUrl:plainObject.twitterUrl,
            youtubeUrl:plainObject.youtubeUrl,
            imageUrl:plainObject.imageUrl,
            colorBotones:plainObject.colorBotones,
            colorDeFondo:plainObject.colorDeFondo,
            colorDeNombre:plainObject.colorDeNombre,
            colorDeFuente:plainObject.colorDeFuente,
            posicionDeImagen:plainObject.posicionDeImagen
        };

        res.status(201).json(product);

    } catch (error) {
        console.log(error);
        await db.disconnect();
        return res.status(400).json({ message: 'Revisar logs del servidor' });
    }
}

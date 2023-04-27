import { Model, model, Schema } from 'mongoose';


interface IModel {
    _id?: string
    name: string
    tiktokUrl: string
    instagramUrl: string
    onlyFansUrl: string
    twitterUrl: string
    youtubeUrl: string
    imageUrl: string
    colorBotones: string
    colorDeFondo: string
    colorDeNombre: string
    colorDeFuente: string
    posicionDeImagen: string

}

const userSchema = new Schema<IModel>({
    name: {
        type: String,
        required: true,
    },
    tiktokUrl: {
        type: String,
        required: true,
    },
    instagramUrl: {
        type: String,
        required: true,
    },
    onlyFansUrl: {
        type: String,
        required: true,
    },
    twitterUrl: {
        type: String,
        required: true,
    },
    youtubeUrl: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    colorBotones: {
        type: String,
        required: true,
    },
    colorDeFondo: {
        type: String,
        required: true,
    },
    colorDeNombre: {
        type: String,
        required: true,
    },
    colorDeFuente: {
        type: String,
        required: true,
    },
    posicionDeImagen: {
        type: String,
        required: true,
    },

});

const User: Model<IModel> = model('Model', userSchema);

export default User;
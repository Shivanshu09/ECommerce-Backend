import { Schema as _Schema, model } from 'mongoose';
// const Schema = _Schema;

const ItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    },
    item_image: {
        type: Buffer,
        contentType: String,
        required: true
    }

});

export default Item = model('item',ItemSchema);
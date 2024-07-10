import { Schema, models, model } from 'mongoose';

const PropertySchema = new Schema({
    name : {
        type: String,
    },
    type: {
        type: String,
    },
    description : {
        type: String,
    },
    seller_info: {
        name: {
            type: String
        },
        email: {
            type: String
        },
        phone: {
            type: String
        }
    },
    images: [
        {
            type: String
        }
    ]
});

const Property = models.Property || model('Property', PropertySchema);
export default Property;
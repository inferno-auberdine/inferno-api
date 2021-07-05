module.exports = mongoose => {
    const schema = mongoose.Schema({
        name: {type: String, require: true},
        bosses: [{
            name: String,
            picture: String,
            killed: Boolean,
            date: String
        }]
    });

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;
        return object;
    });
    return mongoose.model("raid", schema);
};

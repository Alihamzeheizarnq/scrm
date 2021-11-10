class Transform {
    TransformCollection = (object) => {
        return object.map((item) => this.transform(item))
    }
}

module.exports = Transform

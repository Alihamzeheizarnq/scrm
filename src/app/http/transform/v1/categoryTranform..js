const Transform = require('..')

class categoryTransform extends Transform {
    transform = (item) => {
        return {
            id: item.id,
            title: item.title,
            body: item.body,
            type: item.type,
        }
    }
}

module.exports = categoryTransform

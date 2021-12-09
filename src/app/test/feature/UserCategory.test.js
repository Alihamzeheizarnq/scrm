const bcrypt = require('bcrypt')
const supertest = require('supertest')
const db = require('./../../models')
const request = supertest('http://localhost:3001')

describe('Test userCategory', () => {
    let auth = null

    beforeAll(async () => {
        await db.sequelize.sync({ force: true })
    })

    beforeEach(function (done) {
        db.User.create({
            firstName: 'ali',
            lastName: 'hamzehei',
            email: 'alihamzehei@gmail.com',
            level: 'super_user',
            password: bcrypt.hashSync('123456789', bcrypt.genSaltSync(10)),
            createdAt: new Date(),
            updatedAt: new Date(),
        })

        request
            .post('/v1/login')
            .send({
                username: 'alihamzehei@gmail.com',
                password: '123456789',
            })
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err)
                }
                auth = res.header['set-cookie']
                return done()
            })
    })
    test('check GET => /users/category page ', () => {
        request
            .get('/users/category')
            .set('Cookie', [auth.toString()])
            .expect(200)
            .end((err, res) => {
                if (err) throw err
            })
    })
    test('has user and redirect to /login ', (done) => {
        request
            .get('/login')
            .set('Cookie', [auth.toString()])
            .expect('location', '/')
            .expect(307)
            .end((err, res) => {
                if (err) {
                    return done(err)
                }
                coo = res.header['set-cookie']
                done()
            })
    })
})

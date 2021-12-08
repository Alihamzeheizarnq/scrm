const supertest = require('supertest')

const request = supertest('http://localhost:3000')

describe('Test userCategory', () => {
    let coo = null

    beforeEach(function (done) {
        request
            .post('/v1/login')
            .send({
                username: 'alihamzehei2017@gmail.com',
                password: '123456789',
            })
            .expect(200)
            .end((err, res) => {
                if (err) {
                    return done(err)
                }
                coo = res.header['set-cookie']
                done()
            })
    })
    it('check GET => /users/category page ', () => {
        request
            .get('/users/category')
            .set('Cookie', [coo.toString()])
            .expect(200)
            .end((err, res) => {
                if (err) throw err
            })
    })
    it('has user and redirect to /login ', (done) => {
        request
            .get('/login')
            .set('Cookie', [coo.toString()])
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

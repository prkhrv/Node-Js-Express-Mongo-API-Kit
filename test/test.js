let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../index');



describe('/GET test', () => {
    it('it should GET a message', (done) => {
    chai.request(server)
        .get('/test')
        .end((err, res) => {
              (res).should.have.status(200);
              (res.body).should.be.a('object');
              done();
           });
        });
    });
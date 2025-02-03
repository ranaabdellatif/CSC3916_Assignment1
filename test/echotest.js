//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const {expect} = chai;

chai.use(chaiHttp);

describe('POST /', () => {

    it('should return a JSON object with the accept header', (done) => {
        const sampleBody = { message: "Hello, World!"};

        chai 
            .request(server)
            .post('/')
            .set('accept', 'application/json')
            .send(sampleBody)
            .end((err,response) => {
                expect(err).to.be.null;
                expect(response.to.have.status(200));
                expect(response).to.be.json;
                expect(response.body).to.have.property('message', "Hello, World!")
                done();
            });

            });


    });

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://127.0.0.1:8080';

describe('API test', function() {

    //Usuario de prueba
    const user = {
        "name": "Homer",
        "email": "homer@gmail.com",
        "birthDate": "12/05/1956",
        "address": {
            "street": "Calle Falsa 123",
            "state": "Castellón",
            "city": "Vila-Real",
            "country": "España",
            "zip": "12540"
        }
    };

    //Después de insertar el usuario recogeremos su ID
    let user_id = null;

    //Creamos un usuario
    describe('Insert a user: ',()=> {
        it('should insert a user', (done) => {
            chai.request(url)
                .post('/createUsers')
                .send(user)
                .end( function(err,res){
                    expect(res).to.have.status(201);
                    expect(res.body.description).to.equals('CREATED');

                    //Asignamos el ID para otros test
                    user_id = res.body.user._id;

                    done();
                });
        });
    });

    //Recuperamos todos los usuarios
    describe('Get all users: ',()=> {
        it('should get all users', (done) => {
            chai.request(url)
                .get('/getusers')
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body.description).to.equals('OK');
                    done();
                });
        });
    });

    //Recuperamos un usuario
    describe('Get one user: ',()=> {
        it('should get one user by ID', (done) => {
            chai.request(url)
                .get('/getusersById/' + user_id)
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body.description).to.equals('OK');
                    done();
                });
        });
    });

    //Actualizamos un usuario
    describe('Update one user: ',()=> {
        it('should update one user by ID', (done) => {
            chai.request(url)
                .put('/updateUsersById/' + user_id)
                .send(user)
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body.description).to.equals('OK');
                    done();
                });
        });
    });

    //Borramos un usuario
    describe('Delete one user: ',()=> {
        it('should delete one user by ID', (done) => {
            console.log(user_id);
            chai.request(url)
                .delete('/deleteUsersById/' + user_id)
                .send(user)
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body.description).to.equals('OK');
                    done();
                });
        });
    });
});
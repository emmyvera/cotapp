let chai = require("chai")
let server = require("../index")
let home = require("../routes/home")
let chaiHttp = require("chai-http")

//Assertion Style 
chai.should()

chai.use(chaiHttp)


describe("Home API" ,() => {

    // Get All the Home Post
    describe("GET /home", () => {
        it("It Should Get All The Home Post", (done) => {
            chai.request(server)
            .get("/home")
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a("object")
            done()
            })
        })
    })

    // Get Single Home Post



})

describe("Bible API" , () => {

    // Get All the Bible Study Post
    describe("GET /bibleStudy", () => {
        it("It Should Get All The Home Post", (done) => {
            chai.request(server)
            .get("/bibleStudy")
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a("object")
            done()
            })
        })
    })

    // Get Single Bible Study Post


})


const express = require ("express")
const router = express.Router()
const db = require ("./db")


//---------------------------------------------------------------------- USER ----------------------------------------------------------------------\\
router.get("/user", (req,res) => {
    let sql = "select * from user"
    db.query(sql,(error,result) => {
        let response = null
        if (error){
            response = {
                message: error.message
            }
        } else {
            response = {
                count: result.length,
                user: result
            }
        }
        res.json(response)
    })
})

router.get("/user/:id", (req,res) => {
    let data = {
        id_user:req.params.id
    }
    let sql = "select * from user where ?"
    db.query(sql,data, (error, result) => {
        let response = null 
        if (error){
            response = {
                message: error.message
            }
        } 
        else {
            response = {
                count: result.length,
                user: result
            }
        }
        res.json(response)
    })
})

router.post("/user", (req,res) => {
    let data = {
        nama_user: req.body.nama_user,
        username: req.body.username,
        password: req.body.password
    }
    let sql = "insert into user set ?"
    db.query(sql,data,(error,result) => {
        let response = null 
        if (error) {
            response = {
                message: error.message
            }
        } 
        else {
            response = {
                message: result.affectedRows + "data inserted"
            }
        }
        res.json(response)
    })
})

router.post("/user", (req,res) => {
    let data = {
        nama_user: req.body.nama_user,
        username: req.body.username,
        password: req.body.passworduser
    }
    let sql = "insert into user set ?"
    db.query(sql,data,(error,result) => {
        let response = null 
        if (error) {
            response = {
                message: error.message
            }
        } 
        else {
            response = {
                message: result.affectedRows + "data inserted"
            }
        }
        res.json(response)
    })
})

router.put("/user", (req,res) => {
    let data = [
        {
        nama_user: req.body.nama_user,
        username: req.body.username,
        password: req.body.password
    },
    {
        id_user: req.body.id_user
    }
    ]
    let sql = "update user set ? where ?"
    db.query(sql,data,(error,result) => {
        let response = null
        if (error) {
            response = {
                message: error.message
            }
        }
        else {
            response = {
                message: result.affectedRows + "data updated"
            }
        }
        res.json(response)
    })
})

router.delete("/user/:id", (req,res) => {
    let data = {
        id_user: req.params.id
    }

    let sql = "delete from user where ?"
    db.query(sql,data,(error,result) =>{
        let response = null 
        if(error) {
            response = {
                message: error.message
            }
        }
        else {
            response = {
                message: result.affectedRows + "data deleted"
            }
        }
        res.json(response)
    })
})

module.exports = router
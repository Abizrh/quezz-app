const axios = require('axios')

module.exports = class QuezController {

    static async getQuez(req, res){

        try {
            
                    const { data } = await axios({
                        method: 'get',
                        url: 'https://quizapi.io/api/v1/questions?limit=5&category=code',
                        headers: {
                            "X-Api-Key": "uaTAxcxHwNnX1wH1wQwjHhA0kHC9HSxoT9WoaOow"
                        }
                    })
            
                    console.log(data)
                    res.status(200).json(data)
            
                } catch (error) {
            
                    console.log(error)
                    
                }
    }

}
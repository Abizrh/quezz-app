const axios = require('axios')

module.exports = class QuezController {

    static async getQuez(){

        try {
            
            const { data } = await axios({
                method: 'get',
                url: 'https://quizapi.io/api/v1/questions?limit=5&category=code'
            })

            console.log(data)

        } catch (error) {

            console.log(error)
            
        }
    }

}
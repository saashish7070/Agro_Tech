

const homepage = {
    searchText: async(req,res)=>{
        try{
            const { text } = res.body
            
            
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = homepage


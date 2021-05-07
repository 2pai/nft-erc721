module.exports = (req,res) => {
    const {
        query: { id },
      } = req
    if(id == null){
        res.status(400).json({message:"Payload Id Cannot be null "})
    }else{
        if(id < 0 && id > 100) res.status(400).json({message:"Payload Id is invalid "})
        else {
            const payload = {
                "description": "We Belive The Knowledge is free, and can be accessible for everyone especially for ppl in indonesia.", 
                "external_url": "https://github.com/2pai/nft-erc721/blob/main/assets/2pai-japan.png", 
                "image": "https://github.com/2pai/nft-erc721/raw/main/assets/2pai-japan.png", 
                "name": `2Pai Japanese Edition #${id}/10`
              }
            res.status(400).json(payload)
        }
    }
}
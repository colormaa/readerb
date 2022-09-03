var request = require('request');
var cheerio = require('cheerio');


const parse = async (word="word")=>{
    try{
        return new Promise(function(resolve, reject){
            request(`http://bolor-toli.com/dictionary/word?search=${word}&selected_lang=4-1&see_usages=true&see_variants=true`, function(error, response, html) {
                if (!error && response.statusCode == 200) {
                    var $ = cheerio.load(html);
                    var parsedResults = [];
                    $('#similar_translations table tr td:nth-child(7) a').each(function(i, element){
                        var a = $(this).text();
                        if(parsedResults.length<5){
                            parsedResults.push(a);
                        }
                       
                    });
                    
                  
                  return  resolve(parsedResults);
                }else{
                    return  reject([]);
                }
            }
            );
        })
        
    }catch(e){
        return null;
    }
    
}
module.exports=parse;
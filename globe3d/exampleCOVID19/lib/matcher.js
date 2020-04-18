'use strict';

const excluded=["North America","Europe","Asia","South America","Oceania","Africa","","World","Total:"];

const translations={
    "UK":"United Kingdom",
    "S. Korea":"South Korea",
    "Czechia":"Czech Republic",
    "UAE":"United Arab Emirates",
    "Serbia":"Republic of Serbia",
    "North Macedonia":"Macedonia",
    "Congo":"Republic of the Congo",
    "Timor-Leste":"East Timor",
    "USA":"United States of America"
}

function translate(name){
    if(translations[name]){
        return translations[name];
    }
    return "#";
}

function findInISO(name){
    var found="#";
    countries.features.forEach(country =>{
        //console.log("--------------------"+country.properties.name);
        if(country.properties.name.toUpperCase()==name.toUpperCase()){
            found=country.id;
            return;
        };
    });
    return found;
}




function extractCovid(data){
    var wrong=0;
    var translated=0;
    var exludedCount=0;
    var processed=0;
    console.log("BODY ---------------------------------------");
    //console.log(JSON.stringify(data));
    data.forEach((element,index,dataarray) => {
        processed++;
        if(excluded.includes(element.country)){
            dataarray[index].id="[Excluded]";
            //console.log("----------- EXCLUDED: "+element.country);
            exludedCount++;
        } else{
            let _id=findInISO(element.country);
            if(_id=="#"){
                var trans=translate(element.country);
                if(trans=="#"){
                    dataarray[index].id="[NotFound]";
                    console.log(`COUNTRY NOT FOUND [${element.country}] `);
                    wrong++;
                }else{
                    dataarray[index].id=findInISO(trans);
                }
            }else{
                dataarray[index].id=_id;
            }
        } 
    });
    console.log("NOT FOUND "+wrong);
    console.log("Translated "+translated);
    console.log("Excluded "+exludedCount);
    console.log("Processed "+processed);
    console.log(JSON.stringify(data));
    return data;
}

console.log("---------\nMATCHER\n----------");



// request.get(finalURL, function (error, response, body) {
//     if(error){
//         console.error(error);
//     }if(response.statusCode === 200){
//         var dt=extractCovid(JSON.parse(body));
//     }else{
//         console.log("ERROR Worng status code: "+JSON.stringify(response));
//     }
// });
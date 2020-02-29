

async function getValue() {
    return 10; //Promise.resolve(10) 
}
getValue().then(console.log);

async function getError() {
    return Promise.reject('error')
}
getError().catch(console.log)
///////////////////////////////////////////////////////////////////////////////
function getName() {
    return Promise.resolve('Subramanian');
}
function getLikes() {
    return Promise.resolve(10);
}
function getScore(likes) {
    let totalLikes = likes * 2;
    return Promise.resolve(totalLikes);
}
function getError() {
    return Promise.reject('Something is wrong')
}
//how to abstract thenables
async function process() {
    try {
        let name = await getName()
        let likes = await getLikes()
        //output of getLikes will be in input to the getScore
        let totalScores = await getScore(likes);
        let foo = getError();
        console.log(`${name} ${likes} ${totalScores}`);
    }
    catch (err) {
        console.log(err)
    }
}
process()


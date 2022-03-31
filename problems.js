

/* 
Given a string, take the last char and return a new string with the last 
char added at the front and back, so 'cat' yields 'tcatt' The
original string will be length 1 or more.
*/


function backAround(str) {

}


const test = [
    {
        entityID: "01800436",
        rem: {
            hours: null,
            c_bingWebsite: "https://www.kroger.com/stores/grocery/mi/frankenmuth/frankenmuth/018/00436?cid=loc_01800436_bg",
            c_facebookWebsite: "https://www.kroger.com/stores/grocery/mi/frankenmuth/frankenmuth/018/00436?cid=loc_01800436_fb",
            googleWebsiteOverride: "https://www.kroger.com/stores/grocery/mi/frankenmuth/frankenmuth/018/00436?cid=loc_01800436_gmb"
        },
        yext: null
    },
    {
        entityID: "01800436F",
        rem: {
            hours: 'df',
            c_bingWebsite: null,
            c_facebookWebsite: "https://www.kroger.com/stores/grocery/mi/frankenmuth/frankenmuth/018/00436?cid=loc_01800436_fb",
            googleWebsiteOverride: null
        },
        yext: null
    }
]



const test1 = test.map(entity => {
    const entityCopy = Object.assign({}, entity)
    const pickedRemData = _.pickBy(entityCopy.rem, _.identity)
    entityCopy['rem'] = pickedRemData;
    return entityCopy;
})


// const test1 = test.map(entity => {
//     const entityCopy = Object.assign({}, entity)
//     const rem = entityCopy.rem;
//     let hasNullProp = false;

//     for (let key in rem) {
//         if (!rem[key]) {
//             hasNullProp = true;
//             delete entityCopy.rem[key]
//         }
//     }

//     if (hasNullProp) arr1.push(entity)

//     return entityCopy
// })


// const test2 = test.filter(entity => {
//     let hasNullProp = false;
    
//     for (let key in entity.rem){
//         if (!entity.rem[key]) {
//             hasNullProp = true
//         }
//     }
//     return hasNullProp;
// })

const test2 = test.map(entity => {
    const foo = _.omitBy(entity.rem, _.identity)
    return {entityID: entity.entityID, nullProperties: foo}
})

console.log('Removed', test1);
console.log('Undeleted', test2);

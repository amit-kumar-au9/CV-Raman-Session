import data_obj from '../data.json'
// console.log(data)

// iterator

// generator -> yield

data_obj[Symbol.iterator] = function(){
    let all_item = Object.keys(this)
    let count = 0
    let next = () => {
        count ++;
        return{
            done: (count >= all_item.length),
            value: ((count >= all_item.length) ? undefined : `User id: ${this[all_item[count]].id}, Title: ${this[all_item[count]].title}, body: ${this[all_item[count]].body}`)
        }        
    }
    return {next}
}

for( let item of data_obj){
    console.log()
    console.log(item)
}

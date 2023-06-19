import lodash from "lodash";



function paginate(items,pageNumber,pageSize) {
// determine what POSITION in the array we start from
const startIndex= (pageNumber-1)*pageSize // page number3-1 * 12 =24, start page at 24th news

// lodash(items) convert array in lodash object to chain everything on one line
return lodash(items).slice(startIndex).take(pageSize).value()

  
}

export default paginate
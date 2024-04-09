/**
 * Capitalize a word
 *
 * @param {string} s The word input
 * @returns string
 */
function capitalize(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

function arrangeChildren4ListView(children,gap,isVertical = true){
  let length = children.length
  if(isVertical){
    children.map((item,index)=>{
      if(index !== length -1 ){
        item.decoration = {
          bottom : gap
        }
      }
    })
  }else{
    children.map((item,index)=>{
      if(index !== length -1 ){
        item.decoration = {
          right : gap
        }
      }
    })
  }

}

const deepArray = (arr: Array<any>) => {
  return arr.map(deepClone);
}

const deepObject = (object: Object) => {
  const keys = Object.keys(object);
  const result = {};
  keys.forEach(item => {
      result[item] = deepClone(object[item]);
  });

  return result;
}

function deepClone(data: any) {
  if (!data) { return data }
  if (typeof data !== 'object') {
    return data;
  }
  if (Array.isArray(data)) {
    return deepArray(data);
  }
  return deepObject(data);
}

export {
  capitalize,
  arrangeChildren4ListView,
  deepClone
};

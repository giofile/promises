const testNum = num => {
    return new Promise ( (resolve, reject) => {
        if(num> 10){
            resolve( num + ' is greater than 10')
        }else{
            reject(num + " is less than 10")
        }
    })
}


testNum(3)
.then (result => console.log(result))
.catch (error => console.log (error))

testNum(34)
.then(result => console.log(result))
.catch(result => console.log(error));


const makeAllCaps = (words) => {
  return new Promise((resolve, reject) => {
    if (
      words.every((word) => {
        return typeof word === "string";
      })
    ) {
      resolve(
        words.map((word) => {
          return word.toUpperCase();
        })
      );
    } else {
      reject("Expected array of strings");
    }
  });
};

const sortWords = (words) => {
  return new Promise((resolve, reject) => {
    if (words) {
      resolve(words.sort());
    } else {
      reject("Expected array of strings");
    }
  });
};

const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

// call both functions, chain them together and log the result to the console
makeAllCaps(arrayOfWords)
  .then((capitalizedWords) => sortWords(capitalizedWords))
  .then((sortedWords) => console.log(sortedWords))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then((capitalizedWords) => sortWords(capitalizedWords))
  .then((sortedWords) => console.log(sortedWords))
  .catch((error) => console.log(error));

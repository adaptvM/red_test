const task1 = [
  "apple",
  "pear",
  "lemon",
  "orange",
  "pineapple",
  "tomato",
  "lettuce",
  "mango",
  "apple",
  "pineapple",
  "lemon",
  "pear",
  "pear",
];

const fruitCount = new Map()
task1.forEach((item) => {
  
    if(fruitCount.get(item) === undefined) { 
        fruitCount.set(item, 1);
    } else {
        fruitCount.set(item, fruitCount.get(item)+1)
    }
})

/*comment on task 1
    bananna is not actually in the input_list but is expected in the final result. Not sure if this was intentional. Bananna could simply be added to the input list.
    The function remains the same but the output would include bananna. 
*/



const domains = { // Example to show data shape only.
    "one.com": { policy: "block" },
    "two.com": { policy: "none" },
    "three.com": { policy: "none" },
    "four.com": { policy: "block" },
  }
  
  const getBlockPolicyState = (domains) => {
    const state = {oneDomain: false, allDomains: true}
  
    for(const prop in domains) {
      let policy = domains[prop].policy
      if( policy === "block") {
        state['oneDomain'] = true;
      }
      else {
        state['allDomains'] = false
      }
    }
    
   return state
  };

  /*comment on task 2
    I counted four loops in the original getBlockPolicyState function. Also, policyArr was assigned a value but not declared which results in an error. 
    O(n + a) because n represents the initial input, and policy array is a a new input, a,  
    which is looped through using 'some' and 'every' array methods. Object.keys() is also a loop.
    I refactored the function to one loop which makes the function O(n) time comlexity. 
    */

    task8 = [
  [2,5,1,2,3,5,1,2,4], 
  [2,1,1,2,3,5,1,2,4],
  [2,3,4,5], 
  [2,5,5,2,3,5,1,2,4]
]

const findFirstRecurringElement = (array) => {
  const containArrEl = new Set()
  for(const el of array) {
    if(!containArrEl.has(el)) {
      containArrEl.add(el)
    } else {
      return el
    }
  }

}

const resultOfEachList = (arrayOfArrays) => arrayOfArrays.map((list) => findFirstRecurringElement(list))

/*comment on task 3
    I wrote a function to handle the nested arrays first, findFirstRecurringElement. Then I handled the collective results after with resultOfEachList. 
*/


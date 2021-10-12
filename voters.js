const voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false },
];

//Filter age
const filter = (age) => {
  if (age >= 18 && age <= 25){
    return 'Young';
  }else if (age >= 26 && age <= 35){
    return 'Mid';
  }else if (age >= 36 && age <= 55){ 
    return 'Old';
  }else{
    return 'Invalid entry.';
  }
};

//Count votes
function getVoters(array){
  //Check if the person voted and then filter by age
  const getResults = voters.reduce((total, current) => {
      return{
        //Young
        youngVotes: current.voted && filter(current.age) === 'Young' ?
                       total.youngVotes + 1 :
                       total.youngVotes,
        youngTotal: filter(current.age) === 'Young' ? 
                        total.youngTotal + 1 :
                        total.youngTotal,
        //Mid
        midVotes: current.voted && filter(current.age) === 'Mid' ?
                     total.midVotes + 1 :
                     total.midVotes,
        midTotal: filter(current.age) === 'Mid' ? 
                     total.midTotal + 1 :
                     total.midTotal,
        //Old
        oldVotes: current.voted && filter(current.age) === 'Old' ?
                     total.oldVotes + 1 :
                     total.oldVotes,
        oldTotal: filter(current.age) === 'Old' ? 
                      total.oldTotal + 1 :
                      total.oldTotal,
      };
    },

    {
      youngVotes: 0,
      youngTotal: 0,
      midVotes: 0,
      midTotal: 0,
      oldVotes: 0,
      oldTotal: 0,
    }
  );
  return getResults;
}console.log(getVoters(voters));

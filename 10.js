let nof_c = parseInt(prompt('Number of candidates: '))
let candidates = []
for (let i = 0; i < nof_c; i++) {
    let cand_name = prompt('Name of a candidate: ' + (i+1));
    let candidate = {
        name : cand_name,
        votes : 0
    }
    candidates.push(candidate);
}
let num_vot = parseInt(prompt('Number of voters: '))
for (let i = 0; i < num_vot; i++) {
    let vote = prompt('Who do you vote for? Give a name: ')
    for (let x = 0; x < candidates.length; x++) {
        if (vote == candidates[x].name) {
            candidates[x].votes ++
        }
    }
}
candidates.sort((a, b) => {
   return b.votes - a.votes;
});
console.log('The winner is ' + candidates[0].name + ' with ' + candidates[0].votes + ' votes')
for (let i = 0; i < candidates.length; i++) {
    console.log(candidates[i].name + ': ' + candidates[i].votes + ' votes')
}



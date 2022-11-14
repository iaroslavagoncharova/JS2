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
    let vote = prompt('Who do you vote for? Give a number: ')
    if (vote === candidates[vote+1]) {
        candidates.candidate[vote+1].votes += 1
    }
}
console.log(candidates)


class DAOVoting {
  constructor() { this.proposals = []; }
  createProposal(title, options) {
    this.proposals.push({ id: this.proposals.length+1, title, options: options.map(o=>({name:o,votes:0})) });
  }
  vote(id, optionIndex) { this.proposals[id-1].options[optionIndex].votes++; }
}
module.exports = DAOVoting;

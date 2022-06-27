class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
      randIndex = (int)(Math.random()*3);
    return ranIndex;
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection);{

    let result = "lose";

    if(userSelection === cpuSelection)
    {
      result = "tie";
    }

    else if(userSelection === "rock" && cpuSelection === "scissors")
    {
      result = "win";
    }

    else if(userSelection === "paper" && cpuSelection === "rock")
    {
      result = "win";
    }

    else if(userSelection === "scissors" && cpuSelection == "paper")
    {
      result = "win";
    }

    return result;

  }
  console.log(determineWinner("rock","scissors"));

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection);{

    if (determineWinner(userSelection, cpuSelection)){
      this.generateCPUResponse();}

    if (determineWinner(userSelection, cpuSelection)){
      genereateCPUResponse();}

    if (determineWinner(userSelection, cpuSelection)){ 
      generateSPUResponse }

      else if (this.score.cpu++); this.gameHistoryLog.push(username + "selected" + userSelection + ", CPU selected" + cpuSelection + ":" + username + "wins");

      else if (this.gameHistoryLog);

  }

}}
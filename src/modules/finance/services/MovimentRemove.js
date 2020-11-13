class MovimentRemove {
    constructor(financeRepository) {
      this.financeRepository = financeRepository;
    }
  
    async execute(user_id, moviment_id) {
      const moviment = await this.financeRepository.movimentRemove(
        user_id,
        moviment_id,
      );
  
      return moviment;
    }
  }
  
  module.exports = MovimentRemove;
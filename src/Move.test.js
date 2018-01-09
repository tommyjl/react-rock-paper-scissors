import Move from "./Move";

describe("Move", () => {
  it("should intantiate with 'new'", () => {
    expect(new Move("rock")).toBeDefined();
    expect(new Move("paper")).toBeDefined();
    expect(new Move("scissors")).toBeDefined();
  });

  it("should throw if instantiated impoperly", () => {
    expect(() => new Move()).toThrow();
    expect(() => new Move("orange")).toThrow();
  });

  it("should instantiate with factory functions", () => {
    expect(Move.Random()).toBeDefined();
  });

  describe("playAgainst", () => {
    const rock = new Move("rock");
    const paper = new Move("paper");
    const scissors = new Move("scissors");

    it("should tie if moves are the same", () => {
      expect(rock.playAgainst(rock)).toBe("tie");
      expect(paper.playAgainst(paper)).toBe("tie");
      expect(scissors.playAgainst(scissors)).toBe("tie");
    });

    it("should win if rock plays against scissors", () => {
      expect(rock.playAgainst(scissors)).toBe("win");
    });

    it("should win if paper plays against rock", () => {
      expect(paper.playAgainst(rock)).toBe("win");
    });

    it("should win if scissors plays against paper", () => {
      expect(scissors.playAgainst(paper)).toBe("win");
    });

    it("should return 'loss' if it did not win or tie", () => {
      expect(rock.playAgainst(paper)).toBe("loss");
      expect(paper.playAgainst(scissors)).toBe("loss");
      expect(scissors.playAgainst(rock)).toBe("loss");
    });
  });
});

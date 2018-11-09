import { expect } from "chai";
import sortByMatch, {
  matchExact,
  matchOneWord,
  matchStartsWith,
  alphaNumericSort
} from "../index.js";

describe("Sort by match", () => {
  describe("matchExact", () => {
    it("should return true for an exact match", function() {
      const word = "Word";

      expect(matchExact("word", word)).to.eql(true);
    });

    it("should return false for no exact match", function() {
      const word = "Word";

      expect(matchExact("wordfoo", word)).to.eql(false);
    });
  });

  describe("matchOneWord", () => {
    it("should return true for one word match", function() {
      const word = "Word";

      expect(matchOneWord("Word Press", word)).to.eql(true);
    });

    it("should return false for no one word match", function() {
      const word = "word";

      expect(matchOneWord("wordfoo press", word)).to.eql(false);
    });
  });

  describe("matchStartsWith", () => {
    it("should return true for matchStartsWith", function() {
      const word = "Word";

      expect(matchStartsWith("Wordpress", word)).to.eql(true);
    });

    it("should return false for no matchStartsWith", function() {
      const word = "word";

      expect(matchStartsWith("foo press", word)).to.eql(false);
    });
  });

  describe("alphaNumericSort", () => {
    it("should return correct sort", function() {
      const words = [
        "A1",
        "A10",
        "A11",
        "A12",
        "A2",
        "A3",
        "A4",
        "B10",
        "B2",
        "F1",
        "F12",
        "F3"
      ];

      const sorted = words.sort(alphaNumericSort);

      expect(sorted).to.eql([
        "A1",
        "A2",
        "A3",
        "A4",
        "A10",
        "A11",
        "A12",
        "B2",
        "B10",
        "F1",
        "F3",
        "F12"
      ]);
    });
  });

  describe("sortByMatch", () => {
    it("should return correct sort", function() {
      const word = "Word";

      const results = [
        "Microsoft Word",
        "Wordpress",
        "Google AdWords",
        "Word",
        "Word Dude",
        "Abhi Aiyer"
      ];

      const sorted = results.sort(sortByMatch(word));

      expect(sorted).to.eql([
        "Word",
        "Word Dude",
        "Microsoft Word",
        "Wordpress",
        "Abhi Aiyer",
        "Google AdWords"
      ]);
    });
  });
});

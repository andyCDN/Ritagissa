import fs from "node:fs";
import assert from "node:assert/strict";

const html = fs.readFileSync("index.html", "utf8");
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
new Function(script);
const dataScript = script.split("const decks")[0];
const { levels, sillyPrompts, sillyPromptSet, compoundPrefixes, compoundEndings, accessoryFigures, accessories, actionFigures, sillyActions } = new Function(`${dataScript}; return { levels, sillyPrompts, sillyPromptSet, compoundPrefixes, compoundEndings, accessoryFigures, accessories, actionFigures, sillyActions };`)();

assert.equal(Object.keys(levels).length, 5);
assert.equal(compoundPrefixes.length * compoundEndings.length, 400);
assert.equal(accessoryFigures.length * accessories.length, 250);
assert.equal(actionFigures.length * sillyActions.length, 350);
assert.equal(sillyPrompts.length, 1000);
assert.equal(sillyPromptSet.size, 1000);
assert.ok(sillyPrompts.every(prompt => prompt.split(" ").length <= 3), "knasuppdragen ska vara korta");
assert.ok(sillyPromptSet.has("Bananbåt"));
assert.ok(sillyPromptSet.has("Glassfontän"));
assert.ok(sillyPromptSet.has("Rumpa med solglasögon"));
assert.ok(sillyPromptSet.has("Prinsessan pruttar"));
for (const [key, level] of Object.entries(levels)) {
  assert.equal(level.figures.length, 40, `${key}: antal figurer`);
  assert.equal(new Set(level.figures).size, 40, `${key}: unika figurer`);
  assert.equal(level.extras.length, 30, `${key}: antal extrasaker`);
  assert.equal(new Set(level.extras.map(({ word }) => word)).size, 30, `${key}: unika extrasaker`);
  assert.deepEqual(new Set(level.extras.map(({ relation }) => relation)), new Set(["med", "i", "på", "under", "bredvid"]), `${key}: mellanled`);
  const regularPrompts = level.figures.flatMap(figure => level.extras.filter(extra => extra.word !== figure).map(extra => `${figure[0].toUpperCase()+figure.slice(1)} ${extra.relation} ${extra.word}`)).filter(prompt => !sillyPromptSet.has(prompt));
  const prompts = [...regularPrompts, ...sillyPrompts];
  assert.ok(regularPrompts.length >= 1100, `${key}: tillräckligt många vanliga uppdrag`);
  assert.ok(prompts.length >= 2100, `${key}: tillräckligt många uppdrag totalt`);
  assert.equal(new Set(prompts).size, prompts.length, `${key}: unika uppdrag`);
  assert.ok(prompts.every(prompt => prompt.split(" ").length <= 4), `${key}: korta uppdrag`);
}
const specificSets = Object.values(levels).map(level => new Set(level.figures.slice(15)));
for (let i = 0; i < specificSets.length; i++) for (let j = i + 1; j < specificSets.length; j++) {
  assert.notDeepEqual(specificSets[i], specificSets[j], "åldersgrupperna ska skilja sig");
}
assert.match(html, /id="skip"/);
assert.match(html, /id="next"/);
assert.match(html, /aria-live="polite"/);
assert.doesNotMatch(html, /https?:\/\//);
assert.match(html, /localStorage\.setItem/);
console.log("Alla innehålls- och HTML-kontroller passerade.");

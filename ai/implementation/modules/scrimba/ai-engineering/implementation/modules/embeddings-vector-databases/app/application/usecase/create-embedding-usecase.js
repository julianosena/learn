import openai from '../infrastructure/openai/client.js';

/** Create embeddings representing the input text */
async function main() {
  const embedding = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: "Hellow world",
  });
  console.log(embedding);
}
main();
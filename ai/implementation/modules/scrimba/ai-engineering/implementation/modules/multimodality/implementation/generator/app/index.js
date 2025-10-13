import openai from './infrastructure/openai/client.js'

const image = await openai.images.generate({ 
  model: "dall-e-3", 
  prompt: "A steampunk city with gear-driven machines, airships docked atop buildings, and streets lit by gas lamps, set in a vast canyon",
  size: "1024x1792"
});

console.log(image.data);
import openai from '../../infrastructure/openai/client.js'


class GenerateImage {

    async execute(query){
        const image = await openai.images.generate({
            model: "dall-e-3",
            prompt: "A colorful coral reef with diverse marine life"
          });
          console.log(image.data);
    }

}
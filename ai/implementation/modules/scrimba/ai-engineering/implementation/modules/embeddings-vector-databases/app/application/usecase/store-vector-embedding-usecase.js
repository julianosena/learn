import podcasts from '../infrastructure/file/content.js';
import openai from '../infrastructure/openai/client.js';
import { supabase } from '../infrastructure/supabase/client.js';

async function main(input){
    const data = await Promise.all(
        input.map( async (textChunk) =>{
            const embeddingResponse = await openai.embeddings.create({
                model: 'text-embedding-ada-002',
                input: textChunk
            });
            return {
                content: textChunk,
                embedding: embeddingResponse.data[0].embedding
            }
        })
    );

    await supabase.from('documents').insert(data);
    console.log('Embedding and storing complete.')
}

main(podcasts);
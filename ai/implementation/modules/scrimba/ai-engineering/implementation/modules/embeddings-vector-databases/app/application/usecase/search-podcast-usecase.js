import openai from '../../infrastructure/openai/client.js'
import { supabase } from '../../infrastructure/supabase/client.js'

export async function search(input) {
    const embeddingResponse = await openai.embeddings.create({
        model: 'text-embedding-ada-002',
        input: input
    });

    const embedding = embeddingResponse.data[0].embedding;

    const { data } = await supabase.rpc('match_documents', {
        query_embedding: embedding,
        match_threshold: 0.5,
        match_count: 1
    });

    return {
        content: data[0].content,
        similarity: data[0].similarity
    };
}
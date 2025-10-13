import { readFile } from 'fs/promises';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

export async function getChunkedData(input){
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 150,
        chunkOverlap: 15,
    })
    const content = await readFile(input, 'utf8');
    return await splitter.createDocuments([content])
}
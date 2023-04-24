/* eslint-disable no-console */
import algoliasearch from 'algoliasearch/lite';
import { sanityClient } from '../../lib/sanity.server';
import { allKnowledgeBasePostDetails } from '../../lib/sanity.queries';

export default async function handler() {
  const client = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID,
    process.env.ALGOLIA_ADMIN_KEY
  );
  const index = client.initIndex('kb_content');

  const query = allKnowledgeBasePostDetails;

  const documents = await sanityClient.fetch(query);

  try {
    console.time(`Saving ${documents.length} documents to index:`);
    await index.saveObjects(documents);
    console.timeEnd(`Saving ${documents.length} documents to index:`);
    return {
      status: 200,
      body: 'Success!',
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: error,
    };
  }
}

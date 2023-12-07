import { createClient } from 'contentful';
import safeStringify from 'fast-safe-stringify';
import type { Entry } from 'contentful';
import getHeaderProps from './getHeaderProps';

interface FlattenedObject {
  [key: string]: any;
}
export function flattenAndOmitMetadataAndSys(
  entry: Entry | any,
): FlattenedObject | any {
  if (typeof entry !== 'object' || !entry) {
    return entry;
  }

  if (Array.isArray(entry)) {
    return entry.map(item => flattenAndOmitMetadataAndSys(item));
  }

  const result: FlattenedObject = {};
  const contentType: string | null = entry?.sys?.contentType?.sys?.id ?? null;

  if (contentType) {
    result.contentType = contentType;
  }

  for (const key in entry) {
    if (key === 'fields') {
      const output = flattenAndOmitMetadataAndSys(entry[key]);
      return { contentType: contentType, id: entry?.sys?.id, ...output };
    } else {
      result[key] = flattenAndOmitMetadataAndSys(entry[key]);
    }
  }

  return result;
}
// TODO: Setup master host for contentful
async function fetchHeaderProps({
  spaceId,
  environment,
  accessToken,
  preview = false,
}: {
  spaceId: string;
  environment: string;
  accessToken: string;
  preview: boolean;
}) {
  const client = createClient({
    space: spaceId,
    environment: environment,
    accessToken: accessToken,
    host: preview ? 'preview.contentful.com' : '',
  });

  const entry = await (
    await client.getEntries({
      content_type: 'refreshHeader',
      locale: 'en-US',
      include: 10,
    })
  ).items[0];
  const safeEntry = JSON.parse(safeStringify(entry));
  const result = flattenAndOmitMetadataAndSys(safeEntry);
  return getHeaderProps(result);
}

export default fetchHeaderProps;

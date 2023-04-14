// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ClickCount } = initSchema(schema);

export {
  ClickCount
};
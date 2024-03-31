import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { myTheme } from './theme';
import { codeInput } from '@sanity/code-input'
import { defaultDocumentNode } from './src/lib/defaultDocumentNode';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: '/studio',
  name: 'Soumyanks_Content_Studio',
  title: 'Soumyanks Content Studio',
  projectId,
  dataset,
  plugins: [structureTool({defaultDocumentNode}), visionTool(),codeInput()],
  schema: {
    types: schemaTypes,
  },
  theme:myTheme
})
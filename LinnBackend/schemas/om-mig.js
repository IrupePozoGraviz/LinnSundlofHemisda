// schemas/ommig.js
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'OmMig',
    title: 'Om Mig',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      }),
    ]
  })
  
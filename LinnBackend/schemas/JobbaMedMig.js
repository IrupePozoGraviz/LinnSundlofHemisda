// schemas/juridiskhjälp.js
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'JobbaMedMig',
    title: 'Jobba med mig',
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
  
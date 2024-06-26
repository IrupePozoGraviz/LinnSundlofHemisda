import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'paketTre',
  title: 'Paket Tre',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'pris',
      title: 'Pris',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    
  },
})

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Webinarie',
  title: 'Webinarie',
  type: 'document',
  fields: [
   
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
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
    defineField({
      name: 'pris',
      title: 'Pris',
      type: 'string',
    }),
   // Lägg till fält för knappens text
   defineField({
    name: 'buttonText',
    title: 'Button Text',
    type: 'string',
    description: 'Text to display on the button',
  }),
  // Lägg till fält för URL
  defineField({
    name: 'buttonUrl',
    title: 'Button URL',
    type: 'url',
    description: 'The URL the button will link to',
    validation: (Rule) => Rule.uri({
      allowRelative: true, // tillåt relativa länkar om nödvändigt
      scheme: ['http', 'https', 'mailto', 'tel']
    })
  }),
],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    
  },
})

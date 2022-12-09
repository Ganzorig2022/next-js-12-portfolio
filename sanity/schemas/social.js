import {defineType} from 'sanity'

//https://www.sanity.io/docs/create-a-schema-and-configure-sanity-studio
export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', description: 'platform for social media', type: 'string'},
    {
      name: 'url',
      title: 'Url',
      type: 'url',
    },
  ],
})

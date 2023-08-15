import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'universityName',
      title: 'University Name',
      type: 'string',
    },
    {
      name: 'dateStarted',
      title: 'Date Started',
      type: 'date',
    },
    {name: 'dateEnded', title: 'Date Ended', type: 'date'},
    {name: 'isCurrentlyStudyingHere', title: 'Is Currently Studying Here', type: 'boolean'},
    {name: 'courseName', title: 'Course Name', type: 'string'},
    {
      name: 'universityLogo',
      title: 'University Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})

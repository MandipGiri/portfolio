'use server'

export const sendEmail = async (formData: FormData) => {
  'use server'
  console.log('email', formData.get('senderEmail'))
  console.log('msg', formData.get('senderEmail'))
}

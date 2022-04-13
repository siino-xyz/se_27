import UnderpageLayout from '../layouts/UnderpageLayout'
import InnerLayout from '../layouts/InnerLayout'

export default function Contact() {
  return (
    <>
      
    </>
  )
}


Contact.getLayout = function getLayout(contact) {
  return (
    <UnderpageLayout>
      <InnerLayout>{contact}</InnerLayout>
    </UnderpageLayout>
  )
}
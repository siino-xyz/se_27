import UnderpageLayout from '../layouts/UnderpageLayout'
import InnerLayout from '../layouts/InnerLayout'

export default function Flow() {
  return (
    <>
    
    </>
  )
}



Flow.getLayout = function getLayout(flow) {
  return (
    <UnderpageLayout>
      <InnerLayout>{flow}</InnerLayout>
    </UnderpageLayout>
  )
}
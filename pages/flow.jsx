import UnderpageLayout from '../layouts/UnderpageLayout'
import InnerLayout from '../layouts/InnerLayout'
import styles from '../styles/pages/flow.module.scss'


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
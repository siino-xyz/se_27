import UnderpageLayout from '../layouts/UnderpageLayout'
import InnerLayout from '../layouts/InnerLayout'
import FlowDetail from '../sections/details/FlowDedail'
import QandA from '../sections/details/QandA'
// import Contact from '../sections/contact'


export default function Details() {
  return (
    <>
      <FlowDetail />
      <QandA />
      {/* <Contact /> */}
     
    </>
  )
}



Details.getLayout = function getLayout(flow) {
  return (
    <UnderpageLayout>
      <InnerLayout>{flow}</InnerLayout>
    </UnderpageLayout>
  )
}
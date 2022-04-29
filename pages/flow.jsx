import UnderpageLayout from "../layouts/UnderpageOuter";
import InnerLayout from "../layouts/GlobalInner";
//staticSections
import FlowDetail from "../staticSections/flow/FlowDedail";
import QandA from "../staticSections/flow/QandA";

export default function Flow() {
  return (
    <>
      <FlowDetail />
      <QandA />
    </>
  );
}

Flow.getLayout = function getLayout(flow) {
  return (
    <UnderpageLayout>
      <InnerLayout>{flow}</InnerLayout>
    </UnderpageLayout>
  );
};

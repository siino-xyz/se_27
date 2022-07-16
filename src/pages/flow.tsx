import Meta from "../layouts/Meta";
import WithoutFV from "@layouts/WithoutFV";
import FlowDetail from "../staticSections/flow/FlowDedail";
import QandA from "../staticSections/flow/QandA";

const Flow = () => {
  return (
    <>
      <FlowDetail />
      <QandA />
    </>
  );
};

Flow.getLayout = function getLayout(flow) {
  return (
    <Meta>
      <WithoutFV>{flow}</WithoutFV>
    </Meta>
  );
};

export default Flow;

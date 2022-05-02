export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const Gtag = () => {
  // IDが取得できない場合を想定する
  const existsGaId = GA_ID !== "";

  // PVを測定する
  const pageview = (path) => {
    window.gtag("config", GA_ID, {
      page_path: path,
    });
  };

  // GAイベントを発火させる
  const event = ({ action, category, label, value = "" }) => {
    if (!existsGaId) {
      return;
    }

    window.gtag("event", action, {
      event_category: category,
      event_label: JSON.stringify(label),
      value,
    });
  };

  return { existsGaId, pageview, event };
};

export default Gtag;

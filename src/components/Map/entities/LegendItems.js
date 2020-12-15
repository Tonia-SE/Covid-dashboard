import LegendItem from "./LengendItem";

const legendItems = [
  new LegendItem(
    "1,000,000 +",
    "#13293d",
    (cases) => cases >= 1_000_000,
    "#E8F1F2"
  ),

  new LegendItem(
    "500,000 - 999,999",
    "#006494",
    (cases) => cases >= 500_000 && cases < 1_000_000,
    "#E8F1F2"
  ),

  new LegendItem(
    "200,000 - 499,999",
    "#247BA0",
    (cases) => cases >= 200_000 && cases < 500_000
  ),

  new LegendItem(
    "50,000 - 199,999",
    "#1B98E0",
    (cases) => cases >= 50_000 && cases < 200_000
  ),

  new LegendItem(
    "0 - 49,999",
    "#80C6EF",
    (cases) => cases > 0 && cases < 50_000,
    "#13293d"
  ),

  new LegendItem("No Data",
    "#ffffff",
    (cases) => true,
    "#13293d"
  ),
];

export default legendItems;

import LegendItem from "./LengendItem";

const legendItems = [
  new LegendItem(
    "million +",
    "#13293d",
    (cases) => cases >= 1_000_000,
    "#E8F1F2"
  ),

  new LegendItem(
    "500k - million",
    "#006494",
    (cases) => cases >= 500_000 && cases < 1_000_000,
    "#E8F1F2"
  ),

  new LegendItem(
    "200k - 500k",
    "#247BA0",
    (cases) => cases >= 200_000 && cases < 500_000
  ),

  new LegendItem(
    "50k - 200k",
    "#1B98E0",
    (cases) => cases >= 50_000 && cases < 200_000
  ),

  new LegendItem(
    "0 - 50k",
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

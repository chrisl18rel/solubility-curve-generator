// solubility-data.js
// Solubility data: g per 100 g water at various temperatures (°C)
// Sources: CRC Handbook, various chemistry references
// Each compound has: name, formula, color (default), and data points [tempC, solubility_g_per_100g_water]

const SOLUBILITY_DATA = [
  {
    id: "KNO3",
    name: "Potassium Nitrate",
    formula: "KNO₃",
    defaultColor: "#e53935",
    data: [
      [0, 13.3], [10, 20.9], [20, 31.6], [30, 45.8], [40, 63.9],
      [50, 85.5], [60, 110], [70, 138], [80, 169], [90, 202], [100, 246]
    ]
  },
  {
    id: "NaCl",
    name: "Sodium Chloride",
    formula: "NaCl",
    defaultColor: "#1e88e5",
    data: [
      [0, 35.7], [10, 35.8], [20, 36.0], [30, 36.3], [40, 36.6],
      [50, 37.0], [60, 37.3], [70, 37.8], [80, 38.4], [90, 39.0], [100, 39.8]
    ]
  },
  {
    id: "KCl",
    name: "Potassium Chloride",
    formula: "KCl",
    defaultColor: "#43a047",
    data: [
      [0, 27.6], [10, 31.0], [20, 34.0], [30, 37.0], [40, 40.0],
      [50, 42.6], [60, 45.5], [70, 48.3], [80, 51.1], [90, 54.0], [100, 56.7]
    ]
  },
  {
    id: "NH4Cl",
    name: "Ammonium Chloride",
    formula: "NH₄Cl",
    defaultColor: "#8e24aa",
    data: [
      [0, 29.4], [10, 33.3], [20, 37.2], [30, 41.4], [40, 45.8],
      [50, 50.4], [60, 55.2], [70, 60.2], [80, 65.6], [90, 71.3], [100, 77.3]
    ]
  },
  {
    id: "KBr",
    name: "Potassium Bromide",
    formula: "KBr",
    defaultColor: "#f4511e",
    data: [
      [0, 53.5], [10, 59.5], [20, 65.2], [30, 70.6], [40, 75.5],
      [50, 80.2], [60, 85.5], [70, 90.0], [80, 95.0], [90, 99.2], [100, 104]
    ]
  },
  {
    id: "NaNO3",
    name: "Sodium Nitrate",
    formula: "NaNO₃",
    defaultColor: "#00acc1",
    data: [
      [0, 73.0], [10, 80.0], [20, 87.6], [30, 96.0], [40, 104],
      [50, 114], [60, 124], [70, 134], [80, 148], [90, 163], [100, 180]
    ]
  },
  {
    id: "CuSO4",
    name: "Copper(II) Sulfate",
    formula: "CuSO₄",
    defaultColor: "#039be5",
    data: [
      [0, 14.3], [10, 17.4], [20, 20.7], [30, 25.0], [40, 28.5],
      [50, 33.3], [60, 40.0], [70, 47.0], [80, 55.0], [90, 63.0], [100, 75.4]
    ]
  },
  {
    id: "NaC2H3O2",
    name: "Sodium Acetate",
    formula: "NaC₂H₃O₂",
    defaultColor: "#6d4c41",
    data: [
      [0, 36.2], [10, 40.8], [20, 46.5], [30, 54.5], [40, 65.5],
      [50, 82.3], [60, 139], [70, 153], [80, 170], [90, 188], [100, 208]
    ]
  },
  {
    id: "Ce2SO43",
    name: "Cerium(III) Sulfate",
    formula: "Ce₂(SO₄)₃",
    defaultColor: "#546e7a",
    data: [
      [0, 21.4], [10, 17.0], [20, 10.1], [30, 7.0], [40, 5.0],
      [50, 3.9], [60, 3.3], [70, 2.8], [80, 2.4], [90, 2.1], [100, 1.8]
    ]
  },
  {
    id: "Li2SO4",
    name: "Lithium Sulfate",
    formula: "Li₂SO₄",
    defaultColor: "#c0ca33",
    data: [
      [0, 35.5], [10, 35.0], [20, 34.2], [30, 33.4], [40, 32.6],
      [50, 31.9], [60, 31.0], [70, 30.1], [80, 29.3], [90, 28.4], [100, 27.6]
    ]
  },
  {
    id: "KI",
    name: "Potassium Iodide",
    formula: "KI",
    defaultColor: "#ff7043",
    data: [
      [0, 128], [10, 136], [20, 144], [30, 152], [40, 160],
      [50, 168], [60, 176], [70, 184], [80, 192], [90, 200], [100, 208]
    ]
  },
  {
    id: "Ca(OH)2",
    name: "Calcium Hydroxide",
    formula: "Ca(OH)₂",
    defaultColor: "#26a69a",
    data: [
      [0, 0.189], [10, 0.182], [20, 0.173], [30, 0.160], [40, 0.141],
      [50, 0.128], [60, 0.116], [70, 0.106], [80, 0.094], [90, 0.085], [100, 0.077]
    ]
  },
  {
    id: "NaOH",
    name: "Sodium Hydroxide",
    formula: "NaOH",
    defaultColor: "#ab47bc",
    data: [
      [0, 42.0], [10, 51.0], [20, 109], [30, 119], [40, 129],
      [50, 145], [60, 174], [70, 300], [80, 330], [90, 370], [100, 347]
    ]
  },
  {
    id: "NH4NO3",
    name: "Ammonium Nitrate",
    formula: "NH₄NO₃",
    defaultColor: "#ef5350",
    data: [
      [0, 118], [10, 150], [20, 190], [30, 242], [40, 297],
      [50, 344], [60, 421], [70, 499], [80, 580], [90, 740], [100, 871]
    ]
  },
  {
    id: "sucrose",
    name: "Sucrose (Sugar)",
    formula: "C₁₂H₂₂O₁₁",
    defaultColor: "#ffa000",
    data: [
      [0, 179], [10, 190], [20, 204], [30, 219], [40, 238],
      [50, 260], [60, 287], [70, 320], [80, 362], [90, 415], [100, 487]
    ]
  },
  {
    id: "SO2",
    name: "Sulfur Dioxide",
    formula: "SO₂",
    defaultColor: "#78909c",
    data: [
      [0, 22.8], [10, 16.2], [20, 11.3], [30, 7.8], [40, 5.4],
      [50, 3.7], [60, 2.5], [70, 1.6], [80, 1.0], [90, 0.6], [100, 0.3]
    ]
  },
  {
    id: "AgNO3",
    name: "Silver Nitrate",
    formula: "AgNO₃",
    defaultColor: "#9e9e9e",
    data: [
      [0, 122], [10, 167], [20, 222], [30, 300], [40, 376],
      [50, 455], [60, 525], [70, 608], [80, 669], [90, 723], [100, 952]
    ]
  },
  {
    id: "MgSO4",
    name: "Magnesium Sulfate",
    formula: "MgSO₄",
    defaultColor: "#66bb6a",
    data: [
      [0, 26.9], [10, 30.9], [20, 33.7], [30, 38.9], [40, 44.5],
      [50, 50.9], [60, 54.6], [70, 56.1], [80, 55.8], [90, 54.1], [100, 50.4]
    ]
  },
  {
    id: "Na2SO4",
    name: "Sodium Sulfate",
    formula: "Na₂SO₄",
    defaultColor: "#42a5f5",
    data: [
      [0, 4.76], [10, 9.1], [20, 19.5], [30, 40.8], [40, 48.8],
      [50, 46.7], [60, 45.3], [70, 44.1], [80, 43.7], [90, 42.7], [100, 42.5]
    ]
  },
  {
    id: "K2Cr2O7",
    name: "Potassium Dichromate",
    formula: "K₂Cr₂O₇",
    defaultColor: "#e64a19",
    data: [
      [0, 4.7], [10, 8.1], [20, 12.3], [30, 18.1], [40, 26.3],
      [50, 37.0], [60, 45.6], [70, 56.3], [80, 70.2], [90, 82.0], [100, 102]
    ]
  }
];

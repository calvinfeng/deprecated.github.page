"use strict";
const matchData = {
  "win": {
    "x1":[32.485,34.304,33.658,33.173,32.79,33.34,
      33.182,31.294,32.782,31.793,31.892,32.75,29.013,33.584,33.611,35.598,
      32.406,33.192,34.022,31.462,33.821,33.728,32.288,32.733,33.591,35.074,
      31.658,34.177,32.776,31.361,32.446,33.147,34.109,35.486,32.577,30.634,
      34.135,32.711,30.422,31.674,31.607,32.88,32.53,33.305,33.889,32.498,35.673,
      33.39,33.804,33.922,32.886,34.444,34.599,34.11,32.423,35.187,33.124,33.147,
      35.805,33.371,33.947,32.196,32.708,34.304,39.758,30.676,30.746,31.712,30.979,
      33.843,31.568,35.193,32.728,30.93,37.426,34.24,34.517,31.078,34.037,35.923,
      34.534,33.555,34.1,35.901,37.138,32.787,32.423,32.86,29.571,34.524],
    "x2":[3.065,3.436,3.795,3.525,1.817,2.694,2.844,3.522,1.94,2.895,3.024,2.933,
      2.563,1.809,3.355,3.087,2.684,3.073,2.738,2.617,2.543,3.219,3.688,3.448,
      2.548,3.793,3,3.676,2.658,3.414,4.407,2.861,2.297,3.862,2.714,2.448,4.654,
      2.143,3.333,3.286,4.05,2.452,2.455,3.028,3.441,6.611,6.071,5.478,4.1,3.487,
      3.821,4.36,2.229,3.462,2.488,3.87,5.571,2.148,3.359,2.735,4.074,3,5.316,3,3.325,
      3.909,2.094,4,5.059,3.364,6.692,3.061,6.636,2.679,2.147,4.167,4.111,2.778,3.739,
      2.541,2.794,2.92,5.563,3.452,2.475,4.208,3.789,4.136,2.308,3.722],
    "x3":[20.5,22.6,17.05,12.05,16.95,22.4,22.1,16.25,17.9,20.7,14.6,18.75,15.3,16.8,
      23.6,17.6,16.05,19.25,21.95,17.9,13.75,21.85,22.7,22.3,18.15,19.15,20.1,19.7,17.55,
      14.75,18.55,17.25,15.85,18.85,18.35,14.9,14.8,20,19.45,16.9,22.25,18.3,18.7,16.4,
      15.7,17.5,24.4,20.45,15.85,19.9,19.15,16.15,19.95,16.85,15.85,19.7,19.65,21.3,
      17.65,14.4,16,18.7,17.1,20,17.4,18.05,14.45,16.3,20.4,20.35,17.7,17.7,14.05,
      16.9,20.4,17,18.7,19.05,18.8,21.05,20.8,19.4,21,16,17.2,16.05,18.25,17.7,16.85,20.75]},
  "loss": {
    "x1":[29.595,28.897,29.858,31.409,30.157,32.705,32.843,29.722,32.099,29.159,30.854,
      30.847,26.4,31.799,28.585,31.132,32.96,32.588,30.345,31.44,31.194,28.874,30.645,
      30.591,30.32,26.632,26.309,29.166,28.593,25.64,26.927,30.867,28.69,29.371,28.393,
      27.269,26.959,28.965,27.26,27.803,25.88,27.697,28.966,29.336,31.308,28.272,26.377,
      28.866,28.479,31.917,28.126,28.426,30.054,26.258,29.758,28.515,25.775,28.164,30.972,
      28.043,25.437,28.248,25.534,30.798,30.742,28.506,28.873,24.317,28.479,29.95,25.907,
      28.712,22.019,25.67,31.67,29.912,24.734,27.172,24.867,33.49,31.48,27.44,24.349,
      28.436,30.716,25.858,26.477,28.258,25.985,26.094],
    "x2":[1.953,2.16,1.483,1.829,3.426,2.898,2.68,2.36,2.84,2.386,2.13,2.306,3.241,2.714,
      2.143,1.75,2.537,1.957,1.854,3.087,2.255,1.929,1.762,2.515,1.909,1.682,1.917,1.385,
      2.261,1.625,1.667,1.953,2.053,1.907,1.814,2.069,1.537,2.633,2.267,1.857,1.688,1.829,
      2.5,1.56,1.638,0.909,0.917,1.146,1.595,1.8,2.618,1.064,1.778,1.22,2.231,1.824,1.156,
      1.806,2.256,2.256,1.13,1.675,1.457,1.512,2.14,1.9,1.941,1.448,1.081,2,0.906,1.651,
      0.889,1.758,2.2,1.488,0.905,1.861,1.359,1.75,2.781,2.138,1,1.4,1.708,1.366,1.857,
      1.543,2.52,1.6],
    "x3":[16.35,17.7,18.9,15.8,18,22,20.45,16.35,15.3,17.25,18.85,18.75,15.75,14.85,21.85,
      19.2,15.35,21.9,18.6,19.35,17.8,20.75,23.05,19.3,17.25,16.6,16.65,18.1,17.1,15.85,
      18.8,19.4,16.9,17.6,17.75,20.65,15.15,20.2,15.95,18.45,21.35,13.75,19.7,16.05,17.8,
      19.5,21.8,23.15,16.85,22.3,17.35,20.2,20.95,15.05,15.5,18.65,19.15,17.85,19.2,12.8,
      13.1,18,15.7,19.95,17.35,19.55,16.2,16.9,20.1,16.3,18.35,16.8,15.15,15.9,19.4,17.45,
      14.55,13.8,16.45,21.15,20.85,14.8,18.35,16.9,13.5,14.55,19.05,18.25,14.2,18.95]
  }
};

/* global katex */
let sigmoid = document.getElementById('sigmoid');
katex.render("g(z) = \\frac{1}{1 + e^{-z}}", sigmoid);

let hypo = document.getElementById('hypothesis');
katex.render("h_{\\theta}(\\vec{x}) = g(\\vec{\\theta}\\cdot\\vec{x})", hypo);

let thetaTx = document.getElementById('theta-T-x');
katex.render(`\\vec{\\theta}\\cdot\\vec{x} = \\theta^{T}x =
  \\theta_{0} + \\theta_{1}x_{1} + \\theta_{2}x_{2} + \\theta_{3}x_{3}`,
thetaTx);

let prob = document.getElementById('probability');
katex.render("h_{\\theta}(\\vec{x}) = P(y = 1 | x;\\theta)", prob);

let costFunction = document.getElementById('cost-function');
katex.render(`J(\\theta) = \\left[\\frac{\\lambda}{2m}\\sum_{j = 1}^{n}\\theta_j^{2}\\right]
- \\left[ \\frac{1}{m}\\sum_{i = 1}^{m}y^{(i)}log(h_{\\theta}(x^{(i)}))
+ (1 - y^{(i)})log(1 - h_{\\theta}(x^{(i)})) \\right]`, costFunction);

let gradient = document.getElementById('gradient');
katex.render(`\\nabla J(\\theta) = \\frac{\\partial J}{\\partial \\theta_{0}}\\hat{\\theta_{0}}
+ \\frac{\\partial J}{\\partial \\theta_{1}}\\hat{\\theta_{1}}
+ \\frac{\\partial J}{\\partial \\theta_{2}}\\hat{\\theta_{2}}
+ \\frac{\\partial J}{\\partial \\theta_{3}}\\hat{\\theta_{3}}`, gradient);

let gradientDescent = document.getElementById('gradient-descent');
katex.render(`\\vec{\\theta} := \\vec{\\theta} - \\alpha\\nabla J(\\theta)`, gradientDescent);

let algo1 = document.getElementById('algorithm-1');
katex.render(`\\theta_{0} := \\theta_{0} - \\alpha \\left[
\\frac{1}{m}\\sum_{i = 1}^{m}(h_{\\theta}(x^{(i)}) - y^{(i)})x_{0}^{(i)} \\right]`,
algo1);

let algo2 = document.getElementById('algorithm-2');
katex.render(`\\theta_{j} := \\theta_{j} - \\alpha \\left[
\\frac{1}{m}\\sum_{i = 1}^{m}(h{\\theta}(x^{(i)}) - y^{(i)})x_{j}^{(i)}
+ \\frac{\\lambda}{m}\\theta_{j}\\right]`, algo2);

let params = document.getElementById('params');
katex.render(`\\theta^{T}x = \\theta_{0} + \\theta_{1}x_{1} + \\theta_{2}x_{2} + \\theta_{3}x_{3}
  =9.294\\times 10^{-3} + 9.263\\times 10^{-3}x_{1} + 2.658x_{2} - 3.784\\times 10^{-1}x_{3}`,
  params);

let prediction = document.getElementById('prediction');
katex.render(`P(Win) = h_{\\theta}(\\vec{x}) = \\frac{1}{1 + e^{-\\theta^{T}x}}`, prediction);

let sectionWidth = $("#data-section").width();
let layout = {
  title: "League of Legend Team Win/Loss",
  showlegend: true,
  autosize: true,
  width: sectionWidth,
};

let winners = {
  name: 'Winning Team',
  mode: 'markers',
  type: 'scatter3d',
  marker: {
    color: 'rgb(0, 105, 205)',
    size: 4,
    symbol: 'circle',
    line: {
      color: 'rgb(204, 204, 204)',
      width: 1
    },
    opacity: 0.9
  },
  x: matchData.win.x1,
  y: matchData.win.x2,
  z: matchData.win.x3,
};

let losers = {
  name: 'Losing Team',
  mode: 'markers',
  type: 'scatter3d',
  marker: {
    color: 'rgb(215, 0, 0)',
    size: 4,
    symbol: 'circle',
    line: {
      color: 'rgb(204, 204, 204)',
      width: 1
    },
    opacity: 0.9
  },
  x: matchData.loss.x1,
  y: matchData.loss.x2,
  z: matchData.loss.x3
};

/* global Plotly */
Plotly.newPlot('data-plot', [winners, losers], layout);

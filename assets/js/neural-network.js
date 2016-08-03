/* global katex */

let sigmoid = document.getElementById('sigmoid');
katex.render(`g(z) = \\frac{1}{1 + e^{-z}}`, sigmoid);

let classDefinition = document.getElementById("class-definition");
katex.render(`
  \\begin{bmatrix}
  1 \\\\ 0 \\\\ 0
  \\end{bmatrix}
  \\begin{bmatrix}
  0 \\\\ 1 \\\\ 0
  \\end{bmatrix}
  \\begin{bmatrix}
  0 \\\\ 0 \\\\ 1
  \\end{bmatrix}
  `,classDefinition);

let theta = document.getElementById("theta");
katex.render(`
  \\Theta^{(1)} = \\begin{bmatrix}
  \\theta_{00} \\theta_{01} \\theta_{02} \\theta_{03} \\theta_{04} \\\\
  \\theta_{10} \\theta_{11} \\theta_{12} \\theta_{13} \\theta_{14} \\\\
  \\theta_{20} \\theta_{21} \\theta_{22} \\theta_{23} \\theta_{24} \\\\
  \\theta_{30} \\theta_{31} \\theta_{32} \\theta_{33} \\theta_{34}
  \\end{bmatrix}
  \\Theta^{(2)} = \\begin{bmatrix}
  \\theta_{00} \\theta_{01} \\theta_{02} \\theta_{03} \\theta_{04} \\\\
  \\theta_{10} \\theta_{11} \\theta_{12} \\theta_{13} \\theta_{14} \\\\
  \\theta_{20} \\theta_{21} \\theta_{22} \\theta_{23} \\theta_{24}
  \\end{bmatrix}
  `, theta);

let aVector = document.getElementById("a-vector");
katex.render(`
  \\vec{a}^{(1)} = \\begin{bmatrix}
  1 \\\\
  x_{1} \\\\
  x_{2} \\\\
  x_{3} \\\\
  x_{4}
  \\end{bmatrix}
  \\vec{a}^{(2)} = \\begin{bmatrix}
  1 \\\\
  a_{1} \\\\
  a_{2} \\\\
  a_{3} \\\\
  a_{4}
  \\end{bmatrix}
  \\vec{a}^{(3)} = \\begin{bmatrix}
  a_{1} \\\\
  a_{2} \\\\
  a_{3}
  \\end{bmatrix}
  `, aVector);

let forwardProp1 = document.getElementById("forward-prop-1");
katex.render(`
  \\Theta^{(1)} a^{(1)} =
  \\begin{bmatrix}
  \\theta_{00} \\theta_{01} \\theta_{02} \\theta_{03} \\theta_{04} \\\\
  \\theta_{10} \\theta_{11} \\theta_{12} \\theta_{13} \\theta_{14} \\\\
  \\theta_{20} \\theta_{21} \\theta_{22} \\theta_{23} \\theta_{24} \\\\
  \\theta_{30} \\theta_{31} \\theta_{32} \\theta_{33} \\theta_{34}
  \\end{bmatrix}
  \\begin{bmatrix}
  1 \\\\
  x_{1} \\\\
  x_{2} \\\\
  x_{3} \\\\
  x_{4}
  \\end{bmatrix} =
  \\vec{z}^{(2)} =
  \\begin{bmatrix}
  \\theta_{00} + \\theta_{01}x_{1} + \\theta_{02}x_{2} + \\theta_{03}x_{3} + \\theta_{04}x_{4}\\\\
  \\theta_{10} + \\theta_{11}x_{1} + \\theta_{12}x_{2} + \\theta_{13}x_{3} + \\theta_{14}x_{4} \\\\
  \\theta_{20} + \\theta_{21}x_{1} + \\theta_{22}x_{2} + \\theta_{23}x_{3} + \\theta_{24}x_{4} \\\\
  \\theta_{30} + \\theta_{31}x_{1} + \\theta_{32}x_{2} + \\theta_{33}x_{3} + \\theta_{34}x_{4}
  \\end{bmatrix}
  `, forwardProp1);

let forwardProp2 = document.getElementById("forward-prop-2");
katex.render(`a^{(2)} = g(z^{(2)})`, forwardProp2);

let forwardProp3 = document.getElementById("forward-prop-3");
katex.render(`
  \\Theta^{(2)} a^{(2)} =
  \\begin{bmatrix}
  \\theta_{00} \\theta_{01} \\theta_{02} \\theta_{03} \\theta_{04} \\\\
  \\theta_{10} \\theta_{11} \\theta_{12} \\theta_{13} \\theta_{14} \\\\
  \\theta_{20} \\theta_{21} \\theta_{22} \\theta_{23} \\theta_{24}
  \\end{bmatrix}
  \\begin{bmatrix}
  1 \\\\
  a_{1} \\\\
  a_{2} \\\\
  a_{3} \\\\
  a_{4}
  \\end{bmatrix} =
  \\vec{z}^{(3)} =
  \\begin{bmatrix}
  \\theta_{00} + \\theta_{01}a_{1} + \\theta_{02}a_{2} + \\theta_{03}a_{3} + \\theta_{04}a_{4}\\\\
  \\theta_{10} + \\theta_{11}a_{1} + \\theta_{12}a_{2} + \\theta_{13}a_{3} + \\theta_{14}a_{4}\\\\
  \\theta_{20} + \\theta_{21}a_{1} + \\theta_{22}a_{2} + \\theta_{23}a_{3} + \\theta_{24}a_{4}
  \\end{bmatrix}
  `, forwardProp3);

  let forwardProp4 = document.getElementById("forward-prop-4");
  katex.render(`a^{(3)} = g(z^{(3)})`, forwardProp4);
